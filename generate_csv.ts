import fs from 'fs';
import { PERSONAS, FUND_MAPPING, MOCK_FUNDS } from './utils/constants';

let csvContent = '\uFEFF'; // BOM for Excel
csvContent += '投資風格,狗的名稱,核心/衛星/ETF,基金名稱,投資標的說明文字,統編,ISINCODE,幣別,風險等級\n';

PERSONAS.forEach(persona => {
  const dogName = persona.title;
  const styleDesc = persona.desc;
  const mapping = FUND_MAPPING[dogName];
  
  if (mapping) {
    // Core Funds
    mapping.core.forEach(code => {
      const fund = MOCK_FUNDS.find(f => f.code === code);
      if (fund) {
        csvContent += `"${styleDesc}","${dogName}","核心基金","${fund.name}","${fund.desc}","${fund.code}","${fund.isin}","${fund.currency}","${fund.risk}"\n`;
      }
    });

    // Satellite Funds
    mapping.sat.forEach(code => {
      const fund = MOCK_FUNDS.find(f => f.code === code);
      if (fund) {
        csvContent += `"${styleDesc}","${dogName}","衛星基金","${fund.name}","${fund.desc}","${fund.code}","${fund.isin}","${fund.currency}","${fund.risk}"\n`;
      }
    });

    // ETF
    const etf = MOCK_FUNDS.find(f => f.code === mapping.etf);
    if (etf) {
      csvContent += `"${styleDesc}","${dogName}","ETF","${etf.name}","${etf.desc}","${etf.code}","${etf.isin}","${etf.currency}","${etf.risk}"\n`;
    }
  }
});

fs.writeFileSync('./public/funds_reference.csv', csvContent, 'utf-8');
console.log('CSV generated successfully at ./public/funds_reference.csv');
