//import { recipeData } from "../data/recipeData"
import { useState } from "react";
import "../styles/ButtonAddRecipe.css";

function ButtonAddRecipe() {
  const [showForm, setShowForm] = useState(false);
  const [moreIngredients, setMoreIngredients] = useState([
    {
      weight: "",
      mesure: "",
      ingredient: "",
    },
  ]);

  function sendForm(event) {
    const formResults = {
      name: event.target.form.newRecipeName.value,
      listIngredient: moreIngredients,
      recipe: event.target.form.newRecipeRecipe.value,
      categoryType: event.target.form.newRecipeCategoryType.value,
      categoryTaste: event.target.form.newRecipeCategoryTaste.value,
    };

    if (Object.values(formResults).some((x) => x === "")) {
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

  const handleFormChange = (index, event) => {
    let data = [...moreIngredients];
    data[index][event.target.name] = event.target.value;
    setMoreIngredients(data);
  };

  const addFields = () => {
    let newfield = { weight: "", mesure: "", ingredient: "" };
    setMoreIngredients([...moreIngredients, newfield]);
  };

  const removeFields = (index) => {
    let data = [...moreIngredients];
    data.splice(index, 1);
    setMoreIngredients(data);
  };

  return (
    <div>
      <button
        type="button"
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
            {moreIngredients.map((input, index) => {
              return (
                <div key={index}>
                  <button type="button" onClick={() => removeFields(index)}>
                    -
                  </button>

                  <input
                    type="number"
                    name="weight"
                    placeholder="Poids"
                    value={input.weight}
                    onChange={(event) => handleFormChange(index, event)}
                  ></input>

                  <select
                    name="mesure"
                    value={input.mesure}
                    onChange={(event) => handleFormChange(index, event)}
                  >
                    <option></option>
                    {""}
                    {/*Solution temporaire, j'ai selectionné l'input dans value, la première valeur affichée (g) qui peut être celle que l'on souhaite n'est pas prise en compte car n'est pas une input de l'utilisateur. Il faut trouver une meilleur solution à long termes et à moyen termes, mettre un filet pour s'assurer que la réponse vide ne soit jamais selecttionnée. La plupart des solutions que je vois c'est d'utiliser un state pour les options, voir react.dev/reference/react-dom/components/select tout en bas de page */}
                    <option value="g">g</option>
                    <option value="Kg">Kg</option>
                    <option value="mL">ml</option>
                    <option value="L">L</option>
                    <option value="CàC">CàC</option>
                    <option value="CàS">CàS</option>
                    <option value="pincée">pincée</option>
                  </select>

                  <input
                    type="text"
                    name="ingredient"
                    placeholder="Ingredient"
                    value={input.ingredient}
                    onChange={(event) => handleFormChange(index, event)}
                  ></input>
                </div>
              );
            })}
          </div>
          <button type="button" onClick={addFields}>
            +
          </button>

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
        </form>
      )}
    </div>
  );
}

export default ButtonAddRecipe;
