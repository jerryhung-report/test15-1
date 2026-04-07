import * as fs from 'fs';

const content = fs.readFileSync('utils/constants.ts', 'utf8');

const mappingMatch = content.match(/export const FUND_MAPPING: Record<string, \{core: string\[\], sat: string\[\], etf: string\}> = (\{[\s\S]*?\});/);
const mappingStr = mappingMatch[1];
const mapping = eval('(' + mappingStr + ')');

const mockFundsMatch = content.match(/export const MOCK_FUNDS: Fund\[\] = (\[[\s\S]*?\]);/);
const mockFundsStr = mockFundsMatch[1];
const mockFunds = eval('(' + mockFundsStr + ')');

const fundMap = {};
mockFunds.forEach(f => fundMap[f.code] = f);

const toReplace = [];
const allUsedFunds = new Set();

for (const [persona, data] of Object.entries(mapping)) {
  [...data.core, ...data.sat].forEach(code => {
    allUsedFunds.add(code);
    const fund = fundMap[code];
    if (!fund) {
        console.log('Missing fund:', code);
        return;
    }
    const name = fund.name;
    if (name.includes('貨幣市場') || name.includes('R/') || name.includes('RE/') || name.includes('TISA') || name.includes('R級別') || name.includes('R USD') || name.includes('R EUR') || name.includes('R GBP') || name.includes('R AUD') || name.includes('R NPF')) {
      toReplace.push({ persona, code, name, risk: fund.risk, type: data.core.includes(code) ? 'core' : 'sat' });
    }
  });
}

console.log('Funds to replace:', toReplace);
