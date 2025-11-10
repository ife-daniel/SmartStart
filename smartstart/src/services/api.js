import axios from 'axios';
import Constants from 'expo-constants';

const API_BASE_URL = Constants.expoConfig?.extra?.apiBaseUrl || process.env.EXPO_PUBLIC_API_BASE_URL;

// Create a reusable Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Handle token attachment automatically (optional)
api.interceptors.request.use(async (config) => {
  // If using authentication token
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const getToken = async () => {
  try {
    const stored = await import('@react-native-async-storage/async-storage');
    return await stored.default.getItem('token');
  } catch {
    return null;
  }
};

export default api;
