<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="form.email"
                    prepend-icon="mdi-account"
                    name="email"
                    label="Email"
                    type="text"
                    :error-messages="emailErrors"
                    required
                    @input="$v.form.email.$touch()"
                    @blur="$v.form.email.$touch()"
                  ></v-text-field>
                  <v-text-field
                    v-model="form.password"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="Password"
                    type="password"
                    :error-messages="passwordErrors"
                    @input="$v.form.password.$touch()"
                    @blur="$v.form.password.$touch()"
                  ></v-text-field>
                  <p v-if="error">
                    {{ error }}
                  </p>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  :loading="isLoading"
                  @click.prevent="loginHandle"
                  >Login</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
export default {
  middlewate: ['guest'],
  name: 'LoginPage',
  mixins: [validationMixin],
  layout: 'empty',
  validations: {
    form: {
      email: { required, email },
      password: { required },
    },
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      error: null,
      isLoading: false,
    }
  },
  computed: {
    emailErrors() {
      const errors = []
      if (!this.$v.form.email.$dirty) return errors
      !this.$v.form.email.email && errors.push('Must be valid e-mail')
      !this.$v.form.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.form.password.$dirty) return errors
      !this.$v.form.password.required && errors.push('Password is required')
      return errors
    },
  },
  mounted() {
    if (this.$auth.loggedIn) {
      this.$router.push('/dashboard')
    }
  },
  methods: {
    async loginHandle() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return null
      } else {
        this.error = null
        this.isLoading = true
        try {
          await this.$auth.loginWith('local', {
            data: {
              email: this.form.email,
              password: this.form.password,
            },
          })
          this.isLoading = false
        } catch (error) {
          this.error = error.response.data.message
          this.isLoading = false
        }

        // this.$axios
        //   .post('/auth/login', {
        //     ...this.form,
        //   })
        //   .then(({ data }) => {
        //     if (data.twoFa) {
        //       this.isTwoFa = true
        //       this.isLoading = false
        //       return this.$toast.info(data.data)
        //     }
        //     this.$auth.setUserToken(data.access_token, data.access_token)
        //   })
        //   .catch((e) => {
        //     this.isLoading = false
        //     return this.$toast.error(e.response.data.data)
        //   })
        //   .finally(() => {
        //     this.isLoading = false
        //   })
      }
    },
  },
}
</script>

<style></style>
