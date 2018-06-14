import request from '~/plugins/request'

export const state = () => ({
  postList: []
})

export const mutations = {
  setPosts(state, payload) {
    state.postList = payload
  }
}

export const actions = {
  async postContent({dispatch, commit}, {title, content}) {
    request
      .post('post', {title, content})
      .then(response => {
        console.log(response)
        dispatch('getPosts')
      })
      .catch(error=> {
        console.log(error)
      })
  },
  getPosts({commit}) {
    request
      .get('posts')
      .then(response => {
        commit('setPosts', response.data)
      })
      .catch(error=> {
        console.log(error)
      })
  }
}

export const getters = {
  postList: state => {
    return state.postList
  }
}
