const createRepository = require('@/modules/api/createRepo.js');


export default function api(ctx, inject)  {
  const options = JSON.parse(`<%= JSON.stringify(options, null, 2) %>`);

  const repositoryWithAxios = createRepository(ctx.$axios)
  let repositories = {};
  if(options.resources && options.resources.length) {
    options.resources.forEach((item, index) =>{
      if(typeof item === 'object') {
        repositories[item.name] = repositoryWithAxios(item.path);
      }
      else{
        repositories[item] = repositoryWithAxios(item);
      }
    })
  }

  // adds fetcher helper to make json or http req
  repositories.fetchJSON = async ({entity, type}) => {
    if(type === 'static') {
      let json = require(`~/${options.staticPath}/${entity}/data.json`)
      return json.content;
    }
    return await repositories[entity].index();
  }

  inject('api', repositories)
}

