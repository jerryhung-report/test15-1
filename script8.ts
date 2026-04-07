import * as fs from 'fs';

const content = fs.readFileSync('utils/constants.ts', 'utf8');

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

const cleanedFunds = Object.values(fundMap).filter(f => !isExcluded(f));

const newMockFundsStr = "export const MOCK_FUNDS: Fund[] = " + JSON.stringify(cleanedFunds, null, 2) + ";";

const newContent = content.replace(mockFundsMatch[0], newMockFundsStr);
fs.writeFileSync('utils/constants.ts', newContent);
console.log('Cleaned MOCK_FUNDS in constants.ts');
