import Vue from 'vue'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: {
    id: 'G-7K1Y5853V3',
    send_page_view: true,
    anonymize_ip: true,
    linker: {
      domains: ['oumua.vireye.com'],
    },
  },
  bootstrap: false,
  appName: 'oumua.vireye.com',
})
