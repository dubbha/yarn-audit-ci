# @dubbha/yarn-audit-ci

![npm (scoped)](https://img.shields.io/npm/v/@dubbha/yarn-audit-ci.svg)

CI-friendly yarn audit wrapper

## Install

```
$ npm install @dubbha/yarn-audit-cicd
```

## Usage

Use directly:
```js
const audit = require('@dubbha/yarn-audit-cicd');

audit();  // default: fail on Critical, warn on High vulnarabilities
```

Use in package.json:
```js
"scripts": {
    "build": "npm-run-all @dubbha/yarn-audit-cicd ..."
},
```