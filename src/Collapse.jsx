

const React = require('react');
const { PropTypes, createClass, Children } = React;
const CollapsePanel = require('./Panel');

module.exports = createClass({

  displayName: 'Collapse',

  propTypes: {
    prefixCls: PropTypes.string,
    activeKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    defaultActiveKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    onChange: PropTypes.func,
    accordion: PropTypes.bool,
  },

  getDefaultProps() {
    return {
      prefixCls: 'rc-collapse',
      onChange: () => {},
      accordion: false,
    };
  },

  getInitialState() {
    const { defaultActiveKey, activeKey, accordion } = this.props;
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

  handleClickItem(key) {
    return () => {
      const activeKey = this._getActivityKey();
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

        this.setState({ activeKey: activeKey });
      }
      this.props.onChange(key);
    };
  },

  _getActivityKey() {
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
    const activeKey = this._getActivityKey();
    const { prefixCls, accordion } = this.props;

    return Children.map(this.props.children, (child, i) => {
      // If there is no key provide, use the panel order as default key
      const key = child.key || i;
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
        children: child.props.children,
        onItemClick: this.handleClickItem(key).bind(this),
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
