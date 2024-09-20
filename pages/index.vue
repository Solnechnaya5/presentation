<template>
  <div class="home">
    <app-intro-section></app-intro-section>
    <app-introdution-section></app-introdution-section>
    <app-portal-section></app-portal-section>
    <app-choose-section></app-choose-section>
    <app-roadmap-section></app-roadmap-section>
    <app-register-section></app-register-section>
  </div>
</template>

<script>
import AppChooseSection from '~/components/sections/app-choose-section.vue'
import appIntroSection from '~/components/sections/app-intro-section.vue'
import AppIntrodutionSection from '~/components/sections/app-introdution-section.vue'
import AppPortalSection from '~/components/sections/app-portal-section.vue'
import AppRegisterSection from '~/components/sections/app-register-section.vue'
import AppRoadmapSection from '~/components/sections/app-roadmap-section.vue'

// if (process.browser) {
//   window.dataLayer = window.dataLayer || []
//   function gtag() {
//     window.dataLayer.push(arguments)
//   }
//   gtag('js', new Date())

//   gtag('config', 'G-7K1Y5853V3')

//   gtag('config', 'AW-11212823601')
// }
export default {
  name: 'IndexPage',
  components: {
    appIntroSection,
    AppIntrodutionSection,
    AppChooseSection,
    AppPortalSection,
    AppRegisterSection,
    AppRoadmapSection,
  },

  layout: 'home',
  scrollToTop: true,
  head() {
    return {
      title: 'Oumua - The Ultimate RPG and Roguelike Mobile Game',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Dive into a world of magic and mystery with Oumua mobile game, a thrilling RPG and roguelike unforgettable adventure that will test your ultimate skills. Explore stunning landscapes, battle fierce enemies, and uncover hidden treasures as you journey through this immersive game. Play now and experience the ultimate gaming adventure!',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://oumua.vireye.com',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Oumua - The Ultimate RPG and Roguelike Mobile Game',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Dive into a world of magic and mystery with Oumua mobile game, a thrilling RPG and roguelike unforgettable adventure that will test your ultimate skills. Explore stunning landscapes, battle fierce enemies, and uncover hidden treasures as you journey through this immersive game. Play now and experience the ultimate gaming adventure!',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/image.png',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:domain',
          name: 'twitter:domain',
          content: 'https://oumua.vireye.com',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://oumua.vireye.com',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Oumua - The Ultimate RPG and Roguelike Mobile Game',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Dive into a world of magic and mystery with Oumua mobile game, a thrilling RPG and roguelike unforgettable adventure that will test your ultimate skills. Explore stunning landscapes, battle fierce enemies, and uncover hidden treasures as you journey through this immersive game. Play now and experience the ultimate gaming adventure!',
        },
        { hid: 'twitter:image', name: 'twitter:image', content: '/image.png' },
      ],
      // script: [
      //   {
      //     hid: 'jivo-site',
      //     src: 'https://code.jivo.ru/widget/EH93cokveA',
      //     async: true,
      //   },
      // ],
    }
  },
  mounted() {
    // this.$modal.show('step-3-android')
    if (this.$route.query.subscribe) {
      this.$toast.success('You have successfully signed up.')
      this.$router.replace('/')
    }

    // eslint-disable-next-line nuxt/no-env-in-hooks
    // if (process.browser) {
    //   // this.$gtag('config', 'G-7K1Y5853V3', {
    //   //   page_title: this.$metaInfo.title,
    //   //   page_path: this.$route.fullPath,
    //   // })
    //   console.log('test')
    // }
  },
  
}
</script>
