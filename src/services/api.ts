import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});
