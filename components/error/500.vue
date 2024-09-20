<template>
  <div class="error-layout__body error-500">
    <h1>500 Internal Server Error</h1>
    <p>Check your network connection.</p>
  </div>
</template>
<script>
export default {
  name: 'ErrorServer',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
