import * as fs from 'fs';

const content = fs.readFileSync('utils/constants.ts', 'utf8');

const mockFundsMatch = content.match(/export const MOCK_FUNDS: Fund\[\] = (\[[\s\S]*?\]);/);
const mockFundsStr = mockFundsMatch[1];
const mockFunds = eval('(' + mockFundsStr + ')');

const counts = {};
mockFunds.forEach(f => {
  counts[f.code] = (counts[f.code] || 0) + 1;
});
for (const [code, count] of Object.entries(counts)) {
  if (count > 1) console.log(code, count);
}
