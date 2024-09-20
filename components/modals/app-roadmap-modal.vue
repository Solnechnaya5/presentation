<template>
  <app-modal name="roadmap" class="app-roadmap-modal">
    <template slot-scope="{ params: item }">
      <div class="app-roadmap-modal__body">
        <div class="app-roadmap-modal__logo">
          <img src="/assets/images/oumuaLogo.webp" alt="oumua" />
        </div>
        <h3 class="app-roadmap-modal__q">{{ item.q }}</h3>
        <h3 class="app-roadmap-modal__title">{{ item.title }}</h3>
        <p class="app-roadmap-modal__descr">
          {{ item.content }}
        </p>
      </div>
    </template>
  </app-modal>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import AppModal from './app-modal.vue'
export default {
  name: 'AppTreilerModal',
  components: {
    AppModal,
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  data() {
    return {
      email: '',
      isLoading: false,
    }
  },
}
</script>

<style></style>
