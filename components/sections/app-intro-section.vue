<template>
  <div id="intro" class="intro-section">
    <div class="intro-section__body">
      <div class="intro-section__logo">
        <img
          width="350"
          height="110"
          src="/assets/images/intro/logo.webp"
          alt=""
        />
      </div>
      <h1
        class="intro-section__title title"
        data-text="THE NEVERENDING Journey THROUGH THE STARS"
      >
        THE NEVERENDING Journey THROUGH THE STARS
      </h1>
      <!-- <h1 class="p intro-section__descr">
        <span
          >Immerse yourself in an infinite fantasy world and uncover it`s
          greatest secret that lies beneath.</span
        >
      </h1> -->
      <p class="p intro-section__sub-descr">Embark on an Epic OuMua World</p>
      <div class="intro-section-download">
          <a
            href="https://app.adjust.com/14glabp9?campaign=referral_oumua_site&label=oumua_site&redirect=https%3A%2F%2Fapps.apple.com%2Fua%2Fapp%2Foumua-roguelike-survival-games%2Fid6467129919"
            target="_blank"
            class="intro-section-download__link intro-section-download__apple"
            @click.native="handleClickAppStore"
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
          class="intro-section-download__link intro-section-download__google"
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
  </div>
</template>

<script>
export default {
  name: 'IntroSection',
  mounted() {},
  methods: {
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
