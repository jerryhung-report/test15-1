const fs = require('fs');
const content = fs.readFileSync('utils/constants.ts', 'utf-8');
const fundsMatch = content.match(/export const MOCK_FUNDS: Fund\[\] = (\[[\s\S]*?\]);/);
const funds = eval(fundsMatch[1]);
funds.forEach(f => {
  if (f.name.includes('(') && !f.name.includes('(台幣)')) {
    console.log(f.name);
  }
});
