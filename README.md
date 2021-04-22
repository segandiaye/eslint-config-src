eslint-config-snd
==================

[![NPM version](http://img.shields.io/npm/v/eslint-config-snd.svg)](https://www.npmjs.org/package/eslint-config-snd)
[![Build Status](https://travis-ci.org/segandiaye/eslint-config-snd.svg?branch=master)](https://travis-ci.org/segandiaye/eslint-config-snd)

Toutes les configurations centralisées pour ESLint.

Les configurations sont organisées autour des cas d'utilisation suivants de
JavaScript à la snd :

* ([`snd/usecase/nodejs`](./usecase/nodejs.js)) :
  JavaScript pour les applications Node.js (et donc y compris Electron)

* ([`snd/usecase/browser-vue`](./usecase/browser-vue.js)) :
  JavaScript pour navigateurs pour les applications Vue.js

* ([`snd/usecase/browser-commonjs`](./usecase/browser-commonjs.js)) :
  JavaScript pour navigateurs en utilisant CommonJS et en générant un bundle
  (avec Browserify/WebPack)

* ([`snd/usecase/browser-modern`](./usecase/browser-modern.js)) :
  JavaScript pour navigateurs modernes supportant ES2015 et plus

* ([`snd/usecase/browser`](./usecase/browser.js)) :
  JavaScript pour tous les navigateurs même anciens

* ([`snd/usecase/test-jest`](./usecase/test-jest.js)) :
  Tests avec Jest

* ([`snd/usecase/test-mocha`](./usecase/test-mocha.js)) :
  Tests avec Mocha

Tous ces cas d'utilisation ont leur `env` et leurs `rules` spécifiques, tout
en héritant de [propriétés en commun](./usecase/lib/common.js).

**Attention** :
Il faut respecter les `peerDependencies` spécifiées dans ce paquet NPM (au
niveau du fichier `package.json`), notamment au niveau des versions. Si les
`peerDependencies` ne sont pas respectées il y aura des `WARN` lors du `npm
install` et le paquet fonctionnera imparfaitement, voire pas du tout.
