<template>
  <div>
    <button
      v-ripple="rippleColor"
      v-if="!href && !to"
      :type="type"
      :class="background + ' ' + rounded"
      class="btn text-white"
      @click="clicked()">
      <slot> button </slot>
    </button>
    <nuxt-link
      v-ripple="rippleColor"
      v-if="href || to"
      :to="href || to"
      :target="target"
      :class="background + ' ' + rounded"
      class="btn text-white"
      @click="clicked()" >
      <slot>link</slot>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    ripple: {
      type: String,
      default: 'light',
    },
    href: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: '_self'
    },
    icon: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    }
  },
 data: function () {
    return {
      background: 'bg-' + this.color,
      rippleColor: this.ripple === 'light' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.7)' ,
      rounded:  this.icon ? 'flex justify-center align-center rounded-full h-16 w-16' : 'rounded h-10 px-5 shadow'
    }
  },
  methods: {
    clicked () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.btn.shadow{
  line-height:2.5rem;
  box-shadow: rgba(50, 50, 93, 0.11) 0px 4px 6px 0px, rgba(0, 0, 0, 0.08) 0px 1px 3px 0px ;
}
.btn.shadow:hover{
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  transform: translateY(-1px);
}
.btn{
  cursor: pointer ;
  display: inline-block ;
  font-size: 14px ;
  text-decoration:none;
  text-align: center ;
  text-transform: uppercase ;
  user-select: none ;
  vertical-align: middle ;
  white-space: nowrap ;
  -webkit-transition:  .15s all ease ;
  -moz-transition:  .15s all ease;
  -o-transition:  .15s all ease;
  transition:  .15s all ease ;
  will-change: transform;
}
.btn:hover{
}
/* .btn:active{ */
/*     transform: translateY(0px); */
/* } */


</style>
