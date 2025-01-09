import React from 'react';
import type { CollapsePanelProps, CollapseProps, ItemType } from '../interface';
import CollapsePanel from '../Panel';

type Props = Pick<CollapsePanelProps, 'prefixCls' | 'onItemClick' | 'openMotion' | 'expandIcon'> &
  Pick<CollapseProps, 'accordion' | 'collapsible' | 'destroyInactivePanel'> & {
    activeKey: React.Key[];
  };

const convertItemsToNodes = (items: ItemType[], props: Props) => {
  const {
    prefixCls,
    accordion,
    collapsible,
    destroyInactivePanel,
    onItemClick,
    activeKey,
    openMotion,
    expandIcon,
  } = props;

  return items.map((item, index) => {
    const {
      children,
      label,
      key: rawKey,
      collapsible: rawCollapsible,
      onItemClick: rawOnItemClick,
      destroyInactivePanel: rawDestroyInactivePanel,
      ...restProps
    } = item;

    // You may be puzzled why you want to convert them all into strings, me too.
    // Maybe: https://github.com/react-component/collapse/blob/aac303a8b6ff30e35060b4f8fecde6f4556fcbe2/src/Collapse.tsx#L15
    const key = String(rawKey ?? index);
    const mergeCollapsible = rawCollapsible ?? collapsible;
    const mergeDestroyInactivePanel = rawDestroyInactivePanel ?? destroyInactivePanel;

    const handleItemClick = (value: React.Key) => {
      if (mergeCollapsible === 'disabled') return;
      onItemClick(value);
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
        {...restProps}
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
        destroyInactivePanel={mergeDestroyInactivePanel}
      >
        {children}
      </CollapsePanel>
    );
  });
};

function useItems(items?: ItemType[], props?: Props): React.ReactElement<CollapsePanelProps>[] {
  return convertItemsToNodes(items, props);
}

export default useItems;
