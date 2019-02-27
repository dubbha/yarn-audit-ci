#!/usr/bin/env node

const { exec } = require('child_process');

module.exports = exec('yarn audit --summary', (error, stdout) => {
  console.log(stdout);
  if (error) {
    if (error.code >= 16) {
      throw new Error('Critical vulnerabilities found');
    }
    if (error.code >= 8) {
      console.log('\033[31m', 'High vulnerabilities found', '\033[0m');
    }
  }
});
