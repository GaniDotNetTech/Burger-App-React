import React, { Component } from "react";
import Aux from "../../hoc/Aux/aux";
import Burger from "../../containers/Burger/Burger";
import BuildControls from "../Burger/BuildControls/BuildControls";
import Modal from "../Burger/UI/Modal/Modal";
import OrderSummary from "../Burger/OrderSummary/OrderSummary";
import axios from "../../axios-order";
import Spinner from "../Burger/UI/Spinner/Spinner";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";

const INGREDIENTS_PRICES = {
  salad: 0.3,
  bacon: 1.5,
  cheese: 0.75,
  meat: 2
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false
  };
  componentDidMount() {
    axios
      .get("/integredients.json")
      .then(res => {
        this.setState({
          ingredients: res.data
        });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }
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
    let querysString = [];
    for (let i in this.state.ingredients) {
      querysString.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    querysString.push("price=" + this.state.totalPrice);
    querysString = querysString.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + querysString
    });
  };
  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = this.state.loading ? <Spinner /> : null;
    let burger = this.state.error ? <p>something is Wrong</p> : <Spinner />;
    if (this.state.ingredients) {
      burger = (
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
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          price={this.state.totalPrice}
          ingredients={this.state.ingredients}
          cancelClicked={this.backdropHandler}
          continueClicked={this.continueClickHandler}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          backdropHandler={this.backdropHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default WithErrorHandler(BurgerBuilder, axios);
