import * as React from 'react';

export interface CollapseProps {
  children?: React.ReactChild;
  prefixCls?: string;
  activeKey?: string | string[];
  defaultActiveKey?: string | string[];
  openAnimation?: object;
  onChange?: (key: any) => void;
  accordion?: boolean;
  className?: string;
  style?: object;
  destroyInactivePanel?: boolean;
  expandIcon?: (props: object) => React.ReactNode;
}

export interface CollapsePanelProps {
  id?: string;
  header?: string | React.ReactNode;
  prefixCls?: string;
  headerClass?: string;
  showArrow?: boolean;
  className?: string;
  style?: object;
  isActive?: boolean;
  openAnimation?: object;
  disabled?: boolean;
  destroyInactivePanel?: boolean;
  accordion?: boolean;
  forceRender?: boolean;
  extra?: string | React.ReactNode;
  onItemClick?: (panelKey: string | number) => void;
  expandIcon?: (props: object) => React.ReactNode;
  panelKey?: string | number;
  role?: string;
}
