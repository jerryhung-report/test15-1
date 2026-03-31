import fs from 'fs';

const csv = fs.readFileSync('public/funds_reference.csv', 'utf-8');
const lines = csv.split('\n').filter(l => l.trim());

const headers = lines[0].replace('\uFEFF', '').split(',');
let md = '| ' + headers.join(' | ') + ' |\n';
md += '| ' + headers.map(() => '---').join(' | ') + ' |\n';

for (let i = 1; i < lines.length; i++) {
  const line = lines[i];
  const cols = [];
  let inQuotes = false;
  let col = '';
  for (let j = 0; j < line.length; j++) {
    const char = line[j];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      cols.push(col);
      col = '';
    } else {
      col += char;
    }
  }
  cols.push(col);
  md += '| ' + cols.join(' | ') + ' |\n';
}

console.log(md);
