/* eslint-disable react/prop-types */
import * as React from 'react';
import classNames from 'classnames';
import CSSMotion from 'rc-motion';
import shallowEqual from 'shallowequal';
import PanelContent from './PanelContent';
import type { CollapsePanelProps } from './interface';

class CollapsePanel extends React.Component<CollapsePanelProps, any> {
  static defaultProps = {
    showArrow: true,
    isActive: false,
    onItemClick() {},
    headerClass: '',
    forceRender: false,
  };

  shouldComponentUpdate(nextProps: CollapsePanelProps) {
    return !shallowEqual(this.props, nextProps);
  }

  handleItemClick = () => {
    const { onItemClick, panelKey } = this.props;

    if (typeof onItemClick === 'function') {
      onItemClick(panelKey);
    }
  };

  handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
      this.handleItemClick();
    }
  };

  render() {
    const {
      className,
      id,
      style,
      contentBoxStyle,
      prefixCls,
      header,
      headerClass,
      children,
      isActive,
      showArrow,
      destroyInactivePanel,
      accordion,
      forceRender,
      openMotion,
      expandIcon,
      extra,
      collapsible,
    } = this.props;

    const disabled = collapsible === 'disabled';

    const headerCls = classNames(`${prefixCls}-header`, {
      [headerClass]: headerClass,
      [`${prefixCls}-header-collapsible-only`]: collapsible === 'header',
    });
    const itemCls = classNames(
      {
        [`${prefixCls}-item`]: true,
        [`${prefixCls}-item-active`]: isActive,
        [`${prefixCls}-item-disabled`]: disabled,
      },
      className,
    );

    let icon: any = <i className="arrow" />;
    if (showArrow && typeof expandIcon === 'function') {
      icon = expandIcon(this.props);
    }

    const ifExtraExist = extra !== null && extra !== undefined && typeof extra !== 'boolean';

    return (
      <div className={itemCls} style={style} id={id}>
        <div
          className={headerCls}
          onClick={() => collapsible !== 'header' && this.handleItemClick()}
          role={accordion ? 'tab' : 'button'}
          tabIndex={disabled ? -1 : 0}
          aria-expanded={isActive}
          onKeyPress={this.handleKeyPress}
        >
          {showArrow && icon}
          {collapsible === 'header' ? (
            <span onClick={this.handleItemClick} className={`${prefixCls}-header-text`}>
              {header}
            </span>
          ) : (
            header
          )}
          {ifExtraExist && <div className={`${prefixCls}-extra`}>{extra}</div>}
        </div>
        <CSSMotion
          visible={isActive}
          leavedClassName={`${prefixCls}-content-hidden`}
          {...openMotion}
          forceRender={forceRender}
          removeOnLeave={destroyInactivePanel}
        >
          {({ className: motionClassName, style: motionStyle }, ref) => {
            return (
              <PanelContent
                ref={ref}
                prefixCls={prefixCls}
                className={motionClassName}
                style={motionStyle}
                contentBoxStyle={contentBoxStyle}
                isActive={isActive}
                forceRender={forceRender}
                role={accordion ? 'tabpanel' : null}
              >
                {children}
              </PanelContent>
            );
          }}
        </CSSMotion>
      </div>
    );
  }
}

export default CollapsePanel;
