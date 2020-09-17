import 'rc-collapse/assets/index.less';
import 'string.prototype.repeat';
import Collapse, { Panel } from 'rc-collapse';
import React from 'react';
import ReactDOM from 'react-dom';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function random() {
  return parseInt(Math.random() * 10, 10) + 1;
}

class Test extends React.Component {
  state = {
    time: random(),
    accordion: false,
    activeKey: ['4'],
  }

  onChange = (activeKey) => {
    this.setState({
      activeKey,
    });
  }

  getItems() {
    const items = [];
    for (let i = 0, len = 3; i < len; i++) {
      const key = i + 1;
      items.push(
        <Panel header={`This is panel header ${key}`} key={key} disabled={i === 0}>
          <p>{text.repeat(this.state.time)}</p>
        </Panel>
      );
    }
    items.push(
      <Panel headerCollapsibleOnly header={`This is panel header 4`} key="4">
        <Collapse defaultActiveKey="1">
          <Panel header={`This is panel nest panel`} key="1" id="header-test">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Panel>
    );

    items.push(
      <Panel header={`This is panel header 5`} key="5">
        <Collapse defaultActiveKey="1">
          <Panel header={`This is panel nest panel`} key="1" id="another-test">
            <form>
              <label htmlFor="test">Name:&nbsp;</label>
              <input type="text" id="test"/>
            </form>
          </Panel>
        </Collapse>
      </Panel>
    );

    items.push(
      <Panel header={`This is panel header 6`} key="6" extra={<span>Extra Node</span>}>
        <p>Panel with extra</p>
      </Panel>
    );

    return items;
  }

  setActivityKey = () => {
    this.setState({
      activeKey: ['2'],
    });
  }

  reRender = () => {
    this.setState({
      time: random(),
    });
  }

  toggle = () => {
    this.setState({
      accordion: !this.state.accordion,
    });
  }

  render() {
    const accordion = this.state.accordion;
    const btn = accordion ? 'Mode: accordion' : 'Mode: collapse';
    const activeKey = this.state.activeKey;
    return (<div style={{ margin: 20, width: 400 }}>
      <button onClick={this.reRender}>reRender</button>
      <button onClick={this.toggle}>{btn}</button>
      <br/><br/>
      <button onClick={this.setActivityKey}>active header 2</button>
      <br/><br/>
      <Collapse
        accordion={accordion}
        onChange={this.onChange}
        activeKey={activeKey}
      >
        {this.getItems()}
      </Collapse>
    </div>);
  }
}

ReactDOM.render(<Test/>, document.getElementById('__react-content'));
