import React from "react";
import "./Button.module.css";

const buttons = props => {
  return (
    <button
      className={["Button", props.buttonClass].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default buttons;
