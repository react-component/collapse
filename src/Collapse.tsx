import classNames from 'classnames';
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

  const collapseClassName = classNames(prefixCls, className);

  const [internalActiveKey, setActiveKey] = useControlledState<React.Key[] | React.Key>(
    defaultActiveKey,
    rawActiveKey,
  );
  const activeKey = getActiveKeysArray(internalActiveKey);

  const triggerActiveKey = useEvent((next) => {
    setActiveKey(next);
    if (next !== activeKey) {
      onChange?.(next);
    }
  });

  const onItemClick = (key: React.Key) => {
    let keys = [...activeKey, key];
    if (accordion) {
      keys = activeKey[0] === key ? [] : [key];
    }
    const index = activeKey.indexOf(key);
    const isActive = index > -1;
    if (isActive) {
      keys = activeKey.filter((item) => item !== key);
    }
    triggerActiveKey(keys);
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
