'use strict';

const React = require('react');
const { PropTypes, createClass, findDOMNode } = React;
const classnames = require('classnames');
//const cssAnimation = require('css-animation');
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
        <div className={contentCls} ref="content" role="tabpanel" style={{height: isActive ? 'auto' : 0}}>
          <div className={`${prefixCls}-content-box`}>{children}</div>
        </div>
      </div>
    );
  },

  componentDidMount() {
    if (this.props.isActive) {
      var el = findDOMNode(this.refs.content);
      el.style.height = 'auto';
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
    if (!isSupportCssAnimate) {
      el.style.height = opacity ? 0 : '';
      return;
    }

    var keyframeNames = 'random' + new Date().getTime();
    var scrollHeight = el.scrollHeight + 'px';
    var end = el.style.height, start = 0;

    if (end === '0px') {
      start = scrollHeight;
    }
    if (end === 'auto') {
      end = scrollHeight;
    }

    function createKeyframe(keyframeName, startVal, endVal) {
      var domPrefixes = ['webkit', 'moz', 'o', 'ms'], css = '';

      for (var i = 0, l = domPrefixes.length; i < l; i++) {
        css += '@-' + domPrefixes[i] + '-keyframes ' + keyframeName + ' {';
        css += '0%{height:' + startVal + ';}';
        css += '100%{height:' + endVal + ';}';
        css += '}';
      }
      return css;
    }

    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    style.innerHTML = createKeyframe(keyframeNames, start, end);

    el.style.animationName = keyframeNames;
    // Safari
    el.style.WebkitAnimationName = keyframeNames;
  }

});
