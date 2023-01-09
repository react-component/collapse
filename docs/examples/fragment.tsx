import * as React from 'react';
import { Fragment } from 'react';
import Collapse, { Panel } from 'rc-collapse';
import '../../assets/index.less';

const Test = () => (
  <Collapse>
    <Panel header="title">content</Panel>
    <Panel header="title">content</Panel>
    <Fragment>
      <Panel header="title">content</Panel>
      <Panel header="title">content</Panel>
    </Fragment>
    <Fragment>
      <Fragment>
        <Panel header="title">content</Panel>
        <Panel header="title">content</Panel>
      </Fragment>
    </Fragment>
  </Collapse>
);

export default Test;
