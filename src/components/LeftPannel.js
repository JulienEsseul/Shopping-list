import "../styles/LeftPannel.css";

function LeftPannel({ activeCategories, setActiveCategories, recipeData }) {
  const categoriesType = recipeData
    .reduce(
      (acc, currentValue) =>
        acc.includes(currentValue.categoryType)
          ? acc
          : acc.concat(currentValue.categoryType),
      [],
    ) //Collect every category of the recipe
    .reduce(
      (acc, currentValue) =>
        acc.includes(currentValue) ? acc : acc.concat(currentValue),
      [],
    ); //Make it so every category appear only once

  const categoriesTaste = recipeData
    .reduce(
      (acc, currentValue) =>
        acc.includes(currentValue.categoryTaste)
          ? acc
          : acc.concat(currentValue.categoryTaste),
      [],
    ) //Collect every category of the recipe
    .reduce(
      (acc, currentValue) =>
        acc.includes(currentValue) ? acc : acc.concat(currentValue),
      [],
    ); //Make it so every category appear only once

  function handleCheck(e) {
    //Update active categories with the name of the box checked or remove it when unchecked.

    if (e.target.checked) {
      if (categoriesType.includes(e.target.name)) {
        setActiveCategories(
          (activeCategories = {
            Type: [...activeCategories.Type, e.target.name],
            Taste: [...activeCategories.Taste],
          }),
        );
      } else {
        if (categoriesTaste.includes(e.target.name)) {
          setActiveCategories(
            (activeCategories = {
              Type: [...activeCategories.Type],
              Taste: [...activeCategories.Taste, e.target.name],
            }),
          );
        } else {
          console.log("No existing category");
        }
      }
    } else {
      if (categoriesType.includes(e.target.name)) {
        setActiveCategories(
          (activeCategories = {
            Type: activeCategories.Type.filter((tag) => tag !== e.target.name),
            Taste: [...activeCategories.Taste],
          }),
        );
      } else {
        if (categoriesTaste.includes(e.target.name)) {
          setActiveCategories(
            (activeCategories = {
              Type: [...activeCategories.Type],
              Taste: activeCategories.Taste.filter(
                (tag) => tag !== e.target.name,
              ),
            }),
          );
        } else {
          console.log("No existing category");
        }
      }
    }
  }

  return (
    <div className="categories">
      <div className="categories-type">
        <h4>Type</h4>
        {categoriesType.map((cat) => (
          <div key={cat} className="checkbox-categories">
            <input type="checkbox" name={cat} id={cat} onChange={handleCheck} />{" "}
            {/*Possible de faire un handleTypeCheck et un handleTasteCheck */}
            <label htmlFor={cat}>{cat}</label>
          </div>
        ))}
      </div>

      <div className="categories-taste">
        <h4>Gout</h4>
        {categoriesTaste.map((cat) => (
          <div key={cat} className="checkbox-categories">
            <input type="checkbox" name={cat} id={cat} onChange={handleCheck} />
            <label htmlFor={cat}>{cat}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftPannel;
