eslint-config-core
==================

[![NPM version](http://img.shields.io/npm/v/eslint-config-core.svg)](https://www.npmjs.org/package/eslint-config-core)
[![Build Status](https://travis-ci.org/segandiaye/eslint-config-core.svg?branch=master)](https://travis-ci.org/segandiaye/eslint-config-core)

All centralized configurations for ESLint.

The configurations are organized around the following use cases from
JavaScript at core :

* ([`core/usecase/nodejs`](./usecase/nodejs.js)) :
  JavaScript for Node.js applications (and thus including Electron)

* ([`core/usecase/browser-vue`](./usecase/browser-vue.js)):
  JavaScript for browsers for Vue.js applications

* ([`core/usecase/browser-commonjs`](./usecase/browser-commonjs.js)):
  JavaScript for browsers using CommonJS and generating a bundle
  (with Browserify/WebPack)

* ([`core/usecase/browser-modern`](./usecase/browser-modern.js)):
  JavaScript for modern browsers supporting ES2015 and higher

* ([`core/usecase/browser`](./usecase/browser.js)):
  JavaScript for all browsers even older ones

* ([`core/usecase/test-jest`](./usecase/test-jest.js)):
  Tests with Jest

* ([`core/usecase/test-mocha`](./usecase/test-mocha.js)):
  Tests with Mocha

### Installation

```sh
# Using npm
npm install eslint-config-core --save-dev
```
### Example

You have to add an `.eslintrc.js` file at the root of your project with the following content:

```js
module.exports = {
    extends: 'usecases/usecase/nodejs'
}
```

If you want to use it in `Jest tests` replace the `.eslintrc.js` file content with :

```js
module.exports = {
    extends: 'usecases/usecase/test-jest'
}
```

If you want to use it in `Mocha tests` replace `.eslintrc.js` file content with :

```js
module.exports = {
    extends: 'usecases/usecase/test-mocha'
}
```
