const express = require("express");
const router = express.Router();


const verifyToken = require("../controllers/middleware/authMiddleware");
const {
  createRecipe,
  getAllRecipes,
  getCategory,
  getSearchedRecipe,
  addComment,
  addLike,
  getRecipe,
  getMostLikedRecipe,
  getLatestRecipes,
  showallrecipes,
  adeleterecipe
} = require("../controllers/recipeController");

// Create a recipe
router.post("/create", createRecipe);

router.post("/userRecipes", getAllRecipes);

//fetch all recipes in a certain category
router.get("/all", showallrecipes);

router.get("/category/:category", getCategory);

router.get("/search/:q", getSearchedRecipe);

router.post("/comments", addComment);

router.post("/addlike", addLike);

router.get("/one/:id", getRecipe);

router.get("/mostLikedRecipe", getMostLikedRecipe);

router.get("/latestRecipes", getLatestRecipes);

router.delete("/adelete/:id", verifyToken, adeleterecipe);

module.exports = router;
