'use strict';

const React = require('react');
const CollapsePanel = require('./Panel');

module.exports = React.createClass({

  displayName: 'Collapse',

  propTypes: {
    prefixCls: React.PropTypes.string,
    activeKey: React.PropTypes.string,
    onChange: React.PropTypes.func,
    accordion: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      prefixCls: 'rc-collapse',
      onChange: () => {},
      accordion: false
    };
  },

  getInitialState() {
    return {
      activeKey: null
    };
  },

  componentWillReceiveProps(nextProps) {
    if ('activeKey' in nextProps) {
      this.setState({
        activeKey: nextProps.activeKey
      });
    }
  },

  handleClickItem(key) {
    return () => {
      this.props.onChange(key);
      if (this.props.accordion) {
        this.setState({
          activeKey: key
        });
      }
    };
  },

  getItems() {
    let activeKey = this.state.activeKey;
    let { prefixCls, accordion } = this.props;
    return React.Children.map(this.props.children, (child, i) => {
      // If there is no key provide, use the panel order as default key
      let key = child.key || i;
      let header = child.props.header;
      let isActive = false;
      if (accordion) {
        isActive = !activeKey ? !i : activeKey === key;
      }

      const props = {
        key,
        header,
        isActive,
        prefixCls,
        accordion,
        children: child.props.children,
        onItemClick: this.handleClickItem(key).bind(this)
      };

      return <CollapsePanel {...props} />;
    });
  },

  render() {
    let prefixCls = this.props.prefixCls;
    return (
      <div className={prefixCls}>
        {this.getItems()}
      </div>
    );
  }
});
