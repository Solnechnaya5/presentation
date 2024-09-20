<template>
    <section class="contact-information">
            <div class="contacts">
                <h2>Contact</h2>
                <div class="contact-pr">
                    For additional media inquiries, please contact
                    our PR manager,
                    Yuliia:
                    <Mailto mail="yuliia.yukhym@vireye.com" title="yuliia.yukhym@vireye.com" />
                </div>
                <div class="contacts-social">
                    <h4>Social media:</h4>
                    <div class="contacts-social_items">
                        <div class="contacts-social_item">
                            <a
                                href="https://www.facebook.com/vireyegames/"
                                target="_blank">
                                <span><img
                                        src="/assets/presskit/icons/fb.svg"
                                        alt="facebook icon" /></span>
                                https://www.facebook.com/vireyegames/</a>
                        </div>
                        <div class="contacts-social_item">
                            <a 
                            href="https://medium.com/@vireye/"
                                target="_blank">
                                <span><img
                                        src="/assets/presskit/icons/medium.svg"
                                        alt="medium icon" /></span>
                                https://medium.com/@vireye</a>
                        </div>
                        <div class="contacts-social_item">
                            <a
                                href="https://twitter.com/VirEyeGames"
                                target="_blank">
                                <span><img
                                        src="/assets/presskit/icons/i.svg"
                                        alt="twitter icon" />
                                </span>
                                https://twitter.com/VirEyeGames</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="download-logos">
                <div class="logo-item">
                    <div id="oumua-logo">
                        <img 
                        src="/assets/presskit/download/oumua_logo.png"
                            alt="oumua logo" />
                    </div>
                    <button  @click="downloadOumua()" >Download</button>
                </div>
                <div class="logo-item">
                    <div id="vireye-logo">
    <img src="@/assets/icons/vireye-logo.svg" alt="vireye logo" />
</div>
                    <button  @click="downloadVireye()" >Download</button>
                   
                </div>
            </div>
                    </section>
</template>
<script>
export default{
    methods: {
    downloadOumua() {
      const link = document.createElement('a');
      link.href = '/assets/presskit/download/Oumua_Logo.jpg'
      link.download = 'oumua_logo.jpg'
      link.target = '_blank'
      link.click()
    },
    downloadVireye() {
      const link = document.createElement('a');
      link.href = '/assets/presskit/download/Logo_Vireye.jpg'
      link.download = 'vireye_logo.jpg'
      link.target = '_blank'
      link.click()
    },
  },
  
}
</script>