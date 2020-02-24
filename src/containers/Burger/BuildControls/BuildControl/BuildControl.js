import React from "react";
import "./BuildControl.module.css";

const buildControl = props => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.type}</div>
      <button
        className="Less"
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className="More" onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default buildControl;
