import classNames from 'classnames';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import React from 'react';
import useItems from './hooks/useItems';
import type { CollapseProps } from './interface';
import CollapsePanel from './Panel';

function getActiveKeysArray(activeKey: React.Key | React.Key[]) {
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
    destroyInactivePanel = false,
    style,
    accordion,
    className,
    collapsible,
    openMotion,
    expandIcon,
    activeKey: rawActiveKey,
    defaultActiveKey,
    onChange,
    items,
  } = props;

  const collapseClassName = classNames(prefixCls, className);

  const [activeKey, setActiveKey] = useMergedState<React.Key | React.Key[], React.Key[]>([], {
    value: rawActiveKey,
    onChange: (v) => onChange?.(v),
    defaultValue: defaultActiveKey,
    postState: getActiveKeysArray,
  });

  const onItemClick = (key: React.Key) =>
    setActiveKey(() => {
      if (accordion) {
        return activeKey[0] === key ? [] : [key];
      }

      const index = activeKey.indexOf(key);
      const isActive = index > -1;
      if (isActive) {
        return activeKey.filter((item) => item !== key);
      }

      return [...activeKey, key];
    });

  // ======================== Children ========================
  const mergedChildren = useItems(items, {
    prefixCls,
    accordion,
    openMotion,
    expandIcon,
    collapsible,
    destroyInactivePanel,
    onItemClick,
    activeKey,
  });

  // ======================== Render ========================
  return (
    <div
      ref={ref}
      className={collapseClassName}
      style={style}
      role={accordion ? 'tablist' : undefined}
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
