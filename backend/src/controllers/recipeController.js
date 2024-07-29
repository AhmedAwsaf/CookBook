const Recipe = require("../model/RecipeModel");

const createRecipe = async (req, res) => {
  try {
    const {
      name,
      category,
      instructions,
      tags,
      ingredients,
      prepTime,
      cookTime,
      servings,
      difficulty,
      photo,
      createdBy,
    } = req.body;

    // Create a new recipe instance
    const newRecipe = new Recipe({
      name,
      category,
      instructions,
      tags,
      ingredients,
      prepTime,
      cookTime,
      servings,
      difficulty,
      photo,
      comments: [],
      createdBy,
    });

    // Save the recipe to the database
    await newRecipe.save();

    res.status(201).json({
      success: true,
      message: "Recipe created successfully",
      data: newRecipe,
    });
  } catch (error) {
    console.error("Error creating recipe:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

const getAllRecipes = async (req, res) => {
  const { createdBy } = req.body;
  try {
    const recipes = await Recipe.find({ createdBy });
    res.status(200).json(recipes);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = { createRecipe, getAllRecipes };
