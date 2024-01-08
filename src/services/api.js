// frontend/src/services/api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Utilisez le préfixe /api
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Fonction pour effectuer une requête de connexion
export const login = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData); // Utilisez le chemin complet
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fonction pour effectuer une requête de déconnexion
export const logout = async () => {
  try {
    const response = await api.post('/auth/logout'); // Utilisez le chemin complet
    return response.data;
  } catch (error) {
    throw error;
  }
};
