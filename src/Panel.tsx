/* eslint-disable react/prop-types */
import * as React from 'react';
import classNames from 'classnames';
import Animate from 'rc-animate';
import shallowEqual from 'shallowequal';
import PanelContent from './PanelContent';
import { CollapsePanelProps } from './interface';

class CollapsePanel extends React.Component<CollapsePanelProps, any> {
  static defaultProps = {
    showArrow: true,
    isActive: false,
    destroyInactivePanel: false,
    onItemClick() {},
    headerClass: '',
    contentClass: '',
    forceRender: false,
  };

  shouldComponentUpdate(nextProps: CollapsePanelProps) {
    return !shallowEqual(this.props, nextProps);
  }

  handleItemClick = () => {
    const { onItemClick, panelKey } = this.props;

    if (typeof onItemClick === 'function') {
      onItemClick(panelKey);
    }
  };

  handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
      this.handleItemClick();
    }
  };

  render() {
    const {
      className,
      id,
      style,
      prefixCls,
      header,
      headerClass,
      contentClass,
      children,
      isActive,
      showArrow,
      destroyInactivePanel,
      disabled,
      accordion,
      forceRender,
      expandIcon,
      extra,
    } = this.props;
    const headerCls = classNames(`${prefixCls}-header`, {
      [headerClass]: headerClass,
    });
    const itemCls = classNames(
      {
        [`${prefixCls}-item`]: true,
        [`${prefixCls}-item-active`]: isActive,
        [`${prefixCls}-item-disabled`]: disabled,
      },
      className,
    );

    let icon: any = <i className="arrow" />;
    if (showArrow && typeof expandIcon === 'function') {
      icon = expandIcon(this.props);
    }

    return (
      <div className={itemCls} style={style} id={id}>
        <div
          className={headerCls}
          onClick={this.handleItemClick}
          role={accordion ? 'tab' : 'button'}
          tabIndex={disabled ? -1 : 0}
          aria-expanded={isActive}
          onKeyPress={this.handleKeyPress}
        >
          {showArrow && icon}
          {header}
          {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
        </div>
        <Animate showProp="isActive" exclusive component="" animation={this.props.openAnimation}>
          <PanelContent
            contentClass={contentClass}
            prefixCls={prefixCls}
            isActive={isActive}
            destroyInactivePanel={destroyInactivePanel}
            forceRender={forceRender}
            role={accordion ? 'tabpanel' : null}
          >
            {children}
          </PanelContent>
        </Animate>
      </div>
    );
  }
}

export default CollapsePanel;