import React, { Component } from "react";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import CheckOutSummary from "../../Burger/CheckOutSummary/CheckOutSummary";

class CheckOut extends Component {
  state = {
    ingredients: null,
    totalPrice: 0
  };
  // componetDidMount() {
  //   const ingredientArray = new URLSearchParams(this.props.location.search);
  //   const ingredientValues = {};
  //   for (let param of ingredientArray.entries()) {
  //     if (param[0] === "price") {
  //       this.setState({
  //         totalPrice: param[1]
  //       });
  //     }
  //     ingredientValues[param[0]] = +param[1];
  //   }
  //   this.setState({
  //     ingredients: ingredientValues
  //   });
  // }
  componentWillMount() {
    console.log("asd");
    const ingredientArray = new URLSearchParams(this.props.location.search);
    const ingredientValues = {};
    for (let param of ingredientArray.entries()) {
      if (param[0] === "price") {
        this.setState({
          totalPrice: param[1]
        });
      } else {
        ingredientValues[param[0]] = +param[1];
      }
    }
    this.setState({
      ingredients: ingredientValues
    });
  }
  cancelClickHandler = () => {
    this.props.history.goBack();
  };
  sucessClickHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckOutSummary
          cancelClickHandler={this.cancelClickHandler}
          sucessClickHandler={this.sucessClickHandler}
          ingredients={this.state.ingredients}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={props => (
            <ContactData
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default CheckOut;
