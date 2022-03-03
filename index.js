'use strict';

const vfileToEslint = require('vfile-to-eslint');
const { ESLint } = require('eslint');

async function vfileReporterJunit(vfiles) {
  let eslint = new ESLint();

  let { format } = await eslint.loadFormatter('junit');

  return format(vfileToEslint(vfiles));
}

module.exports = vfileReporterJunit;
