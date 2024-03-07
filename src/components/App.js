import "../styles/App.css";
import RecipeList from "./RecipeList";
import LeftPannel from "./LeftPannel";
import { Suspense, useState, useEffect } from "react";
import ButtonAddRecipe from "./ButtonAddRecipe";
import ShoppingList from "./ShoppingList";

function App() {
  ////////[Debut] Gestion des categories////////
  const [activeCategories, setActiveCategories] = useState({
    Type: [],
    Taste: [],
  });
  ////////[Fin] Gestion des categories////////

  ////////[Debut] Gestion de l'affichage de la liste des recettes via fetch////////
  const [recipeData, setRecipeData] = useState();

  function getRecipe() {
    return fetch("http://localhost:3000/display").then((res) => res.json());
  }

  useEffect(() => {
    //Capture le resultat du fetch dans le state, le transformant en objet non promise
    getRecipe().then((result) => setRecipeData(result));
  }, []);
  ////////[Fin] Gestion de l'affichage de la liste des recettes via fetch////////

  ////////[Debut] Gestion de l'affichage de la liste des ingredients////////
  const [showShoppingList, setShowShoppingList] = useState(true);
  ////////[Fin] Gestion de l'affichage de la liste des ingredients////////

  ////////[Debut] Gestion de l'ajout des ingredients à la liste////////
  const [addListIngredient, setAddListIngredient] = useState([]);
  ////////[Fin] Gestion de l'ajout des ingredients à la liste////////

  return (
    <div className="app">
      <ButtonAddRecipe />
      <Suspense fallback={<p>Loading ...</p>}>
        {recipeData && (
          <div className="global-layout">
            <LeftPannel
              activeCategories={activeCategories}
              setActiveCategories={setActiveCategories}
              recipeData={recipeData}
            />
            <RecipeList
              activeCategories={activeCategories}
              setActiveCategories={setActiveCategories}
              recipeData={recipeData}
              addListIngredient={addListIngredient}
              setAddListIngredient={setAddListIngredient}
            />
            <ShoppingList
              showShoppingList={showShoppingList}
              setShowShoppingList={setShowShoppingList}
              addListIngredient={addListIngredient}
              setAddListIngredient={setAddListIngredient}
            />
          </div>
        )}
      </Suspense>
    </div>
  );
}

export default App;
