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
    classNames: customizeClassNames = {},
    styles = {},
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

  const ifExtraExist = extra !== null && extra !== undefined && typeof extra !== 'boolean';

  const collapsibleProps = {
    onClick: () => {
      onItemClick?.(panelKey);
    },
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.keyCode === KeyCode.ENTER || e.which === KeyCode.ENTER) {
        onItemClick?.(panelKey);
      }
    },
    role: accordion ? 'tab' : 'button',
    ['aria-expanded']: isActive,
    ['aria-disabled']: disabled,
    tabIndex: disabled ? -1 : 0,
  };

  // ======================== Icon ========================
  const iconNodeInner =
    typeof expandIcon === 'function' ? expandIcon(props) : <i className="arrow" />;
  const iconNode = iconNodeInner && (
    <div
      className={`${prefixCls}-expand-icon`}
      {...(['header', 'icon'].includes(collapsible) ? collapsibleProps : {})}
    >
      {iconNodeInner}
    </div>
  );

  const collapsePanelClassNames = classNames(
    `${prefixCls}-item`,
    {
      [`${prefixCls}-item-active`]: isActive,
      [`${prefixCls}-item-disabled`]: disabled,
    },
    className,
  );

  const headerClassName = classNames(
    headerClass,
    `${prefixCls}-header`,
    {
      [`${prefixCls}-header-collapsible-only`]: collapsible === 'header',
      [`${prefixCls}-icon-collapsible-only`]: collapsible === 'icon',
    },
    customizeClassNames.header,
  );

  // ======================== HeaderProps ========================
  const headerProps: React.HTMLAttributes<HTMLDivElement> = {
    className: headerClassName,
    style: styles.header,
    ...(['header', 'icon'].includes(collapsible) ? {} : collapsibleProps),
  };

  // ======================== Render ========================
  return (
    <div {...resetProps} ref={ref} className={collapsePanelClassNames}>
      <div {...headerProps}>
        {showArrow && iconNode}
        <span
          className={`${prefixCls}-header-text`}
          {...(collapsible === 'header' ? collapsibleProps : {})}
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
              classNames={customizeClassNames}
              style={motionStyle}
              styles={styles}
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
