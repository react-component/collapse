# rc-accordion
---

rc-accordion ui component for react

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

[npm-image]: http://img.shields.io/npm/v/rc-accordion.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-accordion
[travis-image]: https://img.shields.io/travis/react-component/rc-accordion.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/rc-accordion
[coveralls-image]: https://img.shields.io/coveralls/react-component/rc-accordion.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/rc-accordion?branch=master

## Development

```
npm install
npm start
```

## Example

http://localhost:8000/examples/

online example: http://react-component.github.io/rc-accordion/examples/


## Feature

* support ie8,ie8+,chrome,firefox,safari

### Keyboard



## install

[![rc-accordion](https://nodei.co/npm/rc-accordion.png)](https://npmjs.org/package/rc-accordion)

## Usage

```js
var Accordion = require('rc-accordion');
var React = require('react');
var items = [
  { header: 'hello', content: <p>text</p> }
];
React.render(<Accordion items={items} />, container);
```

## Test Case

http://localhost:8000/tests/runner.html?coverage

## Coverage

http://localhost:8000/node_modules/rc-server/node_modules/node-jscover/lib/front-end/jscoverage.html?w=http://localhost:8000/tests/runner.html?coverage

## License

rc-accordion is released under the MIT license.
