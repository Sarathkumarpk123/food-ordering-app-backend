const express = require('express');
const router = express.Router();
const { userLogin } = require('../controllers/authControllers');



router.post('/', userLogin);



module.exports = router;