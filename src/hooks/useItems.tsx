import toArray from 'rc-util/lib/Children/toArray';
import React from 'react';
import type { CollapsePanelProps, ItemType } from '../interface';
import CollapsePanel from '../Panel';

const convertItemsToNodes = (items: ItemType[]) =>
  items.map((item, index) => {
    const { label, key: rawKey, ...restProps } = item;

    const key = String(rawKey ?? index);

    return <CollapsePanel {...restProps} key={key} panelKey={key} header={label} />;
  });

function useItems(
  items?: ItemType[],
  rawChildren?: React.ReactNode,
): React.ReactElement<CollapsePanelProps>[] {
  if (Array.isArray(items)) {
    return convertItemsToNodes(items);
  }

  return toArray(rawChildren);
}

export default useItems;
