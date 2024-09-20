<template>
  <transition name="modal">
    <div v-if="visible" class="app-modal" @click.prevent="handleClose">
      <div class="contact-modal__pk" @click.stop>
        <div class="contact-subtitle">
                <h3>Contact Us</h3>
        <app-close-btn :name="name"></app-close-btn>
        </div>
        <div class="app-modal-inner-content">
          <slot :params="params" />
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import AppCloseBtn from '../ui/app-close-btn.vue'
export default {
  name: 'AppModal',
  components: {
    AppCloseBtn,
  },
  props: {
    name: {
      required: true,
      type: String,
    },
    preventBackdropClosing: {
      type: Boolean,
      default: false,
    },
    onClose: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      visible: false,
      params: {},
    }
  },
  beforeMount() {
    this.$modal.$event.$on('show', (modal, params) => {
      if (this.name === modal) {
        this.params = params
        this.visible = true
        document.documentElement.style.setProperty('overflow', 'hidden')
        document.body.style.setProperty('overflow', 'hidden')
        document.body.style.setProperty('touch-action', 'none')
      }
    })
    this.$modal.$event.$on('hide', (modal) => {
      if (this.name === modal) {
        this.visible = false
        document.documentElement.style.removeProperty('overflow')
        document.body.style.removeProperty('overflow')
        document.body.style.removeProperty('touch-action')
      }
    })
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (this.visible && e.keyCode === 27) {
        this.$modal.hide(this.name)
      }
    })
  },
  methods: {
    handleClose() {
      if (this.onClose !== null) this.onClose()
      else this.backdropClose()
    },
    backdropClose() {
      !this.preventBackdropClosing && this.$modal.hide(this.name)
    },
  },
}
</script>