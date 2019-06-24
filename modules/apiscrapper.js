const fs = require('fs-extra')
const axios = require('axios')

const url = 'http://localhost:1337/temas?nome=default'

module.exports = function fetchData() {
    //writeData writes the data to a file given the path
  //Same as in previous solution
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

    const getData = async builder => {
      fs.emptyDir('static/data')
      console.log(`STARTING JSON BUILD FOR ${URL}...`)
      const fetcher = []

      // Fetch list from API

      const allRecipes = await axios.get(url)
      const basePath = `static/data/recipes`
      if (!fs.pathExistsSync(basePath)) fs.emptyDir(basePath)
      let fileName = `${basePath}/data.json`
      console.log(`PROCESSING ${fileName}...`)

      // Write list to file
      fetcher.push(writeData(fileName, { content: allRecipes.data }))

      // Loop through list
      for (let recipe of allRecipes.data) {
        let recipeUrl = url + recipe.slug

        // Fetch Detail Data
        let recipeResponse = await axios.get(recipeUrl)
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

    // Run it before the nuxt build stage
    this.nuxt.hook('build:before', getData)
  }
