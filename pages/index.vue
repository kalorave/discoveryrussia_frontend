<template>
  <div id="main">
    <div class="header-bcg">
      <div v-parallax.absY="0.4" v-swiper:mySwiper="swiperOption" class="my-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"></div>
          <div class="swiper-slide"></div>
        </div>
      </div>
      <h1 class="main-headline">
        Tours to Russia with destination experts
      </h1>
    </div>
    <BreadCrumbs />
    <TripCardGroup />
    <div class="why-us-container">
      <h2 class="block-headline">
        Why us
      </h2>
      <WhyUsDesktop />
    </div>
    <div class="travel-themes-container">
      <h2 class="block-headline">
        Travel themes
      </h2>
      <DesktopTravelThemes />
    </div>
    <div class="what-other-say-container">
      <div class="background-container">
        <h2 class="block-headline">
          What other say
        </h2>
        <DesktopWhatOtherSay />
      </div>
    </div>
    <div class="special-tours-container">
      <h2 class="block-headline">
        Special tours
      </h2>
      <DesktopSpecialTour class="desktop-version" />
    </div>
    <div class="form-block-background">
      <div class="form-block-container">
        <h2 class="block-headline">
          Sign up for our newsletter
        </h2>
        <SignUpForm />
      </div>
    </div>
    <div class="useless-text-container">
      <h2 class="block-headline">
        Useless text block
      </h2>
      <div class="block-wrap">
        <UselessTextBlock />
      </div>
    </div>
  </div>
</template>

<script>
import TripCardGroup from '~/components/TripCardGroup.vue'
// import FindTrip from '~/components/FindTrip.vue'
import BreadCrumbs from '~/components/BreadCrumbs.vue'
// import WhyUsAccordion from '~/components/WhyUsAccordion.vue'
import WhyUsDesktop from '~/components/desktop/WhyUsDesktop.vue'
import SignUpForm from '~/components/SignUpForm.vue'
import DesktopTravelThemes from '~/components/DesktopTravelThemes.vue'
import DesktopWhatOtherSay from '~/components/DesktopWhatOtherSay.vue'
import DesktopSpecialTour from '~/components/desktop/DesktopSpecialTour.vue'
import UselessTextBlock from '~/components/UselessTextBlock.vue'

export default {
  components: {
    TripCardGroup,
    // FindTrip,
    BreadCrumbs,
    // WhyUsAccordion,
    WhyUsDesktop,
    SignUpForm,
    DesktopTravelThemes,
    DesktopWhatOtherSay,
    DesktopSpecialTour,
    UselessTextBlock
  },
  // fetch ({ store, params, app: { $axios } }) {
  //   console.log('index')
  //   console.log(params)
  //   return $axios.$get('http://localhost:8000/api/tours/destinations_list/')
  //     .then((res) => {
  //       store.commit('destinations/set', res.data)
  //     })
  // }
  data() {
    return {
      swiperOption: {
        autoplay: {
            delay: 7000,
            disableOnInteraction: false
          }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#main {
  .header-bcg {
    overflow: hidden;
    height: 400px;
    z-index: -1;
    .my-swiper {
      height: 100%;
      .swiper-wrapper {
        height: 100%;
        .swiper-slide {
          &:nth-child(1) {background-image: url('/img/header_img_main_page.png');}
          &:nth-child(2) {background-image: url('/img/header_img_tour_page.jpg');}
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          height: 100%;
        }
      }
    }
    .main-headline {
      position: absolute;
      width: 100%;
      top: 0;
      text-align: center;
      color: $color--white;
      margin-top: 174px;
      letter-spacing: -1px;
      @include font--AcromNormalBold;
      font-size: 50px;
      line-height: 60px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
  }
  .why-us-container {
    @include grid-container;
    @include media-desktop {
      .block-headline {
        margin-top: 99px;
      }
    }
  }
  .travel-themes-container {
    @include grid-container;
    .block-headline {
      @include media-desktop {
        margin-top: 102px;
      }
    }
  }

  .what-other-say-container {
    @include media-desktop {
      background-color: $color--white;
    }
    .background-container {
      @include grid-container;
    }
    margin-top: 100px;
    .block-headline {
      @include media-desktop {
        margin-top: 60px;
      }
    }
  }
  .special-tours-container {
    .block-headline {
      @include media-desktop {
        margin-top: 100px;
      }
    }
  }
  .special-tours-container {
    @include grid-container;
    .desktop-version {
      margin-top: 40px;
    }
  }
  .form-block-background {
    background-image: url('/img/form_bgc.png');
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 100px;
    @include media-desktop {
      background-position: center;
      padding-bottom: 30px;
    }
    .form-block-container {
      @include grid-container;
      .block-headline {
        color: $color--white;
        padding-top: 30px;
      }
    }
  }
  .useless-text-container {
    @include grid-container;
    padding-bottom: 103px;
    .block-headline {
      margin-top: 100px;
    }
    .block-wrap {
      margin: 0 auto;
      margin-top: 43px;
      letter-spacing: 0.1px;
      max-width: 769px;
    }
  }
}
</style>
