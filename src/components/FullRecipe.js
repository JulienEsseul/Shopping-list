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

  // function handleAddListIngredient() {
  //   // A modifier
  //   listIngredient.map((x) =>
  //     addListIngredient.includes(x)
  //       ? null
  //       : setAddListIngredient((addListIngredient = [...addListIngredient, x])),
  //   );
  //   sessionStorage.setItem("shopping-list", JSON.stringify(addListIngredient));

  //   setFullRecipe(false);
  //}

  function handleAddListIngredient() {
    listIngredient.map((currentObjectListIngredient) => {
      let verif = addListIngredient.map((currentObjectAddListIngredient) => {
        if (
          //Les ingredients et les unités de mesure sont les mêmes
          currentObjectAddListIngredient.ingredient ===
            currentObjectListIngredient.ingredient &&
          currentObjectAddListIngredient.mesure ===
            currentObjectListIngredient.mesure
        ) {
          const quantity = {
            weight:
              Number(currentObjectAddListIngredient.weight) +
              Number(currentObjectListIngredient.weight),
            mesure: currentObjectAddListIngredient.mesure,
            ingredient: currentObjectAddListIngredient.ingredient,
          };
          setAddListIngredient(
            (addListIngredient = addListIngredient.filter(
              (x) => x !== currentObjectAddListIngredient,
            )),
          );
          setAddListIngredient(
            (addListIngredient = [...addListIngredient, quantity]),
          );
          return true;
        } else {
        }
        //A garder pour plus tard, pour l'instant tant pis
        // else if (
        //   //Les ingredients sont les mêmes et les unités de mesure sont mL et L ou g et Kg ou CàS et CàC
        //   (currentObjectAddListIngredient.ingredient ===
        //     currentObjectListIngredient.ingredient &&
        //     currentObjectAddListIngredient.mesure === "mL" &&
        //     currentObjectListIngredient.mesure === "L") ||
        //   (currentObjectAddListIngredient.ingredient ===
        //     currentObjectListIngredient.ingredient &&
        //     currentObjectAddListIngredient.mesure === "L" &&
        //     currentObjectListIngredient.mesure === "mL") ||
        //   (currentObjectAddListIngredient.ingredient ===
        //     currentObjectListIngredient.ingredient &&
        //     currentObjectAddListIngredient.mesure === "g" &&
        //     currentObjectListIngredient.mesure === "Kg") ||
        //   (currentObjectAddListIngredient.ingredient ===
        //     currentObjectListIngredient.ingredient &&
        //     currentObjectAddListIngredient.mesure === "Kg" &&
        //     currentObjectListIngredient.mesure === "g") ||
        //   (currentObjectAddListIngredient.ingredient ===
        //     currentObjectListIngredient.ingredient &&
        //     currentObjectAddListIngredient.mesure === "CàC" &&
        //     currentObjectListIngredient.mesure === "CàS") ||
        //   (currentObjectAddListIngredient.ingredient ===
        //     currentObjectListIngredient.ingredient &&
        //     currentObjectAddListIngredient.mesure === "CàS" &&
        //     currentObjectListIngredient.mesure === "CàC")
        //     //Un jour je trouverai un moyen de pas faire ces conditions DEGEULASSES
        // ) {
        //   console.log("placeholder");
        // }
      });

      if (verif.every((x) => x === undefined)) {
        setAddListIngredient(
          (addListIngredient = [
            ...addListIngredient,
            currentObjectListIngredient,
          ]),
        );
      }
    });
    sessionStorage.setItem("shopping-list", JSON.stringify(addListIngredient));
    setFullRecipe(false);
  }

  return (
    <div className="full-recipe">
      <h2 className="full-recipe-name">{name}</h2>
      <strong>Liste des ingrédients : </strong>
      <ul className="full-recipe-list-ul">
        {" "}
        {listIngredient.map((x) => (
          //Parcours le tableau de tous les objets qui contiennent les caractéristiques des ingredients (quantité, mesure, nom) et affiche une liste de tout ça séparé par un espace
          <li
            key={x.weight + x.mesure + x.ingredient + id}
            className="full-recipe-list-li"
          >
            {Object.values(x).join(" ")}
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
