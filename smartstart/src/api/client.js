import axios from 'axios';
import Constants from 'expo-constants';

const API_BASE_URL = Constants.expoConfig.extra.apiBaseUrl;

// create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export default api;
