<template>
  <div>
    <nav
      :class="{ 'dettach-navbar shadow bg-white': !showNavbar || dettachNavbar}"
      class="
      navbar
      font-serif
      sm:items-baseline w-full"
    >
      <section
        class="container
        h-full
        flex  flex-row text-left justify-between py-0 px-6 "
        style="min-height: 0" >
        <div class="w-1/4 mb-2 sm:mb-0 inner">
          <a
            href="/"
            class="flex justify-start items-center h-full text-2xl no-underline text-grey-darkest hover:text-blue-dark font-serif font-bold">
            <img
              v-if="logo!==''"
              :src="logo"
              style="max-height:60px"
              alt="">
          </a>
        </div>

        <div class="hidden md:flex flex-column items-center justify-end content-center w-full h-full sm:mb-0 text-right">
          <span
            v-for="link in links"
            :key="link.label"
            class=" relative h-full flex items-center no-underline px-4" >
            <nuxt-link
              :to="link.value"
              style="height:auto" >
              {{ link.label }}
            </nuxt-link>
          </span>
        </div>
        <div
          class="relative md:hidden flex justify-end items-center h-full"
          style="width:64px">
          <BaseButton
            :icon="true"
            ripple="dark"
            class="absolute r-0"
            color="transparent"
            @click="toggleModal" >
            <svg
              height="32px"
              style="enable-background:new 0 0 32 32;"
              version="1.1"
              viewBox="0 0 32 32"
              width="32px"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
          </BaseButton>
        </div>
      </section>
    </nav>
    <Modal
      :show="showModal"
      @close="showModal = false" >

      <div class="nav-mobile">
        <header
          class="flex flex-column justify-between p-5"
          style="border-bottom:1px solid #ddd;" >
          <nuxt-link to="/">
            <img
              v-if="logo!==''"
              :src="logo"
              style="max-height:50px"
              alt="">
          </nuxt-link>
          <BaseButton
            :icon="true"
            ripple="dark"
            color="transparent"
            @click="toggleModal" >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 212.982 212.982"
              style="enable-background:new 0 0 212.982 212.982; width:28px; height:28px;"
              xml:space="preserve">
              <g id="Close">
                <path
                  style="fill-rule:evenodd;clip-rule:evenodd;"
                  d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312
             c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312
             l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937
             c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"/>
            </g> <g/> <g/> <g/> <g/> <g/> <g/> <g/> <g/> <g/> <g/> <g/> <g/> <g/> <g/> <g/> </svg>
          </BaseButton>
        </header>
        <nav class="p-3">

          <span
            v-for="link in links"
            :key="link.label"
            class="link relative h-full flex items-center no-underline px-4"
            @click="toggleModal" >
            <nuxt-link
              :to="link.value"
              class="py-4"
              style="height:auto" >
              {{ link.label }}
            </nuxt-link>
          </span>
        </nav>
      </div>
    </Modal>
  </div>
</template>
<script>
import BaseButton from '~/components/base/BaseButton'
import Modal from '~/components/Modal'
import {get} from '~/plugins/filters'

export default {
  name: 'Nav',
  components: {
    BaseButton,
    Modal
  },
  props:{ logo: {
      type: String,
      default: ''
    },
    links: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
 data () {
    return {
      showNavbar: true,
      showModal: false,
      lastScrollPosition: 0,
    }
  },
  computed: {
    dettachNavbar() {
      return !get(this.$store.state.template, 'navtransparente');
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition <= 0) {
        this.showNavbar = true;
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset

      // if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
      //   return
      // }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition // this.lastScrollPosition = currentScrollPosition
    },
    toggleModal(value) {
      this.showModal = !this.showModal
    }
  }
}

</script>

<style>
/* .app { */
/*   width: 100vw; */
/*   height: 500vh; */
/*   background: hsl(200, 50%, 90%); */
/* } */
.navbar {
  height: 120px;
  width: 100vw;
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out;
  z-index: 10 ;
}

.navbar.dettach-navbar {
  box-shadow: none;
  /* transform: translate3d(0, -100%, 0); */
  height: 88px;
  background: rgba(255,255,255,0.9);
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.2);
}
.navbar .nuxt-link-exact-active:before{
  content:'';
  box-shadow: inset 0 4px 0 #7bbe3a;
  position: absolute;
  top: 0;
  height: 10px;
  left: 0;
  right: 0;
}
.navbar a,
.nav-mobile .link a{
  color:black;
  text-decoration:none;
  font-size: 16px;
}
.nav-mobile .link a{
  font-size: 18px;
}

</style>
