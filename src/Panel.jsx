'use strict';

const { createClass, PropTypes, findDOMNode } = require('react');
const classnames = require('classnames');
const cssAnimation = require('css-animation');

module.exports = createClass({

  displayName: 'CollapsePanel',

  propTypes: {
    prefixCls: PropTypes.string,
    header: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.node
    ]),
    isActive: PropTypes.bool,
    onItemClick: PropTypes.func
  },

  getInitialState() {
    return { isActive: this.props.isActive };
  },

  getDefaultProps() {
    return {
      isActive: false,
      onItemClick: () => {}
    };
  },

  handleItemClick() {
    this.props.onItemClick();
  },

  render() {
    let { prefixCls, header, children, isActive } = this.props;

    let headerCls = `${prefixCls}-header`;
    let contentCls = classnames({
      [`${prefixCls}-content`]: true,
      [`${prefixCls}-content-active`]: isActive
    });
    let itemCls = classnames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-active`]: isActive
    });

    return (
      <div className={itemCls}>
        <div className={headerCls} onClick={this.handleItemClick}>{header}</div>
        <div className={contentCls} ref="content">{children}</div>
      </div>
    );
  },

  componentDidMount() {
    if (this.props.isActive) {
      var el = findDOMNode(this.refs.content);
      el.style.height = el.scrollHeight + 'px';
    }
  },

  componentDidUpdate(prevProps) {

    var isActive = this.props.isActive;

    // no change
    if (prevProps.isActive === isActive) {
      return;
    }

    // current isActive
    if (!isActive) {
      var preNode = findDOMNode(this.refs.content);
      preNode.style.height = preNode.scrollHeight + 'px';
      preNode.style.opacity = 1;
      cssAnimation.setTransition(preNode, 'Property', 'height ,opacity');
      cssAnimation.style(preNode, {
        height: 0,
        opacity: 0
      }, function() {
        preNode.style.height = '';
        preNode.style.opacity = '';
        cssAnimation.setTransition(preNode, 'Property', '');
      });
    } else {
      // from isActive to hide
      var currentNode = findDOMNode(this.refs.content);
      currentNode.style.height = 0;
      cssAnimation.setTransition(currentNode, 'Property', 'height ,opacity');
      cssAnimation.style(currentNode, {
        height: currentNode.scrollHeight + 'px',
        opacity: 1
      }, function() {
        currentNode.style.height = 'auto';
        currentNode.style.opacity = 1;
        cssAnimation.setTransition(currentNode, 'Property', '');
      });
    }
  }
});
