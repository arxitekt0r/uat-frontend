import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.uatsystems.dev',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

export default instance;
