# arr-map [![NPM version](https://img.shields.io/npm/v/arr-map.svg?style=flat)](https://www.npmjs.com/package/arr-map) [![NPM monthly downloads](https://img.shields.io/npm/dm/arr-map.svg?style=flat)](https://npmjs.org/package/arr-map)  [![NPM total downloads](https://img.shields.io/npm/dt/arr-map.svg?style=flat)](https://npmjs.org/package/arr-map) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/arr-map.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/arr-map)

> Faster, node.js focused alternative to JavaScript's native array map.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save arr-map
```

## Why use this?

JavaScript's native `Array.map()` is slow, and other popular array map libraries are focused on browser compatibility, which makes them bloated or less than idea for non-browser usage. This implementation is focused on node.js usage keeping it light and fast.

## Usage

```js
var map = require('arr-map');

map(['a', 'b', 'c'], function(ele) {
  return ele + ele;
});
//=> ['aa', 'bb', 'cc']

map(['a', 'b', 'c'], function(ele, i) {
  return i + ele;
});
//=> ['0a', '1b', '2c']
```

## About

### Related projects

* [arr-diff](https://www.npmjs.com/package/arr-diff): Returns an array with only the unique values from the first array, by excluding all… [more](https://github.com/jonschlinkert/arr-diff) | [homepage](https://github.com/jonschlinkert/arr-diff "Returns an array with only the unique values from the first array, by excluding all values from additional arrays using strict equality for comparisons.")
* [arr-filter](https://www.npmjs.com/package/arr-filter): Faster alternative to javascript's native filter method. | [homepage](https://github.com/jonschlinkert/arr-filter "Faster alternative to javascript's native filter method.")
* [arr-flatten](https://www.npmjs.com/package/arr-flatten): Recursively flatten an array or arrays. This is the fastest implementation of array flatten. | [homepage](https://github.com/jonschlinkert/arr-flatten "Recursively flatten an array or arrays. This is the fastest implementation of array flatten.")
* [arr-reduce](https://www.npmjs.com/package/arr-reduce): Fast array reduce that also loops over sparse elements. | [homepage](https://github.com/jonschlinkert/arr-reduce "Fast array reduce that also loops over sparse elements.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.4.2, on February 28, 2017._