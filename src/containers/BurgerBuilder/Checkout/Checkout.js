import React, { Component } from "react";
import CheckOutSummary from "../../Burger/CheckOutSummary/CheckOutSummary";

class CheckOut extends Component {
  state = {
    ingredients: null
  };
  componentDidMount() {}
  render() {
    return <CheckOutSummary ingredients={this.state.ingredients} />;
  }
}

export default CheckOut;
