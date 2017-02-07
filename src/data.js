import commander from 'commander';

const program = commander;
program
  .version('0.0.1')
  .option('-h, --help', 'help conclusion')
  .parse(process.argv);

console.log('gendiff');
if (program.help) console.log(' - help');
