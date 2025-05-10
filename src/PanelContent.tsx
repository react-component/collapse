import classnames from 'classnames';
import React from 'react';
import type { CollapsePanelProps } from './interface';

const PanelContent = React.forwardRef<
  HTMLDivElement,
  CollapsePanelProps & { children: React.ReactNode }
>((props, ref) => {
  const {
    prefixCls,
    forceRender,
    className,
    style,
    children,
    isActive,
    role,
    classNames: customizeClassNames,
    styles,
  } = props;

  const rendered = isActive || forceRender;

  if (!rendered) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={classnames(
        `${prefixCls}-panel`,
        {
          [`${prefixCls}-panel-active`]: isActive,
          [`${prefixCls}-panel-inactive`]: !isActive,
        },
        className,
      )}
      style={style}
      role={role}
    >
      <div
        className={classnames(`${prefixCls}-body`, customizeClassNames?.body)}
        style={styles?.body}
      >
        {children}
      </div>
    </div>
  );
});

PanelContent.displayName = 'PanelContent';

export default PanelContent;
