import { PERSONAS, FUND_MAPPING, MOCK_FUNDS, ETF_LINKS } from './utils/constants';

const fundMap = new Map(MOCK_FUNDS.map(f => [f.code, f.name]));

let output = '';

PERSONAS.forEach(persona => {
  output += `### ${persona.title}\n`;
  output += `**說明：** ${persona.desc}\n\n`;
  
  const mapping = FUND_MAPPING[persona.title];
  if (mapping) {
    output += `**核心配置 (Core):**\n`;
    mapping.core.forEach(code => {
      output += `- ${fundMap.get(code) || code} (${code})\n`;
    });
    
    output += `\n**衛星配置 (Satellite):**\n`;
    mapping.sat.forEach(code => {
      output += `- ${fundMap.get(code) || code} (${code})\n`;
    });
    
    output += `\n**ETF 配置:**\n`;
    const etfName = fundMap.get(mapping.etf) || mapping.etf;
    const etfLink = ETF_LINKS[mapping.etf] || '#';
    output += `- [${etfName} (${mapping.etf})](${etfLink})\n`;
  } else {
    output += `*無對應基金配置*\n`;
  }
  output += `\n---\n\n`;
});

console.log(output);
