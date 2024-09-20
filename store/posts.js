export const state = () => ({
  posts: [],
})
export const mutations = {
  SET_POSTS(state, payload) {
    state.posts = payload
  },
}
export const actions = {
  async setPosts({ commit }) {
    await this.$axios
      .get('/posts', { params: { limit: 4 } })
      .then(({ data }) => {
        commit('SET_POSTS', data.data)
      })
  },
}
export const getters = {
  posts: ({ posts }) => posts,
}
