const fs = require('fs');

const allFunds = JSON.parse(fs.readFileSync('all_funds.json', 'utf8'));

const personas = [
  { title: "口袋濟斯", riskLevel: 1 },
  { title: "口袋西施", riskLevel: 2 },
  { title: "口袋吉娃", riskLevel: 2 },
  { title: "口袋柴", riskLevel: 3 },
  { title: "口袋貴賓", riskLevel: 3 },
  { title: "口袋拉拉", riskLevel: 4 },
  { title: "口袋土狗", riskLevel: 4 },
  { title: "口袋阿金", riskLevel: 5 },
  { title: "口袋邊牧", riskLevel: 5 },
  { title: "口袋獒", riskLevel: 6 }
];

const fundsByRisk = {
  2: allFunds.filter(f => f.risk === 2),
  3: allFunds.filter(f => f.risk === 3),
  4: allFunds.filter(f => f.risk === 4),
  5: allFunds.filter(f => f.risk === 5)
};

const fundMapping = {};

// Keep track of used funds to avoid too much repetition if possible, or just slice them
const usedIndexes = { 2: 0, 3: 0, 4: 0, 5: 0 };

// Existing ETFs mapping
const existingETFs = {
  "口袋柴": "00713",
  "口袋阿金": "00646",
  "口袋拉拉": "009803",
  "口袋土狗": "0050",
  "口袋濟斯": "00850",
  "口袋獒": "0056",
  "口袋西施": "0061",
  "口袋邊牧": "009810",
  "口袋貴賓": "006201",
  "口袋吉娃": "00910"
};

personas.forEach(p => {
  let targetRisk = p.riskLevel;
  if (targetRisk < 2) targetRisk = 2;
  if (targetRisk > 5) targetRisk = 5;

  const availableFunds = fundsByRisk[targetRisk];
  
  const core = [];
  const sat = [];

  for (let i = 0; i < 3; i++) {
    core.push(availableFunds[usedIndexes[targetRisk] % availableFunds.length].code);
    usedIndexes[targetRisk]++;
  }
  for (let i = 0; i < 3; i++) {
    sat.push(availableFunds[usedIndexes[targetRisk] % availableFunds.length].code);
    usedIndexes[targetRisk]++;
  }

  fundMapping[p.title] = {
    core,
    sat,
    etf: existingETFs[p.title] || ""
  };
});

let constantsContent = fs.readFileSync('utils/constants.ts', 'utf8');

// Replace FUND_MAPPING
const mappingRegex = /export const FUND_MAPPING: Record<string, \{core: string\[\], sat: string\[\], etf: string\}> = \{[\s\S]*?\n\};\n/;
const newMappingStr = `export const FUND_MAPPING: Record<string, {core: string[], sat: string[], etf: string}> = ${JSON.stringify(fundMapping, null, 2)};\n`;

constantsContent = constantsContent.replace(mappingRegex, newMappingStr);

// Replace MOCK_FUNDS
// We need to keep the ETFs in MOCK_FUNDS because they are used to display ETF info.
// Let's extract the ETFs from the current MOCK_FUNDS.
const currentMockFundsRegex = /export const MOCK_FUNDS: Fund\[\] = (\[[\s\S]*?\]);\n/;
const match = constantsContent.match(currentMockFundsRegex);
let currentMockFunds = [];
if (match) {
  // Try to parse the array
  try {
    // We can't simply JSON.parse because it might not be strict JSON.
    // Let's use eval or Function
    currentMockFunds = new Function(`return ${match[1]}`)();
  } catch (e) {
    console.error("Failed to parse current MOCK_FUNDS", e);
  }
}

const etfs = currentMockFunds.filter(f => Object.values(existingETFs).includes(f.code));

// Combine allFunds and etfs
const newMockFunds = [...allFunds, ...etfs];

const newMockFundsStr = `export const MOCK_FUNDS: Fund[] = ${JSON.stringify(newMockFunds, null, 2)};\n`;
constantsContent = constantsContent.replace(currentMockFundsRegex, newMockFundsStr);

fs.writeFileSync('utils/constants.ts', constantsContent);
console.log("Updated utils/constants.ts");
