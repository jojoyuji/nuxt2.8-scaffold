<template>
  <div>
    <parallax
      :parallax="true"
      :fixed="false">

      <img
        src="../static/images/full.jpg"
        alt="very cool bg">

    </parallax>
    <div
      class="container bg-white"
      style="margin-top: -200px;">
      <h1 class="meu_header_vem_aqui">Meu Header vem aqui</h1>
      <BaseButton color="secondary"> me aperte</BaseButton>
    </div>
  </div>
</template>
<script type="text/javascript" charset="utf-8">
import Parallax from 'vue-parallaxy'
import BaseButton from '~/components/base/BaseButton.vue'

export default {
  components: {
    Parallax,
    BaseButton
  }
}

</script>

<style>
</style>
