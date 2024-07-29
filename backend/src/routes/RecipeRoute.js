const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getAllRecipes,
} = require("../controllers/recipeController");

// Create a recipe
router.post("/create", createRecipe);

router.post("/userRecipes", getAllRecipes);

module.exports = router;
