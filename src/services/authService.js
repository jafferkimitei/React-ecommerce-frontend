// services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

// Register a new user
export const registerUser = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/register`, {
    name,
    email,
    password,
  });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

// Login user and get token
export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

export const sendPasswordResetEmail = async (email) => {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    return response.data;
  };

  export const resetPassword = async (token, password) => {
    const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
    return response.data;
  };
