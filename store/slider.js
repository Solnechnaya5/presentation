export const state = () => ({
  activeSlideId: null,
})
export const mutations = {
  setSlideId(state, payload) {
    state.activeSlideId = payload
  },
}

export const getters = {
  activeSlideId: ({ activeSlideId }) => activeSlideId,
}
