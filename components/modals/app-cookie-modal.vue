<template>
  <app-modal name="cookie" class="app-cookie-modal">
    <div class="app-cookie-modal__body">
      <div class="app-cookie-modal__logo">
        <img src="/assets/images/oumuaLogo.webp" alt="oumua" />
      </div>
      <h3 class="app-cookie-modal__title">title</h3>
      <p class="app-cookie-modal__descr">descr</p>
    </div>
  </app-modal>
</template>

<script>
import AppModal from './app-modal.vue'
export default {
  name: 'AppTreilerModal',
  components: {
    AppModal,
  },

  data() {},
}
</script>

<style></style>
