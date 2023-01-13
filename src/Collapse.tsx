import React from 'react';
import classNames from 'classnames';
import toArray from 'rc-util/lib/Children/toArray';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import CollapsePanel from './Panel';
import type { CollapseProps, CollapsibleType } from './interface';

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
  const getNewChild = (child: React.ReactElement, index: number) => {
    if (!child) return null;

    const key = child.key || String(index);

    const {
      header,
      headerClass,
      destroyInactivePanel: childDestroyInactivePanel,
      collapsible: childCollapsible,
    } = child.props;

    let isActive = false;
    if (accordion) {
      isActive = activeKey[0] === key;
    } else {
      isActive = activeKey.indexOf(key) > -1;
    }

    const mergeCollapsible: CollapsibleType = childCollapsible ?? collapsible;

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
      onItemClick: mergeCollapsible === 'disabled' ? null : onClickItem,
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

  const children = toArray(rawChildren).map(getNewChild);

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

export default Object.assign(Collapse, { Panel: CollapsePanel });
