<template>
  <div class="home-layout">
    <app-header></app-header>
    <main class="home-layout__main">
      <nuxt />
    </main>
    <app-footer></app-footer>
    <app-register-modal></app-register-modal>
    <app-message-modal></app-message-modal>
    <app-contact-modal></app-contact-modal>
    <app-roadmap-modal></app-roadmap-modal>
    <app-step-3-andriod-modal></app-step-3-andriod-modal>
    <app-step-3-ios-modal></app-step-3-ios-modal>
    <!-- <CookieControl></CookieControl> -->
    <app-cookie></app-cookie>
  </div>
</template>


<script>
import AppCookie from '~/components/layout/app-cookie.vue'
import AppFooter from '~/components/layout/app-footer.vue'
import appHeader from '~/components/layout/app-header.vue'
import AppContactModal from '~/components/modals/app-contact-modal.vue'
import AppMessageModal from '~/components/modals/app-message-modal.vue'
import AppRegisterModal from '~/components/modals/app-register-modal.vue'
import AppRoadmapModal from '~/components/modals/app-roadmap-modal.vue'
import AppStep3AndriodModal from '~/components/modals/app-step-3-android-modal.vue'
import AppStep3IosModal from '~/components/modals/app-step-3-ios-modal.vue'
export default {
  name: 'HomeLayout',
  components: {
    appHeader,
    AppFooter,
    AppRegisterModal,
    AppMessageModal,
    AppContactModal,
    AppRoadmapModal,
    AppStep3AndriodModal,
    AppStep3IosModal,
    AppCookie,
  },
}
</script>

<style></style>
