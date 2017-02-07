install:
	npm install

start:
	npm run babel-node -- src/bin/gendiff.js

publish:
	npm publish

make lint:
	npm run eslint 
