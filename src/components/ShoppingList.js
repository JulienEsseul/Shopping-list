import "../styles/ShoppingList.css";

function ShoppingList({
  showShoppingList,
  setShowShoppingList,
  addListIngredient,
  setAddListIngredient,
}) {
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
            <button
              onClick={() =>
                navigator.clipboard.writeText(addListIngredient.join("\n"))
              } // /!\ Ne fonctionne qu'en HTTPS et localhost
            >
              {" "}
              Copier dans le presse-papier
            </button>
            <ul className="list-shopping-list">
              {addListIngredient.map((ingredient, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      setAddListIngredient(
                        addListIngredient.filter((_, x) => x !== index),
                      )
                    }
                  >
                    X
                  </button>
                  {ingredient}
                </li>
              ))}
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
