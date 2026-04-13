const fs = require('fs');

const allFunds = JSON.parse(fs.readFileSync('all_funds.json', 'utf8'));

const personas = [
  { title: "口袋濟斯", riskLevel: 1 },
  { title: "口袋西施", riskLevel: 2 },
  { title: "口袋吉娃", riskLevel: 2 },
  { title: "口袋柴", riskLevel: 3 },
  { title: "口袋貴賓", riskLevel: 3 },
  { title: "口袋拉拉", riskLevel: 4 },
  { title: "口袋土狗", riskLevel: 4 },
  { title: "口袋阿金", riskLevel: 5 },
  { title: "口袋邊牧", riskLevel: 5 },
  { title: "口袋獒", riskLevel: 6 }
];

const fundsByRisk = {
  2: allFunds.filter(f => f.risk === 2),
  3: allFunds.filter(f => f.risk === 3),
  4: allFunds.filter(f => f.risk === 4),
  5: allFunds.filter(f => f.risk === 5)
};

const fundMapping = {};

// Keep track of used funds to avoid too much repetition if possible, or just slice them
const usedIndexes = { 2: 0, 3: 0, 4: 0, 5: 0 };

personas.forEach(p => {
  let targetRisk = p.riskLevel;
  if (targetRisk < 2) targetRisk = 2;
  if (targetRisk > 5) targetRisk = 5;

  const availableFunds = fundsByRisk[targetRisk];
  
  const core = [];
  const sat = [];

  for (let i = 0; i < 3; i++) {
    core.push(availableFunds[usedIndexes[targetRisk] % availableFunds.length].code);
    usedIndexes[targetRisk]++;
  }
  for (let i = 0; i < 3; i++) {
    sat.push(availableFunds[usedIndexes[targetRisk] % availableFunds.length].code);
    usedIndexes[targetRisk]++;
  }

  fundMapping[p.title] = {
    core,
    sat,
    etf: "" // Keep existing ETF or leave empty to be filled later
  };
});

console.log(JSON.stringify(fundMapping, null, 2));
