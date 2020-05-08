/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import classnames from 'classnames';
import shallowEqual from 'shallowequal';

class PanelContent extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.forceRender || !shallowEqual(this.props, nextProps);
  }

  render() {
    this._isActived = this.props.forceRender || this._isActived || this.props.isActive;
    if (!this._isActived) {
      return null;
    }
    const { prefixCls, isActive, children, destroyInactivePanel, forceRender, role } = this.props;
    const contentCls = classnames(`${prefixCls}-content`, {
      [`${prefixCls}-content-active`]: isActive,
      [`${prefixCls}-content-inactive`]: !isActive,
    });
    const child = !forceRender && !isActive && destroyInactivePanel ? null :
      <div className={`${prefixCls}-content-box`}>{children}</div>;
    return (
      <div
        className={contentCls}
        role={role}
      >
        {child}
      </div>
    );
  }
}

export default PanelContent;
