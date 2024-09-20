<template>
  <div class="app-register-form">
    <div class="app-register-form__body">
      <app-input
        v-model="formFields.name"
        name="RegisterName"
        label-text="Name"
        :validation-model="$v.formFields.name"
      ></app-input>
      <app-input
        v-model="formFields.email"
        name="RegisterEmail"
        label-text="Email"
        :validation-model="$v.formFields.email"
      ></app-input>

      <div class="app-register-form-radio">
        <h2>Choose your os:</h2>

        <ul class="app-register-form-radio__list">
          <li class="app-register-form-radio__item">
            <input
              id="f-option"
              v-model="formFields.os_type_id"
              :value="1"
              type="radio"
              name="selector"
            />
            <label for="f-option">Android</label>

            <div class="check"></div>
          </li>

          <li>
            <input
              id="s-option"
              v-model="formFields.os_type_id"
              :value="2"
              type="radio"
              name="selector"
            />
            <label for="s-option">IOs</label>

            <div class="check"><div class="inside"></div></div>
          </li>
        </ul>
      </div>

      <p
        v-if="status"
        style="text-align: center; color: #ececa3; margin-top: 16px"
      >
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
      email: { required, email },
    },
  },
  data() {
    return {
      isLoading: false,
      formFields: {
        name: '',
        email: '',
        os_type_id: 1,
      },
      defaultFields: {
        name: '',
        email: '',
        os_type_id: 1,
      },
      status: null,

      osItems: [
        {
          id: 1,
          name: 'Android',
        },
        {
          id: 2,
          name: 'Ios',
        },
      ],
    }
  },
  methods: {
    async handleSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) return null

      this.$gtag.event('SendForm', {
        // event_label: 'SendForm',
        send_to: 'AW-11212823601/1KV4CL3utKkYELG42OIp',
      })

      this.$fb.query('trackCustom', 'Send')

      if (process.browser) {
        window.rdt('track', 'Custom', { customEventName: 'Send' })
      }
      try {
        this.isLoading = true
        this.status = null
        const { data } = await this.$axios.post('/email/register', {
          name: this.formFields.name,
          email: this.formFields.email,
          os_type_id: this.formFields.os_type_id,
        })
        this.$modal.hide('register')

        if (this.formFields.os_type_id === 1) {
          this.$modal.show('step-3-android')
        }
        if (this.formFields.os_type_id === 2) {
          this.$modal.show('step-3-ios')
        }
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

<style lang="scss" scoped>
.app-register-form-radio {
  display: block;
  position: relative;
  margin: 0px auto;
  height: auto;
  width: 500px;
  h2 {
    font-size: 16px;
    color: #aaaaaa;
    margin-bottom: 12px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: auto;
  }

  ul li {
    color: #aaaaaa;
    display: block;
    position: relative;
    float: left;
    width: 100%;
    border-bottom: 1px solid #333;
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  ul li input[type='radio'] {
    position: absolute;
    visibility: hidden;
  }

  ul li label {
    display: block;
    position: relative;
    font-weight: 300;
    font-size: 16px;
    padding: 5px 5px 5px 40px;
    z-index: 9;
    cursor: pointer;
    -webkit-transition: all 0.25s linear;
  }

  ul li:hover label {
    color: #ffffff;
  }

  ul li .check {
    display: block;
    position: absolute;
    border: 5px solid #aaaaaa;
    border-radius: 100%;
    height: 20px;
    width: 20px;
    top: 5px;
    left: 5px;
    z-index: 5;
    transition: border 0.25s linear;
    -webkit-transition: border 0.25s linear;
  }

  ul li:hover .check {
    border: 2px solid #ffffff;
  }

  ul li .check::before {
    display: block;
    position: absolute;
    content: unset;
    border-radius: 50%;
    height: 12px;
    width: 12px;
    top: 2px;
    left: 3px;
    margin: auto;
    transition: background 0.25s linear;
    -webkit-transition: background 0.25s linear;
  }

  input[type='radio']:checked ~ .check {
    border: 2px solid #0dff92;
    background-color: #0dff92;
  }

  input[type='radio']:checked ~ .check::before {
    background: #0dff92;
  }

  input[type='radio']:checked ~ label {
    color: #0dff92;
  }

  .signature {
    margin: 10px auto;
    padding: 10px 0;
    width: 100%;
  }

  .signature p {
    text-align: center;
    font-family: Helvetica, Arial, Sans-Serif;
    font-size: 14px;
    color: #aaaaaa;
  }

  .signature .much-heart {
    display: inline-block;
    position: relative;
    margin: 0 4px;
    height: 10px;
    width: 10px;
    background: #ac1d3f;
    border-radius: 4px;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .signature .much-heart::before,
  .signature .much-heart::after {
    display: block;
    content: '';
    position: absolute;
    margin: auto;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background: #ac1d3f;
    top: -4px;
  }

  .signature .much-heart::after {
    bottom: 0;
    top: auto;
    left: -4px;
  }

  .signature a {
    color: #aaaaaa;
    text-decoration: none;
    font-weight: bold;
  }
}
</style>
