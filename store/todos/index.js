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
  async getTodos({commit}) {
    commit('loading', true)
    console.log('getTodos');
    let result = await this.$api.todos.index();
    commit('setTodos', result);
    commit('loading', false)

    return state.todos
  }
}
