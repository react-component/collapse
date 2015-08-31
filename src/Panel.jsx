import React, { PropTypes, createClass } from 'react';
import classnames from 'classnames';
import Animate from 'rc-animate';

const CollapsePanel = createClass({
  propTypes: {
    openAnimation: PropTypes.object,
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
        <Animate showProp="data-active"
                 exclusive={true}
                 animation={this.props.openAnimation}>
          <div className={contentCls}
               data-active={isActive}
               role="tabpanel">
            <div className={`${prefixCls}-content-box`}>{children}</div>
          </div>
        </Animate>
      </div>
    );
  },
});

export default CollapsePanel;
