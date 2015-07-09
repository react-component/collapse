'use strict';

var expect = require('expect.js');
var Accordion = require('../index');
var Panel = Accordion.Panel;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Simulate = TestUtils.Simulate;
var findDOMNode = TestUtils.scryRenderedDOMComponentsWithClass;

var node = document.createElement('div');
document.body.appendChild(node);

describe('accordion', function() {
  var accordion;
  var changeHook;

  function onChange() {
    if (changeHook) {
      changeHook.apply(this, arguments);
    }
  }

  beforeEach(function(done) {
    React.render(<Accordion onSwitch={onChange}>
      <Panel header="accordion 1" key="1">first</Panel>
      <Panel header="accordion 2" key="2">second</Panel>
      <Panel header="accordion 3" key="3">third</Panel>
    </Accordion>, node, function() {
      accordion = this;
      done();
    });
  });

  afterEach(function() {
    React.unmountComponentAtNode(node);
    changeHook = null;
  });

  it('create works', function() {
    expect(findDOMNode(accordion, 'rc-accordion').length).to.be(1);
  });

  it('panel works', function() {
    expect(findDOMNode(accordion, 'rc-accordion-item').length).to.be(3);
    expect(findDOMNode(accordion, 'rc-accordion-header').length).to.be(3);
    expect(findDOMNode(accordion, 'rc-accordion-content').length).to.be(3);
  });

  it('default active works', function() {
    expect(findDOMNode(accordion, 'rc-accordion-item-active').length).to.be(1);
  });

  it('onSwitch works', function(done) {
    changeHook = function(d) {
      expect(d).to.be('2');
      done();
    };
    var header = findDOMNode(accordion, 'rc-accordion-header')[1];
    Simulate.click(header);
  });

});
