const express = require('express');
const router = express.Router();
const { getAllUser, getUserById, userSignup, updateUser, deleteUser } = require('../controllers/userControllers');

router.get('/', getAllUser);

router.get('/:userId', getUserById);

router.post('/', userSignup);

router.patch('/:userId', updateUser);  // Fixed this line

router.delete('/:userId', deleteUser);

module.exports = router;