'use strict';

const React = require('react');
const classnames = require('classnames');

module.exports = React.createClass({

  displayName: 'Accordion',

  propTypes: {
    items: React.PropTypes.array,
    prefixCls: React.PropTypes.string,
    active: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      items: [],
      prefixCls: 'rc-accordion',
      active: 0
    };
  },

  getInitialState() {
    return {
      active: this.props.active,
      height: 'auto'
    };
  },

  handleClickItem(i) {
    return (e) => {
      if (i === this.state.active) {
        return this.setState({ active: -1 });
      }
      let height = e.target.nextSibling.scrollHeight;

      this.setState({ active: i, height: height });
    };
  },

  getItems() {
    let prefixCls = this.props.prefixCls;
    let active = this.state.active;
    return this.props.items.map((item, i) => {
      let headerCls = `${prefixCls}-header`;
      let key = item.key || i;
      let isActive = active === i;
      let contentCls = classnames({
        [`${prefixCls}-content`]: true,
        [`${prefixCls}-content-active`]: isActive
      });

      let style = isActive ? { height: this.state.height } : {};
      let ref = isActive ? 'active' : null;

      let itemCls = classnames({
        [`${prefixCls}-item`]: true,
        [`${prefixCls}-item-active`]: isActive
      });
      return (
        <div className={itemCls} key={key}>
          <div className={headerCls} onClick={this.handleClickItem(i)}>{item.header}</div>
          <div className={contentCls} style={style} ref={ref}>{item.content}</div>
        </div>
      );
    });
  },

  componentDidMount() {
    let el = React.findDOMNode(this.refs.active);
    el.style.height = el.clientHeight + 'px';
  },

  render() {
    let prefixCls = this.props.prefixCls;
    return (
      <div className={prefixCls}>
        {this.getItems()}
      </div>
    );
  }
});
