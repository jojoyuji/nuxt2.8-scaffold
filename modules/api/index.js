import path from 'path'

const fs = require('fs-extra')
const axios = require('axios')

// const url = 'http://localhost:1337/temas?nome=default'

const writeData = (path, data) => {
return new Promise((resolve, reject) => {
  try {
    fs.ensureFileSync(path)
    fs.writeJson(path, data, resolve(`${path} Write Successful`))
    } catch (e) {
      console.error(`${path} Write failed. ${e}`)
      reject(`${path} Write Failed. ${e}`)
    }
  })
}

export default function nuxtAPI (moduleOptions) {
  //is aware of api:
  const options = Object.assign({}, this.options.api, moduleOptions)


  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: {
      paths: options.endpoints
    }
  })


  /************
   *
   * SCRAPPER
   *
   ************/


  const http = axios.create(this.options.axios || {baseURL: ''})

  const getData = async builder => {

    // Fetch list from API

    options.endpoints.forEach(async (endpoint) => {
      let fetcher = []
      const currentEndpoint = await http.get(endpoint)
      const basePath = `static/data/${endpoint}`
      if (!fs.pathExistsSync(basePath)) fs.emptyDir(basePath)
      let fileName = `${basePath}/data.json`
      console.log(`PROCESSING ${fileName}...`)
      fetcher.push(writeData(fileName, { content: currentEndpoint.data }))
      // return Promise.all(fetcher)
    })
    this.nuxt.hook('build:before', getData)
    return;

    const allRecipes = await http.get(url)
    const basePath = `static/data/recipes`
    if (!fs.pathExistsSync(basePath)) fs.emptyDir(basePath)
    let fileName = `${basePath}/data.json`
    console.log(`PROCESSING ${fileName}...`)
    fetcher.push(writeData(fileName, { content: allRecipes.data }))

    // Loop through list
    for (let recipe of allRecipes.data) {
      let recipeUrl = url + recipe.slug

      // Fetch Detail Data
      let recipeResponse = await http.get(recipeUrl)
      const path = `${basePath}/${recipe.slug}`
      if (!fs.pathExistsSync(path)) fs.emptyDir(path)
      fileName = `${path}/data.json`
      console.log(`PROCESSING ${fileName}...`)

      // Write Detail Data to file
      fetcher.push(writeData(fileName, { content: recipeResponse.data }))
    }
    return Promise.all(fetcher)
    .then(() => {
      console.log('JSON Build complete!')
    })
    .catch(e => {
      throw e
    })
  }

}

