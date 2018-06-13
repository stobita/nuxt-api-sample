import axios from 'axios';

export const state = () => ({
  users: []
});

export const mutations = {
  setUser(state, payload) {
    state.users = payload;
  }
};

export const actions = {
  getUsers({ commit }) {
    request.get('users').then(response => {
      commit('setUser', response.data);
    });
  },
  signIn({ commit }) {
    request.get('users').then(response => {
      request.defaults.headers.common['Authorization'] = response.data;
    });
  }
};

export const getters = {
  userList: state => {
    return state.users;
  }
};

const request = axios.create({
  baseURL: 'http://docker-practice-s.tk:8085'
});
