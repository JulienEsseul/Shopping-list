import "../styles/FullRecipe.css";

function FullRecipe({
  fullRecipe,
  setFullRecipe,
  name,
  listIngredient,
  recipe,
  id,
  addListIngredient,
  setAddListIngredient,
}) {
  function deleteRecipe() {
    fetch(`http://localhost:3000/display/${id}`, { method: "DELETE" });
    window.location.reload();
  }

  function handleAddListIngredient() {
    listIngredient.map((x) =>
      addListIngredient.includes(x)
        ? null
        : setAddListIngredient((addListIngredient = [...addListIngredient, x])),
    );
    setFullRecipe(false);
  }

  return (
    <div className="full-recipe">
      <h2 className="full-recipe-name">{name}</h2>
      <ul className="full-recipe-list-ul">
        {" "}
        <strong>Liste des ingrédients : </strong>
        {listIngredient.map((x) => (
          <li key={x} className="full-recipe-list-li">
            {x}
          </li>
        ))}
      </ul>
      <h4 className="full-recipe-recipe-title">Recette : </h4>
      <p className="full-recipe-recipe">{recipe}</p>

      <button
        className="btn-close-full-recipe"
        id="buttonCloseFullRecipe"
        onClick={() => setFullRecipe(false)}
      >
        X
      </button>

      <div className="btn-delete-and-add-recipe">
        <button
          className="btn-delete-recipe"
          id="buttonDeleteRecipe"
          onClick={deleteRecipe}
        >
          Supprimer la recette
        </button>

        <button
          className="btn-add-recipe-shopping-list"
          id="buttonAddRecipeShoppingList"
          onClick={() => handleAddListIngredient()}
        >
          Ajouter à la liste
        </button>
      </div>
    </div>
  );
}

export default FullRecipe;
