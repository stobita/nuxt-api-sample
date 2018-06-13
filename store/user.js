import request from '~/plugins/request';

export const state = () => ({
  errorMessage: '',
  noticeMessage: ''
});

export const mutations = {
  setErrorMessage(state, payload) {
    state.errorMessage = payload;
  },
  setNoticeMessage(state, payload) {
    state.noticeMessage = payload;
  },
  clearErrorMessage(state) {
    state.errorMessage = '';
  }
};

export const actions = {
  postUser({ commit }, { email, password, confirmationPassword }) {
    commit('clearErrorMessage');
    request
      .post('signup', { email, password, confirmationPassword })
      .then(response => {
        commit('setNoticeMessage', '会員登録が完了しました。');
        this.$router.replace({ path: '/' });
      })
      .catch(error => {
        console.log(error.response);
        commit('setErrorMessage', '会員登録に失敗しました。');
      });
  },
  signInUser({ commit }, { email, password }) {
    commit('clearErrorMessage');
    request
      .post('signin', { email, password })
      .then(response => {
        localStorage.setItem('jwt', response.data.token);
        commit('setNoticeMessage', 'ログインに成功しました。');
        this.$router.replace({ path: '/' });
      })
      .catch(error => {
        commit('setErrorMessage', 'ログインに失敗しました。');
      });
  }
};

export const getters = {
  errorMessage: state => {
    return state.errorMessage;
  }
};
