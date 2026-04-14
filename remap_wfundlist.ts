import fs from 'fs';

// Helper to parse the JSON data
const parseFundData = (filePath: string) => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) return [];
  
  try {
    const jsonStrings = content.split('}{').map((str, i, arr) => {
      if (i === 0) return str + '}';
      if (i === arr.length - 1) return '{' + str;
      return '{' + str + '}';
    });
    
    let allFunds: any[] = [];
    jsonStrings.forEach(jsonStr => {
      const data = JSON.parse(jsonStr);
      if (data.resultSet && data.resultSet.result) {
        allFunds = allFunds.concat(data.resultSet.result);
      }
    });
    return allFunds;
  } catch (e) {
    console.error("Error parsing JSON:", e);
    return [];
  }
};

const allFunds = parseFundData('./temp.txt');

// Map risk levels
const riskMapping: Record<string, number> = {
  'RR1': 1,
  'RR2': 2,
  'RR3': 3,
  'RR4': 4,
  'RR5': 5
};

// Filter out excluded funds
const isExcluded = (fund: any) => {
  const name = fund.v2 ? fund.v2.toLowerCase() : '';
  const currency = fund.v13 ? fund.v13.toLowerCase() : (fund.v10 ? fund.v10.toLowerCase() : '');
  const dividend = fund.v41 ? fund.v41.toLowerCase() : (fund.v49 ? fund.v49.toLowerCase() : '');
  
  // 排除貨幣市場基金
  if (name.includes('貨幣市場') || name.includes('貨幣') || fund.v6?.includes('貨幣')) return true;
  
  // 排除人民幣計價基金
  if (name.includes('人民幣') || currency.includes('人民幣') || currency.includes('cny') || currency.includes('rmb')) return true;
  
  // 排除配息基金
  if (name.includes('配息') || name.includes('月配') || name.includes('季配') || name.includes('半年配') || name.includes('年配') || dividend.includes('月配') || dividend.includes('季配') || dividend.includes('半年配') || dividend.includes('年配')) return true;
  
  // 排除 TISA 基金
  if (name.includes('tisa') || name.includes('t i s a')) return true;
  
  // 排除 R 級別基金
  if (name.includes('r級別') || name.includes('r股') || name.match(/-r/i) || name.match(/\(r\)/i) || name.match(/ r\//i) || name.match(/^r\//i)) return true;
  
  return false;
};

const eligibleFunds = allFunds.filter(f => !isExcluded(f)).map(f => ({
  code: f.v25 || f.v29, // 基金代號
  name: f.v2, // 基金名稱
  isin: f.v43 || f.v42, // ISIN CODE
  risk: riskMapping[f.v26 || f.v32] || 3,
  type: (f.v6 && f.v6.includes('債')) || (f.v8 && f.v8.includes('債')) ? 'Satellite' : 'Core' // Simplistic assignment
}));

// Remove duplicates based on code
const uniqueFundsMap = new Map();
eligibleFunds.forEach(f => {
  if (f.code && !uniqueFundsMap.has(f.code)) {
    uniqueFundsMap.set(f.code, f);
  }
});
const uniqueEligibleFunds = Array.from(uniqueFundsMap.values());

const coreFunds = uniqueEligibleFunds.filter(f => f.type === 'Core');
const satFunds = uniqueEligibleFunds.filter(f => f.type === 'Satellite');

const PERSONAS = [
  { title: "口袋拉拉", riskLevel: 3 },
  { title: "口袋獒", riskLevel: 5 },
  { title: "口袋阿金", riskLevel: 4 },
  { title: "口袋柴", riskLevel: 2 },
  { title: "口袋土狗", riskLevel: 5 },
  { title: "口袋西施", riskLevel: 4 },
  { title: "口袋邊牧", riskLevel: 5 },
  { title: "口袋濟斯", riskLevel: 3 },
  { title: "口袋貴賓", riskLevel: 3 },
  { title: "口袋吉娃", riskLevel: 2 }
];

const FUND_MAPPING: Record<string, {core: any[], sat: any[], etf: string}> = {
  "口袋拉拉": { core: [], sat: [], etf: "0050" },
  "口袋獒": { core: [], sat: [], etf: "0050" },
  "口袋阿金": { core: [], sat: [], etf: "0050" },
  "口袋柴": { core: [], sat: [], etf: "00713" },
  "口袋土狗": { core: [], sat: [], etf: "0050" },
  "口袋西施": { core: [], sat: [], etf: "0061" },
  "口袋邊牧": { core: [], sat: [], etf: "009810" },
  "口袋濟斯": { core: [], sat: [], etf: "00850" },
  "口袋貴賓": { core: [], sat: [], etf: "0050" },
  "口袋吉娃": { core: [], sat: [], etf: "0050" }
};

let coreIndex = 0;
let satIndex = 0;

function getVariedFunds(funds: any[], targetRisk: number, count: number, type: string) {
    let eligible = funds.filter(f => f.risk <= targetRisk);
    if (eligible.length < count) {
        eligible = funds; // fallback to all eligible if not enough match risk
    }

    // Sort by risk proximity
    eligible.sort((a, b) => Math.abs(a.risk - targetRisk) - Math.abs(b.risk - targetRisk));

    const bestRisk = Math.abs(eligible[0].risk - targetRisk);
    const bestMatches = eligible.filter(f => Math.abs(f.risk - targetRisk) === bestRisk);
    const others = eligible.filter(f => Math.abs(f.risk - targetRisk) !== bestRisk);

    let selected: any[] = [];
    if (bestMatches.length >= count) {
        let startIdx = type === 'core' ? coreIndex : satIndex;
        for (let i = 0; i < count; i++) {
            selected.push(bestMatches[(startIdx + i) % bestMatches.length]);
        }
        if (type === 'core') coreIndex += count;
        else satIndex += count;
    } else {
        selected = [...bestMatches];
        let needed = count - selected.length;
        for (let i = 0; i < needed; i++) {
            if (others[i]) selected.push(others[i]);
        }
    }
    return selected;
}

const newMapping: Record<string, any> = {};

PERSONAS.forEach(p => {
    const title = p.title;
    const etf = FUND_MAPPING[title]?.etf || "0050";

    const selectedCore = getVariedFunds(coreFunds, p.riskLevel, 3, 'core');
    const selectedSat = getVariedFunds(satFunds, p.riskLevel, 3, 'sat');

    newMapping[title] = {
        core: selectedCore.map(f => f.code),
        sat: selectedSat.map(f => f.code),
        etf: etf
    };
    
    console.log(`【${title}】`);
    console.log(`核心基金 (Core):`);
    selectedCore.forEach(f => {
        console.log(`  - ${f.name} (${f.code})`);
    });
    console.log(`衛星基金 (Satellite):`);
    if (selectedSat.length === 0) {
        console.log(`  - 無`);
    } else {
        selectedSat.forEach(f => {
            console.log(`  - ${f.name} (${f.code})`);
        });
    }
    console.log(`ETF: ${etf}`);
    console.log('');
});

// Write to constants.ts
const content = fs.readFileSync('./utils/constants.ts', 'utf-8');
const finalMappingStr = `export const FUND_MAPPING: Record<string, {core: string[], sat: string[], etf: string}> = ${JSON.stringify(newMapping, null, 2)};`;
const newContent = content.replace(/export const FUND_MAPPING: Record<string, \{core: string\[\], sat: string\[\], etf: string\}> = \{[\s\S]*?\};/, finalMappingStr);

// Also update MOCK_FUNDS to include these new funds so they can be displayed properly
const newMockFunds = uniqueEligibleFunds.map(f => ({
    id: f.code,
    code: f.code,
    name: f.name,
    type: f.type,
    risk: f.risk,
    tags: ["ESG", "科技"], // Dummy tags
    description: "這是一檔優質基金",
    performance: {
        "1M": 1.5,
        "3M": 3.2,
        "6M": 5.8,
        "1Y": 12.4
    }
}));

const mockFundsStr = `export const MOCK_FUNDS: Fund[] = ${JSON.stringify(newMockFunds, null, 2)};`;
let finalContent = newContent.replace(/export const MOCK_FUNDS: Fund\[\] = \[[\s\S]*?\];/, mockFundsStr);

fs.writeFileSync('./utils/constants.ts', finalContent, 'utf-8');
