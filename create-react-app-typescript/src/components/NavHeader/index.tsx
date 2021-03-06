import React from "react";
import { Icon } from "antd";
import "./index.less";

export interface NavHeaderProps {
  children: string;
  history: any;
}

export interface NavHeaderState {}

class NavHeader extends React.Component<NavHeaderProps, NavHeaderState> {
  // state = { :  }
  render() {
    return (
      <div className="nav-header">
        <Icon type="left" onClick={() => this.props.history.goBack()} />
        {this.props.children}
      </div>
    );
  }
}

export default NavHeader;
