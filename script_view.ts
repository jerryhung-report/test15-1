import * as fs from 'fs';

const content = fs.readFileSync('utils/constants.ts', 'utf8');

const mappingMatch = content.match(/export const FUND_MAPPING: Record<string, \{core: string\[\], sat: string\[\], etf: string\}> = (\{[\s\S]*?\});/);
const mappingStr = mappingMatch[1];
const mapping = eval('(' + mappingStr + ')');

const mockFundsMatch = content.match(/export const MOCK_FUNDS: Fund\[\] = (\[[\s\S]*?\]);/);
const mockFundsStr = mockFundsMatch[1];
const mockFunds = eval('(' + mockFundsStr + ')');

const fundMap = {};
mockFunds.forEach(f => {
  fundMap[f.code] = f.name;
});

const etfMap = {
  "00713": "元大台灣高息低波",
  "00646": "元大S&P500",
  "009803": "保德信市值動能50",
  "0050": "元大台灣50",
  "00850": "元大臺灣ESG永續",
  "0056": "元大高股息",
  "0061": "元大寶滬深",
  "009810": "保德信金融特選",
  "006201": "元大富櫃50",
  "00910": "保德信科技特選"
};

for (const [persona, data] of Object.entries(mapping)) {
  console.log(`\n### ${persona}`);
  console.log(`**核心配置 (Core):**`);
  data.core.forEach(code => console.log(`- [${code}] ${fundMap[code] || '未知基金'}`));
  console.log(`**衛星配置 (Satellite):**`);
  data.sat.forEach(code => console.log(`- [${code}] ${fundMap[code] || '未知基金'}`));
  console.log(`**ETF:**`);
  console.log(`- [${data.etf}] ${etfMap[data.etf] || '未知ETF'}`);
}
