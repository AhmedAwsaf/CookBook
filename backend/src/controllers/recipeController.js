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

const getCategory = async (req, res) => {
  const { category } = req.params;
  console.log(`Fetching data for category: ${category}`);

  try {
    const recipes = await Recipe.find({ category });
    console.log(`Items found: ${recipes.length}`);
    if (recipes.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(recipes);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getSearchedRecipe = async (req, res) => {
  const { q } = req.params;
  console.log("search working");
  try {
    let recipes = [];
    if (q) {
      recipes = await Recipe.find({ name: { $regex: q, $options: "i" } });
    }
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "No items found!" });
  }
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getCategory,
  getSearchedRecipe,
};
