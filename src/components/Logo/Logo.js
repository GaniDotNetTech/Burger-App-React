import React from "react";
import Logo from "../../Images/burger-logo.png";
import "./Logo.module.css";
const logo = props => (
  <div
    className="Logo"
    style={{
      height: props.height
    }}
  >
    <img src={Logo} alt="My burger" />
  </div>
);

export default logo;
