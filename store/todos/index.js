export const state = () => ({
  items: [],
  loading: true
})

export const mutations = {
  loading(state, value) {
    state.loading = value
  },
  setTodos(state, items) {
    state.items = items
  }
}

export const actions = {
  async index({commit}, fetchType) {
    commit('loading', true)
    let result = await this.$api.fetcher({entity: 'todos', type: fetchType})
    commit('setTodos', result)
    commit('loading', false)
  }
}
