<template>
  <div
    id="early-access"
    ref="portal"
    class="portal-section"
    @click.prevent="handleClick"
  >
    <video autoplay loop muted="muted" preload="metadata" poster playsinline>
      <source type="video/webm" src="/video.webm" />
      <source type="video/mp4" src="/video.mp4" />
    </video>
    <article class="app-container">
      <!-- <h2 class="title portal-section__title">
        Claim your exclusive OuMua Early Access
      </h2> -->
      <p v-if="false" class="portal-section__descr">START YOUR JOURNEY!</p>
      
      <div class="portal-section__btn">
        <button class="bn632-hover bn27" @click.stop="handleClick">
          START YOUR JOURNEY!
        </button>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'PortalSection',
  methods: {
    handleClick() {
      this.$modal.show('message')

      this.$gtag.event('Start', {
        // event_label: 'START YOUR JOURNEY!',
        send_to: 'AW-11212823601/a5coCMDutKkYELG42OIp',
      })

      this.$fb.query('trackCustom', 'Portal')

      if (process.browser) {
        window.rdt('track', 'Custom', { customEventName: 'Portal' })
      }
    },
  },
}
</script>

<style></style>
