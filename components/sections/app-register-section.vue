<template>
  <article class="register-section">
    <div class="app-container">
      <h2 class="title portal-section__title">Contact us</h2>
      <div class="register-section__body">
        <p class="register-section__text p">
          If you have any questions or want to share your feedback we're here to
          help. Our team is here to assist you with any queries and provide a
          quick and reliable solution.
        </p>
        <client-only><app-contact-form></app-contact-form></client-only>
      </div>
    </div>
  </article>
</template>

<script>
import AppContactForm from '../ui/app-contact-form.vue'
export default {
  name: 'AppRegisterSection',
  components: { AppContactForm },
}
</script>

<style></style>
