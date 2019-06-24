import createRepository from '~/api/Resource.js'

export default (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx.$axios)

  const repositories = {
    todos: repositoryWithAxios('todos'),
    posts: repositoryWithAxios('posts'),
    users: repositoryWithAxios('users')
  }

 inject('api', repositories)
}
