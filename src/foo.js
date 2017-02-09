import fs from 'fs';

const file = fs.readFileSync('__tests__/files/after.json', 'utf8');

const parsed = JSON.parse(file);

console.log(parsed);
console.log(parsed["host"]);
console.log(Object.keys(parsed));
