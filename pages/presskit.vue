<template>
      <div class="page-wrapper" >
        <img src="/assets/presskit/backgrounds/main-bg.webp" alt="background image" class="page-top_background" />

     <div class="modal">
<div class="page-subtitle" >
  <NuxtLink to="/" rel="noopener noreferrer" aria-label="home page" class="back-btn">
    <img src="@/assets/icons/arrow-left.svg" alt="arrow left" />
</NuxtLink>
    <h3 id="presskit"><span>OuMua</span>Press kit</h3>
</div>
<app-top-info-section></app-top-info-section>
       <app-video-section></app-video-section>
        <app-images-sections></app-images-sections>
        <app-artwork-section></app-artwork-section>
        <app-contact-section></app-contact-section>
    </div>
  </div>
</template>
<script>
import AppTopInfoSection from '~/components/presskit/app-top-info-section.vue'
import AppVideoSection from '~/components/presskit/app-video-section.vue'
import AppImagesSections from '~/components/presskit/app-images-sections.vue'
import AppArtworkSection from '~/components/presskit/app-artwork-section.vue'
import AppContactSection from '~/components/presskit/app-contact-section.vue'
export default {
    name: 'PressKit',
    components: { 
    AppTopInfoSection,
        AppVideoSection,
        AppImagesSections,
        AppArtworkSection,
        AppContactSection
},
    
    layout: 'home',
  
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
    mounted() {
    }
   
  }
</script>