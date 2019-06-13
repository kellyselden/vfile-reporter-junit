'use strict';

const vfileToEslint = require('vfile-to-eslint');
const eslintFormatterJunit = require('eslint/lib/formatters/junit');

module.exports = vfiles => eslintFormatterJunit(vfileToEslint(vfiles));
