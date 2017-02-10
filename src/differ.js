import fs from 'fs';
import _ from 'lodash';

const parseFile = file =>
  JSON.parse(file);

const compare = (set1, set2) => {
  const parsedKeys1 = Object.keys(set1);
  const parsedKeys2 = Object.keys(set2);

  const union = _.union(parsedKeys1, parsedKeys2);

  const newArr = union.reduce((acc, val) => {
    const node = {};
    node.key = val;
    node.value1 = set1[val];
    node.value2 = set2[val];
    if (node.value1 === undefined) {
      node.flag = 'N';
    }
    if (node.value2 === undefined) {
      node.flag = 'D';
    }
    if (node.value1 !== undefined
      && node.value2 !== undefined
      && node.value1 !== node.value2) {
      node.flag = 'E';
    }
    acc.push(node);
    return acc;
  }, []);

  return newArr;
};

const elementToString = (obj) => {
  const key = obj.key;
  switch (obj.flag) {
    case undefined:
      return `    ${key}: ${obj.value1}`;
    case 'N':
      return `  + ${key}: ${obj.value2}`;
    case 'D':
      return `  - ${key}: ${obj.value1}`;
    case 'E':
      return `  + ${key}: ${obj.value2}\n  - ${key}: ${obj.value1}`;
    default:
      return '';
  }
};

const toString = arr => `{\n${arr.map(elementToString).join('\n')}\n}`;

export default (path1, path2) => {
  const file1 = fs.readFileSync(path1, 'utf8');
  const file2 = fs.readFileSync(path2, 'utf8');
  const set1 = parseFile(file1);
  const set2 = parseFile(file2);
  const output = compare(set1, set2);
  const result = toString(output);
  return result;
};
