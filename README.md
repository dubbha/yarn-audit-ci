# yarn-audit-ci

[![npm](https://img.shields.io/npm/v/yarn-audit-ci.svg)](https://www.npmjs.com/package/yarn-audit-ci)

CI-friendly yarn audit wrapper. Only returns a non-zero exit code for at least the requested severity level.

## Installation

```
$ yarn add yarn-audit-ci --dev
```

## Usage

In the console:
```js
$ yarn-audit-ci             // only fail on critical issues (default)
$ yarn-audit-ci --critical  // only fail on critical issues (explicit)
$ yarn-audit-ci --high      // only fail on high or critical issues
$ yarn-audit-ci -h
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

In the console using yarn:
```js
$ yarn yarn-audit-ci
```

In the `package.json`
```js
// package.json
"scripts": {
    "audit": "yarn-audit-ci",
},

// console
$ yarn run audit
```

In the `package.json` using a script name different from `audit`, which is reserved for yarn's audit itself, thus the `run` part in the previous example
```js
// package.json
"scripts": {
    "audit:ci": "yarn-audit-ci",
    "audit:high": "yarn-audit-ci --high",
},

// console
$ yarn audit:ci
$ yarn audit:high
```

In `package.json` in combination with the [yall-scripts](https://github.com/dubbha/yall-scripts) tool
```js
// package.json
"scripts": {
    "audit:high": "yarn-audit-ci --high",
    "lint": "eslint ./src",
    "test": "jest src",
    "check": "yall audit:high lint test"
},

// console
$ yarn check
```
If you only care for critical issues, you may call it directly:
```js
// package.json
"scripts": {
    "lint": "eslint ./src",
    "test": "jest src",
    "check": "yall yarn-audit-ci lint test"
},

// console
$ yarn check
```
