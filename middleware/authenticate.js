// middleware/authenticate.js

const jwt = require('jsonwebtoken');
const config = require('../config/config');  // Assurez-vous d'ajuster le chemin selon votre structure de projet

// Middleware pour vérifier le JWT
function authenticateMiddleware(req, res, next) {
  // Récupérer le token depuis l'en-tête Authorization
  const token = req.header('Authorization');

  // Vérifier si le token existe
  if (!token) {
    return res.status(401).json({ error: 'Token manquant. Authentification requise.' });
  }

  try {
    // Vérifier et décoder le token
    const decoded = jwt.verify(token, config.jwtSecret);

    // Ajouter les informations de l'utilisateur décodées à l'objet de requête (req)
    req.user = decoded;

    // Passer à la prochaine étape du middleware (ou à la route finale)
    next();
  } catch (error) {
    console.error(error);
    res.status(403).json({ error: 'Token invalide. Accès refusé.' });
  }
}

module.exports = authenticateMiddleware;
