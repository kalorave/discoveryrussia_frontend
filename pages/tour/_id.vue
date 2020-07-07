<template>
  <div class="content">
    <div class="header-bcg">
      <div v-parallax.absY="0.4" v-swiper:mySwiper="swiperOption" class="my-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"></div>
          <div class="swiper-slide"></div>
        </div>
      </div>
      <div class="background-gradient">
        <h1 class="main-headline">
          <span>Le Grand Trans Mongolian</span>
          <span>Beijing to St Petersburg</span>
        </h1>
      </div>
    </div>
    <div class="background-wrap-white">
      <BreadCrumbs />
      <InfoBlockTourPage />
    </div>
    <h2 class="block-headline itinerary-headline">
      Itinerary
    </h2>
    <ItineraryDesktop />
    <h2 class="block-headline setDepartures-headline">
      Set group departures
    </h2>
    <DesktopSetGroupDepartures />
    <h2 class="block-headline inclusions-headline">
      Inclusions
    </h2>
    <InclusionsDesktop />
    <div class="what-other-say-container">
      <div class="background-container">
        <h2 class="block-headline">
          What other say
        </h2>
        <DesktopWhatOtherSay />
      </div>
    </div>
    <div class="also-like-container">
      <h2 class="block-headline">
        You may also like
      </h2>
      <div class="card-wrap">
        <other-trip-card
          v-for="item in anothierCardContent"
          :key="item.id"
          :trip-card-content="item"
        />
      </div>
    </div>
    <div class="form-block-background">
      <div class="form-block-container">
        <h2 class="block-headline">
          Sign up for our newsletter
        </h2>
        <SignUpForm />
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from '~/components/BreadCrumbs.vue'
import InfoBlockTourPage from '~/components/desktop/InfoBlockTourPage.vue'
import ItineraryDesktop from '~/components/desktop/ItineraryDesktop.vue'
import DesktopSetGroupDepartures from '~/components/desktop/DesktopSetGroupDepartures.vue'
import InclusionsDesktop from '~/components/desktop/InclusionsDesktop.vue'
import DesktopWhatOtherSay from '~/components/DesktopWhatOtherSay.vue'
import SignUpForm from '~/components/SignUpForm.vue'
import OtherTripCard from '~/components/trip_card/OtherTripCard.vue'

export default {
  components: {
    BreadCrumbs,
    ItineraryDesktop,
    InfoBlockTourPage,
    DesktopSetGroupDepartures,
    InclusionsDesktop,
    DesktopWhatOtherSay,
    SignUpForm,
    OtherTripCard
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
            delay: 7000,
            disableOnInteraction: false
          }
      },
      anothierCardContent: [
        {
          id: 1,
          type: 1,
          headerImg: 'card_bgc.jpg',
          mainHeadline: 'Grand Russia unesco tour',
          price: 9999,
          discount: 5,
          icon: 'icon_clock_face.svg'
        },
        {
          id: 2,
          type: 2,
          headerImg: 'card_bgc.jpg',
          discount: 13,
          mainHeadline: 'Grand Russia UNESCO Tour вторая строка',
          price: 9999,
          icon: 'icon_clock_face.svg'
        },
        {
          id: 3,
          type: 1,
          headerImg: 'card_bgc.jpg',
          mainHeadline: 'Grand Russia UNESCO Tour',
          price: 9999,
          discount: 15,
          icon: 'icon_clock_face.svg'
        },
        {
          id: 4,
          type: 2,
          headerImg: 'card_bgc.jpg',
          mainHeadline: 'Grand Russia UNESCO Tour',
          price: 9999,
          discount: 15,
          icon: 'icon_clock_face.svg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header-bcg {
  overflow: hidden;
  z-index: -1;
  height: 400px;
  position: relative;
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
  .background-gradient {
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 64.58%, rgba(0, 0, 0, 0.6) 100%);
    .main-headline {
      width: 1170px;
      margin: 0 auto;
      text-align: left;
      color: $color--white;
      margin-top: 276px;
      letter-spacing: -1px;
      @include font--AcromNormalBold;
      font-size: 48px;
      line-height: 55px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      span {
        display: block;
        margin-left: 2px;
      }
    }
  }
}
.background-wrap-white {
  background-color: $color--white;
  padding-bottom: 20px;
}
.trip-finder-container {
  @include breaking-container;
}
.itinerary-headline {
  margin-top: 55px;
}
.setDepartures-headline {
  margin-top: 53px;
  padding-bottom: 12px;
}
.inclusions-headline {
  margin-top: 75px;
}
.what-other-say-container {
  background-color: $color--white;
  .background-container {
    width: 1170px;
    margin: 0 auto;
  }
  margin-top: 100px;
  .block-headline {
    margin-top: 60px;
    padding-bottom: 6px;
  }
}
.also-like-container {
  width: 1170px;
  margin: 0 auto;
  .block-headline {
    margin-top: 54px;
  }
  .card-wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 36px;
  }
}
.form-block-background {
  background-image: url('/img/form_bgc.png');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 60px;
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
</style>
