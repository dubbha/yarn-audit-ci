const { exec } = require('child_process');
const { parseThreshold } = require('./parse');

module.exports = exec('yarn audit --summary', (error, stdout) => {
  process.stdout.write(stdout);
  if (error) {
    const args = process.argv.slice(2);
    const threshold = parseThreshold(args)

    if (error.code >= threshold) {
      process.exit(error.code);
    }
  }
});
