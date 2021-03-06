import React from "react";
import IngredientsList from "./IngredientList.js";
export default function Recipe(props) {
  const { name, cookTime, servings, instructions, ingredients } = props;
  return (
    <>
      <div>
        <div>
          <h3>{name}</h3>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
        <div>
          <div>
            <span>Cook time: </span>
            <span>{cookTime}</span>
          </div>
          <div>
            <span>Servings: </span>
            <span>{servings}</span>
          </div>
          <div>
            <span>Instructions: </span>
            <div>{instructions}</div>
          </div>
          <div>
            <IngredientsList ingredients={ingredients} />
          </div>
        </div>
      </div>
    </>
  );
}
