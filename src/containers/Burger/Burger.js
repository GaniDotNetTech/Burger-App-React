import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIntegredinet";
import "./Burger.module.css";
const burger = props => {
  const incomingIngredients = Object.keys(props.ingredients).map(igKey => {
    console.log(props.ingredients);
    return [...Array(props.ingredients[igKey])].map((ignore, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {incomingIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
