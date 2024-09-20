import Vue from 'vue'
import 'video.js/dist/video-js.css'
if (process.browser) {
  require('videojs-youtube')
  const VueVideoPlayer = require('vue-video-player/dist/ssr')
  Vue.use(VueVideoPlayer)
}
