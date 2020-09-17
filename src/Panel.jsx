/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import classNames from 'classnames';
import PanelContent from './PanelContent';
import Animate from 'rc-animate';
import shallowEqual from 'shallowequal';

class CollapsePanel extends Component {
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props, nextProps);
  }

  handleItemClick = () => {
    const { onItemClick, panelKey } = this.props;

    if (typeof onItemClick === 'function') {
      onItemClick(panelKey);
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
      this.handleItemClick();
    }
  }

  render() {
    const {
      className,
      id,
      style,
      prefixCls,
      header,
      headerClass,
      children,
      isActive,
      showArrow,
      destroyInactivePanel,
      disabled,
      accordion,
      forceRender,
      expandIcon,
      extra,
      headerCollapsibleOnly,
    } = this.props;
    const headerCls = classNames(`${prefixCls}-header`, {
      [headerClass]: headerClass,
      [`${prefixCls}-header-collapsible-only`]: headerCollapsibleOnly,
    });
    const itemCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-active`]: isActive,
      [`${prefixCls}-item-disabled`]: disabled,
    }, className);

    let icon = <i className="arrow" />;
    if (showArrow && typeof expandIcon === 'function') {
      icon = expandIcon(this.props);
    }
    return (
      <div className={itemCls} style={style} id={id}>
        <div
          className={headerCls}
          onClick={() => !headerCollapsibleOnly && this.handleItemClick()}
          role={accordion ? 'tab' : 'button'}
          tabIndex={disabled ? -1 : 0}
          aria-expanded={`${isActive}`}
          onKeyPress={this.handleKeyPress}
        >
          {showArrow && icon}
          <span
            onClick={() => headerCollapsibleOnly && this.handleItemClick()}
            className={`${prefixCls}-header-text`}
          >
            {header}
          </span>
          {extra && (<div className={`${prefixCls}-extra`}>{extra}</div>)}
        </div>
        <Animate
          showProp="isActive"
          exclusive
          component=""
          animation={this.props.openAnimation}
        >
          <PanelContent
            prefixCls={prefixCls}
            isActive={isActive}
            destroyInactivePanel={destroyInactivePanel}
            forceRender={forceRender}
            role={accordion ? 'tabpanel' : null}
          >
            {children}
          </PanelContent>
        </Animate>
      </div>
    );
  }
}

CollapsePanel.defaultProps = {
  showArrow: true,
  isActive: false,
  destroyInactivePanel: false,
  onItemClick() { },
  headerClass: '',
  forceRender: false,
  headerCollapsibleOnly: false,
};

export default CollapsePanel;
