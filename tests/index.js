const jQuery = require('jquery');
window.jQuery = jQuery;
import '../assets/index.less';
const expect = require('expect.js');
const Collapse = require('../index');
const Panel = Collapse.Panel;
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const Simulate = TestUtils.Simulate;
const findDOMNode = TestUtils.scryRenderedDOMComponentsWithClass;

describe('collapse', () => {
  let changeHook;

  function onChange() {
    if (changeHook) {
      changeHook.apply(this, arguments);
    }
  }

  describe('collapse', () => {
    let node;
    let collapse;

    beforeEach((done) => {
      node = document.createElement('div');
      document.body.appendChild(node);

      ReactDOM.render(
        <Collapse onChange={onChange}>
          <Panel header="collapse 1" key="1">first</Panel>
          <Panel header="collapse 2" key="2">second</Panel>
          <Panel header="collapse 3" key="3" className="important">third</Panel>
        </Collapse>, node, function init() {
          collapse = this;
          done();
        });
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(node);
      changeHook = null;
    });
    it('add className', () => {
      const expectedClassName = 'rc-collapse-item important';
      expect(findDOMNode(collapse, 'rc-collapse-item')[2].className).to.be(expectedClassName);
    });

    it('create works', () => {
      expect(findDOMNode(collapse, 'rc-collapse').length).to.be(1);
    });

    it('panel works', () => {
      expect(findDOMNode(collapse, 'rc-collapse-item').length).to.be(3);
      expect(findDOMNode(collapse, 'rc-collapse-content').length).to.be(0);
    });

    it('default active works', () => {
      expect(findDOMNode(collapse, 'rc-collapse-item-active').length).to.be(0);
    });

    it('onChange works', (done) => {
      changeHook = (d) => {
        expect(d).to.eql(['2']);
        done();
      };
      const header = findDOMNode(collapse, 'rc-collapse-header')[1];
      Simulate.click(header);
    });

    it('click should toggle panel state', (done) => {
      const header = findDOMNode(collapse, 'rc-collapse-header')[1];
      Simulate.click(header);
      setTimeout(() => {
        expect(findDOMNode(collapse, 'rc-collapse-content-active').length).to.be(1);
        Simulate.click(header);
        setTimeout(() => {
          expect(findDOMNode(collapse, 'rc-collapse-content-active').length).to.be(0);
          done();
        }, 500);
      }, 500);
    });
  });

  describe('accordion', () => {
    let node;
    let collapse;
    beforeEach((done) => {
      node = document.createElement('div');
      document.body.appendChild(node);

      ReactDOM.render(
        <Collapse onChange={onChange} accordion>
          <Panel header="collapse 1" key="1">first</Panel>
          <Panel header="collapse 2" key="2">second</Panel>
          <Panel header="collapse 3" key="3">third</Panel>
        </Collapse>, node, function init() {
          collapse = this;
          done();
        });
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(node);
      changeHook = null;
    });

    it('accordion item, should default open zero item', () => {
      expect(findDOMNode(collapse, 'rc-collapse-content-active').length).to.be(0);
    });

    it('accordion item, should default open zero item', () => {
      expect(findDOMNode(collapse, 'rc-collapse-item-active').length).to.be(0);
    });

    it('should toggle show on panel', (done) => {
      let header = findDOMNode(collapse, 'rc-collapse-header')[1];
      Simulate.click(header);
      setTimeout(() => {
        expect(findDOMNode(collapse, 'rc-collapse-content-active').length).to.be(1);
        expect(findDOMNode(collapse, 'rc-collapse-item-active').length).to.be(1);
        header = findDOMNode(collapse, 'rc-collapse-header')[1];
        Simulate.click(header);
        setTimeout(() => {
          expect(findDOMNode(collapse, 'rc-collapse-content-active').length).to.be(0);
          expect(findDOMNode(collapse, 'rc-collapse-item-active').length).to.be(0);
          done();
        }, 500);
      }, 500);
    });

    it('should only show on panel', (done) => {
      let header = findDOMNode(collapse, 'rc-collapse-header')[1];
      Simulate.click(header);
      setTimeout(() => {
        expect(findDOMNode(collapse, 'rc-collapse-content-active').length).to.be(1);
        expect(findDOMNode(collapse, 'rc-collapse-item-active').length).to.be(1);
        header = findDOMNode(collapse, 'rc-collapse-header')[2];
        Simulate.click(header);

        setTimeout(() => {
          expect(findDOMNode(collapse, 'rc-collapse-content-active').length).to.be(1);
          expect(findDOMNode(collapse, 'rc-collapse-item-active').length).to.be(1);
          done();
        }, 500);
      }, 500);
    });
  });
});
