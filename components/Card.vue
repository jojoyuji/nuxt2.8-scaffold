<template>
  <div class="card shadow rounded overflow-hidden">
    <div
      class="card-img bg-shade2 overflow-hidden">
      <img
        v-if="image"
        :src="image" >
    </div>
    <div class="p-3">
      <h3 class="mb-3 text-2xl">{{ title }}</h3>
      <p class="mb-4">{{ description | truncate(400) }}</p>
      <div class="text-sm text-shade3">
        <div
          v-if="date"
          class="flex flex-row items-start align-start">
          <v-icon
            name="calendar"
            class="mr-2"/>
        <span>{{ date }}</span> </div> <div
          v-if="location"
          class="mt-2 flex flex-row items-start align-start" >
          <v-icon
            name="map-pin"
            class="mr-2"/>
          <span>{{ location }}</span>
        </div>
      </div>
      <footer class="pt-8">
        <slot>slot here</slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
      },
    description: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    }
  },
  methods: {
    myMethod () {}
  }
}
</script>

<style scoped>
.card-img {
 height: 150px;
}
.icon {
  width: 16px;
}

</style>
