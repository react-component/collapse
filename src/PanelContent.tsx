/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import * as React from 'react';
import classnames from 'classnames';
import { CollapsePanelProps } from './interface';

const PanelContent = React.forwardRef<
  HTMLDivElement,
  CollapsePanelProps & { children: React.ReactNode }
>((props, ref) => {
  const { prefixCls, className, style, children, isActive, role } = props;

  return (
    <div
      ref={ref}
      className={classnames(
        `${prefixCls}-content`,
        {
          [`${prefixCls}-content-active`]: isActive,
          [`${prefixCls}-content-inactive`]: !isActive,
        },
        className,
      )}
      style={style}
      role={role}
    >
      <div className={`${prefixCls}-content-box`}>{children}</div>
    </div>
  );
});

PanelContent.displayName = 'PanelContent';

export default PanelContent;
