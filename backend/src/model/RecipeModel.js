const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  instructions: [String],
  tags: [String],
  ingredients: [
    {
      name: String,
      quantity: String,
    },
  ],
  prepTime: String,
  cookTime: String,
  servings: Number,
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: true,
  },
  photo: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  recipeLikeCount: {
    type: Number,
    default: 0,
  },
  comments: [String],
});

module.exports = mongoose.model("Recipe", RecipeSchema);
