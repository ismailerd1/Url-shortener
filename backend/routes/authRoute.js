const express = require('express');
const { register } = require('../controllers/registerController');
const { login } = require('../controllers/loginController');
const router = express.Router();

router.use(express.json());

router.post('/register', register);

router.post('/login', login);

module.exports = router;