<template>
  <div id="choose" class="choose-section">
    <article class="app-container">
      <h2 class="title choose-section__title">
        Choose your Mua and try to survive in the World full of Dangers and
        Mysteries
      </h2>
      <div class="choose-section__body">
        <div class="mua-list" @click="$modal.show('message')">
          <kinesis-container>
            <kinesis-element
              tag="div"
              :strength="10"
              type="depth"
              class="mua-list__item mua-list-item"
            >
              <img src="/assets/images/choose/omu-1.webp" alt="Mua" />

              <kinesis-element tag="div" :strength="15" type="depth">
                <app-btn class="mua-list-item__btn">Play!</app-btn>
              </kinesis-element>
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element
              tag="div"
              :strength="10"
              type="depth"
              class="mua-list__item mua-list-item"
            >
              <img src="/assets/images/choose/omu-2.webp" alt="Mua" />
              <kinesis-element tag="div" :strength="15" type="depth">
                <app-btn class="mua-list-item__btn">Play!</app-btn>
              </kinesis-element>
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element
              tag="div"
              :strength="10"
              type="depth"
              class="mua-list__item mua-list-item active"
            >
              <img src="/assets/images/choose/omu-3.webp" alt="Mua" />
              <kinesis-element tag="div" :strength="15" type="depth">
                <app-btn class="mua-list-item__btn">Play!</app-btn>
              </kinesis-element>
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element
              tag="div"
              :strength="10"
              type="depth"
              class="mua-list__item mua-list-item"
            >
              <img src="/assets/images/choose/omu-4.webp" alt="Mua" />
              <kinesis-element tag="div" :strength="15" type="depth">
                <app-btn class="mua-list-item__btn">Play!</app-btn>
              </kinesis-element>
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element
              tag="div"
              :strength="10"
              type="depth"
              class="mua-list__item mua-list-item"
            >
              <img src="/assets/images/choose/omu-5.webp" alt="Mua" />
              <kinesis-element tag="div" :strength="15" type="depth">
                <app-btn class="mua-list-item__btn">Play!</app-btn>
              </kinesis-element>
            </kinesis-element>
          </kinesis-container>
        </div>
        <client-only>
          <swiper
            ref="muaSlider"
            :options="muaSliderOptions"
            class="mua-list mua-slider"
            @click="$modal.show('message')"
          >
            <swiper-slide class="mua-list__item mua-list-item">
              <img src="/assets/images/choose/omu-1.webp" alt="Mua" />
              <app-btn class="mua-list-item__btn">Play!</app-btn>
            </swiper-slide>
            <swiper-slide class="mua-list__item mua-list-item">
              <img src="/assets/images/choose/omu-2.webp" alt="Mua" />
              <app-btn class="mua-list-item__btn">Play!</app-btn>
            </swiper-slide>
            <swiper-slide class="mua-list__item mua-list-item">
              <img src="/assets/images/choose/omu-3.webp" alt="Mua" />
              <app-btn class="mua-list-item__btn">Play!</app-btn>
            </swiper-slide>
            <swiper-slide class="mua-list__item mua-list-item">
              <img src="/assets/images/choose/omu-4.webp" alt="Mua" />
              <app-btn class="mua-list-item__btn">Play!</app-btn>
            </swiper-slide>
            <swiper-slide class="mua-list__item mua-list-item">
              <img src="/assets/images/choose/omu-5.webp" alt="Mua" />
              <app-btn class="mua-list-item__btn">Play!</app-btn>
            </swiper-slide>
            <div slot="pagination" class="mua-pagination"></div>
          </swiper>
        </client-only>
        <p class="choose-section__sup-descr title-2">
          Mighty warrior, skilled wizard, or a cunning rogue?
        </p>
        <p class="choose-section__descr p"></p>
        <!-- <div v-if="false" class="choose-section__btn" @click="handlePlayClick">
          <app-btn>Play</app-btn>
        </div> -->
      </div>
    </article>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import appBtn from '../ui/app-btn.vue'
export default {
  components: { appBtn, KinesisContainer, KinesisElement },
  data() {
    return {
      muaSliderOptions: {
        pagination: {
          el: '.mua-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        observeParents: true,
        observeSlideChildren: true,
        observer: true,
        centeredSlides: true,
        initialSlide: 2,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1.5,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 5,
            initialSlide: 2,
          },
        },
      },
    }
  },
  mounted() {
    // this.scrollToPortal()
    // window.addEventListener('resize', (event) => {
    //   this.scrollToPortal()
    // })
  },
  methods: {
    // scrollToPortal() {
    //   // const muaItem = document.querySelectorAll('.mua-list-item')
    //   // const portalSectionOffsetTop =
    //   //   document.querySelector('.portal-section').offsetTop
    //   // muaItem.forEach((item) => {
    //   //   item.addEventListener('click', () => {
    //   //     window.scrollTo({
    //   //       top: portalSectionOffsetTop - 50,
    //   //       behavior: 'smooth',
    //   //     })
    //   //   })
    //   // })
    //   const portalSectionOffsetTop =
    //     document.querySelector('.portal-section').offsetTop
    //   window.scrollTo({
    //     top: portalSectionOffsetTop - 50,
    //     behavior: 'smooth',
    //   })
    // },
    // handlePlayClick() {
    //   // const portalSectionOffsetTop =
    //   //   document.querySelector('.portal-section').offsetTop
    //   // window.scrollTo({
    //   //   top: portalSectionOffsetTop - 50,
    //   //   behavior: 'smooth',
    //   // })
    //   const portalSectionOffsetTop =
    //     document.querySelector('.portal-section').offsetTop
    //   window.scrollTo({
    //     top: portalSectionOffsetTop - 50,
    //     behavior: 'smooth',
    //   })
    // },
  },
}
</script>

<style></style>
