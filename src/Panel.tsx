import classNames from 'classnames';
import CSSMotion from 'rc-motion';
import KeyCode from 'rc-util/lib/KeyCode';
import React from 'react';
import type { CollapsePanelProps } from './interface';
import PanelContent from './PanelContent';
import { mergeRefs } from './utils';

const CollapsePanel = React.forwardRef<HTMLDetailsElement, CollapsePanelProps>((props, ref) => {
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

  const detailsRef = React.useRef<HTMLDetailsElement>(null);

  React.useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isActive) {
      detailsRef.current?.setAttribute('open', '');
    } else if (openMotion?.motionDeadline) {
      timer = setTimeout(() => {
        detailsRef.current?.removeAttribute('open');
      }, openMotion.motionDeadline);
    } else {
      detailsRef.current?.removeAttribute('open');
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isActive, openMotion?.motionDeadline]);

  const disabled = collapsible === 'disabled';
  const collapsibleHeader = collapsible === 'header';
  const collapsibleIcon = collapsible === 'icon';

  const ifExtraExist = extra !== null && extra !== undefined && typeof extra !== 'boolean';

  const handleItemClick = (e?: React.MouseEvent<HTMLElement>) => {
    e?.preventDefault();

    onItemClick?.(panelKey!);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.keyCode === KeyCode.ENTER || e.which === KeyCode.ENTER) {
      e.preventDefault();

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

  // ======================== SummaryProps ========================
  const summaryProps: React.HTMLAttributes<HTMLElement> = {
    className: headerClassName,
    'aria-disabled': disabled,
    onKeyDown: handleKeyDown,
  };

  if (!collapsibleHeader && !collapsibleIcon) {
    summaryProps.onClick = handleItemClick;
    summaryProps.tabIndex = disabled ? -1 : undefined;
  }

  // ======================== Render ========================
  return (
    <details {...resetProps} ref={mergeRefs([ref, detailsRef])} className={collapsePanelClassNames}>
      <summary {...summaryProps}>
        {showArrow && iconNode}
        <span
          className={`${prefixCls}-header-text`}
          onClick={collapsible === 'header' ? handleItemClick : undefined}
        >
          {header}
        </span>
        {ifExtraExist && <div className={`${prefixCls}-extra`}>{extra}</div>}
      </summary>

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
    </details>
  );
});

export default CollapsePanel;
