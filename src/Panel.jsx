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
      PropTypes.node,
    ]),
    isActive: PropTypes.bool,
    onItemClick: PropTypes.func,
  },

  getInitialState() {
    return {isActive: this.props.isActive};
  },

  getDefaultProps() {
    return {
      isActive: false,
      onItemClick() {
      },
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
      [`${prefixCls}-content-active`]: isActive,
    });
    const itemCls = classnames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-active`]: isActive,
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
    if (this.props.isActive) {
      const el = findDOMNode(this.refs.content);
      el.style.height = 'auto';
    }
  },

  componentDidUpdate(prevProps) {
    const isActive = this.props.isActive;

    // no change
    if (prevProps.isActive === isActive) {
      return;
    }

    this._anim(isActive ? 0 : 1);
  },

  _anim(opacity) {
    const el = findDOMNode(this.refs.content);
    if (!isSupportCssAnimate) {
      el.style.height = opacity ? 0 : '';
      return;
    }

    const scrollHeight = el.scrollHeight + 'px';
    const collapsing = `${this.props.prefixCls}-collapsing`;

    cssAnimation.addClass(el, collapsing);

    // start state
    el.style.height = opacity ? scrollHeight : 0;

    cssAnimation.setTransition(el, 'Property', 'height');
    cssAnimation.style(el, {
      height: opacity ? 0 : scrollHeight,
    }, () => {
      el.style.height = opacity ? 0 : 'auto';
      cssAnimation.setTransition(el, 'Property', '');
      cssAnimation.removeClass(el, collapsing);
    });
  },
});
