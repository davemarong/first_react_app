const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
  },
];




<div>
      {recipes.map((recipe) => {
        return <Recipe key={recipe.id} {...recipe} />;
      })}
    </div>








const { name, servings, cookTime, instructions } = props;
  return (
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
          <span>Cook time:</span>
          <span>{cookTime}</span>
        </div>
        <div>
          <span>Servings</span>
          <span>{servings}</span>
        </div>
        <div>
          <span>Instructions</span>
          <div>{instructions}</div>
        </div>
      </div>
    </div>


import React from 'react'
import IngredientList from './IngredientList';

export default function Recipe(props) {
  const {
    name,
    cookTime,
    servings,
    instructions,
    ingredients
  } = props
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook Time:</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>{instructions}</div>
      </div>
      <div>
        <span>Ingredients:</span>
        <div>
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  )
}