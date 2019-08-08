'use strict';

const { expect } = require('chai');
const vfileReporterJunit = require('..');
const remark = require('remark');
const recommended = require('remark-preset-lint-recommended');

// eslint-disable-next-line mocha/no-setup-in-describe
describe(vfileReporterJunit.name, function() {
  it('works', function() {
    let file = remark()
      .use(recommended)
      .processSync('## Hello world!');

    expect(vfileReporterJunit([file])).to.equal(`<?xml version="1.0" encoding="utf-8"?>
<testsuites>
<testsuite package="org.eslint" time="0" tests="1" errors="1" name="undefined">
<testcase time="0" name="org.eslint.remark-lint:final-newline"><failure message="Missing newline character at end of file"><![CDATA[line 1, col 1, Warning - Missing newline character at end of file (remark-lint:final-newline)]]></failure></testcase>
</testsuite>
</testsuites>
`);
  });
});
