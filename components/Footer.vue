<template>
  <footer class="footer bg-shade4 text-shade1">
    <div class="container justify-between">
      <div
        v-if="!hideMap"
        class="flex flex-col md:flex-row align-items-center mb-5 m-2 mt-0" >
        <div
          class="tilted-up w-full md:w-1/2 bg-white rounded shadow p-2"
          style="">
          <img :src="data | get('mapa.url')" >
        </div>
        <div class="w-full md:w-1/2 p-8">
          <h2 class="text-primary font-weight-light mb-4">{{ data | get('tituloendereco') }}</h2>
          <h3 class="font-weight-light mb-2">
            {{ data | get('endereco') }}
          </h3>
          <h4 class="mb-2 font-weight-light">
            {{ data | get('telefone') }}
          </h4>
          <h4 class="mb-0 font-weight-light">
            {{ data | get('email') }}
          </h4>
        </div>
      </div>
      <hr
        v-if="!hideMap"
        class="mt-8"
        style="border-top: 1px solid rgba(218, 225, 231, 0.18)">
      <div class="flex pt-8 px-4 md:px-0 ">
        <div class="w-1/2  hidden md:block">
          <div class="copyright">
            © {{ currentYear }}
            <nuxt-link to="/"> Sinapse </nuxt-link>
          </div>
        </div>
        <div class="w-full md:w-1/2 ">
          <ul class="flex justify-end">
            <li
              v-for="f in links"
              :key="f.slug"
              class="nav-item inline-block">
              <nuxt-link
                :to="f.value"
                class="mx-2"> {{ f.label }}</nuxt-link>

          </li></ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    },
    links: {
      type: Array,
      default: function() {
        return [ {}];
      }
    }
  },
  data() {
    return {
      currentYear: new Date().getUTCFullYear()
    }
  },
  computed: {
    hideMap() {
      return this.$get(this.$store.state.template, 'escondermaparodape');
    }
  },
}
</script>
<style>
.footer{
  padding: 0 0 2.5rem 0;
}
.footer-wrapper{
  height: 196px;
}
.footer a{
  text-decoration:none;
  color:inherit;
}

  .footer .tilted-up{
    margin-top: 2rem;
  }
@media (min-width: 768px) {
  .footer .tilted-up{
    margin-top:-50px;z-index:9
  }
}


</style>
