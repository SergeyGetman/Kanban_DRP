import axios from 'axios';

const URL_HOST = 'http://localhost:5000';

export const apiClient = axios.create({
  baseURL: URL_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
});
