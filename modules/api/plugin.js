const createRepository =  $axios  => resource => ({
  index() {
    return $axios.$get(`/${resource}`)
  },
  create(payload) {
    return $axios.$post(`/${resource}`, payload)
  },

  show(id) {
    return $axios.$get(`/${resource}/${id}`)
  },

  update(payload) {
    return $axios.$put(`/${resource}`, payload)
  },

  delete(id) {
    return $axios.$delete(`/${resource}/${id}`)
  }

})


export default function api(ctx, inject)  {
  const options = <%= JSON.stringify(options, null, 2) %>;

  const repositoryWithAxios = createRepository(ctx.$axios)
  let repositories = {};
  for (var i=0; i < options.paths.length; i++) {
    repositories[options.paths[i]] = repositoryWithAxios(options.paths[i]);
  }
  inject('api', repositories)
}

