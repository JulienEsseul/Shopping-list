    [Béta] Shopping-list (non-definitive name)

A cooking recipe website with the goal of adding every needed ingredients for the recipes to a (soon to be) sorted shopping list on the side to help for grocery shopping.

Currently working in local only, still in development (see Future upgrades)

N.B. : For now, when adding ingredients for the recipe, each of them must be separated by ", " (without ") or the website won't understand. Be careful too since its not handling case for now (Citron and citron will be considered 2 differents ingredients)

    To make it work :

- Run a terminal and type "npm start" (without ")
- Run another terminal and type "json-server --watch src/data/recipeData.json" (without ")

  Created using :

- create-react-app
- json-server (https://github.com/typicode/json-server/tree/v0)

  Future upgrades :

Major upgrade :

- Real server to be able to host images to display with the recipes rather than just a placeholder
- A database of ingredients to select rather than adding yourself to prevent misstyping and not separating ingredients correctly when adding recipe (See N.B higher)
- Global visual (CSS) : currently with minimal graphic effort to be usable, obviously not definitive.
- Account creation and the whole thing that comes with it (authentification, profile managing...)
- Smartphone compatibily, especially to help cross-utilisation and being able to use and check the shopping list directly in the app

Minor upgrade :

- 2 search bar : one for recipe name and one to filter for specific ingredients
- Being able to modify your recipe and adding a version recorder for every user to see past and current version of the recipe
- Being able to add notes and/or modifying another user's recipe for yourself only to keep track of your preferences without modifying it for everyone
- Favorite system
- Like counter
- Being able to comment recipes
- Actually sorting the shopping list by store shelf and being able to custom your store shelf order to adapt to your prefered store
- More filters (vegan, vegetarian, gluten free, dietary...)
- Quantity managing in the shopping list and being able to specify for how many person the recipe is planned to add the number of ingredient accordingly
- Keeping track of the recipe you selected.
- Being able to manually add other items to the shopping list which are not ingredients of one of the selected recipe (for example : soap, cutlery...) allowing it to be a global shopping list and not just for the specific recipe selected.

Coding update :

- Better filter handling (these if imbrication and multiple conditions ternary are terrifying)
- Modifying the adding-recipe form to self-generate some of its fields.
