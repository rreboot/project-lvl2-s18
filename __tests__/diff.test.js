import fs from 'fs';
import diff from '../src/differ';

test('compare 2 files', () => {
  const file1 = fs.readFileSync('__tests__/files/before.json', 'utf8');
  const file2 = fs.readFileSync('__tests__/files/after.json', 'utf8');

  const result = `{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
  }`;

  expect(diff(file1, file2)).toEqual(result);
});
