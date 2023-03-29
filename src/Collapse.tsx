import classNames from 'classnames';
import toArray from 'rc-util/lib/Children/toArray';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import warning from 'rc-util/lib/warning';
import React from 'react';
import type { CollapsePanelProps, CollapseProps, CollapsibleType, ItemType } from './interface';
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
    children: rawChildren,
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

  const onClickItem = (key: React.Key) =>
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
    !rawChildren,
    '`children` will be removed in next major version. Please use `items` instead.',
  );

  const getNewChild = (child: React.ReactElement<CollapsePanelProps>, index: number) => {
    if (!child) return null;

    const key = child.key || String(index);

    const {
      header,
      headerClass,
      destroyInactivePanel: childDestroyInactivePanel,
      collapsible: childCollapsible,
      onItemClick: childOnItemClick,
    } = child.props;

    let isActive = false;
    if (accordion) {
      isActive = activeKey[0] === key;
    } else {
      isActive = activeKey.indexOf(key) > -1;
    }

    const mergeCollapsible: CollapsibleType = childCollapsible ?? collapsible;

    const handleItemClick = (value: React.Key) => {
      if (mergeCollapsible === 'disabled') return;
      onClickItem(value);
      childOnItemClick?.(value);
    };

    const childProps = {
      key,
      panelKey: key,
      header,
      headerClass,
      isActive,
      prefixCls,
      destroyInactivePanel: childDestroyInactivePanel ?? destroyInactivePanel,
      openMotion,
      accordion,
      children: child.props.children,
      onItemClick: handleItemClick,
      expandIcon,
      collapsible: mergeCollapsible,
    };

    // https://github.com/ant-design/ant-design/issues/20479
    if (typeof child.type === 'string') {
      return child;
    }

    Object.keys(childProps).forEach((propName) => {
      if (typeof childProps[propName] === 'undefined') {
        delete childProps[propName];
      }
    });

    return React.cloneElement(child, childProps);
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const convertItemsToNodes = (items: ItemType[]) =>
    items.map((item, index) => {
      const {
        children,
        key: rawKey,
        collapsible: rawCollapsible,
        onItemClick: rawOnItemClick,
        destroyInactivePanel: rawDestroyInactivePanel,
        ...restProps
      } = item;

      const key = rawKey || String(index);
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
          collapsible={mergeCollapsible}
          onItemClick={handleItemClick}
          destroyInactivePanel={mergeDestroyInactivePanel}
          {...restProps}
        >
          {children}
        </CollapsePanel>
      );
    });

  const children = Array.isArray(items)
    ? convertItemsToNodes(items)
    : toArray(rawChildren).map(getNewChild);

  // ======================== Render ========================
  return (
    <div
      ref={ref}
      className={collapseClassName}
      style={style}
      role={accordion ? 'tablist' : undefined}
    >
      {children}
    </div>
  );
});

export default Object.assign(Collapse, {
  /**
   * @deprecated use `items` instead, will be removed in `v4.0.0`
   */
  Panel: CollapsePanel,
});
