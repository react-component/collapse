# rc-accordion
---

rc-accordion ui component for react

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-accordion.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-accordion
[travis-image]: https://img.shields.io/travis/react-component/accordion.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/accordion
[coveralls-image]: https://img.shields.io/coveralls/react-component/accordion.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/accordion?branch=master
[download-image]: https://img.shields.io/npm/dm/rc-accordion.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-accordion

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

## API

### Accordion

#### props:

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>activeKey</td>
          <td>String</td>
          <th>The first panel key</th>
          <td>current active Panel key</td>
      </tr>
      <tr>
          <td>onSwitch</td>
          <td>Function(key)</td>
          <th>noop</th>
          <td>called when accordion Panel is changed</td>
      </tr>
    </tbody>
</table>

### Accordion.Panel

#### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>header</td>
          <td>String or node</td>
          <th></th>
          <td>header content of Panel</td>
      </tr>
    </tbody>
</table>

#### key

If no key provide, key value will be the panel index.

## Test Case

http://localhost:8000/tests/runner.html?coverage

## Coverage

http://localhost:8000/node_modules/rc-server/node_modules/node-jscover/lib/front-end/jscoverage.html?w=http://localhost:8000/tests/runner.html?coverage

## License

rc-accordion is released under the MIT license.
