<template>
  <div
    :class="{'bg-shade1': success, 'bg-shade2': !success}"
    class="modal relative"
    style="min-height:250px;">
    <transition name="fade">
      <div
        v-if="success"
        class="p-8 absolute h-full w-full flex flex-col items-center" >
        <SuccessIcon />
        <h2 class="text-4xl text-center">Sua Mensagem foi enviada! Em breve entraremos em contato.</h2>
      </div>
    </transition>
    <transition name="fade">
      <form
        v-if="!success"
        action="post"
        class="p-8"
        @submit="postContato">
        <div class="container">
          <div class="form-group">
            <label for="">Nome</label>
            <input
              v-model="formData.nome"
              type="text"
              placeholder="Nome"
              class="form-control form-control-alternative">
          </div>
          <div class="form-group">
            <label for="">Telefone</label>
            <input
              v-model="formData.telefone"
              type="tel"
              placeholder="Telefone"
              class="form-control form-control-alternative">
          </div>
          <div class="form-group">
            <label for="">Email</label>
            <input
              v-model="formData.email"
              type="email"
              placeholder="Email"
              class="form-control form-control-alternative">
          </div>
          <div class="form-group">
            <label for="">Endereço</label>
            <input
              v-model="formData.endereco"
              type="text"
              placeholder="Endereço"
              class="form-control form-control-alternative">
          </div>
          <div class="form-group">
            <label for="">Assunto</label>
            <input
              v-model="formData.assunto"
              type="text"
              placeholder="Assunto"
              class="form-control form-control-alternative">
          </div>
          <div class="form-group">
            <label for="">Mensagem</label>
            <textarea
              v-model="formData.mensagem"
              placeholder="Assunto"
              style="min-height:200px;"
              class="form-control form-control-alternative"/>
          </div>
        </div>
        <BaseButton type="submit">Enviar</BaseButton>
      </form>
    </transition>
  </div>
</template>

<script>
import BaseButton from '~/components/base/BaseButton'

import SuccessIcon from '~/components/SuccessIcon'

export default {
  name: 'Contato',
  components: {
    BaseButton,
    SuccessIcon
  },
  data () {
    return {
      success: false,
      formData: {
        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        whatsapp: '',
        endereco: '',
      }
    }
  },
  methods: {
    async postContato (event) {
      event.preventDefault();
      let data = {...this.formData};
      var rs = await this.$axios.post('/contatoes', data)
      if (rs.data.createdAt) {
        this.formData.nome = ''
        this.formData.sobrenome = ''
        this.formData.email = ''
        this.formData.telefone = ''
        this.formData.whatsapp = ''
        this.formData.endereco = ''
        this.success = true
      }
    }
  }
}
</script>

<style>
.modal{
  -webkit-transition:  .2s all ease ;
  -moz-transition:  .2s all ease;
  -o-transition:  .2s all ease;
  transition:  .2s all ease ;
}

.form-group
{
    margin-bottom: 1rem;
}
.form-group label{
  font-size: 12px;
  padding: 0.5em;
  display: block ;
  color: #333;
  text-transform: capitalize;
}
 .form-control
{
    font-size: 1rem;
    line-height: 1.5;

    display: block;

    width: 100%;
    height: calc(2.75rem + 2px);
    padding: .625rem .75rem;

    transition: all .2s cubic-bezier(.68, -.55, .265, 1.55);

    color: #8898aa;
    border: 1px solid #cad1d7;
    border-radius: .25rem;
    background-color: #fff;
    background-clip: padding-box;
    box-shadow: none;
}
@media screen and (prefers-reduced-motion: reduce)
{
    .form-control
    {
        transition: none;
    }
}
.form-control::-ms-expand
{
    border: 0;
    background-color: transparent;
}
.form-control:focus
{
    color: #8898aa;
    border-color: rgba(50, 151, 211, .25);
    outline: 0;
    background-color: #fff;
    box-shadow: none, none;
}
.form-control::-webkit-input-placeholder
{
    opacity: 1;
    color: #adb5bd;
}
.form-control:-ms-input-placeholder
{
    opacity: 1;
    color: #adb5bd;
}
.form-control::-ms-input-placeholder
{
    opacity: 1;
    color: #adb5bd;
}
.form-control::placeholder
{
    opacity: 1;
    color: #adb5bd;
}
.form-control:disabled,
.form-control[readonly]
{
    opacity: 1;
    background-color: #e9ecef;
}

select.form-control:focus::-ms-value
{
    color: #8898aa;
    background-color: #fff;
}

.form-control-file,
.form-control-range
{
    display: block;

    width: 100%;
}

.form-control-alternative
{
    transition: box-shadow .15s ease;

    border: 0;
    box-shadow: 0 1px 3px rgba(50, 50, 93, .15), 0 1px 0 rgba(0, 0, 0, .02);
}
.form-control-alternative:focus
{
    box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
}
@media (min-width: 576px)
{
    .form-inline label
    {
        display: flex;

        margin-bottom: 0;

        align-items: center;
        justify-content: center;
    }
    .form-inline .form-group
    {
        display: flex;

        margin-bottom: 0;

        flex: 0 0 auto;
        flex-flow: row wrap;
        align-items: center;
    }
}
 .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>
