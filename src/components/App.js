import "../styles/App.css";
import RecipeList from "./RecipeList";
import LeftPannel from "./LeftPannel";
import { useState } from "react";

function App() {
  const [activeCategories, setActiveCategories] = useState({Type:[], Taste: []});

  return (
    <div className="global-layout">
      <LeftPannel
        activeCategories={activeCategories}
        setActiveCategories={setActiveCategories}
      />
      <RecipeList
        activeCategories={activeCategories}
        setActiveCategories={setActiveCategories}
      />
    </div>
  );
}

export default App;
