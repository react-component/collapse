import Collapse, { Panel } from 'rc-collapse';
import * as React from 'react';
import { Fragment } from 'react';
import '../../assets/index.less';

const App = () => (
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

export default App;
