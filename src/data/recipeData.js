import lasagne from "../assets/lasagne.webp";
import saladeCaesar from "../assets/salade cesar.webp";
import gateauYahourt from "../assets/gateau au yahourt.webp";
import financierAmandes from "../assets/financiers aux amandes.webp";
import cacahuetesCumin from "../assets/Cacahuetes au cumin.webp";
import porcCaramel from "../assets/Porc au caramel.webp";
import saladePouletPeche from "../assets/salade poulet peche.webp";

export const recipeData = [
  {
    name: "Lasagnes",
    picture: lasagne,
    id: "1",
    listIngredient: ["pates", "sauce tomate", "viande hachée"],
    recipe:
      "kjezfhjuzebjhzebfckjsbefhkzebfhjzefjbvzjhebfvjhzvehfgsjeghfvhsvfegs fh vzsegjfzhgevfjsvfejvzfjgsvjhbjh bzjh brjehz jrh zejhrfb ezhjbfezjhfvezjfhjezbejzhfb ezjh ejhb zejh ",
    categoryType: ["Plat"],
    categoryTaste: ["Salé"],
  },

  {
    name: "Salade caesar",
    picture: saladeCaesar,
    id: "2",
    listIngredient: ["salade", "sauce caesar"],
    recipe:
      "skjfnjhbsdfiubskjfdcnskjbdfsrkjnvcskhbfkjbsnkfhbcjhbsrfkvhsbefcjhsbrjhvbc sbrvjhsjhb khb skjbef kjsbfkhsbfkjzebkjbkjzbkj zekj ",
    categoryType: ["Entrée"],
    categoryTaste: ["Salé"],
  },

  {
    name: "Gateau au yahourt",
    picture: gateauYahourt,
    id: "3",
    listIngredient: ["farine", "sucre", "oeufs", "levure", "yaourt"],
    recipe:
      "zieufhziehriuzheriu zuoerh ozuhe ruozehr iuezhreizurh zoirjpaozie zgfjdsncvjhihvbcnoz ihefnuocijz,lfncizbef hbficn zheficbzifciu",
    categoryType: ["Dessert"],
    categoryTaste: ["Sucré"],
  },

  {
    name: "Financier aux amandes",
    picture: financierAmandes,
    id: "4",
    listIngredient: ["farine", "sucre", "oeufs", "levure", "amandes"],
    recipe: "Lorem ipsum",
    categoryType: ["Friandise"],
    categoryTaste: ["Sucré"],
  },

  {
    name: "Cacahuètes au cumin",
    picture: cacahuetesCumin,
    id: "5",
    listIngredient: ["cacahuètes", "cumin", "sel"],
    recipe: "Lorem ipsum",
    categoryType: ["Friandise"],
    categoryTaste: ["Salé"],
  },

  {
    name: "Porc au caramel",
    picture: porcCaramel,
    id: "6",
    listIngredient: ["porc", "caramel"],
    recipe: "Lorem ipsum",
    categoryType: ["Plat"],
    categoryTaste: ["Sucré-salé"],
  },

  {
    name: "Salade de poulet aux pèches",
    picture: saladePouletPeche,
    id: "7",
    listIngredient: ["salade", "poulet", "pèche"],
    recipe: "Lorem ipsum",
    categoryType: ["Entrée"],
    categoryTaste: ["Sucré-salé"],
  }

  // {
  //     name: "",
  //     picture: ,
  //     id: "",
  //     listIngredient: [""],
  //     recipe: "",
  //     category: [""]
  // }
];
