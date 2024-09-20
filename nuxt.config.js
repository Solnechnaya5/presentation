/* eslint-disable require-await */
require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  server: {
    port: process.env.APP_PORT,
    host: process.env.APP_HOST,
  },
  head: {
    title: 'Oumua - The Ultimate RPG and Roguelike Mobile Game',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Oumua',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/theme/index.scss',
'@theme/presskit.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/toastifications', ssr: false },
    { src: '@/plugins/axios', ssr: true },
    { src: '@/plugins/vuelidate', ssr: true },
    { src: '@/plugins/modal', ssr: false },
    { src: '@/plugins/scroll', ssr: true },
    { src: '@/plugins/vue-swiper', ssr: false },
    { src: '@/plugins/reddit-pixel', ssr: false },
    { src: '@/plugins/vue-gtag', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth-next',
    'cookie-universal-nuxt',
    'nuxt-facebook-pixel-module',
    'nuxt-protected-mailto',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // proxy: true,
    credentials: true,
    prefix: '/api',
    baseURL: process.env.BASE_URL + process.env.BASE_PREFIX,
  },

  proxy: {
    '/api/': process.env.BASE_URL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { 
    postcss: null,
    html: {
      minify: {
        decodeEntities: false
      }
    } 
  },

  auth: {
    plugins: ['@plugins/axios.js'],
    redirect: {
      login: '/login',
      logout: '/',
      callback: false,
      home: '/dashboard',
    },
    strategies: {
      local: {
        url: process.env.FRONT_URL + process.env.BASE_PREFIX,
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          user: { url: '/auth/user', method: 'get' },
          logout: { url: '/auth/logout', method: 'get' },
        },
        token: {
          property: 'access_token',
        },
        user: {
          property: false,
        },
      },
    },
  },

  vuetify: {
    icons: {
      iconfont: 'mdi',
    },
    theme: {
      dark: true,
      default: 'dark',
      disable: false,
      themes: {
        light: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
        dark: {
          primary: '#004d40',
          secondary: '#2196F3',
          accent: '#FF4081',
          error: '#ff0000',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
      },
    },
  },

  facebook: {
    pixelId: '301754725537796',
    autoPageView: true,
    debug: false,
    disabled: true,
  },
  router:{
    
    scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
              return { selector: to.hash }
          } else if (savedPosition) {
              return savedPosition;
          } else {
              return { x: 0, y: 0, behavior: 'smooth'}
          }
    }
  }
}