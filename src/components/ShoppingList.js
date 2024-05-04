import "../styles/ShoppingList.css";

function ShoppingList({
  showShoppingList,
  setShowShoppingList,
  addListIngredient,
  setAddListIngredient,
}) {
  function handleSuppressItemShoppingList(index) {
    setAddListIngredient(addListIngredient.filter((_, x) => x !== index));
    sessionStorage.setItem("shopping-list", JSON.stringify(addListIngredient));
  }

  function saveInClipboard() {
    let translatedList = [];
    addListIngredient.map((x) => {
      translatedList.push(x.ingredient + " " + x.weight + " " + x.mesure);
      return translatedList;
    });
    navigator.clipboard.writeText(translatedList.join("\n")); // /!\ Ne fonctionne qu'en HTTPS et localhost
  }

  function saveInClipboardHTML() {
    let translatedList = [];
    addListIngredient.map((x) => {
      translatedList.push(x.ingredient + " " + x.weight + " " + x.mesure);
      return translatedList;
    });

    let code = [
      "<style> body {display: flex; flex-direction: column; } input:checked + label {text-decoration: line-through; color : grey;} div {display: flex; flex-direction: row; margin-bottom: 1%; font-size: 130%}{</style>",
    ];
    translatedList.map((x) => {
      code.push('<div><input type="checkbox" /><label>' + x + "</label></div>");
      return code;
    });

    navigator.clipboard.writeText(code.join("\n"));
  }

  return (
    <div id="shopping-list">
      {showShoppingList ? (
        <div className="btn-hide-and-content-shopping-list">
          <button
            className="btn-hide-shopping-list"
            onClick={() => setShowShoppingList(!showShoppingList)}
          >
            {" "}
            {">"}{" "}
          </button>
          <div className="content-shopping-list">
            <h3>Liste de course</h3>
            <button onClick={() => saveInClipboard()}>
              {" "}
              Copier dans le presse-papier
            </button>
            <button onClick={() => saveInClipboardHTML()}>
              {" "}
              Copier dans le presse-papier en HTML
            </button>
            <ul className="list-shopping-list">
              {sessionStorage.getItem("shopping-list") === null //Verifie s'il y a quelque chose dans le cache, s'il n'y a rien, ne renvoie rien
                ? null
                : JSON.parse(sessionStorage.getItem("shopping-list")).map(
                    (ingredient, index) => (
                      <li key={index} className="li-btn-and-ingredients">
                        <button
                          onClick={() => handleSuppressItemShoppingList(index)}
                        >
                          X
                        </button>
                        <ul className="ul-individual-ingredient">
                          <li className="li-ingredient">
                            {ingredient.ingredient}
                          </li>
                          <li className="li-weight">{ingredient.weight}</li>
                          <li className="li-mesure">{ingredient.mesure}</li>
                        </ul>
                      </li>
                    ),
                  )}
            </ul>
          </div>
        </div>
      ) : (
        <button
          className="btn-show-shopping-list"
          onClick={() => setShowShoppingList(!showShoppingList)}
        >
          {" "}
          {"<"}{" "}
        </button>
      )}
    </div>
  );
}

export default ShoppingList;
