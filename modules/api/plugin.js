const createRepository = require('@/modules/api/createRepo.js');


export default function api(ctx, inject)  {
  const options = <%= JSON.stringify(options, null, 2) %>;

  const repositoryWithAxios = createRepository(ctx.$axios)
  let repositories = {};
  for (var i=0; i < options.paths.length; i++) {
    repositories[options.paths[i]] = repositoryWithAxios(options.paths[i]);
  }

  // adds fetcher helper to make json or http req
  repositories.fetcher = async ({entity, type}) => {
    if(type === 'static') {
      let json = require(`~/static/data/${entity}/data.json`)
      return json.content;
    }
    return await repositories[entity].index();
  }

  inject('api', repositories)
}

