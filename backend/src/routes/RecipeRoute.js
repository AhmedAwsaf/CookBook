const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getAllRecipes,
  getCategory,
  getSearchedRecipe,
} = require("../controllers/recipeController");

// Create a recipe
router.post("/create", createRecipe);

router.post("/userRecipes", getAllRecipes);

//fetch all recipes in a certain category
router.get("/:category", getCategory);

router.get("/search/:q", getSearchedRecipe);

module.exports = router;
