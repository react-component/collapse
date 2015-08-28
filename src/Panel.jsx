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
      onItemClick() {
      }
    };
  },

  handleItemClick() {
    this.props.onItemClick();
  },

  render() {
    const { prefixCls, header, children, isActive } = this.props;

    const headerCls = `${prefixCls}-header`;
    const contentCls = classnames({
      [`${prefixCls}-content`]: true,
      [`${prefixCls}-content-active`]: isActive
    });
    const itemCls = classnames({
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
    const el = findDOMNode(this.refs.content);
    if (this.props.isActive) {
      el.style.height = 'auto';
    } else {
      el.style.height = 0;
    }
  },

  componentDidUpdate(prevProps) {
    const isActive = this.props.isActive;
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
    const el = findDOMNode(this.refs.content);
    if (!isSupportCssAnimate) {
      el.style.height = opacity ? 0 : 'auto';
      return;
    }
    const collapsing = `${this.props.prefixCls}-collapsing`;
    const scrollHeight = el.scrollHeight + 'px';
    clearTimeout(this.timer);
    if (opacity) {
      //收缩
      cssAnimation.addClass(el, collapsing);
      el.style.height = 0;
      this.timer = setTimeout(function () {
        cssAnimation.removeClass(el, collapsing);
      }, 280);
    } else {
      //展开
      cssAnimation.addClass(el, collapsing);
      el.style.height = scrollHeight;
      this.timer = setTimeout(function () {
        el.style.height = 'auto';
        cssAnimation.removeClass(el, collapsing);
      }, 280);
    }
  }
});
