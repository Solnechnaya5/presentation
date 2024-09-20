<template>
  <app-modal name="message" class="app-message-modal">
    <div class="app-message-modal__body">
      <div class="app-message-modal__logo">
        <img src="/assets/images/oumuaLogo.webp" alt="oumua" />
      </div>
      <h4 class="app-message-modal__title">Greetings, Wanderer!</h4>
      <p v-if="false" class="app-message-modal__descr">
        You won't find OuMua in App Store or Google Play Market.
      </p>
      <p v-if="false" class="app-message-modal__descr">
        We offer you to be among the first ones who will receive an early access
        to the mysteries of the World of Shards, and besides that - assist our
        team in the game's alpha-version launch.
      </p>
      <p class="app-message-modal__descr">Let the Epic Adventure begin!</p>
      <div class="app-message-modal-actions">
        <a
          href="https://app.adjust.com/14glabp9?campaign=referral_oumua_site&label=oumua_site&redirect=https%3A%2F%2Fapps.apple.com%2Fua%2Fapp%2Foumua-roguelike-survival-games%2Fid6467129919"
          target="_blank"
          class="app-message-modal-actions__link"
          @click="handleClickAppStore"
        >
          <img
            width="140"
            height="40"
            src="/assets/images/intro/apple.webp"
            alt="donwload oumua from app store"
          />
        </a>
        <a
          href="https://app.adjust.com/12fq3647?label=referral_site&redirect=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.vireye.oumua"
          target="_blank"
          class="app-message-modal-actions__link"
          @click="handleClickGooglePlay"
        >
          <img
            width="140"
            height="40"
            src="/assets/images/intro/google.webp"
            alt="donwload oumua from google play"
          />
        </a>
      </div>
    </div>
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
  mounted() {
    if (Object.prototype.hasOwnProperty.call(this.$route.query, 'greet')) {
      this.$modal.show('message')
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

      this.$gtag.event('EMAIL', {
        // event_label: 'GET ACCESS VIA EMAIL',
        send_to: 'AW-11212823601/pqS2CLrutKkYELG42OIp',
      })

      this.$fb.query('trackCustom', 'Email')

      if (process.browser) {
        window.rdt('track', 'Custom', { customEventName: 'Email' })
      }
    },
    handleClickAppStore() {
      this.$gtag.event('AppStore', {
        send_to: 'AW-11212823601/wPCACLfT674YELG42OIp',
      })

      this.$fb.query('trackCustom', 'AppStore')
    },
    handleClickGooglePlay(e) {
      this.$gtag.event('GooglePlay', {
        send_to: 'AW-11212823601/T5IGCLTT674YELG42OIp',
      })

      this.$fb.query('trackCustom', 'GooglePlay')
    },
  },
}
</script>

<style></style>
