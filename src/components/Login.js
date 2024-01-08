import React, { useState } from 'react';
import { login } from '../services/api';

const Login = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(userData);
      // Redirection ou autre action après la connexion réussie
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <label>Utilisateur :</label>
        <input
          type="text"
          value={userData.username}
          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
        />
        <label>Mot de passe :</label>
        <input
          type="password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        />
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
};

export default Login;
