const initial = () => {
  return {
    loading: false,
    items: []
  }
}
// initial state
export const state = () => initial()
export const mutations = {
  RESET (state) {
    Object.assign(state, initial())
  }
}
export const actions = {
  reset ({ commit }) {
    commit('RESET')
  }
}
