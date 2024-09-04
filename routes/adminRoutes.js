const express = require('express');
const router = express.Router();
const { getAllAdmin, getAdminById, adminSignup, updateAdmin, deleteAdmin } = require('../controllers/adminControllers');

router.get('/', getAllAdmin);

router.get('/:adminId', getAdminById);

router.post('/', adminSignup);

router.patch('/:adminId', updateAdmin);  // Fixed this line

router.delete('/:adminId', deleteAdmin);

module.exports = router;