<template>
  <app-modal name="register" class="app-register-modal">
    <div class="app-register-modal__body">
      <div class="app-register-modal__logo">
        <img src="/assets/images/oumuaLogo.webp" alt="oumua" />
      </div>
      <app-register-form></app-register-form>
    </div>
  </app-modal>
</template>

<script>
import AppRegisterForm from '../ui/app-register-form.vue'
import AppModal from './app-modal.vue'

export default {
  name: 'AppTreilerModal',
  components: {
    AppModal,
    AppRegisterForm,
  },
}
</script>

<style></style>
