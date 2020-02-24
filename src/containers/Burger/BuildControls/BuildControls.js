import React from "react";
import BuildControl from "../BuildControls/BuildControl/BuildControl";
import "./BuildControls.module.css";
//import "./BuildControls.css";

const buildLabels = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => {
  return (
    <div className="buildControls">
      <p>
        Current Price:<strong>{props.price.toFixed(2)}</strong>
      </p>
      {buildLabels.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          type={ctrl.type}
          added={() => props.ingredientsAddClick(ctrl.type)}
          removed={() => props.ingredientsRemoveClick(ctrl.type)}
          disabled={props.disbaled[ctrl.type]}
        />
      ))}
      <button
        className="OrderButton"
        onClick={props.ordered}
        disabled={props.purchaseable}
      >
        Order Now
      </button>
    </div>
  );
};
// added={this.props.ingredientsAddClick.bind(this, igKey)}
//             removed={() => props.removeIngredientHandler(igKey)}

export default buildControls;
