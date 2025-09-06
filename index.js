'use strict';

const { ESLint } = require('eslint');

async function vfileReporterJunit(vfiles) {
  let eslint = new ESLint();

  let [
    { format },
    { toESLint },
  ] = await Promise.all([
    eslint.loadFormatter('junit'),
    import('vfile-to-eslint'),
  ]);

  return format(toESLint(vfiles));
}

module.exports = vfileReporterJunit;
