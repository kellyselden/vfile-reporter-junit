'use strict';

const { describe } = require('./helpers/mocha');
const { expect } = require('./helpers/chai');
const vfileReporterJunit = require('..');
const remark = require('remark');
const recommended = require('remark-preset-lint-recommended');

describe(vfileReporterJunit, function() {
  it('works', async function() {
    let file = remark()
      .use(recommended)
      .processSync('## Hello world!');

    file.path = '/foo/bar.baz';

    expect(await vfileReporterJunit([file])).to.equal(`<?xml version="1.0" encoding="utf-8"?>
<testsuites>
<testsuite package="org.eslint" time="0" tests="1" errors="1" name="/foo/bar.baz">
<testcase time="0" name="org.eslint.remark-lint:final-newline" classname="/foo/bar"><failure message="Missing newline character at end of file"><![CDATA[line 1, col 1, Warning - Missing newline character at end of file (remark-lint:final-newline)]]></failure></testcase>
</testsuite>
</testsuites>
`);
  });
});
