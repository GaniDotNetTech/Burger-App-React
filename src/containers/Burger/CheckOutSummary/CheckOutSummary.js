import React, { Component } from "react";
import Burger from "../Burger";
import "./CheckOut.module.css";
import Button from "../UI/Buttons/Button";
class CheckOutSummary extends Component {
  cancelClickHandler() {}
  sucessClickHandler() {}
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
        <Button type="Danger" clicked={this.cancelClickHandler}>
          Cancel
        </Button>
        <Button type="Success" clicked={this.sucessClickHandler}>
          Continue
        </Button>
      </div>
    );
  }
}

export default CheckOutSummary;
