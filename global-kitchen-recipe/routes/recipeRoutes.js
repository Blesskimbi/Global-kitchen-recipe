const express = require('express');
const {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require('../controllers/recipeController');






const router = express.Router();

router.route('/')
  .get(getAllRecipes)    // GET /recipes
  .post(createRecipe);   // POST /recipes



  
router.route('/:id')
  .get(getRecipeById)    // GET /recipes/:id
  .patch(updateRecipe)   // PATCH /recipes/:id
  .delete(deleteRecipe); // DELETE /recipes/:id

module.exports = router;