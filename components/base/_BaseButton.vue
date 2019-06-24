<template>
  <div>
    <button
      v-ripple
      v-if="!href"
      :type="type"
      class="buttonOverlay is-primary">
      <slot>
        button
      </slot>
    </button>
    <a
      v-ripple
      v-if="href"
      :href="href"
      :target="target"
      class="buttonOverlay is-primary">
      <slot>link</slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    href: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: '_self'
    },
    type: {
      type: String,
      default: 'button'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    myMethod () {}
  }
}
</script>

<style scoped>

.buttonOverlay {
  text-decoration:none;
  cursor: pointer;
  padding: 10px 25px;
  position: relative;
  color: #fff;
  z-index: 1 ;
  position:relative;
  display: inline-block ;
}

.buttonOverlay::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  top: 5px;
  right: 8px;
  background-color: #7BBE3A;
  z-index: -1;
  transition: transform .2s ease-in-out;
}

.buttonOverlay::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid #000;
}

.buttonOverlay:hover::before {
  transform: translate(8px, -5px);
}
.buttonOverlay:active::before {
  transform: translate(8px, -5px);
}

</style>
