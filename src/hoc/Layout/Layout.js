import React, { Component } from "react";
import Aux from "../Aux/aux";
import "./Layout.module.css";
import Toolbar from "../../containers/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../containers/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true
  };
  showSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  backdropToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleHandler={this.backdropToggleHandler} />
        <SideDrawer
          show={this.state.showSideDrawer}
          backdropHandler={this.showSideDrawerHandler}
        />
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}
// = props => (
//   <Aux>
//     <Toolbar />
//     <SideDrawer />
//     <main className="Content">{props.children}</main>
//   </Aux>
// );
export default Layout;
