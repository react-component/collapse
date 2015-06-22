'use strict';

require('./simple.css');
require('../assets/index.css');
var Accordion = require('../src/Accordion');
var React = require('react');

var items = [];

var text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
for (var i = 0, len = 3; i < len; i++) {
  items.push({
    header: 'This is panel header ' + i,
    content: (
      <p>{text.repeat(i + 1)}</p>
    )
  });
}

React.render(<Accordion items={items} />,
  document.getElementById('__react-content'));
