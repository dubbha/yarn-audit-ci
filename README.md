# yarn-audit-ci

[![npm](https://img.shields.io/npm/v/yarn-audit-ci.svg)](https://www.npmjs.com/package/yarn-audit-ci)

CI-friendly yarn audit wrapper. Only returns a non-zero exit code for at least the requested severity level.

## Installation

```js
$ yarn add yarn-audit-ci --dev
```

## Usage

In the console:
```js
$ yarn-audit-ci             // only fail on critical issues (default)
$ yarn-audit-ci --critical  // only fail on critical issues (explicit)
$ yarn-audit-ci --high      // only fail on high or critical issues
$ yarn-audit-ci --moderate  // only fail on at least moderate issues
$ yarn-audit-ci --low       // only fail on at least low issues
$ yarn-audit-ci --info      // fail on any issues
```

Using shorter options:
```js
$ yarn-audit-ci -c          // only fail on critical issues (explicit)
$ yarn-audit-ci -h          // only fail on high or critical issues
$ yarn-audit-ci -m          // only fail on at least moderate issues
$ yarn-audit-ci -l          // only fail on at least low issues
$ yarn-audit-ci -i          // fail on any issues
```

Using a shorter `yaudit` alias:
```js
$ yaudit
$ yaudit -h
$ yaudit --high
```

In the console using yarn:
```js
$ yarn yarn-audit-ci --high
$ yarn yaudit --high
```

In the `package.json`
```js
// package.json
"scripts": {
  "audit": "yarn-audit-ci"
},

// console
$ yarn run audit
```

In the `package.json` using a script name different from `audit`, which is a [yarn CLI command](https://classic.yarnpkg.com/en/docs/cli/) thus explicit `run` in the previous example:
```js
// package.json
"scripts": {
  "audit:ci": "yarn-audit-ci",
  "audit:high": "yarn-audit-ci --high"
},

// console
$ yarn audit:ci
$ yarn audit:high
```

In the `package.json` using a `yaudit` alias:
```js
// package.json
"scripts": {
  "audit:high": "yaudit --high"
},

// console
$ yarn audit:high
```

In `package.json` in combination with the [yall-scripts](https://github.com/dubbha/yall-scripts) tool:
```js
// package.json
"scripts": {
  "audit": "yaudit",
  "check": "eslint ./src",
  "test": "jest ./src",
  "all": "yall audit check test"
},

// console
$ yarn all
```
