const express = require('express');
const router = express.Router();
const { getAllFood, getFoodById, postFood, updateFood, deleteFood } = require('../controllers/foodControllers');

router.get('/', getAllFood);

router.get('/:foodId', getFoodById);

router.post('/', postFood);

router.patch('/:foodId', updateFood);  // Fixed this line

router.delete('/:foodId', deleteFood);

module.exports = router;

