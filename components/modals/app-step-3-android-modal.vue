<template>
  <app-modal
    name="step-3-android"
    class="app-step-3-modal app-step-3-modal--android"
  >
    <div class="app-step-3-modal__body">
      <h4 class="app-step-3-modal__title">We greet your choice, Wanderer!</h4>
      <div class="app-step-3-modal-actions">
        <a
          href="https://bit.ly/3Q0cw3l"
          target="_blank"
          class="bn632-hover bn27 app-step-3-modal-actions__btn"
          @click="handleClick"
        >
          START YOUR JOURNEY!
        </a>
      </div>
      <p
        v-if="false"
        class="app-step-3-modal__descr app-step-3-modal__descr--top"
      >
        Your device may question your choice of stepping into the OuMua World,
        but fear not!
      </p>
      <p
        v-if="false"
        class="app-step-3-modal__descr app-step-3-modal__descr--accent"
      >
        It`s absolutely safe to install OuMua Alpha, you have our word on that
        matter.
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
    handleClick() {
      this.$gtag.event('StartAndroid', {
        send_to: 'AW-11212823601/sBrkCLHT674YELG42OIp',
      })

      this.$fb.query('trackCustom', 'StartAndroid')
    },
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
