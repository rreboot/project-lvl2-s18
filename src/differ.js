import fs from 'fs';

const parseFile = file =>
  JSON.parse(file);

const compare = (set1, set2) => {
  // вот тут должна твориться какая-то магия, сравнивающая объекты
  // и формирующая новое множество
};

const toString = (set) => {
  // преобразование в строку
};

export default (path1, path2) => {
  const file1 = fs.readFileSync(path1, 'utf8');
  const file2 = fs.readFileSync(path2, 'utf8');
  const set1 = parseFile(file1);
  const set2 = parseFile(file2);
  const output = compare(set1, set2);
  const result = toString(output);
  return result;
};
