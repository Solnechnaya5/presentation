<template>
  <app-modal name="contact-modal">
   
      <div class="contact-us__top">
                    <div class="contact-us__company-logo">
                      <img src="@/assets/icons/vireye-logo.svg" alt="presskit-logo" />
                    </div>
                    <div class="contact-us__about">
                        <h5>Vireye studio welcomes you!</h5>
                        <p>
                            If you have any suggestions regarding our products, partnership
                            proposals or any questions, please submit your e-mail in the form below and briefly describe
                            the subject of your inquiry.</p>
                            <p>We will be back in touch with you as soon as possible!
                        </p>
                        <p class="p-italic"> Thanks,Vireye Team!</p>
                        <div class="support-email">
                            <a href="support@vireye.com">support@vireye.com</a>
                        </div>
                    </div>
                    </div>
      
        <div class="contactus-form">
          <app-input
            v-model="formFields.name"
            name="name"
            label-text="Name"
            :validation-model="$v.formFields.name"
          ></app-input>
          <app-input
            v-model="formFields.email"
            name="Email"
            label-text="email"
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
        <app-btn :disabled="isLoading" @click="handleSubmit">send!</app-btn>
      </div>
      
     
    
  </app-modal>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import AppInput from '../ui/app-input.vue'
import AppModal from './app-modal-presskit.vue'
import AppBtn from '@/components/ui/app-btn.vue'

export default {
  name: 'AppTreilerModal',
  components: {
    AppModal,
    AppInput,
    AppBtn,
  },
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
      email: '',
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
      if (this.$v.formFields.$invalid) return null
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

        this.isLoading = false
      } catch (e) {
        this.status = e.response.data
      } finally {
        // this.$v.$reset();
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
