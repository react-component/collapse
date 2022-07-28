import * as React from 'react';
import { Fragment } from 'react';
import '../assets/index.less';
import Collapse, { Panel } from '../src';

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
