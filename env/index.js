export default () => {
  const env = process.env.NODE_ENV || 'development'
  return require(`./${env}`)
}
