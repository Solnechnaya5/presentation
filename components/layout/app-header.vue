<template>
  <header class="app-header">
    <div class="app-header__body">
      <div class="app-header-menu">
        <div class="app-header__logo">
          <a
            href="https://vireye.com/?utm_source=oumua_website&utm_medium=referral&utm_campaign=site_redirect"
            target="_blank"
          >
            <logo-icon></logo-icon>
          </a>
          <a href="/">
            <img
              width="90"
              height="33"
              class="app-header__oumua"
              src="/assets/images/oumuaLogo.webp"
              alt="oumua logo"
          /></a>
        </div>
        <nav>
          <scrollactive
            ref="scrollactive"
            tag="ul"
            class="app-header-menu__list"
            :offset="50"
            :duration="100"
            exact
          >
            <li class="app-header-menu__item">
              <nuxt-link to="/#intro" class="scrollactive-item">Home</nuxt-link>
            </li>
            <li class="app-header-menu__item">
              <nuxt-link to="/#introdution" class="scrollactive-item"
                >About</nuxt-link
              >
            </li>
            <li class="app-header-menu__item">
              <nuxt-link to="/#choose" class="scrollactive-item"
                >character</nuxt-link
              >
            </li>
            <li
              style="cursor: pointer"
              class="app-header-menu__item app-header-menu__item--logo"
              @click="$modal.show('message')"
            >
              <img src="/assets/images/oumuaLogo.webp" alt="oumua logo" />
              <img src="/assets/images/header/icon.webp" alt="" />
            </li>
            <li class="app-header-menu__item">
              <a
                class="bn632-hover bn27 app-header-menu__item--play"
                @click="playNowClick"
                >Play now!</a
              >
            </li>
            <!-- <li class="app-header-menu__item">
              <nuxt-link to="/" disabled @click.prevent="">news</nuxt-link>
            </li>
            <li class="app-header-menu__item">
              <nuxt-link to="/" disabled @click.prevent=""
                >whitepaper</nuxt-link
              >
            </li> -->
            <li class="app-header-menu__item disabled">news</li>
            <li class="app-header-menu__item disabled">whitepaper</li>
          </scrollactive>
        </nav>
        <!-- <app-btn class="app-header-menu-play" @click="$modal.show('message')">
          <span>Play now!</span>
        </app-btn> -->
        <button
          class="bn632-hover bn27 app-header-menu-play"
          @click="playNowClick"
        >
          Play now!
        </button>
        <app-menu-burger class="app-header-menu-burger"></app-menu-burger>
      </div>
    </div>
    <app-mobile-menu></app-mobile-menu>
  </header>
</template>

<script>
import LogoIcon from 'static/assets/images/vireyeLogoNew.svg?inline'
import AppMenuBurger from '../ui/app-menu-burger.vue'
// import AppBtn from '../ui/app-btn.vue'
import AppMobileMenu from './app-mobile-menu.vue'
export default {
  name: 'AppHeader',
  components: {
    LogoIcon,
    AppMenuBurger,
    AppMobileMenu,
    // AppBtn,
  },
  methods: {
    playNowClick() {
      this.$modal.show('message')
      // conversion
      this.$gtag.event('PlayNow', {
        // event_label: 'PlayNow',
        send_to: 'AW-11212823601/QuTkCLfutKkYELG42OIp',
      })

      this.$fb.query('trackCustom', 'PlayNow')
      if (process.browser) {
        window.rdt('track', 'Custom', { customEventName: 'PlayNow' })
      }
    },
  },
}
</script>

<style></style>
