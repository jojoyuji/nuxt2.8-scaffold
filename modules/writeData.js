module.exports = (path, data) => {
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
