const mongoose = require("mongoose");

const recipesSchema = new mongoose.Schema({
  name: String,
  ingredients: Array,
});

const RecipeModel = mongoose.model("Recipe", recipesSchema, "recipes");
module.exports = RecipeModel;
