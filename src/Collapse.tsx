import classNames from 'classnames';
import useMergedState from '@rc-component/util/lib/hooks/useMergedState';
import warning from '@rc-component/util/lib/warning';
import React from 'react';
import useItems from './hooks/useItems';
import type { CollapseProps } from './interface';
import CollapsePanel from './Panel';
import pickAttrs from '@rc-component/util/lib/pickAttrs';

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

  const [activeKey, setActiveKey] = useMergedState<React.Key | React.Key[], React.Key[]>([], {
    value: rawActiveKey,
    onChange: (v) => onChange?.(v as React.Key[]),
    defaultValue: defaultActiveKey,
    postState: getActiveKeysArray,
  });

  const onItemClick = (key: React.Key) =>
    // ? 用于解决react状态与details[open]状态不一致的问题
    // ? 具体参考issue https://github.com/facebook/react/issues/15486
    React.startTransition(() => {
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
    });

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
    onItemClick:
      'startViewTransition' in document && typeof React.startTransition === 'function'
        ? (key) => document.startViewTransition(() => onItemClick(key))
        : onItemClick,
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
