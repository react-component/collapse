const React = require('react');
const { PropTypes, createClass, findDOMNode } = React;
const classnames = require('classnames');
const velocity = require('velocity-animate');

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

  componentDidUpdate(prevProps) {
    const isActive = this.props.isActive;
    // no change
    if (prevProps.isActive === isActive) {
      return;
    }
    const node = findDOMNode(this.refs.content);
    if (isActive) {
      node.style.display = 'none';
      velocity(node, 'slideDown', {
        duration: 300,
      });
    } else {
      node.style.display = 'block';
      velocity(node, 'slideUp', {
        duration: 300,
      });
    }
  },
});
