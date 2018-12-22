import * as React from "react";

export interface Props {
  children: React.ReactChild,
  prefixCls: string,
  activeKey: string | string[],
  defaultActiveKey: string | string[],
  openAnimation: object,
  onChange: (key: any) => void,
  accordion: boolean,
  className: string,
  style: object,
  destroyInactivePanel: boolean,
  expandIcon: (props: object) => React.ReactNode,
}

export default class Collapse extends React.Component<Props> {}
