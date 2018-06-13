import axios from 'axios';

const request = axios.create({
  baseURL: 'http://docker-practice-s.tk:8085'
});

export const setToken = token => {
  localStrage.setItem('jwt', token);
};

export const initToken = () => {};

export default request;
