import React, { Component } from "react";
import Aux from "../../hoc/Aux/aux";
import Burger from "../../containers/Burger/Burger";
import BuildControls from "../Burger/BuildControls/BuildControls";
import Modal from "../Burger/UI/Modal/Modal";
import OrderSummary from "../Burger/OrderSummary/OrderSummary";

const INGREDIENTS_PRICES = {
  salad: 0.3,
  bacon: 1.5,
  cheese: 0.75,
  meat: 2
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  };

  addIngredientHandler = type => {
    const oldCont = this.state.ingredients[type];
    const updateCount = oldCont + 1;
    const updateIngredinets = {
      ...this.state.ingredients
    };
    updateIngredinets[type] = updateCount;
    const updatedPrice = INGREDIENTS_PRICES[type] + this.state.totalPrice;
    this.setState({
      totalPrice: updatedPrice,
      ingredients: updateIngredinets
    });
    this.updateButtonHandler(updateIngredinets);
  };
  updateButtonHandler = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({
      purchaseable: sum > 0
    });
  };
  removeIngredientHandler = type => {
    const oldAddCount = this.state.ingredients[type];
    const updateRemoveCount = oldAddCount - 1;
    const updateRemoveIngredinets = { ...this.state.ingredients };
    updateRemoveIngredinets[type] = updateRemoveCount;
    const updatedRemovePrice = this.state.totalPrice - INGREDIENTS_PRICES[type];
    this.setState({
      totalPrice: updatedRemovePrice,
      ingredients: updateRemoveIngredinets
    });
    this.updateButtonHandler(updateRemoveIngredinets);
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };
  backdropHandler = () => {
    this.setState({ purchasing: false });
  };
  continueClickHandler = () => {
    alert('Ganesh I"m working !');
  };
  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientsAddClick={this.addIngredientHandler}
          ingredientsRemoveClick={this.removeIngredientHandler}
          ordered={this.purchasingHandler}
          price={this.state.totalPrice}
          disbaled={disabledInfo}
          purchaseable={!this.state.purchaseable}
        />
        <Modal
          show={this.state.purchasing}
          backdropHandler={this.backdropHandler}
        >
          <OrderSummary
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
            cancelClicked={this.backdropHandler}
            continueClicked={this.continueClickHandler}
          />
        </Modal>
      </Aux>
    );
  }
}

export default BurgerBuilder;
