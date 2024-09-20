<template>
  <button v-bind="$attrs" class="app-btn" @click.prevent="$emit('click')">
    <div :class="['app-btn__body', { withIcon: withIcon }]">
      <span class="app-btn__icon"><slot name="icon"></slot></span>
      <span class="app-btn__text"><slot></slot></span>
    </div>
  </button>
</template>

<script>
export default {
  name: 'AppBtn',
  props: {
    withIcon: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
