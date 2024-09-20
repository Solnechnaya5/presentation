<template>
  <app-modal name="step-3-ios" class="app-step-3-modal app-step-3-modal--ios">
    <div class="app-step-3-modal__body">
      <h4 class="app-step-3-modal__title">We greet your choice, Wanderer!</h4>

      <p class="app-step-3-modal__descr">
        Installation instructions have been sent to your email. Let the Endless
        Journey begin!
      </p>
    </div>
  </app-modal>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
// import AppBtn from '../ui/app-btn.vue'
import AppModal from './app-modal.vue'
// import DiscordIcon from '@/assets/icons/discord.svg?inline'
export default {
  name: 'AppTreilerModal',
  components: {
    AppModal,
    // AppBtn,
    // DiscordIcon,
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
  methods: {
    handleSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) return this.$toast.error('Error. Fill all fields!')
      this.isLoading = true
      this.$axios
        .post('/subscribe', {
          email: this.email,
        })
        .then(({ data }) => {
          this.$toast.info(data)
          this.email = ''
          this.isLoading = false
          this.$modal.hide('subscribe')
        })
    },
    followClick() {
      this.$modal.hide('message')
      this.$modal.show('register')
    },
  },
}
</script>

<style></style>
