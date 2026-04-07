import { PERSONAS, MOCK_FUNDS, FUND_MAPPING } from './utils/constants';

const fundMap = new Map(MOCK_FUNDS.map(f => [f.code, f.name]));

let output = '';

PERSONAS.forEach((p, index) => {
  output += `### ${index + 1}. ${p.title}\n`;
  output += `**說明：** ${p.desc}\n\n`;
  
  const mapping = FUND_MAPPING[p.title];
  if (mapping) {
    output += `**核心配置 (Core)：**\n`;
    mapping.core.forEach(code => {
      output += `- ${fundMap.get(code) || code} (${code})\n`;
    });
    
    output += `\n**衛星配置 (Satellite)：**\n`;
    mapping.sat.forEach(code => {
      output += `- ${fundMap.get(code) || code} (${code})\n`;
    });

    if (mapping.etf) {
      output += `\n**ETF配置：**\n`;
      output += `- ${fundMap.get(mapping.etf) || mapping.etf} (${mapping.etf})\n`;
    }
  } else {
    output += `*無對應配置資料*\n`;
  }
  
  output += `\n---\n\n`;
});

console.log(output);
