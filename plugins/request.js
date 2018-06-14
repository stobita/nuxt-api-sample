import axios from 'axios';

const request = axios.create({
  baseURL: 'http://docker-practice-s.tk:8085',
  headers: {'Authorization': 'Bearer ' + localStorage.getItem('jwt')}
});

export default request;
