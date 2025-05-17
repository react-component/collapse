import React from 'react';
import Collapse from './Collapse';

export type { CollapsePanelProps, CollapseProps } from './interface';

export default Collapse;

/**
 * @deprecated use `items` instead, will be removed in `v4.0.0`
 */
export const { Panel } = Collapse;
