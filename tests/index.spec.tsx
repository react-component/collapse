import type { RenderResult } from '@testing-library/react';
import { fireEvent, render } from '@testing-library/react';
import KeyCode from 'rc-util/lib/KeyCode';
import React, { Fragment } from 'react';
import Collapse, { Panel } from '../src/index';
import type { CollapseProps, ItemType } from '../src/interface';

describe('collapse', () => {
  let changeHook: jest.Mock<any, any> | null;

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
    let collapse: RenderResult;

    beforeEach(() => {
      collapse = render(element);
    });

    afterEach(() => {
      collapse.unmount();
    });

    it('add className', () => {
      const expectedClassName = 'rc-collapse-item important';
      expect(collapse.container.querySelectorAll('.rc-collapse-item')?.[2]).toHaveClass(
        expectedClassName,
      );
    });

    it('create works', () => {
      expect(collapse.container.querySelectorAll('.rc-collapse')).toHaveLength(1);
    });

    it('header works', () => {
      expect(collapse.container.querySelectorAll('.rc-collapse-header')).toHaveLength(3);
    });

    it('panel works', () => {
      expect(collapse.container.querySelectorAll('.rc-collapse-item')).toHaveLength(3);
      expect(collapse.container.querySelectorAll('.rc-collapse-content')).toHaveLength(0);
    });

    it('should render custom arrow icon corrctly', () => {
      expect(collapse.container.querySelector('.rc-collapse-header')?.textContent).toContain(
        'test>',
      );
    });

    it('default active works', () => {
      expect(collapse.container.querySelectorAll('.rc-collapse-item-active').length).toBeFalsy();
    });

    it('extra works', () => {
      const extraNodes = collapse.container.querySelectorAll('.rc-collapse-extra');
      expect(extraNodes).toHaveLength(1);
      expect(extraNodes?.[0]?.innerHTML).toBe('<span>ExtraSpan</span>');
    });

    it('onChange works', () => {
      changeHook = jest.fn();
      const header = collapse.container.querySelectorAll('.rc-collapse-header')?.[1];
      fireEvent.click(header);
      expect(changeHook.mock.calls[0][0]).toEqual(['2']);
    });

    it('click should toggle panel state', () => {
      const header = collapse.container.querySelectorAll('.rc-collapse-header')?.[1];
      fireEvent.click(header);
      jest.runAllTimers();
      expect(collapse.container.querySelectorAll('.rc-collapse-content-active')).toHaveLength(1);
      fireEvent.click(header);
      jest.runAllTimers();
      expect(collapse.container.querySelector('.rc-collapse-content-inactive')?.innerHTML).toBe(
        '<div class="rc-collapse-content-box">second</div>',
      );
      expect(collapse.container.querySelectorAll('.rc-collapse-content-active').length).toBeFalsy();
    });

    it('click should not toggle disabled panel state', () => {
      const header = collapse.container.querySelector('.rc-collapse-header');
      expect(header).toBeTruthy();
      fireEvent.click(header!);
      jest.runAllTimers();
      expect(collapse.container.querySelectorAll('.rc-collapse-content-active').length).toBeFalsy();
    });

    it('should not have role', () => {
      const item = collapse.container.querySelector('.rc-collapse');
      expect(item).toBeTruthy();
      expect(item!.getAttribute('role')).toBe(null);
    });

    it('should set button role on panel title', () => {
      const item = collapse.container.querySelector('.rc-collapse-header');
      expect(item).toBeTruthy();
      expect(item!.getAttribute('role')).toBe('button');
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
      const onChangeSpy = jest.fn();

      const ControlledCollapse = () => {
        const [activeKey, updateActiveKey] = React.useState<React.Key[] | React.Key>(['2']);

        const handleChange: CollapseProps['onChange'] = (key) => {
          updateActiveKey(key);
          onChangeSpy(key);
        };

        return (
          <Collapse onChange={handleChange} activeKey={activeKey}>
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
      };

      const { container } = render(<ControlledCollapse />);

      expect(container.querySelectorAll('.rc-collapse-content-active')).toHaveLength(1);
      const header = container.querySelector('.rc-collapse-header');
      expect(header).toBeTruthy();
      fireEvent.click(header!);
      jest.runAllTimers();
      expect(container.querySelectorAll('.rc-collapse-content-active')).toHaveLength(2);
      expect(onChangeSpy).toBeCalledWith(['2', '1']);
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

  describe('prop: headerClass', () => {
    it('applies the passed headerClass to the header', () => {

      const element = (
        <Collapse onChange={onChange} >
          <Panel header="collapse 1" key="1" headerClass='custom-class'>
            first
          </Panel>
        </Collapse>
      );

      const {container} = render(element)
      const header = container.querySelector('.rc-collapse-header');

      expect(header.classList.contains('custom-class')).toBeTruthy();
    })
  })

  it('shoule support extra whit number 0', () => {
    const { container } = render(
      <Collapse onChange={onChange} activeKey={0}>
        <Panel header="collapse 0" key={0} extra={0}>
          zero
        </Panel>
      </Collapse>,
    );

    const extraNodes = container.querySelectorAll('.rc-collapse-extra');
    expect(extraNodes).toHaveLength(1);
    expect(extraNodes[0].innerHTML).toBe('0');
  });

  it('should support activeKey number 0', () => {
    const { container } = render(
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

    // activeKey number 0, should open one item
    expect(container.querySelectorAll('.rc-collapse-content-active')).toHaveLength(1);
  });

  it('click should toggle panel state', () => {
    const { container } = render(
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

    const header = container.querySelectorAll('.rc-collapse-header')?.[1];
    fireEvent.click(header);
    expect(container.querySelectorAll('.rc-collapse-content-active')).toHaveLength(1);
    fireEvent.click(header);
    expect(container.querySelectorAll('.rc-collapse-content-inactive').length).toBeFalsy();
  });

  function runAccordionTest(element: React.ReactElement) {
    let collapse: RenderResult;

    beforeEach(() => {
      collapse = render(element);
    });

    afterEach(() => {
      collapse.unmount();
    });

    it('accordion content, should default open zero item', () => {
      expect(collapse.container.querySelectorAll('.rc-collapse-content-active')).toHaveLength(0);
    });

    it('accordion item, should default open zero item', () => {
      expect(collapse.container.querySelectorAll('.rc-collapse-item-active')).toHaveLength(0);
    });

    it('should toggle show on panel', () => {
      let header = collapse.container.querySelectorAll('.rc-collapse-header')?.[1];
      fireEvent.click(header);
      jest.runAllTimers();
      expect(collapse.container.querySelectorAll('.rc-collapse-content-active')).toHaveLength(1);
      expect(collapse.container.querySelectorAll('.rc-collapse-item-active')).toHaveLength(1);
      header = collapse.container.querySelectorAll('.rc-collapse-header')?.[1];
      fireEvent.click(header);
      jest.runAllTimers();
      expect(collapse.container.querySelectorAll('.rc-collapse-content-active')).toHaveLength(0);
      expect(collapse.container.querySelectorAll('.rc-collapse-item-active')).toHaveLength(0);
    });

    it('should only show on panel', () => {
      let header = collapse.container.querySelector('.rc-collapse-header');
      expect(header).toBeTruthy();
      fireEvent.click(header!);
      jest.runAllTimers();
      expect(collapse.container.querySelectorAll('.rc-collapse-content-active')).toHaveLength(1);
      expect(collapse.container.querySelectorAll('.rc-collapse-item-active')).toHaveLength(1);
      header = collapse.container.querySelectorAll('.rc-collapse-header')?.[2];
      fireEvent.click(header);
      jest.runAllTimers();
      expect(collapse.container.querySelectorAll('.rc-collapse-content-active')).toHaveLength(1);
      expect(collapse.container.querySelectorAll('.rc-collapse-item-active')).toHaveLength(1);
    });

    it('should add tab role on panel title', () => {
      const item = collapse.container.querySelector('.rc-collapse-header');
      expect(item).toBeTruthy();
      expect(item!.getAttribute('role')).toBe('tab');
    });

    it('should add tablist role on accordion', () => {
      const item = collapse.container.querySelector('.rc-collapse');
      expect(item).toBeTruthy();
      expect(item!.getAttribute('role')).toBe('tablist');
    });

    it('should add tablist role on PanelContent', () => {
      const header = collapse.container.querySelector('.rc-collapse-header');
      expect(header).toBeTruthy();
      fireEvent.click(header!);
      const item = collapse.container.querySelector('.rc-collapse-content');
      expect(item).toBeTruthy();
      expect(item!.getAttribute('role')).toBe('tabpanel');
    });
  }

  describe('prop: accordion', () => {
    runAccordionTest(
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

  describe('forceRender', () => {
    it('when forceRender is not supplied it should lazy render the panel content', () => {
      const { container } = render(
        <Collapse>
          <Panel header="collapse 1" key="1" collapsible="disabled">
            first
          </Panel>
          <Panel header="collapse 2" key="2">
            second
          </Panel>
        </Collapse>,
      );
      expect(container.querySelectorAll('.rc-collapse-content')).toHaveLength(0);
    });

    it('when forceRender is FALSE it should lazy render the panel content', () => {
      const { container } = render(
        <Collapse>
          <Panel header="collapse 1" key="1" forceRender={false} collapsible="disabled">
            first
          </Panel>
          <Panel header="collapse 2" key="2">
            second
          </Panel>
        </Collapse>,
      );
      expect(container.querySelectorAll('.rc-collapse-content')).toHaveLength(0);
    });

    it('when forceRender is TRUE then it should render all the panel content to the DOM', () => {
      const { container } = render(
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

      expect(container.querySelectorAll('.rc-collapse-content')).toHaveLength(1);
      expect(container.querySelectorAll('.rc-collapse-content-active')).toHaveLength(0);
      const inactiveDom = container.querySelector('div.rc-collapse-content-inactive');
      expect(inactiveDom).not.toBeFalsy();
      expect(getComputedStyle(inactiveDom!)).toHaveProperty('display', 'none');
    });
  });

  it('should toggle panel when press enter', () => {
    const myKeyEvent = {
      key: 'Enter',
      keyCode: KeyCode.ENTER,
      which: KeyCode.ENTER,
      // https://github.com/testing-library/react-testing-library/issues/269#issuecomment-455854112
      charCode: KeyCode.ENTER,
    };

    const { container } = render(
      <Collapse>
        <Panel header="collapse 1" key="1">
          first
        </Panel>
        <Panel header="collapse 2" key="2">
          second
        </Panel>
        <Panel header="collapse 3" key="3" collapsible="disabled">
          third
        </Panel>
      </Collapse>,
    );

    fireEvent.keyDown(container.querySelectorAll('.rc-collapse-header')?.[2], myKeyEvent);
    jest.runAllTimers();
    expect(container.querySelectorAll('.rc-collapse-content-active')).toHaveLength(0);

    fireEvent.keyDown(container.querySelector('.rc-collapse-header')!, myKeyEvent);
    jest.runAllTimers();

    expect(container.querySelectorAll('.rc-collapse-content-active')).toHaveLength(1);

    expect(container.querySelector('.rc-collapse-content')).toHaveClass(
      'rc-collapse-content-active',
    );

    fireEvent.keyDown(container.querySelector('.rc-collapse-header')!, myKeyEvent);
    jest.runAllTimers();

    expect(container.querySelectorAll('.rc-collapse-content-active')).toHaveLength(0);
    expect(container.querySelector('.rc-collapse-content')!.className).not.toContain(
      'rc-collapse-content-active',
    );
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
    const { container } = render(
      <Collapse expandIcon={() => null}>
        <Panel header="title" key="1">
          first
        </Panel>
      </Collapse>,
    );
    expect(container.querySelector('.rc-collapse-header')?.childNodes).toHaveLength(1);
  });

  it('should support custom child', () => {
    const { container } = render(
      <Collapse>
        <Panel header="collapse 1" key="1">
          first
        </Panel>
        <a className="custom-child">custom-child</a>
      </Collapse>,
    );
    expect(container.querySelector('.custom-child')?.innerHTML).toBe('custom-child');
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
    const { container } = render(
      <Collapse defaultActiveKey="1">
        <PanelElement key="1" />
        <Panel header="collapse 2" key="2">
          second
        </Panel>
      </Collapse>,
    );

    expect(container.querySelectorAll('.rc-collapse-content-active')).toHaveLength(1);
    expect(container.querySelector('.rc-collapse-content')).toHaveClass(
      'rc-collapse-content-active',
    );
    expect(container.querySelector('.rc-collapse-header')?.textContent).toBe('collapse 1');
    expect(container.querySelector('.rc-collapse-header')?.querySelectorAll('.arrow')).toHaveLength(
      1,
    );
    fireEvent.click(container.querySelector('.rc-collapse-header')!);
    expect(container.querySelectorAll('.rc-collapse-content-active')).toHaveLength(0);
    expect(container.querySelector('.rc-collapse-content')).toHaveClass(
      'rc-collapse-content-inactive',
    );
  });

  describe('prop: collapsible', () => {
    it('default', () => {
      const { container } = render(
        <Collapse>
          <Panel header="collapse 1" key="1">
            first
          </Panel>
        </Collapse>,
      );
      expect(container.querySelector('.rc-collapse-header-text')).toBeTruthy();
      fireEvent.click(container.querySelector('.rc-collapse-header')!);
      expect(container.querySelectorAll('.rc-collapse-item-active')).toHaveLength(1);
    });
    it('should work when value is header', () => {
      const { container } = render(
        <Collapse collapsible="header">
          <Panel header="collapse 1" key="1">
            first
          </Panel>
        </Collapse>,
      );
      expect(container.querySelector('.rc-collapse-header-text')).toBeTruthy();
      fireEvent.click(container.querySelector('.rc-collapse-header')!);
      expect(container.querySelectorAll('.rc-collapse-item-active')).toHaveLength(0);
      fireEvent.click(container.querySelector('.rc-collapse-header-text')!);
      expect(container.querySelectorAll('.rc-collapse-item-active')).toHaveLength(1);
    });
    it('should work when value is icon', () => {
      const { container } = render(
        <Collapse collapsible="icon">
          <Panel header="collapse 1" key="1">
            first
          </Panel>
        </Collapse>,
      );
      expect(container.querySelector('.rc-collapse-expand-icon')).toBeTruthy();
      fireEvent.click(container.querySelector('.rc-collapse-header')!);
      expect(container.querySelectorAll('.rc-collapse-item-active')).toHaveLength(0);
      fireEvent.click(container.querySelector('.rc-collapse-expand-icon')!);
      expect(container.querySelectorAll('.rc-collapse-item-active')).toHaveLength(1);
    });

    it('should disabled when value is disabled', () => {
      const { container } = render(
        <Collapse collapsible="disabled">
          <Panel header="collapse 1" key="1">
            first
          </Panel>
        </Collapse>,
      );
      expect(container.querySelector('.rc-collapse-header-text')).toBeTruthy();
      expect(container.querySelectorAll('.rc-collapse-item-disabled')).toHaveLength(1);
      fireEvent.click(container.querySelector('.rc-collapse-header')!);
      expect(container.querySelectorAll('.rc-collapse-item-active')).toHaveLength(0);
    });

    it('the value of panel should be read first', () => {
      const { container } = render(
        <Collapse collapsible="header">
          <Panel collapsible="disabled" header="collapse 1" key="1">
            first
          </Panel>
        </Collapse>,
      );
      expect(container.querySelector('.rc-collapse-header-text')).toBeTruthy();

      expect(container.querySelectorAll('.rc-collapse-item-disabled')).toHaveLength(1);

      fireEvent.click(container.querySelector('.rc-collapse-header')!);
      expect(container.querySelectorAll('.rc-collapse-item-active')).toHaveLength(0);
    });

    it('icon trigger when collapsible equal header', () => {
      const { container } = render(
        <Collapse collapsible="header">
          <Panel header="collapse 1" key="1">
            first
          </Panel>
        </Collapse>,
      );

      fireEvent.click(container.querySelector('.rc-collapse-header .arrow')!);
      expect(container.querySelectorAll('.rc-collapse-item-active')).toHaveLength(1);
    });

    it('header not trigger when collapsible equal icon', () => {
      const { container } = render(
        <Collapse collapsible="icon">
          <Panel header="collapse 1" key="1">
            first
          </Panel>
        </Collapse>,
      );

      fireEvent.click(container.querySelector('.rc-collapse-header-text')!);
      expect(container.querySelectorAll('.rc-collapse-item-active')).toHaveLength(0);
    });
  });

  it('!showArrow', () => {
    const { container } = render(
      <Collapse>
        <Panel header="collapse 1" key="1" showArrow={false}>
          first
        </Panel>
      </Collapse>,
    );

    expect(container.querySelectorAll('.rc-collapse-expand-icon')).toHaveLength(0);
  });

  it('Panel container dom can set event handler', () => {
    const clickHandler = jest.fn();
    const { container } = render(
      <Collapse defaultActiveKey="1">
        <Panel header="collapse 1" key="1" onClick={clickHandler}>
          <div className="target">Click this</div>
        </Panel>
      </Collapse>,
    );

    fireEvent.click(container.querySelector('.target')!);
    expect(clickHandler).toHaveBeenCalled();
  });

  it('falsy Panel', () => {
    const { container } = render(
      <Collapse>
        {null}
        <Panel header="collapse 1" key="1">
          <p>Panel 1 content</p>
        </Panel>
        {0}
        <Panel header="collapse 2" key="2">
          <p>Panel 2 content</p>
        </Panel>
        {undefined}
        {false}
        {true}
      </Collapse>,
    );

    expect(container.querySelectorAll('.rc-collapse-item')).toHaveLength(2);
  });

  it('ref should work', () => {
    const ref = React.createRef<any>();
    const panelRef = React.createRef<any>();
    const { container } = render(
      <Collapse ref={ref}>
        <Panel header="collapse 1" key="1" ref={panelRef}>
          first
        </Panel>
      </Collapse>,
    );
    expect(ref.current).toBe(container.firstChild);
    expect(panelRef.current).toBe(container.querySelector('.rc-collapse-item'));
  });

  // https://github.com/react-component/collapse/issues/235
  it('onItemClick should work', () => {
    const onItemClick = jest.fn();
    const { container } = render(
      <Collapse>
        <Panel header="collapse 1" key="1" onItemClick={onItemClick}>
          first
        </Panel>
      </Collapse>,
    );
    fireEvent.click(container.querySelector('.rc-collapse-header')!);
    expect(onItemClick).toHaveBeenCalled();
  });

  it('onItemClick should not work when collapsible is disabled', () => {
    const onItemClick = jest.fn();
    const { container } = render(
      <Collapse collapsible="disabled">
        <Panel header="collapse 1" key="1" onItemClick={onItemClick}>
          first
        </Panel>
      </Collapse>,
    );
    fireEvent.click(container.querySelector('.rc-collapse-header')!);
    expect(onItemClick).not.toHaveBeenCalled();
  });

  it('panel style should work', () => {
    const { container } = render(
      <Collapse>
        <Panel header="collapse 1" key="1" style={{ color: 'red' }}>
          first
        </Panel>
      </Collapse>,
    );
    expect(container.querySelector('.rc-collapse-item').style.color).toBe('red');
  });

  describe('props items', () => {
    const items: ItemType[] = [
      {
        key: '1',
        label: 'collapse 1',
        children: 'first',
        collapsible: 'disabled',
      },
      {
        key: '2',
        label: 'collapse 2',
        children: 'second',
        extra: <span>ExtraSpan</span>,
      },
      {
        key: '3',
        label: 'collapse 3',
        className: 'important',
        children: 'third',
      },
    ];

    runNormalTest(
      <Collapse onChange={onChange} expandIcon={() => <span>test{'>'}</span>} items={items} />,
    );

    runAccordionTest(
      <Collapse
        onChange={onChange}
        accordion
        items={[
          {
            key: '1',
            label: 'collapse 1',
            children: 'first',
          },
          {
            key: '2',
            label: 'collapse 2',
            children: 'second',
          },
          {
            key: '3',
            label: 'collapse 3',
            children: 'third',
          },
        ]}
      />,
    );

    it('should work with onItemClick', () => {
      const onItemClick = jest.fn();
      const { container } = render(
        <Collapse
          items={[
            {
              label: 'title 3',
              onItemClick,
            },
          ]}
        />,
      );
      fireEvent.click(container.querySelector('.rc-collapse-header'));
      expect(onItemClick).toHaveBeenCalled();
      expect(onItemClick).lastCalledWith('0');
    });

    it('should work with collapsible', () => {
      const onItemClick = jest.fn();
      const onChangeFn = jest.fn();
      const { container } = render(
        <Collapse
          onChange={onChangeFn}
          items={[
            ...items.slice(0, 1),
            {
              label: 'title 3',
              onItemClick,
              collapsible: 'icon',
            },
          ]}
        />,
      );

      fireEvent.click(container.querySelector('.rc-collapse-header'));
      expect(onItemClick).not.toHaveBeenCalled();

      fireEvent.click(
        container.querySelector('.rc-collapse-item:nth-child(2) .rc-collapse-expand-icon'),
      );
      expect(onItemClick).toHaveBeenCalled();
      expect(onChangeFn).toBeCalledTimes(1);
      expect(onChangeFn).lastCalledWith(['1']);
    });

    it('should work with nested', () => {
      const { container } = render(
        <Collapse
          items={[
            ...items,
            {
              label: 'title 3',
              children: <Collapse items={items} />,
            },
          ]}
        />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should not support expandIcon', () => {
      const { container } = render(
        <Collapse
          expandIcon={() => <i className="custom-icon">p</i>}
          items={[
            {
              label: 'title',
              expandIcon: () => <i className="custom-icon">c</i>,
            } as any,
          ]}
        />,
      );

      expect(container.querySelectorAll('.custom-icon')).toHaveLength(1);
      expect(container.querySelector('.custom-icon')?.innerHTML).toBe('p');
    });
  });
});
