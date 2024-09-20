<template>
  <div class="app-register-form">
    <div class="app-register-form__body">
      <app-input
        v-model="formFields.name"
        name="name"
        label-text="Name"
        :validation-model="$v.formFields.name"
      ></app-input>
      <app-input
        v-model="formFields.email"
        name="email"
        label-text="Email"
        :validation-model="$v.formFields.email"
      ></app-input>
      <app-input
        v-model="formFields.message"
        name="Message"
        label-text="message"
        type="textarea"
        :validation-model="$v.formFields.message"
      ></app-input>
      <p v-if="status" style="text-align: center; color: #ececa3">
        {{ status.message }}
      </p>
    </div>
    <div class="app-register-form__btn">
      <app-btn :disabled="isLoading" @click="handleSubmit">Send</app-btn>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import AppBtn from './app-btn.vue'
import appInput from './app-input.vue'
export default {
  name: 'RegisterForm',
  components: { appInput, AppBtn },
  validations: {
    formFields: {
      name: {
        required,
      },
      message: {
        required,
      },
      email: { required, email },
    },
  },
  data() {
    return {
      isLoading: false,
      formFields: {
        name: '',
        email: '',
        message: '',
      },
      defaultFields: {
        name: '',
        email: '',
        message: '',
      },
      status: null,
    }
  },
  methods: {
    async handleSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) return null

      this.$gtag.event('SendBottom', {
        // event_label: 'SendBottom',
        send_to: 'AW-11212823601/--Q6CMPutKkYELG42OIp',
      })

      this.$fb.query('trackCustom', 'SendBottom')

      if (process.browser) {
        window.rdt('track', 'Custom', { customEventName: 'SendBottom' })
      }
      try {
        this.isLoading = true
        this.status = null
        const { data } = await this.$axios.post('/email/contact', {
          name: this.formFields.name,
          email: this.formFields.email,
          message: this.formFields.message,
        })
        this.formFields = Object.assign({}, this.defaultFields)
        this.status = data
      } catch (e) {
        this.status = e.response.data
      } finally {
        this.$v.$reset()
        this.isLoading = false
        setTimeout(() => {
          this.status = null
        }, 4000)
      }
    },
  },
}
</script>

<style></style>
