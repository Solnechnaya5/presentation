<template>
  <div class="app-input">
    <div v-if="type === 'textarea'" class="app-input-container">
      <label
        :for="name"
        class="app-input__label"
        :class="{ focusable: isFocused, 'with-value': value }"
        >{{ labelText }}</label
      >
      <textarea
        :id="name"
        type="text"
        :name="name"
        :value="value"
        rows="4"
        v-bind="$attrs"
        @keydown.space="handleSpace"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="$emit('input', $event.target.value)"
      />
      <validationObserver
        v-if="validationModel"
        :validation-model="validationModel"
      />
    </div>
    <div v-else class="app-input-container">
      <label
        :for="name"
        class="app-input__label"
        :class="{ focusable: isFocused, 'with-value': value }"
        >{{ labelText }}</label
      >
      <input
        :id="name"
        type="text"
        :name="name"
        :value="value"
        v-bind="$attrs"
        @keydown.space="handleSpace"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="$emit('input', $event.target.value)"
      />
      <validationObserver
        v-if="validationModel"
        :validation-model="validationModel"
      />
    </div>
  </div>
</template>

<script>
import validationObserver from '@/components/layout/validation-observer'
export default {
  name: 'AppInput',
  components: { validationObserver },
  props: {
    name: {
      required: true,
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    validationModel: {
      required: false,
      type: Object,
      default: () => {},
    },
    value: {
      required: false,
      type: String,
      default: '',
    },
    labelText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isFocused: true,
    }
  },
  methods: {
    handleSpace(event) {
      if (this.preventSpacing) {
        event.preventDefault()
      }
    },
    handleFocus(el) {
      // this.isFocused = true
      // const parentNode = el.target.parentNode
      // const label = parentNode.querySelector('label')
      // label.classList.add('focusable')
    },
    handleBlur(el) {
      // if (!this.value) this.isFocused = false
      // console.log(this.value)
      // const parentNode = el.target.parentNode
      // const label = parentNode.querySelector('label')
    },
  },
}
</script>
<style></style>
