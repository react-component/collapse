'use strict';

var expect = require('expect.js');
var Collapse = require('../index');
var Panel = Collapse.Panel;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Simulate = TestUtils.Simulate;
var findDOMNode = TestUtils.scryRenderedDOMComponentsWithClass;

describe('collapse', function() {
  var changeHook;

  function onChange() {
    if (changeHook) {
      changeHook.apply(this, arguments);
    }
  }

  describe('collapse', function() {

    var node;
    var collapse;

    beforeEach(function(done) {
      node = document.createElement('div');
      document.body.appendChild(node);

      React.render(<Collapse onChange={onChange}>
        <Panel header="collapse 1" key="1">first</Panel>
        <Panel header="collapse 2" key="2">second</Panel>
        <Panel header="collapse 3" key="3">third</Panel>
      </Collapse>, node, function() {
        collapse = this;
        done();
      });
    });

    afterEach(function() {
      React.unmountComponentAtNode(node);
      changeHook = null;
    });

    it('create works', function() {
      expect(findDOMNode(collapse, 'rc-collapse').length).to.be(1);
    });

    it('panel works', function() {
      expect(findDOMNode(collapse, 'rc-collapse-item').length).to.be(3);
      expect(findDOMNode(collapse, 'rc-collapse-header').length).to.be(3);
      expect(findDOMNode(collapse, 'rc-collapse-content').length).to.be(3);
    });

    it('default active works', function() {
      expect(findDOMNode(collapse, 'rc-collapse-item-active').length).to.be(0);
    });

    it('onChange works', function(done) {
      changeHook = function(d) {
        expect(d).to.be('2');
        done();
      };
      var header = findDOMNode(collapse, 'rc-collapse-header')[1];
      Simulate.click(header);
    });

    it('click should toggle panel state', function(done) {
      var header = findDOMNode(collapse, 'rc-collapse-header')[1];
      Simulate.click(header);
      setTimeout(function() {
        expect(findDOMNode(collapse, 'rc-collapse-item-active').length).to.be(1);
        Simulate.click(header);
        setTimeout(function() {
          expect(findDOMNode(collapse, 'rc-collapse-item-active').length).to.be(0);
          done();
        }, 30)
      }, 30);
    });


  });

  describe('accordion', function() {
    var node;
    var collapse;
    beforeEach(function(done) {
      node = document.createElement('div');
      document.body.appendChild(node);

      React.render(<Collapse onChange={onChange} accordion={true} prefixCls="rc-accordion">
        <Panel header="collapse 1" key="1">first</Panel>
        <Panel header="collapse 2" key="2">second</Panel>
        <Panel header="collapse 3" key="3">third</Panel>
      </Collapse>, node, function() {
        collapse = this;
        done();
      });
    });

    afterEach(function() {
      React.unmountComponentAtNode(node);
      changeHook = null;
    });

    it('accordion item, should default open one item', function() {
      expect(findDOMNode(collapse, 'rc-accordion-item-active').length).to.be(1);
    });

    it('should only show on panel', function(done) {
      var header = findDOMNode(collapse, 'rc-accordion-header')[1];
      Simulate.click(header);
      setTimeout(function() {
        expect(findDOMNode(collapse, 'rc-accordion-item-active').length).to.be(1);
        header = findDOMNode(collapse, 'rc-accordion-header')[2];
        Simulate.click(header);

        setTimeout(function() {
          expect(findDOMNode(collapse, 'rc-accordion-item-active').length).to.be(1);
          done();
        }, 20)
      }, 30);
    });
  });
});
