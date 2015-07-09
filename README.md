# rc-accordion
---

rc-accordion ui component for react

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

[npm-image]: http://img.shields.io/npm/v/rc-accordion.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-accordion
[travis-image]: https://img.shields.io/travis/react-component/accordion.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/accordion
[coveralls-image]: https://img.shields.io/coveralls/react-component/accordion.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/accordion?branch=master

## Development

```
npm install
npm start
```

## Example

http://localhost:8000/examples/

online example: http://react-component.github.io/accordion/examples/


## Feature

* support ie8,ie8+,chrome,firefox,safari

## install

[![rc-accordion](https://nodei.co/npm/rc-accordion.png)](https://npmjs.org/package/rc-accordion)

## Usage

```js
var Accordion = require('rc-accordion');
var Panel = Accordion.Panel;
var React = require('react');
var accordion = (
  <Accordion>
    <Panel header="hello">this is panel content</Panel>
    <Panel header="title2">this is panel content2 or other</Panel>
  </Accordion>
);
React.render(accordion, container);
```

## Test Case

http://localhost:8000/tests/runner.html?coverage

## Coverage

http://localhost:8000/node_modules/rc-server/node_modules/node-jscover/lib/front-end/jscoverage.html?w=http://localhost:8000/tests/runner.html?coverage

## License

rc-accordion is released under the MIT license.
