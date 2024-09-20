<template>
  <div class="error-layout">
    <div class="app-container">
      <component :is="errorPage" :error="error" />
    </div>
  </div>
</template>
<script>
import error404 from '~/components/error/404.vue'
import error500 from '~/components/error/500.vue'
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return error404
      }
      return error500
    },
  },
}
</script>

<style scoped></style>
