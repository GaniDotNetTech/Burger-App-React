import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIntegredinet";
import "./Burger.module.css";
const burger = props => {
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
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {incomingIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
