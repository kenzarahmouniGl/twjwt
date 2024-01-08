// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');  // Assurez-vous d'ajuster le chemin selon votre structure de projet
const authenticateMiddleware = require('../middleware/authenticate');

// Exemple de route protégée nécessitant une authentification avec le JWT
router.get('/profile', authenticateMiddleware, authController.getProfile);

module.exports = router;
