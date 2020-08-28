const express = require("express");
const Recipes = require("./scheme-model");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then((shoppinglist) => {
      res.json(shoppinglist);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to access shopping list." });
    });
});

router.get("/:id/instructions", (req, res) => {
  Recipes.getInstructions(req.params.id)
    .then((step) => {
      res.json(step);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get recepie directions." });
    });
});

module.exports = router;
