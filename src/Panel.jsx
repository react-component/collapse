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
    accordion: PropTypes.bool,
    onItemClick: PropTypes.func
  },

  getInitialState() {
    return { isActive: this.props.isActive };
  },

  getDefaultProps() {
    return {
      isActive: false,
      accordion: false,
      onItemClick: () => {}
    };
  },

  handleItemClick() {
    if (!this.props.accordion) {
      this.setState({
        isActive: !this.state.isActive
      });
    }
    this.props.onItemClick();
  },

  render() {
    let { prefixCls, header, children, isActive } = this.props;
    if (!this.props.accordion) {
      isActive = this.state.isActive;
    }

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

  componentDidUpdate(prevProps, prevState) {

    var accordion = this.props.accordion;
    var prev = prevState;
    var isActive = this.state.isActive;

    if (accordion) {
      prev = prevProps;
      isActive = this.props.isActive;
    }

    // no change
    if (prev.isActive === isActive) {
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
