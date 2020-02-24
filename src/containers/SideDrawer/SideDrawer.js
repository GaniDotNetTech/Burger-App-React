import React from "react";
import "./SideDrawer.module.css";
import Logo from "../../components/Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import Aux from "../../hoc/Aux/aux";
import Backdrop from "../../containers/Burger/UI/Backdrop/Backdrop";

const sideDrawer = props => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.show) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  console.log(props.backdropHandler);
  console.log(attachedClasses.join(" "));
  return (
    <Aux>
      <Backdrop show={props.show} backdropHandler={props.backdropHandler}>
        <div className={attachedClasses.join(" ")}>
          <div className="Logo">
            <Logo height="11%" />
          </div>
          <nav>
            <NavigationItems />
          </nav>
        </div>
      </Backdrop>
    </Aux>
  );
};

export default sideDrawer;
