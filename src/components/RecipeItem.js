import "../styles/RecipeItem.css";
import { useState } from "react";
import FullRecipe from "./FullRecipe";

function RecipeItem({
  name,
  listIngredient,
  recipe,
  id,
  addListIngredient,
  setAddListIngredient,
}) {
  const [fullRecipe, setFullRecipe] = useState(false);
  return (
    //Items displayed en mini
    <div>
      <div onClick={() => setFullRecipe(true)}>
        <img
          src={`${process.env.PUBLIC_URL}/placeholder.png`}
          alt="Dish example"
        />
        <span className="dish-name">{name}</span>
      </div>

      {/* Items displayed en fullpage*/}
      <div>
        {fullRecipe && (
          <FullRecipe
            fullRecipe={fullRecipe}
            setFullRecipe={setFullRecipe}
            name={name}
            listIngredient={listIngredient}
            recipe={recipe}
            id={id}
            addListIngredient={addListIngredient}
            setAddListIngredient={setAddListIngredient}
          />
        )}
      </div>
    </div>
  );
}

export default RecipeItem;
