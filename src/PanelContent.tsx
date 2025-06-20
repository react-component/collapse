import classnames from 'classnames';
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
    id,
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
      id={id}
      aria-labelledby={props['aria-labelledby']}
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
