const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Endpoint untuk login
router.post('/login', authController.login);

router.post('/register-admin', authController.registerAdmin);
router.post('/register', authController.register);

module.exports = router;