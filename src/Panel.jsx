'use strict';

const React = require('react');
const { PropTypes, createClass, findDOMNode } = React;
const classnames = require('classnames');
const cssAnimation = require('css-animation');
const event = require('css-animation/lib/Event');
const isSupportCssAnimate = event.endEvents.length > 0;

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
    return {isActive: this.props.isActive};
  },

  getDefaultProps() {
    return {
      isActive: false,
      onItemClick: () => {
      }
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
        <div className={headerCls} onClick={this.handleItemClick}
             role="tab" aria-expanded={isActive}>
          <i className="arrow"></i>
          {header}
        </div>
        <div className={contentCls} ref="content" role="tabpanel">
          <div className={`${prefixCls}-content-box`}>{children}</div>
        </div>
      </div>
    );
  },

  componentDidMount() {
    var el = findDOMNode(this.refs.content);
    if (this.props.isActive) {
      el.style.height = 'auto';
    } else {
      el.style.height = 0;
    }
  },

  componentDidUpdate(prevProps) {
    var isActive = this.props.isActive;

    // no change
    if (prevProps.isActive === isActive) {
      return;
    }

    var el = findDOMNode(this.refs.content);
    var pos = el.getBoundingClientRect();
    var start = pos.bottom - pos.top + 'px';
    el.style.height = start;
    this._anim(isActive ? 0 : 1);
  },

  _anim(opacity) {
    var el = findDOMNode(this.refs.content);
    if (!isSupportCssAnimate) {
      el.style.height = opacity ? 0 : 'auto';
      return;
    }

    var scrollHeight = el.scrollHeight + 'px';
    var collapsing = `${this.props.prefixCls}-collapsing`;
    cssAnimation.addClass(el, collapsing);
    clearTimeout(this.timer);
    if (opacity) {
      //收缩
      el.style.height = 0;
      cssAnimation.removeClass(el, collapsing);
    } else {
      //展开
      el.style.height = scrollHeight;
      cssAnimation.removeClass(el, collapsing);
      this.timer = setTimeout(function () {
        el.style.height = 'auto';
      }, 300);
    }

    //cssAnimation.style(el, {
    //  maxHeight: opacity ? 0 : scrollHeight
    //}, function () {
    //  el.style.maxHeight = opacity ? 0 : '10000px';
    //  cssAnimation.setTransition(el, 'Property', null);
    //  cssAnimation.removeClass(el, collapsing);
    //});
  }

});
