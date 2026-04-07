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
  if (!fundMap[f.code] || f.name.length > fundMap[f.code].name.length) {
    fundMap[f.code] = f;
  }
});

const isExcluded = (f) => {
  const name = f.name;
  return name.includes('貨幣市場') || 
         name.includes('R/') || 
         name.includes('RE/') || 
         name.includes('TISA') || 
         name.includes('R級別') || 
         name.includes('R USD') || 
         name.includes('R EUR') || 
         name.includes('R GBP') || 
         name.includes('R AUD') || 
         name.includes('R NPF') ||
         name.includes('-T');
};

const allUsedFunds = new Set();
for (const data of Object.values(mapping)) {
  data.core.forEach(c => allUsedFunds.add(c));
  data.sat.forEach(c => allUsedFunds.add(c));
  allUsedFunds.add(data.etf);
}

const availableFunds = Object.values(fundMap).filter(f => !isExcluded(f) && !allUsedFunds.has(f.code) && !/^\d{4,6}$/.test(f.code));

console.log('Available funds:', availableFunds.length);

const toReplace = [];

for (const [persona, data] of Object.entries(mapping)) {
  data.core.forEach((code, index) => {
    const fund = fundMap[code];
    if (isExcluded(fund)) {
      toReplace.push({ persona, type: 'core', index, oldCode: code, oldName: fund.name });
    }
  });
  data.sat.forEach((code, index) => {
    const fund = fundMap[code];
    if (isExcluded(fund)) {
      toReplace.push({ persona, type: 'sat', index, oldCode: code, oldName: fund.name });
    }
  });
}

console.log('To replace:', toReplace);

// Perform replacement
let availableIndex = 0;
for (const item of toReplace) {
  const replacement = availableFunds[availableIndex++];
  if (!replacement) {
    console.error('Not enough available funds!');
    break;
  }
  mapping[item.persona][item.type][item.index] = replacement.code;
  console.log(`Replaced ${item.oldName} with ${replacement.name} in ${item.persona}`);
}

const newMappingStr = "export const FUND_MAPPING: Record<string, {core: string[], sat: string[], etf: string}> = " + JSON.stringify(mapping, null, 2) + ";";

const newContent = content.replace(mappingMatch[0], newMappingStr);
fs.writeFileSync('utils/constants.ts', newContent);
console.log('Updated constants.ts');
