// frontend/src/components/Dashboard.js
import React from 'react';
import { login } from '../services/api';

const Dashboard = ({ username, onLogout }) => {
  return (
    <div>
      <h2>Tableau de bord</h2>
      <p>Bienvenue, {username}!</p>
      <button onClick={onLogout}>Se déconnecter</button>
    </div>
  );
};

export default Dashboard;
