import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BurgerIngredient.module.css";

class BurgerIngredient extends Component {
  render() {
    let intgredinet = null;
    switch (this.props.type) {
      case "bread-bottom":
        intgredinet = <div className="BreadBottom" />;
        break;
      case "bread-top":
        intgredinet = (
          <div className="BreadTop">
            <div className="Seeds1" />
            <div className="Seeds2" />
          </div>
        );
        break;
      case "meat":
        intgredinet = <div className="Meat" />;
        break;
      case "cheese":
        intgredinet = <div className="Cheese" />;
        break;
      case "bacon":
        intgredinet = <div className="Bacon" />;
        break;
      case "salad":
        intgredinet = <div className="Salad" />;
        break;

      default:
        intgredinet = null;
    }
    return intgredinet;
  }
}
BurgerIngredient.PropTypes = {
  type: PropTypes.string.isRequired
};
export default BurgerIngredient;
