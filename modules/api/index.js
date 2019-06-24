import path from 'path'

export default function nuxtAPI (moduleOptions) {
  //is aware of api:
  const options = Object.assign({}, this.options.api, moduleOptions)

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: {
      paths: options.endpoints
    }
  })
}
