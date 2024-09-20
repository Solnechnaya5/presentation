<template>
  <div v-if="!accepted" class="cookie">
    <div class="cookie__row">
      <div class="cookie__col">
        <img src="@/assets/cookie.png" alt="" />
        <div class="cookie__content">
          <h3 class="cookie__title">Cookies Policy</h3>
          <p class="cookie__descr">
            We collect cookies to analyze our website traffic and performance;
            we never collect any personal data. Continuing to browse on our
            website means that you accept our cookies policy.
          </p>
        </div>
      </div>
      <div class="cookie__col">
        <button @click="accept">Accept</button>
      </div>
    </div>
  </div>
</template>

<script>
import { bootstrap } from 'vue-gtag'
export default {
  data() {
    return {
      accepted: false,
    }
  },
  created() {
    this.accepted = this.$cookies.get('accepted')
    if (this.accepted) {
      this.loadGoogleAnalytics()
    }
  },
  methods: {
    accept() {
      this.$cookies.set('accepted', true)
      this.accepted = true
      // window.location.reload(true)
      this.loadGoogleAnalytics()
    },
    loadGoogleAnalytics() {
      if (process.browser) {
        // Google anal

        bootstrap().then(() => {
          this.$gtag.pageview('/')
        })
        // facebook
        this.$fb.enable()

        // Reddit
        window.rdt('init', 't2_d1jifz233')
        window.rdt('track', 'PageVisit')
      }
    },
  },
}
</script>
