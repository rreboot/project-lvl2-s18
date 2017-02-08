#!/usr/bin/env node

import commander from 'commander';
import diff from '../index';
import pkg from '../../package.json';

const program = commander;
program
  .version(pkg.version)
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('<first_config> <second_config>')
  .action((firstConfig, secondConfig) => diff(firstConfig, secondConfig))
  .parse(process.argv);
