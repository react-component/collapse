// import '../assets/index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

import expect from 'expect.js';
import Collapse, { Panel } from '../index';
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
      const expandIcon = () => <span>test></span>;

      ReactDOM.render(
        <Collapse onChange={onChange} expandIcon={expandIcon}>
          <Panel header="collapse 1" key="1" disabled>first</Panel>
          <Panel header="collapse 2" key="2" extra={<span>ExtraSpan</span>}>second</Panel>
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

    it('should render custom arrow icon corrctly', () => {
      expect(findDOMNode(collapse, 'rc-collapse-header')[0].textContent.includes('test>'));
    });

    it('default active works', () => {
      expect(findDOMNode(collapse, 'rc-collapse-item-active').length).to.be(0);
    });

    it('extra works', () => {
      const extraNodes = findDOMNode(collapse, 'rc-collapse-extra');
      expect(extraNodes.length).to.be(1);
      expect(extraNodes[0].innerHTML).to.equal('<span>ExtraSpan</span>');
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
          expect(findDOMNode(collapse, 'rc-collapse-content-inactive')[0].innerHTML).
            to.eql('<div class="rc-collapse-content-box">second</div>');
          expect(findDOMNode(collapse, 'rc-collapse-content-active').length).to.be(0);
          done();
        }, 500);
      }, 500);
    });

    it('click should not toggle disabled panel state', (done) => {
      const header = findDOMNode(collapse, 'rc-collapse-header')[0];
      Simulate.click(header);
      setTimeout(() => {
        expect(findDOMNode(collapse, 'rc-collapse-content-active').length).to.be(0);
        done();
      }, 500);
    });

    it('should not have role', () => {
      const item = findDOMNode(collapse, 'rc-collapse')[0];
      expect(item.getAttribute('role')).to.eql(null);
    });

    it('should set button role on panel title', () => {
      const item = findDOMNode(collapse, 'rc-collapse-header')[0];
      expect(item.getAttribute('role')).to.eql('button');
    });
  });

  describe('destroyInactivePanel', () => {
    let node;
    let collapse;
    const destroyInactivePanel = true;

    beforeEach((done) => {
      node = document.createElement('div');
      document.body.appendChild(node);

      ReactDOM.render(
        <Collapse onChange={onChange} destroyInactivePanel={destroyInactivePanel}>
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

    it('click should toggle panel state', (done) => {
      const header = findDOMNode(collapse, 'rc-collapse-header')[1];
      Simulate.click(header);
      setTimeout(() => {
        expect(findDOMNode(collapse, 'rc-collapse-content-active').length).to.be(1);
        Simulate.click(header);
        setTimeout(() => {
          expect(findDOMNode(collapse, 'rc-collapse-content-inactive')[0].innerHTML).to.eql('');
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

    it('should add tab role on panel title', () => {
      const item = findDOMNode(collapse, 'rc-collapse-header')[0];
      expect(item.getAttribute('role')).to.eql('tab');
    });

    it('should add tablist role on accordion', () => {
      const item = findDOMNode(collapse, 'rc-collapse')[0];
      expect(item.getAttribute('role')).to.eql('tablist');
    });

    it('should add tablist role on PanelContent', (done) => {
      const header = findDOMNode(collapse, 'rc-collapse-header')[0];
      Simulate.click(header);
      setTimeout(() => {
        const item = findDOMNode(collapse, 'rc-collapse-content')[0];
        expect(item.getAttribute('role')).to.eql('tabpanel');
        done();
      }, 500);
    });
  });

  describe('forceRender', () => {
    let node;
    let collapse;

    beforeEach(() => {
      node = document.createElement('div');
      document.body.appendChild(node);
    });

    const renderCollapse = (element) => {
      ReactDOM.render(element, node, function init() {
        collapse = this;
      });
    };

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(node);
      changeHook = null;
    });

    it('when forceRender is not supplied it should lazy render the panel content', () => {
      renderCollapse(
        <Collapse>
          <Panel header="collapse 1" key="1" disabled>first</Panel>
          <Panel header="collapse 2" key="2">second</Panel>
        </Collapse>
      );
      expect(findDOMNode(collapse, 'rc-collapse-content').length).to.be(0);
    });

    it('when forceRender is FALSE it should lazy render the panel content', () => {
      renderCollapse(
        <Collapse>
          <Panel header="collapse 1" key="1" forceRender={false} disabled>first</Panel>
          <Panel header="collapse 2" key="2">second</Panel>
        </Collapse>
      );
      expect(findDOMNode(collapse, 'rc-collapse-content').length).to.be(0);
    });

    it('when forceRender is TRUE then it should render all the panel content to the DOM', () => {
      renderCollapse(
        <Collapse>
          <Panel header="collapse 1" key="1" forceRender disabled>first</Panel>
          <Panel header="collapse 2" key="2">second</Panel>
        </Collapse>
      );
      expect(findDOMNode(collapse, 'rc-collapse-content').length).to.be(1);
      expect(findDOMNode(collapse, 'rc-collapse-content-active').length).to.be(0);
    });
  });

  describe('keyboard support', () => {
    let node;
    let collapse;

    beforeEach(() => {
      node = document.createElement('div');
      document.body.appendChild(node);
    });

    const renderCollapse = (element) => {
      ReactDOM.render(element, node, function init() {
        collapse = this;
      });
    };

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(node);
      changeHook = null;
    });

    it('should toggle panel when press enter', (done) => {
      renderCollapse(
        <Collapse>
          <Panel header="collapse 1" key="1">first</Panel>
          <Panel header="collapse 2" key="2">second</Panel>
          <Panel header="collapse 3" key="3" disabled>second</Panel>
        </Collapse>
      );
      Simulate.keyPress(findDOMNode(collapse, 'rc-collapse-header')[2], {
        key: 'Enter', keyCode: 13, which: 13,
      });
      expect(findDOMNode(collapse, 'rc-collapse-content-active').length).to.be(0);
      Simulate.keyPress(findDOMNode(collapse, 'rc-collapse-header')[0], {
        key: 'Enter', keyCode: 13, which: 13,
      });
      expect(findDOMNode(collapse, 'rc-collapse-content-active').length).to.be(1);
      expect(findDOMNode(collapse, 'rc-collapse-content')[0].className)
        .to.contain('rc-collapse-content-active');
      Simulate.keyPress(findDOMNode(collapse, 'rc-collapse-header')[0], {
        key: 'Enter', keyCode: 13, which: 13,
      });
      setTimeout(() => {
        expect(findDOMNode(collapse, 'rc-collapse-content-active').length).to.be(0);
        expect(findDOMNode(collapse, 'rc-collapse-content')[0].className)
          .not.to.contain('rc-collapse-content-active');
        done();
      }, 500);
    });
  });
});
