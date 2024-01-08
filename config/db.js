// config.js

require('dotenv').config(); // Chargement des variables d'environnement depuis le fichier .env

module.exports = {
  development: {
    // Configuration de la base de données pour l'environnement de développement
    database: process.env.DB_NAME || 'database_name',
    username: process.env.DB_USERNAME || 'database_user',
    password: process.env.DB_PASSWORD || 'database_password',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'squel3', // Choisissez le dialecte de votre base de données (mysql, postgres, sqlite, etc.)
  },
  production: {
    // Configuration de la base de données pour l'environnement de production
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret_key',
};
