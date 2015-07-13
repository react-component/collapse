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
      el.style.height = 'auto';
      el.style.opacity = 1;
    }
  },

  componentDidUpdate(prevProps) {

    var isActive = this.props.isActive;

    // no change
    if (prevProps.isActive === isActive) {
      return;
    }

    this._anim(isActive ? 0 : 1);
  },

  _anim(opacity) {
    var el = findDOMNode(this.refs.content);
    var scrollHeight = el.scrollHeight + 'px';

    // start state
    el.style.height = opacity ? scrollHeight : 0;
    el.style.opacity = opacity;

    cssAnimation.setTransition(el, 'Property', 'height ,opacity');
    cssAnimation.style(el, {
      height: opacity ? 0 : scrollHeight,
      opacity: opacity ? 0 : 1
    }, function() {
      el.style.height = opacity ? 0 : 'auto';
      el.style.opacity = opacity ? 0 : 1;
      cssAnimation.setTransition(el, 'Property', '');
    });
  }

});
