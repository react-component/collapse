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
  warning(
    !children,
    '`children` will be removed in next major version. Please use `items` instead.',
  );

  const mergedChildren = useItems(items, children, {
    prefixCls,
    accordion,
    openMotion,
    expandIcon,
    collapsible,
    destroyInactivePanel,
    onItemClick,
    activeKey,
  });

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const convertItemsToNodes = (items: ItemType[]) =>
    items.map((item, index) => {
      const {
        children,
        key: rawKey,
        collapsible: rawCollapsible,
        onItemClick: rawOnItemClick,
        destroyInactivePanel: rawDestroyInactivePanel,
        expandIcon: rawExpandIcon = expandIcon,
        ...restProps
      } = item;

      // You may be puzzled why you want to convert them all into strings, me too.
      // Maybe: https://github.com/react-component/collapse/blob/aac303a8b6ff30e35060b4f8fecde6f4556fcbe2/src/Collapse.tsx#L15
      const key = String(rawKey ?? index);
      const mergeCollapsible = rawCollapsible ?? collapsible;
      const mergeDestroyInactivePanel = rawDestroyInactivePanel ?? destroyInactivePanel;

      const handleItemClick = (value: React.Key) => {
        if (mergeCollapsible === 'disabled') return;
        onClickItem(value);
        rawOnItemClick?.(value);
      };

      let isActive = false;
      if (accordion) {
        isActive = activeKey[0] === key;
      } else {
        isActive = activeKey.indexOf(key) > -1;
      }

      return (
        <CollapsePanel
          prefixCls={prefixCls}
          key={key}
          panelKey={key}
          isActive={isActive}
          accordion={accordion}
          openMotion={openMotion}
          collapsible={mergeCollapsible}
          onItemClick={handleItemClick}
          destroyInactivePanel={mergeDestroyInactivePanel}
          expandIcon={rawExpandIcon}
          {...restProps}
        >
          {children}
        </CollapsePanel>
      );
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

export default Collapse;
