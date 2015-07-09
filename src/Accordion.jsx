'use strict';

const React = require('react');
const AccordionPanel = require('./Panel');

module.exports = React.createClass({

  displayName: 'Accordion',

  propTypes: {
    prefixCls: React.PropTypes.string,
    activeKey: React.PropTypes.string,
    onSwitch: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      prefixCls: 'rc-accordion',
      onSwitch: () => {}
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
      this.props.onSwitch(key);
      this.setState({
        activeKey: key
      });
    };
  },

  getItems() {
    let activeKey = this.state.activeKey;
    let prefixCls = this.props.prefixCls;
    return React.Children.map(this.props.children, (child, i) => {
      // If there is no key provide, use the panel order as default key
      let key = child.key || i;
      let header = child.props.header;
      let isActive = false;
      if (!activeKey) {
        isActive = !i;
      } else {
        isActive = activeKey === key;
      }

      const props = {
        key,
        header,
        isActive,
        prefixCls,
        children: child.props.children,
        onItemClick: this.handleClickItem(key).bind(this)
      };

      return <AccordionPanel {...props} />;
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
