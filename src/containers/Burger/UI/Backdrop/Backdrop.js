import React from "react";
//import Aux from "../../../../hoc/aux";
import "./Backdrop.module.css";

const backdrop = props => {
  let back = null;
  back = props.show ? (
    <div className="Backdrop" onClick={props.backdropHandler}>
      {props.children}
    </div>
  ) : null;
  return back;
};

export default backdrop;
