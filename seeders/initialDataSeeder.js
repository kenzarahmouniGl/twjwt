// backend/seeders/initialDataSeeder.js

const bcrypt = require('bcrypt');
const UserModel = require('../models/User');

const seedInitialData = async () => {
  try {
    // Vérifiez si des utilisateurs existent déjà
    const existingUsers = await UserModel.findAll();

    if (existingUsers.length === 0) {
      // Aucun utilisateur n'existe, alors insérez-en un
      const hashedPassword = await bcrypt.hash('motdepasse', 10); // Remplacez 'motdepasse' par le mot de passe souhaité

      await UserModel.create({
        username: 'utilisateur',
        password: hashedPassword,
      });

      console.log('Données initiales insérées avec succès.');
    } else {
      console.log('Des utilisateurs existent déjà. Aucune insertion nécessaire.');
    }
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données initiales :', error);
  }
};

module.exports = seedInitialData;
