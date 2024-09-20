<template>
  <div class="validation-observer">
    <div v-show="requiredShowCondition" class="m-error">
      The field is required
    </div>
    <div v-show="phoneShowCondition" class="m-error">
      The field must be a phone
    </div>
    <div v-show="emailShowCondition" class="m-error">
      The field must be email
    </div>
    <div v-show="minLengthCondition" class="m-error">
      The field must contain a minimum of {{ minLength }} characters
    </div>
    <div v-show="confirmPasswordCondition" class="m-error">
      The passwords don't match
    </div>
    <div v-show="invalidPhoneCondition" class="m-error">
      Not valid phone. Number should be 10 valid characters and starts with 0
    </div>
    <div v-show="mustBeFreeCondition" class="m-error">It already exists</div>
  </div>
</template>

<script>
export default {
  name: 'ValidationObserver',
  props: {
    validationModel: {
      required: false,
      type: Object,
      default: () => {},
    },
  },
  computed: {
    minLength() {
      return (
        this.validationModel.$params.minLength &&
        this.validationModel.$params.minLength.min
      )
    },
    requiredShowCondition() {
      return (
        this.validationModel &&
        this.validationModel.$dirty &&
        // eslint-disable-next-line no-prototype-builtins
        this.validationModel.$params.hasOwnProperty('required') &&
        !this.validationModel.required
      )
    },
    phoneShowCondition() {
      return (
        this.validationModel &&
        this.validationModel.$dirty &&
        // eslint-disable-next-line no-prototype-builtins
        this.validationModel.$params.hasOwnProperty('isPhoneValid') &&
        !this.validationModel.isPhoneValid
      )
    },
    confirmPasswordCondition() {
      return (
        this.validationModel &&
        this.validationModel.$dirty &&
        // eslint-disable-next-line no-prototype-builtins
        this.validationModel.$params.hasOwnProperty('sameAsPassword') &&
        !this.validationModel.sameAsPassword
      )
    },
    emailShowCondition() {
      return (
        this.validationModel &&
        this.validationModel.$dirty &&
        // eslint-disable-next-line no-prototype-builtins
        this.validationModel.$params.hasOwnProperty('email') &&
        !this.validationModel.email
      )
    },
    minLengthCondition() {
      return (
        this.validationModel &&
        this.validationModel.$dirty &&
        // eslint-disable-next-line no-prototype-builtins
        this.validationModel.$params.hasOwnProperty('minLength') &&
        !this.validationModel.minLength
      )
    },
    invalidPhoneCondition() {
      return (
        this.validationModel &&
        this.validationModel.$dirty &&
        // eslint-disable-next-line no-prototype-builtins
        this.validationModel.$params.hasOwnProperty('mobile') &&
        !this.validationModel.mobile
      )
    },
    mustBeFreeCondition() {
      return (
        this.validationModel &&
        this.validationModel.$dirty &&
        // eslint-disable-next-line no-prototype-builtins
        this.validationModel.$params.hasOwnProperty('mustBeFree') &&
        !this.validationModel.mustBeFree
      )
    },
  },
}
</script>
