'use strict';

require('rc-collapse/assets/index.css');
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
      items.push(
        <Panel header={`This is panel header ${i + 1}`} key={i}>
          <p>{text.repeat(this.state.time)}</p>
        </Panel>
      );
    }

    return items;
  },

  toggle() {
    this.setState({ accordion: !this.state.accordion });
  },

  reRender() {
    this.setState({ time: random() });
  },

  render() {
    var accordion = this.state.accordion;
    var btn = accordion ? 'accordion' : 'collapse';
    return <div style={{margin: 20, width: 400}}>
      <button onClick={this.reRender}>reRender</button>
      <button onClick={this.toggle}>{btn}</button><br/><br/>
      <Collapse accordion={accordion}>{this.getItems()}</Collapse>
    </div>;
  }
});

React.render(<Test/>, document.getElementById('__react-content'));
