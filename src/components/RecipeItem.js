import "../styles/RecipeItem.css";

function fullRecipeOnClick({ name, picture, listIngredient, recipe }) {
  return (
    <div className="full-recipe">
      <h1>{name}</h1>
      <img src={picture} alt="Dish example" />
      <ul>{listIngredient}</ul> {/* Need créer une vraie liste */}
      <p>{recipe}</p>
    </div>
  );
}

function RecipeItem({ name, picture, listIngredient, recipe }) {
  return (
    <div onClick={() => fullRecipeOnClick(name, picture, listIngredient, recipe)}>
      <div onClick={() => console.log(name, picture, listIngredient, recipe)}>
        <img src={picture} alt="Dish example" />
        <li className="dish-name">{name}</li>
      </div>
    </div>
  )
}

export default RecipeItem;
// export default FullRecipeOnClick
