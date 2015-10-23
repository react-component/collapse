# rc-collapse
---

rc-collapse ui component for react

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![npm download][download-image]][download-url]
[![Sauce Test Status](https://saucelabs.com/buildstatus/rc-collapse)](https://saucelabs.com/u/rc-collapse)
[![Sauce Test Status](https://saucelabs.com/browser-matrix/rc-collapse.svg)](https://saucelabs.com/u/rc-collapse)

[npm-image]: http://img.shields.io/npm/v/rc-collapse.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-collapse
[travis-image]: https://img.shields.io/travis/react-component/collapse.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/collapse
[coveralls-image]: https://img.shields.io/coveralls/react-component/collapse.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/collapse?branch=master
[download-image]: https://img.shields.io/npm/dm/rc-collapse.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-collapse

## Development

```
npm install
npm start
```

## Example

http://localhost:8000/examples/

online example: http://react-component.github.io/collapse/


## Feature

* support ie8,ie8+,chrome,firefox,safari

## install

[![rc-collapse](https://nodei.co/npm/rc-collapse.png)](https://npmjs.org/package/rc-collapse)

## Usage

```js
var Collapse = require('rc-collapse');
var Panel = Collapse.Panel;
var React = require('react');
var ReactDOM = require('react-dom');
var collapse = (
  <Collapse accordion={true}>
    <Panel header="hello">this is panel content</Panel>
    <Panel header="title2">this is panel content2 or other</Panel>
  </Collapse>
);
ReactDOM.render(collapse, container);
```

## API

### Collapse

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
          <td>Array<String>|String</td>
          <th>The first panel key</th>
          <td>current active Panel key</td>
      </tr>
      <tr>
          <td>defaultActiveKey</td>
          <td>Array<String>|String</td>
          <th>null</th>
          <td>default active key</td>
      </tr>
      <tr>
          <td>accordion</td>
          <td>Boolean</td>
          <th>false</th>
          <td>accordion mode, default is null, is collapse mode</td>
      </tr>
      <tr>
          <td>onChange</td>
          <td>Function(key)</td>
          <th>noop</th>
          <td>called when collapse Panel is changed</td>
      </tr>
    </tbody>
</table>

If accordion is null or false, every panel open, will not close other panel.
`activekey` should be an array. string will work fine, activekey will be an
array, and the only item is the activeKey string provided;

If accordion is true, only on panel can be active.
`activekey` should be an string, but array is support too, just use the first
item.

### Collapse.Panel

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

rc-collapse is released under the MIT license.
