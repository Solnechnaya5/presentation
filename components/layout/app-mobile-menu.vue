<template>
  <div :class="{ active: isOpen }" class="app-mobile-menu">
    <div class="app-mobile-menu__body">
      <!-- <app-menu-burger class="app-mobile-menu__burger"></app-menu-burger> -->
      <scrollactive
        ref="scrollactive"
        tag="nav"
        class="app-mobile-menu__list"
        :offset="60"
        :duration="100"
        exact
      >
        <ul>
          <li class="app-mobile-menu__item">
            <nuxt-link to="/#intro" class="scrollactive-item" aria-label="Home"
              >Home</nuxt-link
            >
          </li>
          <li class="app-mobile-menu__item">
            <nuxt-link
              to="/#introdution"
              class="scrollactive-item"
              aria-label="About"
              >About</nuxt-link
            >
          </li>
          <li class="app-mobile-menu__item">
            <nuxt-link
              to="/#choose"
              class="scrollactive-item"
              aria-label="character"
              >character</nuxt-link
            >
          </li>
          <!-- <li class="app-mobile-menu__item">
            <nuxt-link
              to="/#early-access"
              class="scrollactive-item"
              aria-label="charanewscter"
              >news</nuxt-link
            >
          </li> -->
          <li class="app-mobile-menu__item">
            <nuxt-link
              to="/#early-access"
              class="scrollactive-item"
              aria-label="early access"
              >early access</nuxt-link
            >
          </li>
          <!-- <li class="app-mobile-menu__item">
            <nuxt-link
              to="/#early-access"
              class="scrollactive-item"
              aria-label="early access"
              >whitepaper</nuxt-link
            >
          </li> -->
        </ul>
      </scrollactive>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import appMenuBurger from '../ui/app-menu-burger.vue'
export default {
  name: 'AppMobileMenu',
  // components: { appMenuBurger },
  computed: {
    ...mapGetters({
      isOpen: 'menu/isOpen',
    }),
  },

  mounted() {
    const mobileItems = document.querySelectorAll('.app-mobile-menu__item')

    mobileItems.forEach((item) => {
      item.addEventListener('click', () => {
        this.setClose()
      })
    })
  },

  methods: {
    ...mapActions({
      setClose: 'menu/setClose',
    }),
  },
}
</script>

<style></style>
