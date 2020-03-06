import React, { Component } from "react";
import Button from "../../../Burger/UI/Buttons/Button";
import "./ContactData.module.css";
import axios from "../../../../axios-order";
import Spinner from "../../../../containers/Burger/UI/Spinner/Spinner";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {},
    loading: false
  };
  orderClicked = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const orderData = {
      ingredients: this.props.ingredients,
      customerDetails: {
        Name: "Ganesh",
        Address: {
          streetName: "test",
          pinCode: 456465,
          city: "Test",
          state: "kbd"
        },
        phoneNumber: 4486236561,
        deliveryType: "COD"
      },
      totalPrice: this.props.totalPrice
    };
    axios
      .post("/orderDetails.json", orderData)
      .then(res => {
        this.setState({
          loading: false
        });
        this.props.history.goBack("/");
      })
      .catch(error => {
        this.setState({
          loading: false
        });
      });
  };
  render() {
    let form = (
      <form>
        <input
          className="Input"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className="Input"
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <input
          className="Input"
          type="text"
          name="address"
          placeholder="Your Address"
        />
        <Button clicked={this.orderClicked} buttonClass="Success">
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Enter your details</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
