import React, { Component } from "react";
import "./Modal.module.css";
import Aux from "../../../../hoc/Aux/aux";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }
  componentWillUpdate() {
    console.log("ComponentWillMount Modal.js");
  }
  render() {
    return (
      <Aux>
        <Backdrop
          show={this.props.show}
          backdropHandler={this.props.backdropHandler}
        />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

// const modal = props => {
//   console.log(props.backdropHandler);
//   return (
//     <Aux>
//       <Backdrop show={props.show} backdropHandler={props.backdropHandler} />
//       <div
//         className="Modal"
//         style={{
//           transform: props.show ? "translateY(0)" : "translateY(-100vh)",
//           opacity: props.show ? "1" : "0"
//         }}
//       >
//         {props.children}
//       </div>
//     </Aux>
//   );
// };
export default Modal;
