<template>
  <div class="contact">
    <app-register-section></app-register-section>
  </div>
</template>

<script>
import AppRegisterSection from '~/components/sections/app-register-section.vue'
export default {
  name: 'IndexPage',
  components: { AppRegisterSection },
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
          content: 'https://oumua.vireye.com/contact',
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
          content: 'https://oumua.vireye.com/contact',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://oumua.vireye.com/contact',
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
    }
  },
  mounted() {},
}
</script>
