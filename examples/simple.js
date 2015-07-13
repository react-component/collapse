'use strict';

require('rc-collapse/assets/index.css');
require('string.prototype.repeat');
var Collapse = require('rc-collapse');
var Panel = Collapse.Panel;
var React = require('react');

var text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function random() {
  return parseInt(Math.random() * 10) + 1;
}

var Test = React.createClass({
  getInitialState() {
    return {
      time: random(),
      accordion: false
    };
  },

  getItems() {
    var items = [];
    for (var i = 0, len = 3; i < len; i++) {
      var key = i + 1;
      items.push(
        <Panel header={`This is panel header ${key}`} key={key}>
          <p>{text.repeat(this.state.time)}</p>
        </Panel>
      );
    }
    items.push(
      <Panel header={`This is panel header 4`} key="4">
        <Collapse defaultActiveKey="1">
          <Panel header={`This is panel nest panel`} key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Panel>
    );

    return items;
  },

  toggle() {
    this.setState({ accordion: !this.state.accordion });
  },

  reRender() {
    this.setState({ time: random() });
  },

  setActivityKey() {
    this.setState({ activeKey: ['2'] });
  },

  render() {
    var accordion = this.state.accordion;
    var btn = accordion ? 'accordion' : 'collapse';
    var activeKey = this.state.activeKey;
    return <div style={{margin: 20, width: 400}}>
      <button onClick={this.reRender}>reRender</button>
      <button onClick={this.toggle}>{btn}</button><br/><br/>
      <button onClick={this.setActivityKey}>active header 2</button><br/><br/>
      <Collapse accordion={accordion} activeKey={activeKey} defaultActiveKey={['4']}>{this.getItems()}</Collapse>
    </div>;
  }
});

React.render(<Test/>, document.getElementById('__react-content'));
