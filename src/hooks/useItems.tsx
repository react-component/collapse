import { toArray } from '@rc-component/util';
import React from 'react';
import type { CollapsePanelProps, CollapseProps, ItemType } from '../interface';
import CollapsePanel from '../Panel';
import clsx from 'clsx';

type Props = Pick<
  CollapsePanelProps,
  'prefixCls' | 'onItemClick' | 'openMotion' | 'expandIcon' | 'classNames' | 'styles'
> &
  Pick<CollapseProps, 'accordion' | 'collapsible' | 'destroyOnHidden'> & {
    activeKey: React.Key[];
  };

function mergeSemantic<T>(src: T, tgt: T, mergeFn: (a: any, b: any) => any) {
  if (!src || !tgt) {
    return src || tgt;
  }

  const keys = Array.from(new Set([...Object.keys(src), ...Object.keys(tgt)]));
  const result = {};
  keys.forEach((key) => {
    result[key] = mergeFn(src[key], tgt[key]);
  });
  return result;
}

function mergeSemanticClassNames<T>(src: T, tgt: T) {
  return mergeSemantic(src, tgt, (a: string, b: string) => clsx(a, b));
}

function mergeSemanticStyles<T>(src: T, tgt: T) {
  return mergeSemantic(src, tgt, (a: React.CSSProperties, b: React.CSSProperties) => ({
    ...a,
    ...b,
  }));
}

const convertItemsToNodes = (items: ItemType[], props: Props) => {
  const {
    prefixCls,
    accordion,
    collapsible,
    destroyOnHidden,
    onItemClick,
    activeKey,
    openMotion,
    expandIcon,
    classNames: collapseClassNames,
    styles: collapseStyles,
  } = props;

  return items.map((item, index) => {
    const {
      children,
      label,
      key: rawKey,
      collapsible: rawCollapsible,
      onItemClick: rawOnItemClick,
      destroyOnHidden: rawDestroyOnHidden,
      classNames,
      styles,
      ...restProps
    } = item;

    // You may be puzzled why you want to convert them all into strings, me too.
    // Maybe: https://github.com/react-component/collapse/blob/aac303a8b6ff30e35060b4f8fecde6f4556fcbe2/src/Collapse.tsx#L15
    const key = String(rawKey ?? index);
    const mergeCollapsible = rawCollapsible ?? collapsible;
    const mergedDestroyOnHidden = rawDestroyOnHidden ?? destroyOnHidden;

    const handleItemClick = (value: React.Key) => {
      if (mergeCollapsible === 'disabled') {
        return;
      }
      onItemClick(value);
      rawOnItemClick?.(value);
    };

    const isActive = accordion ? activeKey[0] === key : activeKey.indexOf(key) > -1;

    return (
      <CollapsePanel
        {...restProps}
        classNames={mergeSemanticClassNames(collapseClassNames, classNames)}
        styles={mergeSemanticStyles(collapseStyles, styles)}
        prefixCls={prefixCls}
        key={key}
        panelKey={key}
        isActive={isActive}
        accordion={accordion}
        openMotion={openMotion}
        expandIcon={expandIcon}
        header={label}
        collapsible={mergeCollapsible}
        onItemClick={handleItemClick}
        destroyOnHidden={mergedDestroyOnHidden}
      >
        {children}
      </CollapsePanel>
    );
  });
};

/**
 * @deprecated The next major version will be removed
 */
const getNewChild = (
  child: React.ReactElement<CollapsePanelProps>,
  index: number,
  props: Props,
) => {
  if (!child) {
    return null;
  }

  const {
    prefixCls,
    accordion,
    collapsible,
    destroyOnHidden,
    onItemClick,
    activeKey,
    openMotion,
    expandIcon,
    classNames: collapseClassNames,
    styles,
  } = props;

  const key = child.key || String(index);

  const {
    header,
    headerClass,
    destroyOnHidden: childDestroyOnHidden,
    collapsible: childCollapsible,
    onItemClick: childOnItemClick,
  } = child.props;

  const isActive = accordion ? activeKey[0] === key : activeKey.indexOf(key) > -1;

  const mergeCollapsible = childCollapsible ?? collapsible;

  const handleItemClick = (value: React.Key) => {
    if (mergeCollapsible === 'disabled') {
      return;
    }
    onItemClick(value);
    childOnItemClick?.(value);
  };

  const childProps = {
    key,
    panelKey: key,
    header,
    headerClass,
    classNames: collapseClassNames,
    styles,
    isActive,
    prefixCls,
    destroyOnHidden: childDestroyOnHidden ?? destroyOnHidden,
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

  return React.cloneElement<CollapsePanelProps>(child, childProps);
};

function useItems(
  items?: ItemType[],
  rawChildren?: React.ReactNode,
  props?: Props,
): React.ReactElement<CollapsePanelProps>[] {
  if (Array.isArray(items)) {
    return convertItemsToNodes(items, props);
  }
  return toArray(rawChildren).map((child, index) =>
    getNewChild(child as React.ReactElement<CollapsePanelProps>, index, props),
  );
}

export default useItems;
