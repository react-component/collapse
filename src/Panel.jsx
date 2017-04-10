import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PanelContent from './PanelContent';
import Animate from 'rc-animate';

class CollapsePanel extends Component {
  handleItemClick() {
    this.props.onItemClick();
  }

  render() {
    const { className, style, prefixCls, header, children, isActive, showArrow } = this.props;
    const headerCls = `${prefixCls}-header`;
    const itemCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-active`]: isActive,
    }, className);
    return (
      <div className={itemCls} style={style}>
        <div
          className={headerCls}
          onClick={this.handleItemClick.bind(this)}
          role="tab"
          aria-expanded={isActive}
        >
          {showArrow && <i className="arrow" />}
          {header}
        </div>
        <Animate
          showProp="isActive"
          exclusive
          component=""
          animation={this.props.openAnimation}
        >
          <PanelContent prefixCls={prefixCls} isActive={isActive}>
            {children}
          </PanelContent>
        </Animate>
      </div>
    );
  }
}

CollapsePanel.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  children: PropTypes.any,
  openAnimation: PropTypes.object,
  prefixCls: PropTypes.string,
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  showArrow: PropTypes.bool,
  isActive: PropTypes.bool,
  onItemClick: PropTypes.func,
  style: PropTypes.object,
};

CollapsePanel.defaultProps = {
  showArrow: true,
  isActive: false,
  onItemClick() {},
};

export default CollapsePanel;
