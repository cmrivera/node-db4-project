const db = require("../data/config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("recipes as r")
    .where("r.id", recipe_id)
    .join("quantities as q", "r.id", "q.recipe_id")
    .join("ingredients as i", "q.ingredients_id", "i.id")
    .select(
      "r.recipe_name as recipe_name",
      "i.name as ingredients",
      "q.quantity as quantity"
    );
}

function getInstructions(recipe_id) {
  return db("recipes as r")
    .where("r.id", recipe_id)
    .join("directions as d", "r.id", "d.recipe_id")
    .select(
      "r.recipe_name as recipe_name",
      "d.direction_number as direction_order",
      "d.instructions"
    );
}
