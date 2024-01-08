// controllers/userController.js

const { User } = require('../models');  // Assurez-vous d'ajuster le chemin selon votre structure de projet

// Exemple d'un contrôleur pour la gestion des utilisateurs

// Récupérer tous les utilisateurs
async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs.' });
  }
}

// Récupérer un utilisateur par son ID
async function getUserById(req, res) {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur.' });
  }
}

// Créer un nouvel utilisateur
async function createUser(req, res) {
  const { username, email, password } = req.body;

  try {
    const newUser = await User.create({
      username,
      email,
      password,  // Notez que vous devrez peut-être hacher le mot de passe avant de le stocker dans la base de données
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur.' });
  }
}

// Mettre à jour un utilisateur par son ID
async function updateUserById(req, res) {
  const userId = req.params.id;
  const { username, email } = req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }

    await user.update({
      username,
      email,
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'utilisateur.' });
  }
}

// Supprimer un utilisateur par son ID
async function deleteUserById(req, res) {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }

    await user.destroy();

    res.json({ message: 'Utilisateur supprimé avec succès.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur.' });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
