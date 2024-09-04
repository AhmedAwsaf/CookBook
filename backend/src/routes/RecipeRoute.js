const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getAllRecipes,
  getCategory,
  getSearchedRecipe,
  addComment,
  addLike,
  getRecipe,
} = require("../controllers/recipeController");

// Create a recipe
router.post("/create", createRecipe);

router.post("/userRecipes", getAllRecipes);

//fetch all recipes in a certain category
router.get("/category/:category", getCategory);

router.get("/search/:q", getSearchedRecipe);

router.post("/comments", addComment);

router.post("/addlike", addLike);

router.get("/one/:id", getRecipe);

module.exports = router;
