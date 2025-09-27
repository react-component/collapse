import { clsx } from 'clsx';
import { useControlledState, useEvent } from '@rc-component/util';
import warning from '@rc-component/util/lib/warning';
import React from 'react';
import useItems from './hooks/useItems';
import type { CollapseProps } from './interface';
import CollapsePanel from './Panel';
import pickAttrs from '@rc-component/util/lib/pickAttrs';

function getActiveKeysArray(activeKey: React.Key | React.Key[]): React.Key[] {
  let currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    const activeKeyType = typeof currentActiveKey;
    currentActiveKey =
      activeKeyType === 'number' || activeKeyType === 'string' ? [currentActiveKey] : [];
  }
  return currentActiveKey.map((key) => String(key));
}

const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>((props, ref) => {
  const {
    prefixCls = 'rc-collapse',
    destroyOnHidden = false,
    style,
    accordion,
    className,
    children,
    collapsible,
    openMotion,
    expandIcon,
    activeKey: rawActiveKey,
    defaultActiveKey,
    onChange,
    items,
    classNames: customizeClassNames,
    styles,
  } = props;

  const collapseClassName = clsx(prefixCls, className);

  const [internalActiveKey, setActiveKey] = useControlledState<React.Key[] | React.Key>(
    defaultActiveKey,
    rawActiveKey,
  );

  const activeKey = getActiveKeysArray(internalActiveKey);

  const triggerActiveKey = useEvent((next) => {
    const nextKeys = getActiveKeysArray(next);
    setActiveKey(nextKeys);
    onChange?.(nextKeys);
  });

  const onItemClick = (key: React.Key) => {
    if (accordion) {
      triggerActiveKey(activeKey[0] === key ? [] : [key]);
    } else {
      triggerActiveKey(
        activeKey.includes(key) ? activeKey.filter((item) => item !== key) : [...activeKey, key],
      );
    }
  };

  // ======================== Children ========================
  warning(
    !children,
    '[rc-collapse] `children` will be removed in next major version. Please use `items` instead.',
  );

  const mergedChildren = useItems(items, children, {
    prefixCls,
    accordion,
    openMotion,
    expandIcon,
    collapsible,
    destroyOnHidden,
    onItemClick,
    activeKey,
    classNames: customizeClassNames,
    styles,
  });

  // ======================== Render ========================
  return (
    <div
      ref={ref}
      className={collapseClassName}
      style={style}
      role={accordion ? 'tablist' : undefined}
      {...pickAttrs(props, { aria: true, data: true })}
    >
      {mergedChildren}
    </div>
  );
});

export default Object.assign(Collapse, {
  /**
   * @deprecated use `items` instead, will be removed in `v4.0.0`
   */
  Panel: CollapsePanel,
});
