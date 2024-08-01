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
  recipeLikeCount: [mongoose.Schema.Types.ObjectId],
  comments: [
    {
      commentedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      comment: String,
    },
  ],
});

module.exports = mongoose.model("Recipe", RecipeSchema);
