<template>
  <div>
    <h1> {{ hello }}</h1>
    {{ renderFrom }}

    <nuxt-link to="/"> hello </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'MyComponentName',
  asyncData(context) {
    return {
      renderFrom: process.server ? 'server' : 'client'
    }
  },
  data () {
    return {
      hello: 'This is about page'

    }
  },
  methods: {
    myMethod () {}
  }
}
</script>

<style scoped>

</style>
