const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./db');
const { seedData } = require('./seeder');

// Connexion à la base de données
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    seedData(User);
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Synchronisation du modèle User avec la base de données
const User = require('./models/User');
sequelize.sync()
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch(err => {
    console.error('An error occurred while synchronizing the models:', err);
  });

app.use(express.json());

// Middleware pour vérifier le token JWT
app.use((req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    return res.status(403).json({ error: 'Token is required' });
  }
});

// Utilisation du middleware cors
app.use(cors());

// Routes d'authentification
app.use('/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
