const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide recipe title'],
      trim: true,
    },
    ingredients: {
      type: [String],
      required: [true, 'Please provide ingredients list'],
      validate: {
        validator: function (v) {
          return v && v.length > 0;
        },
        message: 'At least one ingredient is required',
      },
    },
    instructions: {
      type: String,
      required: [true, 'Please provide cooking instructions'],
      trim: true,
    },
    cookingTime: {
      type: Number,
      required: [true, 'Please provide cooking time in minutes'],
      min: [1, 'Cooking time must be at least 1 minute'],
    },
    difficulty: {
      type: String,
      required: [true, 'Please provide difficulty level'],
      enum: {
        values: ['Easy', 'Medium', 'Hard'],
        message: 'Difficulty must be Easy, Medium, or Hard',
      },
    },


    
    category: {
      type: String,
      required: [true, 'Please provide recipe category'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);




recipeSchema.index({ category: 1 });

module.exports = mongoose.model('Recipe', recipeSchema);