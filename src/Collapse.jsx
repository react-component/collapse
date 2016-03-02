import React, { PropTypes, createClass, Children }from 'react';
import CollapsePanel from './Panel';
import openAnimation from './openAnimation';

const Collapse = createClass({
  propTypes: {
    children: PropTypes.any,
    prefixCls: PropTypes.string,
    activeKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    defaultActiveKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    openAnimation: PropTypes.object,
    onChange: PropTypes.func,
    accordion: PropTypes.bool,
  },

  statics: {
    Panel: CollapsePanel,
  },

  getDefaultProps() {
    return {
      prefixCls: 'rc-collapse',
      onChange: () => {
      },
      openAnimation: openAnimation,
      accordion: false,
    };
  },

  getInitialState() {
    const { activeKey, accordion } = this.props;
    let { defaultActiveKey } = this.props;
    // If is not accordion mode, then, defaultActiveKey should be an array
    if (!accordion) {
      defaultActiveKey = defaultActiveKey || [];
    }

    return {
      activeKey: activeKey || defaultActiveKey,
    };
  },

  componentWillReceiveProps(nextProps) {
    if ('activeKey' in nextProps) {
      this.setState({
        activeKey: nextProps.activeKey,
      });
    }
  },

  onClickItem(key) {
    return () => {
      const activeKey = this.getActivityKey();
      if (this.props.accordion) {
        this.setState({
          activeKey: key === activeKey ? null : key,
        });
      } else {
        const index = activeKey.indexOf(key);
        const isActive = index > -1;
        if (isActive) {
          // remove active state
          activeKey.splice(index, 1);
        } else {
          activeKey.push(key);
        }

        this.setState({activeKey: activeKey});
      }
      this.props.onChange(key);
    };
  },

  getActivityKey() {
    let activeKey = this.state.activeKey;
    const { accordion } = this.props;
    if (accordion && Array.isArray(activeKey)) {
      activeKey = activeKey[0];
    }

    if (!accordion && !Array.isArray(activeKey)) {
      activeKey = activeKey ? [activeKey] : [];
    }
    return activeKey;
  },

  getItems() {
    const activeKey = this.getActivityKey();
    const { prefixCls, accordion } = this.props;

    return Children.map(this.props.children, (child, index) => {
      // If there is no key provide, use the panel order as default key
      const key = child.key || String(index);
      const header = child.props.header;
      let isActive = false;
      if (accordion) {
        isActive = activeKey === key;
      } else {
        isActive = activeKey.indexOf(key) > -1;
      }

      const props = {
        key,
        header,
        isActive,
        prefixCls,
        openAnimation: this.props.openAnimation,
        children: child.props.children,
        onItemClick: this.onClickItem(key).bind(this),
      };

      return <CollapsePanel {...props} />;
    });
  },

  render() {
    const prefixCls = this.props.prefixCls;
    return (
      <div className={prefixCls}>
        {this.getItems()}
      </div>
    );
  },
});

export default Collapse;
