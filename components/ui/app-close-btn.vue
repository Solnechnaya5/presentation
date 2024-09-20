<template>
  <button class="app-close-btn" @click.prevent="$modal.hide(name)">
    <span></span><span></span>
  </button>
</template>

<script>
export default {
  name: 'AppCloseBtn',
  props: {
    name: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style></style>
