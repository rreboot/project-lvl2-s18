import diff from '../src/';

test('compare 2 files', () => {
  const path1 = '__tests__/files/before.json';
  const path2 = '__tests__/files/after.json';

  const result = `{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
}`;

  expect(diff(path1, path2)).toEqual(result);
});
