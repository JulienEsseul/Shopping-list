import { recipeData } from "../data/recipeData";
import RecipeItem from "./RecipeItem.js";
import "../styles/RecipeList.css";

function RecipeList({ activeCategories, setActiveCategories }) {
  return (
    <ul>
      {recipeData.map(({ id, name, picture, listIngredient, recipe, categoryTaste, categoryType }) => 
      
      (activeCategories.Type.some((r) => categoryType.includes(r)) && activeCategories.Taste.length === 0) 
      || (activeCategories.Type.length === 0 && activeCategories.Taste.some((r) => categoryTaste.includes(r)))
      || (activeCategories.Type.some((r) => categoryType.includes(r)) && activeCategories.Taste.some((r) => categoryTaste.includes(r))) 
      || (activeCategories.Type.length === 0 && activeCategories.Taste.length === 0)
      ? (

          // activeCategories.some((r) => categoryTaste.includes(r)) || activeCategories.some((r) => categoryType.includes(r)) || activeCategories.length === 0 ? (
        // activeCategories.Taste.some((r) => categoryTaste.includes(r)) ? ( 
        <div key={id} className="dishes"> 
                <RecipeItem
                name={name}
                picture={picture}
                listIngredient={listIngredient}
                recipe={recipe}
            />
        </div>
        ) : null
      )}
    </ul>
  );
}

export default RecipeList;
