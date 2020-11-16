import * as React from 'react';
import { CSSMotionProps } from 'rc-motion';

export interface CollapseProps {
  prefixCls?: string;
  activeKey?: React.Key | React.Key[];
  defaultActiveKey?: React.Key | React.Key[];
  openMotion?: CSSMotionProps;
  onChange?: (key: React.Key | React.Key[]) => void;
  accordion?: boolean;
  className?: string;
  style?: object;
  destroyInactivePanel?: boolean;
  expandIcon?: (props: object) => React.ReactNode;
  headerCollapsableOnly?: boolean;
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
  openMotion?: CSSMotionProps;
  disabled?: boolean;
  destroyInactivePanel?: boolean;
  accordion?: boolean;
  forceRender?: boolean;
  extra?: string | React.ReactNode;
  onItemClick?: (panelKey: string | number) => void;
  expandIcon?: (props: object) => React.ReactNode;
  panelKey?: string | number;
  role?: string;
  headerCollapsableOnly?: boolean;
}
