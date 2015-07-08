'use strict';

const React = require('react');
const AccordionPanel = require('./panel');

function getActiveKey(props) {
  var activeKey = props.activeKey;
  if (!activeKey) {
    props.items.forEach(function(item) {
      activeKey = item.key;
    });
  }
  return activeKey;
}

module.exports = React.createClass({

  displayName: 'Accordion',

  propTypes: {
    items: React.PropTypes.array,
    prefixCls: React.PropTypes.string,
    active: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      items: [],
      prefixCls: 'rc-accordion'
    };
  },

  getInitialState() {
    return {
      activeKey: getActiveKey(this.props)
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
      this.setState({
        activeKey: key
      });
    };
  },

  getItems() {
    let activeKey = this.state.activeKey;
    let prefixCls = this.props.prefixCls;
    return React.Children.map(this.props.children, (child, i) => {
      let key = child.key;
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
