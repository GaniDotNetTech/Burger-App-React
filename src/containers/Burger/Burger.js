import React from "react";
import { withRouter } from "react-router-dom";
import BurgerIngredient from "./BurgerIngredients/BurgerIntegredinet";
import "./Burger.module.css";
const burger = props => {
  let burgerReturn = null;
  if (props.ingredients) {
    let incomingIngredients = Object.keys(props.ingredients)
      .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((ignore, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);
    incomingIngredients =
      incomingIngredients.length > 0 ? (
        incomingIngredients
      ) : (
        <p> Please start adding the ingredients </p>
      );

    burgerReturn = (
      <div className="Burger">
        <BurgerIngredient type="bread-top" />
        {incomingIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
  } else {
    burgerReturn = <p>Check the Data</p>;
  }
  return <div className="Burger">{burgerReturn}</div>;
};

export default withRouter(burger);
