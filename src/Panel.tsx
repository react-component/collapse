/* eslint-disable react/prop-types */
import classNames from 'classnames';
import CSSMotion from 'rc-motion';
import * as React from 'react';
import shallowEqual from 'shallowequal';
import type { CollapsePanelProps } from './interface';
import PanelContent from './PanelContent';

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

  onItemClick = () => {
    const { onItemClick, panelKey } = this.props;

    if (typeof onItemClick === 'function') {
      onItemClick(panelKey);
    }
  };

  handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
      this.onItemClick();
    }
  };

  renderIcon = () => {
    const { showArrow, expandIcon, prefixCls, collapsible } = this.props;
    if (!showArrow) {
      return null;
    }

    const iconNode =
      typeof expandIcon === 'function' ? expandIcon(this.props) : <i className="arrow" />;

    return (
      iconNode && (
        <div
          className={`${prefixCls}-expand-icon`}
          onClick={collapsible === 'header' || collapsible === 'icon' ? this.onItemClick : null}
        >
          {iconNode}
        </div>
      )
    );
  };

  renderTitle = () => {
    const { header, prefixCls, collapsible } = this.props;

    return (
      <span
        className={`${prefixCls}-header-text`}
        onClick={collapsible === 'header' ? this.onItemClick : null}
      >
        {header}
      </span>
    );
  };

  render() {
    const {
      className,
      id,
      style,
      prefixCls,
      headerClass,
      children,
      isActive,
      destroyInactivePanel,
      accordion,
      forceRender,
      openMotion,
      extra,
      collapsible,
      ...rest
    } = this.props;

    const disabled = collapsible === 'disabled';
    const collapsibleHeader = collapsible === 'header';
    const collapsibleIcon = collapsible === 'icon';

    const itemCls = classNames(
      {
        [`${prefixCls}-item`]: true,
        [`${prefixCls}-item-active`]: isActive,
        [`${prefixCls}-item-disabled`]: disabled,
      },
      className,
    );

    const headerCls = classNames(`${prefixCls}-header`, {
      [headerClass]: headerClass,
      [`${prefixCls}-header-collapsible-only`]: collapsibleHeader,
      [`${prefixCls}-icon-collapsible-only`]: collapsibleIcon,
    });

    /** header 节点属性 */
    const headerProps: React.HTMLAttributes<HTMLDivElement> = {
      className: headerCls,
      'aria-expanded': isActive,
      'aria-disabled': disabled,
      onKeyPress: this.handleKeyPress,
    };

    if (!collapsibleHeader && !collapsibleIcon) {
      headerProps.onClick = this.onItemClick;
      headerProps.role = accordion ? 'tab' : 'button';
      headerProps.tabIndex = disabled ? -1 : 0;
    }

    const ifExtraExist = extra !== null && extra !== undefined && typeof extra !== 'boolean';

    // https://github.com/ant-design/ant-design/pull/37419#issuecomment-1238812797
    delete rest.header;
    delete rest.panelKey;
    delete rest.onItemClick;
    delete rest.showArrow;
    delete rest.expandIcon;

    return (
      <div {...rest} className={itemCls} style={style} id={id}>
        <div {...headerProps}>
          {this.renderIcon()}
          {this.renderTitle()}
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
