//import { recipeData } from "../data/recipeData"
import { useState } from "react";
import "../styles/ButtonAddRecipe.css";

function ButtonAddRecipe() {
  const [showForm, setShowForm] = useState(false);

  function sendForm(event) {
    const formResults = {
      name: event.target.form.newRecipeName.value,
      listIngredient: event.target.form.newRecipeIngredients.value.split(", "),
      recipe: event.target.form.newRecipeRecipe.value,
      categoryType: event.target.form.newRecipeCategoryType.value,
      categoryTaste: event.target.form.newRecipeCategoryTaste.value,
    };

    if (Object.values(formResults).some((x) => x == "")) {
      alert("Merci de renseigner tous les champs");
    } else {
      fetch("http://localhost:3000/display", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formResults),
      });

      window.location.reload();
    }
  }

  return (
    <div>
      <button
        className="btn-show-form-add-new-recipe"
        id="buttonShowFormAddNewRecipe"
        onClick={() => setShowForm(true)}
      >
        Ajouter une recette
      </button>

      {showForm && (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="form-add-new-recipe"
        >
          <h2 className="title-new-recipe">Ajouter une recette</h2>

          <div className="new-recipe-name">
            <label htmlFor="newRecipeName" className="label-new-recipe-name">
              Nom de la recette :{" "}
            </label>
            <input
              type="text"
              name="newRecipeName"
              id="newRecipeName"
              className="input-new-recipe-name"
              required
            ></input>
          </div>

          <div className="new-recipe-ingredients">
            <label
              htmlFor="newRecipeIngredients"
              className="label-new-recipe-ingredients"
            >
              Liste des ingredients :{" "}
            </label>
            <input
              type="text"
              name="newRecipeIngredients"
              id="newRecipeIngredients"
              className="input-new-recipe-ingredients"
              required
            ></input>
          </div>

          <div className="new-recipe-category-type">
            <label
              htmlFor="newRecipeCategoryType"
              className="label-new-recipe-category-type"
            >
              Cette recette se mange plutot comme :{" "}
            </label>
            <input
              type="radio"
              name="newRecipeCategoryType"
              id="newRecipeCategoryTypeEntre"
              value="Entrée"
              className="radio-entre-new-recipe-category-type"
              required
            ></input>
            <label>Entrée</label>
            <input
              type="radio"
              name="newRecipeCategoryType"
              id="newRecipeCategoryTypePlat"
              value="Plat"
              className="radio-plat-new-recipe-category-type"
              required
            ></input>
            <label>Plat</label>
            <input
              type="radio"
              name="newRecipeCategoryType"
              id="newRecipeCategoryTypeDessert"
              value="Dessert"
              className="radio-dessert-new-recipe-category-type"
              required
            ></input>
            <label>Dessert</label>
            <input
              type="radio"
              name="newRecipeCategoryType"
              id="newRecipeCategoryTypeFriandise"
              value="Friandise"
              className="radio-friandise-new-recipe-category-type"
              required
            ></input>
            <label>Friandise</label>
          </div>

          <div className="new-recipe-category-taste">
            <label
              htmlFor="newRecipeCategoryTaste"
              className="new-recipe-category-taste"
            >
              Cette recette a un gout plutot :{" "}
            </label>
            <input
              type="radio"
              name="newRecipeCategoryTaste"
              id="newRecipeCategoryTasteSalé"
              value="Salé"
              className="radio-sale-new-recipe-category-taste"
              required
            ></input>
            <label>Salé</label>
            <input
              type="radio"
              name="newRecipeCategoryTaste"
              id="newRecipeCategoryTasteSucré"
              value="Sucré"
              className="radio-sucre-new-recipe-category-taste"
              required
            ></input>
            <label>Sucré</label>
            <input
              type="radio"
              name="newRecipeCategoryTaste"
              id="newRecipeCategoryTasteSucréSalé"
              value="Sucré-Salé"
              className="radio-sucre-sale-new-recipe-category-taste"
              required
            ></input>
            <label>Sucré-Salé</label>
          </div>

          <div className="new-recipe-recipe">
            <label
              htmlFor="newRecipeRecipe"
              className="label-new-recipe-recipe"
            >
              Etapes de la recette :{" "}
            </label>
            <textarea
              name="newRecipeRecipe"
              id="newRecipeRecipe"
              rows="20"
              cols="150"
              className="input-new-recipe-recipe"
              required
            ></textarea>
          </div>

          <button
            className="btn-close-form-new-recipe"
            id="buttonCloseFormNewRecipe"
            onClick={() => setShowForm(false)}
          >
            X
          </button>

          <button
            className="btn-submit-form-new-recipe"
            id="buttonSubmitFormNewRecipe"
            onClick={(e) => sendForm(e)}
          >
            Valider
          </button>

          <p>MANQUE A GERER L'IMAGE</p>
        </form>
      )}
    </div>
  );
}

export default ButtonAddRecipe;
