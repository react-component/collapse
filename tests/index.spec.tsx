import React, { Fragment } from 'react';
import { mount, ReactWrapper } from 'enzyme';

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
      expect(
        collapse
          .find('.rc-collapse-item')
          .at(2)
          .getDOMNode().className,
      ).toBe(expectedClassName);
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
      expect(
        collapse
          .find('.rc-collapse-header')
          .at(0)
          .getDOMNode().textContent,
      ).toContain('test>');
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
      collapse
        .find('.rc-collapse-header')
        .at(1)
        .simulate('click');
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
      expect(
        collapse
          .find('.rc-collapse-content-inactive')
          .at(0)
          .getDOMNode().innerHTML,
      ).toBe('<div class="rc-collapse-content-box">second</div>');
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
        <Panel header="collapse 1" key="1" disabled>
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
          openAnimation: object;
        } = {
          activeKey: ['2'],
          openAnimation: undefined,
        };

        constructor(props: any) {
          super(props);
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
          const { activeKey, openAnimation } = this.state;
          return (
            <Collapse onChange={this.onChange} activeKey={activeKey} openAnimation={openAnimation}>
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
      expect(collapse.find(Collapse).state('openAnimation')).toEqual(undefined);
      const header = collapse.find('.rc-collapse-header').at(0);
      header.simulate('click');
      jest.runAllTimers();
      collapse.update();
      expect(collapse.state('activeKey')).toEqual(['2', '1']);
      expect(collapse.find('.rc-collapse-content-active').length).toBe(2);

      const customOpenAnimation = {
        transitionName: 'customOpenAnimation',
      };
      collapse.setState({
        openAnimation: customOpenAnimation,
      });
      jest.runAllTimers();
      expect(collapse.find(Collapse).state('openAnimation')).toEqual(customOpenAnimation);
    });
  });

  describe('it should support number key', () => {
    const expandIcon = () => <span>test{'>'}</span>;
    const element = (
      <Collapse onChange={onChange} expandIcon={expandIcon}>
        <Panel header="collapse 1" key={1} disabled>
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
          <Panel header="collapse 1" key="1" disabled>
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
          <Panel header="collapse 1" key="1" forceRender={false} disabled>
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
          <Panel header="collapse 1" key="1" forceRender disabled>
            first
          </Panel>
          <Panel header="collapse 2" key="2">
            second
          </Panel>
        </Collapse>,
      );
      expect(collapse.find('.rc-collapse-content').length).toBe(1);
      expect(collapse.find('.rc-collapse-content-active').length).toBe(0);
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
          <Panel header="collapse 3" key="3" disabled>
            second
          </Panel>
        </Collapse>,
      );
      collapse
        .find('.rc-collapse-header')
        .at(2)
        .simulate('keyPress', {
          keyCode: KeyCode.ENTER,
        });
      jest.runAllTimers();
      collapse.update();
      expect(collapse.find('.rc-collapse-content-active').length).toBe(0);
      collapse
        .find('.rc-collapse-header')
        .at(0)
        .simulate('keyPress', {
          keyCode: KeyCode.ENTER,
        });
      jest.runAllTimers();
      collapse.update();
      expect(collapse.find('.rc-collapse-content-active').length).toBe(1);
      expect(
        collapse
          .find('.rc-collapse-content')
          .at(0)
          .hasClass('rc-collapse-content-active'),
      ).toBeTruthy();
      collapse
        .find('.rc-collapse-header')
        .at(0)
        .simulate('keyPress', {
          keyCode: KeyCode.ENTER,
        });
      jest.runAllTimers();
      collapse.update();
      expect(collapse.find('.rc-collapse-content-active').length).toBe(0);
      expect(
        collapse
          .find('.rc-collapse-content')
          .at(0)
          .hasClass('rc-collapse-content-active'),
      ).toBeFalsy();
    });
  });

  describe('wrapped in Fragment', () => {
    const expandIcon = () => <span>test{'>'}</span>;
    const element = (
      <Collapse onChange={onChange} expandIcon={expandIcon}>
        <Fragment>
          <Panel header="collapse 1" key="1" disabled>
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
    expect(
      wrapper
        .find('.rc-collapse-header')
        .at(0)
        .getDOMNode().childNodes.length,
    ).toBe(1);
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

  describe('headerCollapsableOnly', () => {
    it('default', () => {
      const collapse = mount(
        <Collapse>
          <Panel header="collapse 1" key="1">
            first
          </Panel>
        </Collapse>,
      );
      expect(collapse.find('.rc-collapse-header-text').exists()).toBeFalsy();
    });
    it('should work', () => {
      const collapse = mount(
        <Collapse headerCollapsableOnly>
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
  });
});
