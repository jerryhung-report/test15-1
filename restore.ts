import * as fs from 'fs';

const content = fs.readFileSync('utils/constants.ts', 'utf8');

const originalMapping = {
  "口袋柴": {
    "core": [
      "97978047",
      "C0109004",
      "92017204"
    ],
    "sat": [
      "98639616",
      "98641524",
      "C0054057"
    ],
    "etf": "00713"
  },
  "口袋阿金": {
    "core": [
      "98638122",
      "98642423",
      "98641177"
    ],
    "sat": [
      "98638532",
      "98637275",
      "98639936"
    ],
    "etf": "00646"
  },
  "口袋拉拉": {
    "core": [
      "01032183",
      "C0109006",
      "98639403"
    ],
    "sat": [
      "98642116",
      "01031699",
      "98641594"
    ],
    "etf": "009803"
  },
  "口袋土狗": {
    "core": [
      "73990649",
      "C0109015",
      "81584335"
    ],
    "sat": [
      "98642010",
      "C0115024",
      "98638079"
    ],
    "etf": "0050"
  },
  "口袋濟斯": {
    "core": [
      "98641176",
      "98641767",
      "98641425"
    ],
    "sat": [
      "98640652",
      "C0115029",
      "98641053"
    ],
    "etf": "00850"
  },
  "口袋獒": {
    "core": [
      "98640605",
      "C0109011",
      "98639310"
    ],
    "sat": [
      "98639036",
      "98637868",
      "98641204"
    ],
    "etf": "0056"
  },
  "口袋西施": {
    "core": [
      "73998065",
      "98637127",
      "98637551"
    ],
    "sat": [
      "98637537",
      "98637078",
      "98637071"
    ],
    "etf": "0061"
  },
  "口袋邊牧": {
    "core": [
      "C0054008",
      "92029139",
      "98641172"
    ],
    "sat": [
      "98640076",
      "986371051",
      "98641587"
    ],
    "etf": "009810"
  },
  "口袋貴賓": {
    "core": [
      "83866508",
      "97988636",
      "97977878"
    ],
    "sat": [
      "98636611",
      "17605622",
      "C0054121"
    ],
    "etf": "006201"
  },
  "口袋吉娃": {
    "core": [
      "98638350",
      "98636726",
      "98638113"
    ],
    "sat": [
      "98641041",
      "98636878",
      "98638435"
    ],
    "etf": "00910"
  }
};

const mappingMatch = content.match(/export const FUND_MAPPING: Record<string, \{core: string\[\], sat: string\[\], etf: string\}> = (\{[\s\S]*?\});/);

const newMappingStr = "export const FUND_MAPPING: Record<string, {core: string[], sat: string[], etf: string}> = " + JSON.stringify(originalMapping, null, 2) + ";";

const newContent = content.replace(mappingMatch[0], newMappingStr);
fs.writeFileSync('utils/constants.ts', newContent);
console.log('Restored constants.ts');
