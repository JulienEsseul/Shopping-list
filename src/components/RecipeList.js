import RecipeItem from "./RecipeItem.js";
import "../styles/RecipeList.css";

function RecipeList({
  activeCategories,
  setActiveCategories,
  recipeData,
  addListIngredient,
  setAddListIngredient,
}) {
  return (
    <div className="recipe-list">
      <ul>
        {recipeData.map(
          ({
            id,
            name,
            listIngredient,
            recipe,
            categoryTaste,
            categoryType,
          }) =>
            (activeCategories.Type.some((r) => categoryType.includes(r)) &&
              activeCategories.Taste.length === 0) || // Conditions d'affichage de l'item
            (activeCategories.Type.length === 0 &&
              activeCategories.Taste.some((r) => categoryTaste.includes(r))) ||
            (activeCategories.Type.some((r) => categoryType.includes(r)) &&
              activeCategories.Taste.some((r) => categoryTaste.includes(r))) ||
            (activeCategories.Type.length === 0 &&
              activeCategories.Taste.length === 0) ? (
              <li key={id} className="dishes">
                <RecipeItem
                  name={name}
                  listIngredient={listIngredient}
                  recipe={recipe}
                  id={id}
                  addListIngredient={addListIngredient}
                  setAddListIngredient={setAddListIngredient}
                />
              </li>
            ) : null,
        )}
      </ul>
    </div>
  );
}

export default RecipeList;
