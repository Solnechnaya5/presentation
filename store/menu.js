export const state = () => ({
  isOpen: false,
})
export const mutations = {
  setOpen(state) {
    state.isOpen = true
    document.documentElement.style.setProperty('overflow', 'hidden')
    document.body.style.setProperty('overflow', 'hidden')
    // document.querySelector('.app-header').classList.add('position-fixed')
    // document.body.style.setProperty('touch-action', 'none')
    // document.body.classList.add('menu-opened')
  },
  resetOpen(state) {
    state.isOpen = false
    document.documentElement.style.removeProperty('overflow')
    document.body.style.removeProperty('overflow')
    // document.querySelector('.app-header').classList.remove('position-fixed')
    // document.body.style.removeProperty('touch-action')
    // document.body.classList.remove('menu-opened')
  },
}
export const actions = {
  setClose({ commit, getters }) {
    const isOpen = getters.isOpen
    if (isOpen) {
      commit('resetOpen')
    }
  },
  setOpen({ commit }) {
    commit('setOpen')
  },
}
export const getters = {
  isOpen: ({ isOpen }) => isOpen,
}
