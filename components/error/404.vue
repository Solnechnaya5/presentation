<template>
  <div class="error-layout__body error-404">
    <h1>This page doesn`t exist</h1>
    <p>The link you clicked on may be broken or no longer exist.</p>
  </div>
</template>
<script>
export default {
  name: 'ErrorPageNotFound',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
