import classNames from 'classnames';
import CSSMotion from '@rc-component/motion';
import KeyCode from '@rc-component/util/lib/KeyCode';
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
    destroyOnHidden,
    children,
    headingLevel,
    id,
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
      className={classNames(`${prefixCls}-expand-icon`, customizeClassNames?.icon)}
      style={styles?.icon}
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
      [`${prefixCls}-collapsible-${collapsible}`]: !!collapsible,
    },
    customizeClassNames?.header,
  );

  // ======================== HeaderProps ========================
  const headerProps: React.HTMLAttributes<HTMLDivElement> = {
    className: headerClassName,
    style: styles?.header,
    ...(['header', 'icon'].includes(collapsible) ? {} : collapsibleProps),
  };

  // ======================== Render ========================
  return (
    <div {...resetProps} ref={ref} className={collapsePanelClassNames} id={id}>
      <div
        className={`${prefixCls}-header-wrapper`}
        role={headingLevel ? 'heading' : undefined}
        aria-level={headingLevel}
      >
        <div {...headerProps} id={`${id}__header`} aria-controls={`${id}__content`}>
          {showArrow && iconNode}
          <span
            className={classNames(`${prefixCls}-title`, customizeClassNames?.title)}
            style={styles?.title}
            {...(collapsible === 'header' ? collapsibleProps : {})}
          >
            {header}
          </span>
          {ifExtraExist && <div className={`${prefixCls}-extra`}>{extra}</div>}
        </div>
      </div>
      <CSSMotion
        visible={isActive}
        leavedClassName={`${prefixCls}-panel-hidden`}
        {...openMotion}
        forceRender={forceRender}
        removeOnLeave={destroyOnHidden}
      >
        {({ className: motionClassName, style: motionStyle }, motionRef) => {
          return (
            <PanelContent
              ref={motionRef}
              id={`${id}__content`}
              aria-labelledby={`${id}__header`}
              prefixCls={prefixCls}
              className={motionClassName}
              classNames={customizeClassNames}
              style={motionStyle}
              styles={styles}
              isActive={isActive}
              forceRender={forceRender}
              role={accordion ? 'tabpanel' : undefined}
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
