import React, { Fragment } from 'react';
import type { ReactWrapper } from 'enzyme';
import { mount } from 'enzyme';

import KeyCode from 'rc-util/lib/KeyCode';

import Collapse, { Panel } from '../src/index';

describe('collapse', () => {
  let changeHook: jest.Mock<any, any>;

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    changeHook = null;
  });

  function onChange(...args: any[]) {
    if (changeHook) {
      // eslint-disable-next-line @typescript-eslint/no-invalid-this
      changeHook.apply(this, args);
    }
  }

  function runNormalTest(element: any) {
    let collapse: ReactWrapper;

    beforeEach(() => {
      collapse = mount(element);
    });

    afterEach(() => {
      collapse.unmount();
    });

    it('add className', () => {
      const expectedClassName = 'rc-collapse-item important';
      expect(collapse.find('.rc-collapse-item').at(2).getDOMNode().className).toBe(
        expectedClassName,
      );
    });

    it('create works', () => {
      expect(collapse.find('.rc-collapse').length).toBe(1);
    });

    it('header works', () => {
      expect(collapse.find('.rc-collapse-header').length).toBe(3);
    });

    it('panel works', () => {
      expect(collapse.find('.rc-collapse-item').length).toBe(3);
      expect(collapse.find('.rc-collapse-content').length).toBe(0);
    });

    it('should render custom arrow icon corrctly', () => {
      expect(collapse.find('.rc-collapse-header').at(0).getDOMNode().textContent).toContain(
        'test>',
      );
    });

    it('default active works', () => {
      expect(collapse.find('.rc-collapse-item-active').length).toBe(0);
    });

    it('extra works', () => {
      const extraNodes = collapse.find('.rc-collapse-extra');
      expect(extraNodes.length).toBe(1);
      expect(extraNodes.at(0).getDOMNode().innerHTML).toBe('<span>ExtraSpan</span>');
    });

    it('onChange works', () => {
      changeHook = jest.fn();
      collapse.find('.rc-collapse-header').at(1).simulate('click');
      expect(changeHook.mock.calls[0][0]).toEqual(['2']);
    });

    it('click should toggle panel state', () => {
      const header = collapse.find('.rc-collapse-header').at(1);
      header.simulate('click');
      jest.runAllTimers();
      collapse.update();
      expect(collapse.find('.rc-collapse-content-active').length).toBe(1);
      header.simulate('click');
      jest.runAllTimers();
      collapse.update();
      expect(collapse.find('.rc-collapse-content-inactive').at(0).getDOMNode().innerHTML).toBe(
        '<div class="rc-collapse-content-box">second</div>',
      );
      expect(collapse.find('.rc-collapse-content-active').length).toBe(0);
    });

    it('click should not toggle disabled panel state', () => {
      const header = collapse.find('.rc-collapse-header').at(0);
      header.simulate('click');
      jest.runAllTimers();
      collapse.update();
      expect(collapse.find('.rc-collapse-content-active').length).toBe(0);
    });

    it('should not have role', () => {
      const item = collapse.find('.rc-collapse').at(0);
      expect(item.getDOMNode().getAttribute('role')).toBe(null);
    });

    it('should set button role on panel title', () => {
      const item = collapse.find('.rc-collapse-header').at(0);
      expect(item.getDOMNode().getAttribute('role')).toBe('button');
    });
  }

  describe('collapse', () => {
    const expandIcon = () => <span>test{'>'}</span>;

    const element = (
      <Collapse onChange={onChange} expandIcon={expandIcon}>
        <Panel header="collapse 1" key="1" collapsible="disabled">
          first
        </Panel>
        <Panel header="collapse 2" key="2" extra={<span>ExtraSpan</span>}>
          second
        </Panel>
        <Panel header="collapse 3" key="3" className="important">
          third
        </Panel>
      </Collapse>
    );

    runNormalTest(element);

    it('controlled', () => {
      class ControlledCollapse extends React.Component {
        state: {
          activeKey: string[];
        } = {
          activeKey: ['2'],
        };

        componentDidMount(): void {
          this.setState({
            activeKey: ['2'],
          });
        }

        onChange = (val: string[]) => {
          this.setState({
            activeKey: val,
          });
        };

        render() {
          const { activeKey } = this.state;
          return (
            <Collapse onChange={this.onChange} activeKey={activeKey}>
              <Panel header="collapse 1" key="1">
                first
              </Panel>
              <Panel header="collapse 2" key="2">
                second
              </Panel>
              <Panel header="collapse 3" key="3">
                third
              </Panel>
            </Collapse>
          );
        }
      }

      const collapse = mount(<ControlledCollapse />);

      expect(collapse.find(Collapse).state('activeKey')).toEqual(['2']);
      expect(collapse.find('.rc-collapse-content-active').length).toBe(1);
      const header = collapse.find('.rc-collapse-header').at(0);
      header.simulate('click');
      jest.runAllTimers();
      collapse.update();
      expect(collapse.state('activeKey')).toEqual(['2', '1']);
      expect(collapse.find('.rc-collapse-content-active').length).toBe(2);
    });
  });

  describe('it should support number key', () => {
    const expandIcon = () => <span>test{'>'}</span>;
    const element = (
      <Collapse onChange={onChange} expandIcon={expandIcon}>
        <Panel header="collapse 1" key={1} collapsible="disabled">
          first
        </Panel>
        <Panel header="collapse 2" key={2} extra={<span>ExtraSpan</span>}>
          second
        </Panel>
        <Panel header="collapse 3" key={3} className="important">
          third
        </Panel>
      </Collapse>
    );

    runNormalTest(element);
  });

  describe('it shoule support extra whit number 0', () => {
    const collapse = mount(
      <Collapse onChange={onChange} activeKey={0}>
        <Panel header="collapse 0" key={0} extra={0}>
          zero
        </Panel>
      </Collapse>,
    );

    const extraNodes = collapse.find('.rc-collapse-extra');
    expect(extraNodes.length).toBe(1);
    expect(extraNodes.at(0).getDOMNode().innerHTML).toBe('0');
  });

  describe('it should support activeKey number 0', () => {
    const collapse = mount(
      <Collapse onChange={onChange} activeKey={0}>
        <Panel header="collapse 0" key={0}>
          zero
        </Panel>
        <Panel header="collapse 1" key={1}>
          first
        </Panel>
        <Panel header="collapse 2" key={2}>
          second
        </Panel>
      </Collapse>,
    );

    it('activeKey number 0, should open one item', () => {
      expect(collapse.find('.rc-collapse-content-active').length).toBe(1);
    });
  });

  describe('destroyInactivePanel', () => {
    const collapse = mount(
      <Collapse onChange={onChange} destroyInactivePanel>
        <Panel header="collapse 1" key="1">
          first
        </Panel>
        <Panel header="collapse 2" key="2">
          second
        </Panel>
        <Panel header="collapse 3" key="3" className="important">
          third
        </Panel>
      </Collapse>,
    );

    it('click should toggle panel state', () => {
      const header = collapse.find('.rc-collapse-header').at(1);
      header.simulate('click');
      expect(collapse.find('.rc-collapse-content-active').length).toBe(1);
      header.simulate('click');
      expect(collapse.find('.rc-collapse-content-inactive').exists()).toBeFalsy();
    });
  });

  describe('accordion', () => {
    let collapse: ReactWrapper;
    beforeEach(() => {
      collapse = mount(
        <Collapse onChange={onChange} accordion>
          <Panel header="collapse 1" key="1">
            first
          </Panel>
          <Panel header="collapse 2" key="2">
            second
          </Panel>
          <Panel header="collapse 3" key="3">
            third
          </Panel>
        </Collapse>,
      );
    });

    it('accordion content, should default open zero item', () => {
      expect(collapse.find('.rc-collapse-content-active').length).toBe(0);
    });

    it('accordion item, should default open zero item', () => {
      expect(collapse.find('.rc-collapse-item-active').length).toBe(0);
    });

    it('should toggle show on panel', () => {
      let header = collapse.find('.rc-collapse-header').at(1);
      header.simulate('click');
      jest.runAllTimers();
      collapse.update();
      expect(collapse.find('.rc-collapse-content-active').length).toBe(1);
      expect(collapse.find('.rc-collapse-item-active').length).toBe(1);
      header = collapse.find('.rc-collapse-header').at(1);
      header.simulate('click');
      jest.runAllTimers();
      collapse.update();
      expect(collapse.find('.rc-collapse-content-active').exists()).toBeFalsy();
      expect(collapse.find('.rc-collapse-item-active').exists()).toBeFalsy();
    });

    it('should only show on panel', () => {
      let header = collapse.find('.rc-collapse-header').at(1);
      header.simulate('click');
      jest.runAllTimers();
      collapse.update();
      expect(collapse.find('.rc-collapse-content-active').length).toBe(1);
      expect(collapse.find('.rc-collapse-item-active').length).toBe(1);
      header = collapse.find('.rc-collapse-header').at(2);
      header.simulate('click');
      jest.runAllTimers();
      collapse.update();
      expect(collapse.find('.rc-collapse-content-active').length).toBe(1);
      expect(collapse.find('.rc-collapse-item-active').length).toBe(1);
    });

    it('should add tab role on panel title', () => {
      const item = collapse.find('.rc-collapse-header').at(0);
      expect(item.getDOMNode().getAttribute('role')).toBe('tab');
    });

    it('should add tablist role on accordion', () => {
      const item = collapse.find('.rc-collapse').at(0);
      expect(item.getDOMNode().getAttribute('role')).toBe('tablist');
    });

    it('should add tablist role on PanelContent', () => {
      const header = collapse.find('.rc-collapse-header').at(0);
      header.simulate('click');
      const item = collapse.find('.rc-collapse-content').at(0);
      expect(item.getDOMNode().getAttribute('role')).toBe('tabpanel');
    });
  });

  describe('forceRender', () => {
    let collapse: ReactWrapper;

    const renderCollapse = (element: any) => {
      collapse = mount(element);
    };

    it('when forceRender is not supplied it should lazy render the panel content', () => {
      renderCollapse(
        <Collapse>
          <Panel header="collapse 1" key="1" collapsible="disabled">
            first
          </Panel>
          <Panel header="collapse 2" key="2">
            second
          </Panel>
        </Collapse>,
      );
      expect(collapse.find('.rc-collapse-content').length).toBe(0);
    });

    it('when forceRender is FALSE it should lazy render the panel content', () => {
      renderCollapse(
        <Collapse>
          <Panel header="collapse 1" key="1" forceRender={false} collapsible="disabled">
            first
          </Panel>
          <Panel header="collapse 2" key="2">
            second
          </Panel>
        </Collapse>,
      );
      expect(collapse.find('.rc-collapse-content').length).toBe(0);
    });

    it('when forceRender is TRUE then it should render all the panel content to the DOM', () => {
      renderCollapse(
        <Collapse>
          <Panel header="collapse 1" key="1" forceRender collapsible="disabled">
            first
          </Panel>
          <Panel header="collapse 2" key="2">
            second
          </Panel>
        </Collapse>,
      );

      jest.runAllTimers();
      collapse.update();

      expect(collapse.find('.rc-collapse-content').length).toBe(1);
      expect(collapse.find('.rc-collapse-content-active').length).toBe(0);
      expect(collapse.find('div.rc-collapse-content-inactive').props().style).toEqual({
        display: 'none',
      });
    });
  });

  describe('keyboard support', () => {
    let collapse: ReactWrapper;

    const renderCollapse = (element: any) => {
      collapse = mount(element);
    };

    it('should toggle panel when press enter', () => {
      renderCollapse(
        <Collapse>
          <Panel header="collapse 1" key="1">
            first
          </Panel>
          <Panel header="collapse 2" key="2">
            second
          </Panel>
          <Panel header="collapse 3" key="3" collapsible="disabled">
            second
          </Panel>
        </Collapse>,
      );
      collapse.find('.rc-collapse-header').at(2).simulate('keyPress', {
        keyCode: KeyCode.ENTER,
      });
      jest.runAllTimers();
      collapse.update();
      expect(collapse.find('.rc-collapse-content-active').length).toBe(0);
      collapse.find('.rc-collapse-header').at(0).simulate('keyPress', {
        keyCode: KeyCode.ENTER,
      });
      jest.runAllTimers();
      collapse.update();
      expect(collapse.find('.rc-collapse-content-active').length).toBe(1);
      expect(
        collapse.find('.rc-collapse-content').at(0).hasClass('rc-collapse-content-active'),
      ).toBeTruthy();
      collapse.find('.rc-collapse-header').at(0).simulate('keyPress', {
        keyCode: KeyCode.ENTER,
      });
      jest.runAllTimers();
      collapse.update();
      expect(collapse.find('.rc-collapse-content-active').length).toBe(0);
      expect(
        collapse.find('.rc-collapse-content').at(0).hasClass('rc-collapse-content-active'),
      ).toBeFalsy();
    });
  });

  describe('wrapped in Fragment', () => {
    const expandIcon = () => <span>test{'>'}</span>;
    const element = (
      <Collapse onChange={onChange} expandIcon={expandIcon}>
        <Fragment>
          <Panel header="collapse 1" key="1" collapsible="disabled">
            first
          </Panel>
          <Panel header="collapse 2" key="2" extra={<span>ExtraSpan</span>}>
            second
          </Panel>
          <Fragment>
            <Panel header="collapse 3" key="3" className="important">
              third
            </Panel>
          </Fragment>
        </Fragment>
      </Collapse>
    );

    runNormalTest(element);
  });

  it('should support return null icon', () => {
    const wrapper = mount(
      <Collapse expandIcon={() => null}>
        <Panel header="title" key="1">
          first
        </Panel>
      </Collapse>,
    );
    expect(wrapper.find('.rc-collapse-header').at(0).getDOMNode().childNodes.length).toBe(1);
  });

  it('should support custom child', () => {
    const collapse = mount(
      <Collapse>
        <Panel header="collapse 1" key="1">
          first
        </Panel>
        <a className="custom-child">custom-child</a>
      </Collapse>,
    );
    expect(collapse.find('.custom-child').getDOMNode().innerHTML).toBe('custom-child');
  });

  // https://github.com/ant-design/ant-design/issues/36327
  // https://github.com/ant-design/ant-design/issues/6179
  // https://github.com/react-component/collapse/issues/73#issuecomment-323626120
  it('should support custom component', () => {
    const PanelElement = (props) => (
      <Panel header="collapse 1" {...props}>
        <p>test</p>
      </Panel>
    );
    const collapse = mount(
      <Collapse defaultActiveKey="1">
        <PanelElement key="1" />
        <Panel header="collapse 2" key="2">
          second
        </Panel>
      </Collapse>,
    );
    expect(collapse.find('.rc-collapse-content-active').length).toBe(1);
    expect(collapse.find('.rc-collapse-content').hasClass('rc-collapse-content-active')).toBe(true);
    expect(collapse.find('.rc-collapse-header').at(0).text()).toBe('collapse 1');
    expect(collapse.find('.rc-collapse-header').at(0).find('.arrow').length).toBe(1);
    collapse.find('.rc-collapse-header').at(0).simulate('click');
    expect(collapse.find('.rc-collapse-content-active').length).toBe(0);
    expect(collapse.find('.rc-collapse-content').hasClass('rc-collapse-content-inactive')).toBe(
      true,
    );
  });

  describe('collapsible', () => {
    it('default', () => {
      const collapse = mount(
        <Collapse>
          <Panel header="collapse 1" key="1">
            first
          </Panel>
        </Collapse>,
      );
      expect(collapse.find('.rc-collapse-header-text').exists()).toBeTruthy();
      collapse.find('.rc-collapse-header').simulate('click');
      expect(collapse.find('.rc-collapse-item-active').length).toBe(1);
    });
    it('should work when value is header', () => {
      const collapse = mount(
        <Collapse collapsible="header">
          <Panel header="collapse 1" key="1">
            first
          </Panel>
        </Collapse>,
      );
      expect(collapse.find('.rc-collapse-header-text').exists()).toBeTruthy();
      collapse.find('.rc-collapse-header').simulate('click');
      expect(collapse.find('.rc-collapse-item-active').length).toBe(0);
      collapse.find('.rc-collapse-header-text').simulate('click');
      expect(collapse.find('.rc-collapse-item-active').length).toBe(1);
    });

    it('should disabled when value is disabled', () => {
      const collapse = mount(
        <Collapse collapsible="disabled">
          <Panel header="collapse 1" key="1">
            first
          </Panel>
        </Collapse>,
      );
      expect(collapse.find('.rc-collapse-header-text').exists()).toBeTruthy();

      expect(collapse.find('.rc-collapse-item-disabled').length).toBe(1);

      collapse.find('.rc-collapse-header').simulate('click');
      expect(collapse.find('.rc-collapse-item-active').length).toBe(0);
    });

    it('the value of panel should be read first', () => {
      const collapse = mount(
        <Collapse collapsible="header">
          <Panel collapsible="disabled" header="collapse 1" key="1">
            first
          </Panel>
        </Collapse>,
      );
      expect(collapse.find('.rc-collapse-header-text').exists()).toBeTruthy();

      expect(collapse.find('.rc-collapse-item-disabled').length).toBe(1);

      collapse.find('.rc-collapse-header').simulate('click');
      expect(collapse.find('.rc-collapse-item-active').length).toBe(0);
    });

    it('icon trigger when collapsible equal header', () => {
      const collapse = mount(
        <Collapse collapsible="header">
          <Panel header="collapse 1" key="1">
            first
          </Panel>
        </Collapse>,
      );

      collapse.find('.rc-collapse-header .arrow').simulate('click');
      expect(collapse.find('.rc-collapse-item-active').length).toBe(1);
    });
  });

  it('!showArrow', () => {
    const wrapper = mount(
      <Collapse>
        <Panel header="collapse 1" key="1" showArrow={false}>
          first
        </Panel>
      </Collapse>,
    );

    expect(wrapper.exists('.rc-collapse-expand-icon')).toBeFalsy();
  });

  it('Panel container dom can set event handler', () => {
    const clickHandler = jest.fn();
    const wrapper = mount(
      <Collapse defaultActiveKey="1">
        <Panel header="collapse 1" key="1" onClick={clickHandler}>
          <div className="target">Click this</div>
        </Panel>
      </Collapse>,
    );

    wrapper.find('.target').simulate('click');
    expect(clickHandler).toHaveBeenCalled();
  });
  
  describe('customHeader', () => {
    const customHeaderRender = ({ header, isActive, extra }) => {
      return (
        <div style={{ display: 'flex' }}>
          <div>
            {header}
            <span style={{ marginLeft: 10 }}>{isActive ? '收起' : '展开'}</span>
          </div>
          <div style={{ marginLeft: 20 }}>{extra}</div>
        </div>
      );
    };

    let collapse: ReactWrapper;
    beforeEach(() => {
      collapse = mount(
        <Collapse onChange={onChange} headerRender={customHeaderRender}>
          <Panel header="collapse 1" key="1" collapsible="disabled">
            first
          </Panel>
          <Panel header="collapse 2" key="2" extra={<span>ExtraSpan</span>}>
            second
          </Panel>
          <Panel header="collapse 3" key="3" className="important">
            third
          </Panel>
        </Collapse>,
      );
    });

    it('should toggle show on panel', () => {
      let header = collapse.find('.rc-collapse-header').at(1);
      header.simulate('click');
      jest.runAllTimers();
      collapse.update();
      expect(collapse.find('.rc-collapse-content-active').length).toBe(1);
      expect(collapse.find('.rc-collapse-item-active').length).toBe(1);
      header = collapse.find('.rc-collapse-header').at(1);
      header.simulate('click');
      jest.runAllTimers();
      collapse.update();
      expect(collapse.find('.rc-collapse-content-active').exists()).toBeFalsy();
      expect(collapse.find('.rc-collapse-item-active').exists()).toBeFalsy();
    });
});
