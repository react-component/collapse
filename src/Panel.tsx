import classNames from 'classnames';
import CSSMotion from 'rc-motion';
import KeyCode from 'rc-util/lib/KeyCode';
import React from 'react';
import type { CollapsePanelProps } from './interface';
import PanelContent from './PanelContent';

const CollapsePanel = React.forwardRef<HTMLDivElement, CollapsePanelProps>((props, ref) => {
  const {
    showArrow = true,
    headerClass,
    isActive,
    onItemClick,
    forceRender,
    className,
    prefixCls,
    collapsible,
    accordion,
    panelKey,
    extra,
    header,
    expandIcon,
    openMotion,
    destroyInactivePanel,
    children,
    ...resetProps
  } = props;

  const disabled = collapsible === 'disabled';
  const collapsibleHeader = collapsible === 'header';
  const collapsibleIcon = collapsible === 'icon';

  const ifExtraExist = extra !== null && extra !== undefined && typeof extra !== 'boolean';

  const handleItemClick = () => {
    onItemClick?.(panelKey!);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.keyCode === KeyCode.ENTER || e.which === KeyCode.ENTER) {
      handleItemClick();
    }
  };

  // ======================== Icon ========================
  let iconNode = typeof expandIcon === 'function' ? expandIcon(props) : <i className="arrow" />;
  if (iconNode) {
    iconNode = (
      <div
        className={`${prefixCls}-expand-icon`}
        onClick={['header', 'icon'].includes(collapsible as string) ? handleItemClick : undefined}
      >
        {iconNode}
      </div>
    );
  }

  const collapsePanelClassNames = classNames(
    {
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-active`]: isActive,
      [`${prefixCls}-item-disabled`]: disabled,
    },
    className,
  );

  const headerClassName = classNames(headerClass, {
    [`${prefixCls}-header`]: true,
    [`${prefixCls}-header-collapsible-only`]: collapsibleHeader,
    [`${prefixCls}-icon-collapsible-only`]: collapsibleIcon,
  });

  // ======================== HeaderProps ========================
  const headerProps: React.HTMLAttributes<HTMLDivElement> = {
    className: headerClassName,
    'aria-expanded': isActive,
    'aria-disabled': disabled,
    onKeyDown: handleKeyDown,
  };

  if (!collapsibleHeader && !collapsibleIcon) {
    headerProps.onClick = handleItemClick;
    headerProps.role = accordion ? 'tab' : 'button';
    headerProps.tabIndex = disabled ? -1 : 0;
  }

  // ======================== Render ========================
  return (
    <div {...resetProps} ref={ref} className={collapsePanelClassNames}>
      <div {...headerProps}>
        {showArrow && iconNode}
        <span
          className={`${prefixCls}-header-text`}
          onClick={collapsible === 'header' ? handleItemClick : undefined}
        >
          {header}
        </span>
        {ifExtraExist && <div className={`${prefixCls}-extra`}>{extra}</div>}
      </div>
      <CSSMotion
        visible={isActive}
        leavedClassName={`${prefixCls}-content-hidden`}
        {...openMotion}
        forceRender={forceRender}
        removeOnLeave={destroyInactivePanel}
      >
        {({ className: motionClassName, style: motionStyle }, motionRef) => {
          return (
            <PanelContent
              ref={motionRef}
              prefixCls={prefixCls}
              className={motionClassName}
              style={motionStyle}
              isActive={isActive}
              forceRender={forceRender}
              role={accordion ? 'tabpanel' : void 0}
            >
              {children}
            </PanelContent>
          );
        }}
      </CSSMotion>
    </div>
  );
});

export default CollapsePanel;
