import React, { PropTypes } from 'react';
import classnames from 'classnames';

const PanelContent = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    isActive: PropTypes.bool,
    children: PropTypes.any,
  },
  shouldComponentUpdate(nextProps) {
    return this.props.isActive || nextProps.isActive;
  },
  render() {
    this._isActived = this._isActived || this.props.isActive;
    if (!this._isActived) {
      return null;
    }
    const { prefixCls, isActive, children } = this.props;
    const contentCls = classnames({
      [`${prefixCls}-content`]: true,
      [`${prefixCls}-content-active`]: isActive,
      [`${prefixCls}-content-inactive`]: !isActive,
    });
    return (
      <div
        className={contentCls}
        role="tabpanel"
      >
        <div className={`${prefixCls}-content-box`}>{children}</div>
      </div>
    );
  },
});

export default PanelContent;
