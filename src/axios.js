import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gkram-tinder-backend.herokuapp.com',
});

export default instance;
