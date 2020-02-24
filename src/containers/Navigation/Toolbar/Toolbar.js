import React from "react";
import "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../../components/Logo/Logo";
import DrawerToggle from "../../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = props => {
  return (
    <header className="Toolbar">
      <DrawerToggle drawerToggleHandler={props.drawerToggleHandler} />
      <Logo height="80%" />
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
