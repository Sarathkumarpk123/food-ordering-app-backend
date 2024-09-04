const express = require('express');
const router = express.Router();
const { getAllRestaurent, getRestaurentById, postRestaurent, updateRestaurent, deleteRestaurent } = require('../controllers/restaurentControllers');

router.get('/', getAllRestaurent);

router.get('/:restaurentId', getRestaurentById);

router.post('/', postRestaurent);

router.patch('/:restaurentId', updateRestaurent);  // Fixed this line

router.delete('/:restaurentId', deleteRestaurent);

module.exports = router;

