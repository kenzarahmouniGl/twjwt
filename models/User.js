// models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Assurez-vous d'ajuster le chemin selon votre structure de projet

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users',  // Nom de la table dans la base de données
  timestamps: true,    // Ajoute les champs createdAt et updatedAt
});

module.exports = User;
