import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'rc-collapse/assets/index.less';
import Collapse, { Panel } from 'rc-collapse';

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

ReactDOM.render(<App />, document.getElementById('__react-content'));
