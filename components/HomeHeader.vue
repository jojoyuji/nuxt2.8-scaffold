<template>
  <section class="section-shaped my-0">
    <div class="shape shape-style-1 shape-primary shape">
      <span/>
      <span/>
      <span/>
      <span/>
      <span/>
      <span/>
      <span/>
      <span/>
      <span/>
    </div>
    <div
      class="shape-container  d-flex"
      style="overflow:hidden;">

      <div v-if="slides.length">
        <hooper
          :progress="true"
          :wheel-control="false"
          :auto-play="false"
          :play-speed="20000" >
          <slide
            v-for="(s, index) in slides"
            :index="index"
            :key="s.title" >
            <section
              :style="{'background-image': 'url('+ s.imagem + ')'}"
              class="backy mx-3 md:mx-0"
              style="background-size: cover; padding-top:120px; padding-bottom:50px;">
              <div
                class="
                  container
                  justify-end
                  rounded
                  md:flex
                  shadow
                  md:shadow-none
                  bg-white
                  md:bg-transparent "
                style="" >
                <img
                  :src="s.imagem"
                  alt=""
                  class="md:hidden"
                  style="">

                <div class="p-4 md:p-2 md:my-16 w-auto md:w-3/5 md:bg-transparent">
                  <small>{{ s.type }}</small>
                  <h2 class="event-title text-2xl lg:text-4xl truncate mb-6">{{ s.nome }}</h2>
                  <div class="event-description my-6" >
                    <nl2br
                      :text="s.descricao | truncate(400)"
                      tag="p" />
                  </div>
                  <div class="flex flex-col align-center pb-4 text-sm">
                    <div
                      v-if="s.data"
                      class="flex flex-row items-start align-start">
                      <v-icon
                        name="calendar"
                        class="mr-2"/>
                      <span> {{ s.data | formatDate('DD/MM/YYYY [às] HH:mm') }} </span>
                    </div>
                    <div
                      v-if="s.local"
                      class="mt-2 flex flex-row items-start align-start" >
                      <v-icon
                        name="map-pin"
                        class="mr-2"/>
                      <span>{{ s.local }}</span>
                    </div>
                  </div>

                  <BaseButton
                    type="button"
                    @click="toggleSubscriptionModal(index)">
                    Inscrever!
                  </BaseButton>

                </div>
              </div>
            </section>
          </slide>
          <hooper-pagination slot="hooper-addons"/>
        </hooper>
      </div>
      <div
        v-else
        class="pt-32 pb-32">
        <h2
          class="text-center text-3xl"
          style="padding-top:44px;">Bem vindo!</h2>
      </div>

    </div>
    <Modal
      v-for="(s, index) in slides"
      :key="s.nome"
      :show="s.showModal"
      :width="600"
      name="s.nome"
      @close="toggleSubscriptionModal(index)" >
      <InscricaoForm
        :title="s.nome"
        :type="s.type"
        :id="s | get('_id')" />
    </Modal>

  </section>
</template>

<script>

import BaseButton from '@/components/base/BaseButton'
import InscricaoForm from '~/components/InscricaoForm'
import Modal from '~/components/Modal'

import { Hooper, Slide, Pagination as HooperPagination } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'HomeHeader',
  components: {
    InscricaoForm,
    BaseButton,
    Hooper,
    Slide,
    Modal,
    HooperPagination
  },
  computed: {
    slides() {
      return this.$store.state.slides || []
    }
  },

  methods: {
    toggleSubscriptionModal (index) {
      this.$store.commit('toggleSubscriptionModal', index)
    }
  }
}
</script>

<style>
.hooper-indicator.is-active, .hooper-indicator:hover {
  background-color: #7bbe3a
}
.hooper-indicator{
  height:8px;
  width:24px;
  margin:0 4px;
}

.icon {
  width: 16px;
}
@media (max-width: 48em) {
  .backy{ background-image: none !important;}
}

</style>
