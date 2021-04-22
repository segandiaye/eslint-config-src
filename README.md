eslint-config-snd
==================

[![NPM version](http://img.shields.io/npm/v/eslint-config-snd.svg)](https://www.npmjs.org/package/eslint-config-snd)
[![Build Status](https://travis-ci.org/segandiaye/eslint-config-snd.svg?branch=master)](https://travis-ci.org/segandiaye/eslint-config-snd)

All centralized configurations for ESLint.

The configurations are organized around the following use cases from
JavaScript at snd :

* ([`snd/usecase/nodejs`](./usecase/nodejs.js)) :
  JavaScript for Node.js applications (and thus including Electron)

* ([`snd/usecase/browser-vue`](./usecase/browser-vue.js)):
  JavaScript for browsers for Vue.js applications

* ([`snd/usecase/browser-commonjs`](./usecase/browser-commonjs.js)):
  JavaScript for browsers using CommonJS and generating a bundle
  (with Browserify/WebPack)

* ([`snd/usecase/browser-modern`](./usecase/browser-modern.js)):
  JavaScript for modern browsers supporting ES2015 and higher

* ([`snd/usecase/browser`](./usecase/browser.js)):
  JavaScript for all browsers even older ones

* ([`snd/usecase/test-jest`](./usecase/test-jest.js)):
  Tests with Jest

* ([`snd/usecase/test-mocha`](./usecase/test-mocha.js)):
  Tests with Mocha

All these use cases have their own `env` and `rules`, while inheriting [common properties
while inheriting [common properties](./usecase/lib/common.js).

**Note**:
You must respect the `peerDependencies` specified in this NPM package (at the
the `package.json` file), in particular at the level of the versions. If the
are not respected there will be `WARN` during the `npm
install` and the package will work imperfectly, if at all.
