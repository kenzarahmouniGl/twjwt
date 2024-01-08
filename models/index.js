// models/index.js

const { Sequelize } = require('sequelize');
const config = require('../config/config');  // Assurez-vous d'ajuster le chemin si nécessaire
const UserModel = require('./user');

const sequelize = new Sequelize(config.development);

const User = UserModel(sequelize, Sequelize);

// Vous pouvez définir des associations entre les modèles ici si nécessaire

module.exports = {
  User,
  sequelize,  // Vous pouvez exporter l'instance Sequelize si nécessaire
};
