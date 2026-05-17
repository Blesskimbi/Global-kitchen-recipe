const Recipe = require('../models/Recipe');

const getRecipes = async (filter = {}) => {
  return await Recipe.find(filter);
};





const getRecipeById = async (id) => {
  return await Recipe.findById(id);
};

const createRecipe = async (recipeData) => {
  // Business logic: validate cookingTime is positive
  if (recipeData.cookingTime && recipeData.cookingTime <= 0) {
    throw new Error('Cooking time must be a positive number');
  }
  const recipe = new Recipe(recipeData);
  return await recipe.save();
};

const updateRecipe = async (id, updateData) => {
  // Business logic: validate cookingTime if present
  if (updateData.cookingTime !== undefined && updateData.cookingTime <= 0) {
    throw new Error('Cooking time must be a positive number');
  }
  




  const recipe = await Recipe.findByIdAndUpdate(
    id,
    updateData,
    {
      new: true,
      runValidators: true,
      context: 'query',
    }
  );
  return recipe;
};

const deleteRecipe = async (id) => {
  const recipe = await Recipe.findByIdAndDelete(id);
  return recipe;
};





module.exports = {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};