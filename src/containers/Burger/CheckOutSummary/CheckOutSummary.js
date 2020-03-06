import React, { Component } from "react";
import Burger from "../Burger";
import "./CheckOut.module.css";
import Button from "../UI/Buttons/Button";
class CheckOutSummary extends Component {
  render() {
    return (
      <div className="CheckOut">
        <p>Your Delicious Burger</p>
        <div
          style={{
            width: "100%",
            margin: "auto"
          }}
        >
          <Burger ingredients={this.props.ingredients} />
        </div>
        <Button buttonClass="Danger" clicked={this.props.cancelClickHandler}>
          Cancel
        </Button>
        <Button buttonClass="Success" clicked={this.props.sucessClickHandler}>
          Continue
        </Button>
      </div>
    );
  }
}

export default CheckOutSummary;
