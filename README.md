# @dubbha/yarn-audit-ci

![npm (scoped)](https://img.shields.io/npm/v/@dubbha/yarn-audit-ci.svg)

CI-friendly yarn audit wrapper

## Install

```
$ yarn add @dubbha/yarn-audit-ci --dev
```

## Usage

```js
// package.json

"scripts": {
    "audit": "yarn-audit-cicd",
    "build": "npm-run-all yarn-audit-cicd ..."
},
```