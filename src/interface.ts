import type { CSSMotionProps } from '@rc-component/motion';
import type * as React from 'react';

export type CollapsibleType = 'header' | 'icon' | 'disabled';
export type HeadingLevelType = 1 | 2 | 3 | 4 | 5 | 6;

export interface ItemType
  extends Omit<
    CollapsePanelProps,
    | 'header' // alias of label
    | 'prefixCls'
    | 'panelKey' // alias of key
    | 'isActive'
    | 'accordion'
    | 'openMotion'
    | 'expandIcon'
  > {
  key?: CollapsePanelProps['panelKey'];
  label?: CollapsePanelProps['header'];
  ref?: React.RefObject<HTMLDivElement>;
}

export interface CollapseProps {
  prefixCls?: string;
  activeKey?: React.Key | React.Key[];
  defaultActiveKey?: React.Key | React.Key[];
  openMotion?: CSSMotionProps;
  onChange?: (key: React.Key[]) => void;
  accordion?: boolean;
  className?: string;
  style?: object;
  destroyOnHidden?: boolean;
  expandIcon?: (props: object) => React.ReactNode;
  collapsible?: CollapsibleType;
  children?: React.ReactNode;
  /**
   * Collapse items content
   * @since 3.6.0
   */
  items?: ItemType[];
  classNames?: Partial<Record<SemanticName, string>>;
  styles?: Partial<Record<SemanticName, React.CSSProperties>>;
  headingLevel?: HeadingLevelType;
  id?: string;
}

export type SemanticName = 'header' | 'title' | 'body' | 'icon';

export interface CollapsePanelProps extends React.DOMAttributes<HTMLDivElement> {
  id?: string;
  header?: React.ReactNode;
  prefixCls?: string;
  headerClass?: string;
  showArrow?: boolean;
  className?: string;
  classNames?: Partial<Record<SemanticName, string>>;
  style?: object;
  styles?: Partial<Record<SemanticName, React.CSSProperties>>;
  isActive?: boolean;
  openMotion?: CSSMotionProps;
  destroyOnHidden?: boolean;
  accordion?: boolean;
  forceRender?: boolean;
  extra?: React.ReactNode;
  onItemClick?: (panelKey: React.Key) => void;
  expandIcon?: (props: object) => React.ReactNode;
  panelKey?: React.Key;
  role?: string;
  collapsible?: CollapsibleType;
  children?: React.ReactNode;
  headingLevel?: HeadingLevelType;
}
