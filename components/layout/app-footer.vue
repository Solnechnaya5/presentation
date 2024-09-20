<template>
  <footer class="app-footer">
    <div class="app-container">
      <div class="footer">
        <div class="app-footer__socials">
          <div class="footer__social_item">
            <a
              href="https://twitter.com/VirEyeGames "
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
             <div class="footer__social-img"> <img src="@/assets/icons/presskit/twit.svg" alt="Twitter"></div>
            </a>
          </div>
          <div class="footer__social_item">
            <a
              href="https://www.linkedin.com/company/vireye-games/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <div class="footer__social-img"><img  src="@/assets/icons/presskit/in.svg" alt="LinkedIn" class="foot-icon"></div>
            </a>
          </div>
          <div class="footer__social_item">
            <a
              href="https://medium.com/@vireye"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
            >
              <div class="footer__social-img"><img src="@/assets/icons/presskit/medium.svg" alt="Medium" class="foot-icon"></div>
            </a>
          </div>
          <div class="footer__social_item">
            <a
              href="https://discord.gg/PaASbG7QhT"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <div class="footer__social-img"><img src="@/assets/icons/presskit/discord.svg" alt="Discord"></div>
            </a>
          </div>
        </div>
    <div class="app-footer__links">
                    <ul class="app-footer__links-left">
                        <li ><button @click="handleClick()"> Contact us</button></li>
                        <li><NuxtLink 
                                to="/presskit"  rel="noopener noreferrer"
                                aria-label="Press Kit"
                                >Press Kit</NuxtLink>
                              </li>
                    </ul>
                    <div class="app-footer__links-right">
                        <p>Vireye Studio Products:</p>
                        <ul>
                            <li>
                              <NuxtLink to="/"  rel="noopener noreferrer" aria-label="OuMua">OuMua</NuxtLink>
                            </li>
                            <li>
                              <a href="https://hamsta.vireye.com/?utm_source=vireye_website&amp;utm_medium=referral&amp;utm_campaign=site_redirect" target="_blank" rel="noopener noreferrer" aria-label="hamsters">HamstaParty</a>
                            </li>
                            <li><a href="https://stellarsports.vireye.com/" target="_blank" rel="noopener noreferrer" aria-label="stellar sports">Stellar Sports</a></li>
                        </ul>
                    </div>
                    </div>
        
      </div>
      <div class="footer-bottom">
                    <div class="footer-copy">© 2023 Vireye Studios. All rights reserved. Vireye, Vireye Studio, Vireye logo, OuMua, OuMua Logo, Stellar Sports, Stellar Sports Logo,
                        HamstaParty, HamstaParty Logo, are trademarks or registered trademarks of Vireye Studios in the United States of America and
                        elsewhere. Other brands or product names are the trademarks of their respective owners.</div>
                    <ul class="footer__list">
                        
                        <li class="footer__item">
                                <NuxtLink to="/termsofuse" rel="noopener noreferrer" aria-label="Terms of use" class="footer__link" >Terms of use</NuxtLink>
                        </li>
                        <li class="footer__item">
                                <nuxt-link 
                                to="/privacyandcookiepolicy" 
                                rel="noopener noreferrer"
                                aria-label="Privacy and Cookie Policy"
                                class="footer__link">Privacy and Cookie Policy
                              </nuxt-link>
                        </li>
                        <li class="footer__item">
                                <nuxt-link 
                                to="/licenseagreement" 
                                rel="noopener noreferrer"
                                aria-label="License agreement"
                                class="footer__link">License agreement
                              </nuxt-link>
                        </li>
                    </ul>
               </div>
     </div>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter',
  watch: {
    '$route'() {
      window.scrollTo(0, 0);
    }
  },
  methods: {
    handleClick() {
      this.$modal.show('contact-modal')
      
    },
  }, 
  
}

</script>
<style></style>
