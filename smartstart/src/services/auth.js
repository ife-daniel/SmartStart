import api from './api';

export const loginUser = async (email, password) => {
  const response = await api.post('/users/login', { email, password });
  return response.data;
};

export const signupUser = async (userData) => {
  const response = await api.post('/users/register', userData);
  return response.data;
};
