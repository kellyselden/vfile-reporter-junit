# vfile-reporter-junit

[![npm version](https://badge.fury.io/js/vfile-reporter-junit.svg)](https://badge.fury.io/js/vfile-reporter-junit)

jUnit reporter for VFile

## Usage

```js
const remark = require('remark');
const recommended = require('remark-preset-lint-recommended');
const vfileReporterJunit = require('vfile-reporter-junit');

let file = remark()
  .use(recommended)
  .processSync('## Hello world!')

console.log(await vfileReporterJunit([file]))
```

```sh
remark . --use preset-lint-recommended --report junit
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<testsuites>
<testsuite package="org.eslint" time="0" tests="1" errors="1" name="undefined">
<testcase time="0" name="org.eslint.remark-lint:final-newline"><failure message="Missing newline character at end of file"><![CDATA[line 1, col 1, Warning - Missing newline character at end of file (remark-lint:final-newline)]]></failure></testcase>
</testsuite>
</testsuites>
```
