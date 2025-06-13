import classNames from 'classnames';
import KeyCode from '@rc-component/util/lib/KeyCode';
import React from 'react';
import type { CollapsePanelProps } from './interface';
import PanelContent from './PanelContent';

const CollapsePanel = React.forwardRef<HTMLDetailsElement, CollapsePanelProps>((props, ref) => {
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
    ...resetProps
  } = props;

  const disabled = collapsible === 'disabled';

  const ifExtraExist = extra !== null && extra !== undefined && typeof extra !== 'boolean';

  const collapsibleProps = {
    onClick: (e: React.MouseEvent) => {
      onItemClick?.(panelKey);
      e.stopPropagation();
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
    // ? 修改为details实现后动画是作用在details元素上 需要将motionName设置在details上
    openMotion?.motionName,
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
  const headerProps: React.HTMLAttributes<HTMLElement> = {
    className: headerClassName,
    style: styles?.header,
    ...(['header', 'icon'].includes(collapsible) ? {} : collapsibleProps),
  };

  // ======================== Render ========================
  return (
    <details {...resetProps} ref={ref} className={collapsePanelClassNames} open={isActive}>
      <summary {...headerProps}>
        {showArrow && iconNode}
        <span
          className={classNames(`${prefixCls}-title`, customizeClassNames?.title)}
          style={styles?.title}
          {...(collapsible === 'header' ? collapsibleProps : {})}
        >
          {header}
        </span>
        {ifExtraExist && <div className={`${prefixCls}-extra`}>{extra}</div>}
      </summary>
      <PanelContent
        prefixCls={prefixCls}
        classNames={customizeClassNames}
        styles={styles}
        isActive={isActive}
        forceRender={forceRender}
        role={accordion ? 'tabpanel' : undefined}
      >
        {children}
      </PanelContent>
    </details>
  );
});

export default CollapsePanel;
