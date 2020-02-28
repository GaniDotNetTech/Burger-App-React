import React from "react";
import Aux from "../../../hoc/Aux/aux";
import Buttons from "../UI/Buttons/Button";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
const orderSummary = props => {
  const orderIngredients = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span
          style={{
            textTransform: "capitalize"
          }}
        >
          {igKey}
        </span>
        :{props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your delicious burger order summary:</h3>
      <ul>{orderIngredients}</ul>
      <p>
        <strong>Total Price :</strong>
        {props.price.toFixed(2)}
      </p>
      <p>Continue to checkout?</p>
      <Buttons buttonClass="Danger" clicked={props.cancelClicked}>
        Cancel
      </Buttons>
      <Buttons buttonClass="Success" clicked={props.continueClicked}>
        Continue
      </Buttons>
    </Aux>
  );
};
export default orderSummary;
