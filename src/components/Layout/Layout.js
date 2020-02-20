import React from "react";
import Aux from "../../hoc/aux";
import "./Layout.module.css";

const layout = props => (
  <Aux>
    <div>Toolbar,SideDrawer,Backdrop</div>
    <main className="Content">{props.children}</main>
  </Aux>
);
export default layout;
