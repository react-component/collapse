import { clsx } from 'clsx';
import React from 'react';
import type { CollapsePanelProps } from './interface';

const PanelContent = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<Readonly<CollapsePanelProps>>
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

  const [rendered, setRendered] = React.useState(isActive || forceRender);

  React.useEffect(() => {
    if (forceRender || isActive) {
      setRendered(true);
    }
  }, [forceRender, isActive]);

  if (!rendered) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={clsx(
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
      <div className={clsx(`${prefixCls}-body`, customizeClassNames?.body)} style={styles?.body}>
        {children}
      </div>
    </div>
  );
});

if (process.env.NODE_ENV !== 'production') {
  PanelContent.displayName = 'PanelContent';
}

export default PanelContent;
