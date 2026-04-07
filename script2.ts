import * as fs from 'fs';

const content = fs.readFileSync('utils/constants.ts', 'utf8');

const mappingMatch = content.match(/export const FUND_MAPPING: Record<string, \{core: string\[\], sat: string\[\], etf: string\}> = (\{[\s\S]*?\});/);
const mappingStr = mappingMatch[1];
const mapping = eval('(' + mappingStr + ')');

console.log(JSON.stringify(mapping, null, 2));
