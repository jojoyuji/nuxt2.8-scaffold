<template>
  <div class="container">
    <h1 class="text-center p-8">Nuxt 2.8 scaffold</h1>
    {{ renderFrom }}
    <nuxt-link to="/hello"> hello </nuxt-link>

    <div v-if="todos.loading"> loading</div>
    <ul
      v-else
      class="shadow">
      <li
        v-for="(t, index) in todos.items"
        :key="index">
        {{ t.title }}
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  asyncData(context) {
    return {
      renderFrom: process.server ? 'server' : 'client'
    }
  },
  data() {
    return { }
  },
  computed: {
    todos() {
     return this.$store.state.todos;
    }
  },
  async fetch({store}) {
   await store.dispatch('todos/index','static');
  },
}
</script>

<style></style>
