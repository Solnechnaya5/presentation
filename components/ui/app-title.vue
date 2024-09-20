<template>
  <h1 class="app-title">
    <span class="app-title__text">
      <slot></slot>
    </span>
    <span v-show="line" class="app-title__line"></span>
  </h1>
</template>

<script>
export default {
  name: 'AppTitle',
  props: {
    line: {
      type: Boolean,
      default: () => false,
    },
  },
}
</script>

<style></style>
