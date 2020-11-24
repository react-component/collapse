/* eslint-disable react/prop-types */
import * as React from 'react';
import classNames from 'classnames';
import shallowEqual from 'shallowequal';
import toArray from 'rc-util/lib/Children/toArray';
import CollapsePanel from './Panel';
import { CollapseProps, CollapsibleType } from './interface';

function getActiveKeysArray(activeKey: React.Key | React.Key[]) {
  let currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    currentActiveKey = currentActiveKey ? [currentActiveKey] : [];
  }
  return currentActiveKey.map((key) => String(key));
}

export interface CollapseState {
  activeKey: React.Key[];
}

class Collapse extends React.Component<CollapseProps, CollapseState> {
  static defaultProps = {
    prefixCls: 'rc-collapse',
    onChange() {},
    accordion: false,
    destroyInactivePanel: false,
  };

  static Panel = CollapsePanel;

  constructor(props: CollapseProps) {
    super(props);

    const { activeKey, defaultActiveKey } = props;
    let currentActiveKey = defaultActiveKey;
    if ('activeKey' in props) {
      currentActiveKey = activeKey;
    }

    this.state = {
      activeKey: getActiveKeysArray(currentActiveKey),
    };
  }

  shouldComponentUpdate(nextProps: CollapseProps, nextState: CollapseState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  }

  onClickItem = (key: React.Key) => {
    let { activeKey } = this.state;
    if (this.props.accordion) {
      activeKey = activeKey[0] === key ? [] : [key];
    } else {
      activeKey = [...activeKey];
      const index = activeKey.indexOf(key);
      const isActive = index > -1;
      if (isActive) {
        // remove active state
        activeKey.splice(index, 1);
      } else {
        activeKey.push(key);
      }
    }
    this.setActiveKey(activeKey);
  };

  static getDerivedStateFromProps(nextProps: CollapseProps) {
    const newState: Partial<CollapseState> = {};
    if ('activeKey' in nextProps) {
      newState.activeKey = getActiveKeysArray(nextProps.activeKey);
    }
    return newState;
  }

  getNewChild = (child: React.ReactElement, index: number) => {
    if (!child) return null;

    const { activeKey } = this.state;
    const { prefixCls, openMotion, accordion, destroyInactivePanel: rootDestroyInactivePanel, expandIcon, collapsible } = this.props;
    // If there is no key provide, use the panel order as default key
    const key = child.key || String(index);
    const { header, headerClass, destroyInactivePanel, collapsible: childCollapsible } = child.props;
    let isActive = false;
    if (accordion) {
      isActive = activeKey[0] === key;
    } else {
      isActive = activeKey.indexOf(key) > -1;
    }

    const mergeCollapsible: CollapsibleType  = childCollapsible ?? collapsible;

    const props = {
      key,
      panelKey: key,
      header,
      headerClass,
      isActive,
      prefixCls,
      destroyInactivePanel: destroyInactivePanel ?? rootDestroyInactivePanel,
      openMotion,
      accordion,
      children: child.props.children,
      onItemClick: mergeCollapsible === 'disabled' ? null : this.onClickItem,
      expandIcon,
      collapsible: mergeCollapsible,
    };

    // https://github.com/ant-design/ant-design/issues/20479
    if (typeof child.type === 'string') {
      return child;
    }

    return React.cloneElement(child, props);
  };

  getItems = () => {
    const { children } = this.props;
    return toArray(children).map(this.getNewChild);
  };

  setActiveKey = (activeKey: React.Key[]) => {
    if (!('activeKey' in this.props)) {
      this.setState({ activeKey });
    }
    this.props.onChange(this.props.accordion ? activeKey[0] : activeKey);
  };

  render() {
    const { prefixCls, className, style, accordion } = this.props;
    const collapseClassName = classNames({
      [prefixCls]: true,
      [className]: !!className,
    });
    return (
      <div className={collapseClassName} style={style} role={accordion ? 'tablist' : null}>
        {this.getItems()}
      </div>
    );
  }
}

export default Collapse;
