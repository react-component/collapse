'use strict';

const React = require('react');
const classnames = require('classnames');
var cssAnimation = require('css-animation');

function getActiveKey(props) {
  var activeKey = props.activeKey;
  if (!activeKey) {
    props.items.forEach(function (item) {
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
    return (e) => {
      this.setState({
        activeKey: key
      });
    };
  },

  getItems() {
    let prefixCls = this.props.prefixCls;
    let activeKey = this.state.activeKey;
    return this.props.items.map((item, i) => {
      let headerCls = `${prefixCls}-header`;
      let key = item.key || i;
      let isActive = activeKey === key;
      let contentCls = classnames({
        [`${prefixCls}-content`]: true,
        [`${prefixCls}-content-active`]: isActive
      });
      let itemCls = classnames({
        [`${prefixCls}-item`]: true,
        [`${prefixCls}-item-active`]: isActive
      });
      return (
        <div className={itemCls} key={key}>
          <div className={headerCls} onClick={this.handleClickItem(key)}>{item.header}</div>
          <div className={contentCls} ref={key}>{item.content}</div>
        </div>
      );
    });
  },

  componentDidUpdate(_, prevState) {
    if (prevState.activeKey !== this.state.activeKey) {
      var preNode = React.findDOMNode(this.refs[prevState.activeKey]);
      var currentNode = React.findDOMNode(this.refs[this.state.activeKey]);
      preNode.style.height = preNode.scrollHeight + 'px';
      preNode.style.opacity = 1;
      currentNode.style.height = 0;
      cssAnimation.setTransition(preNode, 'Property', 'height ,opacity');
      cssAnimation.setTransition(currentNode, 'Property', 'height ,opacity');
      cssAnimation.style(preNode, {
        height: 0,
        opacity: 0
      }, function () {
        preNode.style.height = '';
        preNode.style.opacity = '';
        cssAnimation.setTransition(preNode, 'Property', '');
      });
      cssAnimation.style(currentNode, {
        height: currentNode.scrollHeight + 'px',
        opacity: 1
      }, function () {
        currentNode.style.height = 'auto';
        currentNode.style.opacity = 1;
        cssAnimation.setTransition(currentNode, 'Property', '');
      });
    }
  },

  componentDidMount() {
    React.findDOMNode(this.refs[this.state.activeKey]).style.height = 'auto';
    React.findDOMNode(this.refs[this.state.activeKey]).style.opacity = 1;
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
