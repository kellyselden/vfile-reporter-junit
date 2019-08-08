'use strict';

const vfileToEslint = require('vfile-to-eslint');
const eslintFormatterJunit = require('eslint/lib/formatters/junit');

function vfileReporterJunit(vfiles) {
  return eslintFormatterJunit(vfileToEslint(vfiles));
}

module.exports = vfileReporterJunit;
