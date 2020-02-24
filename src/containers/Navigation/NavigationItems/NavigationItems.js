import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.module.css";

const navigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem link="Burger" active>
      Burger
    </NavigationItem>
    <NavigationItem link="CheckOut" active>
      CheckOut
    </NavigationItem>
  </ul>
);

export default navigationItems;
