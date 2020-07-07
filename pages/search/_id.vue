<template>
  <div>
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
    <h2 class="block-headline tripfinder-headline">
      Tripfinder
    </h2>
    <div class="trip-finder-container">
      <div class="aside-wrap">
        <div class="aside">
          <h3 class="aside-headline">
            Choose options
          </h3>
          <template v-for="item in 6">
            <div :key="item" class="select-wrap">
              <dr-select :options="selectContent[1]" />
            </div>
            <div v-if="item == 1" :key="item" class="clear-selected-btn">
              <span><simple-svg src="/img/icon_close_select.svg" /></span>
              <span>Clear all</span>
            </div>
          </template>
        </div>
        <div class="aside">
          <h3 class="aside-headline">
            Choose options
          </h3>
          <div class="select-wrap">
            <dr-select :options="selectContent[1]" />
          </div>
          <div class="switch-checkbox-wrap">
            <switch-checkbox v-model="switchCheckbox" />
          </div>
          <div :class="{active: switchCheckbox}" class="change-order-wrap">
            <div class="select-wrap">
              <dr-select :options="selectContent[1]" />
            </div>
            <div class="select-wrap">
              <dr-select :options="selectContent[1]" />
            </div>
          </div>
          <div class="select-wrap">
            <month-picker />
          </div>
          <div class="clear-selected-btn special">
            <span><simple-svg src="/img/icon_close_select.svg" /></span>
            <span>Clear all</span>
          </div>
          <div v-for="item in 2" :key="item" class="select-wrap">
            <dr-select :options="selectContent[1]" />
          </div>
        </div>
      </div>
      <div class="trip-finder-card">
        <div v-for="card in cardContent" :key="card" class="card-item">
          <TripfinderCard :card-content="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TripfinderCard from '~/components/TripfinderCard.vue'
import switchCheckbox from '~/components/ui_components/switchCheckbox.vue'
import drSelect from '~/components/ui_components/drSelect.vue'
import monthPicker from '~/components/ui_components/monthPicker.vue'

export default {
  components: {
    TripfinderCard,
    switchCheckbox,
    drSelect,
    monthPicker
  },
  data () {
    return {
      switchCheckbox: false,
      swiperOption: {
        autoplay: {
            delay: 7000,
            disableOnInteraction: false
          }
      },
      cardContent: [
        {
          id: 1,
          headerImg: 'header_img_main_page',
          headline: 'Grand Russia UNESCO Tour',
          iconsInfo: [
            { iconName: 'icon_levels_challenging', text: 'Challenging' },
            { iconName: 'icon_calendar', text: '8 days' },
            { iconName: 'icon_group_triple', text: 'Group / Private' },
            { iconName: 'icon_weather', text: 'All year round' }
          ],
          route: ['Vladimir', 'Bogolyubovo', 'Suzdal', 'Kideksha', 'Yaroslavl', 'Rostov'],
          description: 'Spend the week of your life exploring Moscow & St. Petersburg. This 8-day trip offers unparalleled access to Russia\'s most famous cities and all their attractions. Signature tour to Moscow & St Petersburg, group or private',
          price: 1227
        },
        {
          id: 2,
          headerImg: 'header_img_main_page',
          headline: 'Fantastic three: Moscow, St. Petersburg & the Northern lights',
          iconsInfo: [
            { iconName: 'icon_levels_challenging', text: 'Challenging' },
            { iconName: 'icon_calendar', text: '8 days' },
            { iconName: 'icon_group_triple', text: 'Group / Private' },
            { iconName: 'icon_weather', text: 'All year round' }
          ],
          route: ['Vladimir', 'Bogolyubovo', 'Suzdal', 'Kideksha', 'Yaroslavl', 'Rostov'],
          description: 'Spend the week of your life exploring Moscow & St. Petersburg. This 8-day trip offers unparalleled access to Russia\'s most famous cities and all their attractions. Signature tour to Moscow & St Petersburg, group or private, on your choice, will dazzle you with stunning architecture & heritage as you rub shoulders with the locals, all under the guidance of our expert local tour guides. This tour runs vice versa and we customize tours on request.',
          price: 1227
        },
        {
          id: 2,
          headerImg: 'header_img_main_page',
          headline: 'Fantastic three: Moscow, St.Petersburg & the Northern lights',
          iconsInfo: [
            { iconName: 'icon_levels_challenging', text: 'Challenging' },
            { iconName: 'icon_calendar', text: '8 days' },
            { iconName: 'icon_group_triple', text: 'Group / Private' },
            { iconName: 'icon_weather', text: 'All year round' }
          ],
          route: ['Vladimir', 'Bogolyubovo', 'Suzdal', 'Kideksha', 'Yaroslavl', 'Rostov'],
          description: 'Spend the week of your life exploring Moscow & St. Petersburg. This 8-day trip offers unparalleled access to Russia\'s most famous cities and all their attractions. Signature tour to Moscow & St Petersburg, group or private, on your choice, will dazzle you with stunning architecture & heritage as you rub shoulders with the locals, all under the guidance of our expert local tour guides. This tour runs vice versa and we customize tours on request.',
          price: 1227
        },
        {
          id: 2,
          headerImg: 'header_img_main_page',
          headline: 'Fantastic three: Moscow, St.Petersburg & the Northern lights',
          iconsInfo: [
            { iconName: 'icon_levels_challenging', text: 'Challenging' },
            { iconName: 'icon_calendar', text: '8 days' },
            { iconName: 'icon_group_triple', text: 'Group / Private' },
            { iconName: 'icon_weather', text: 'All year round' }
          ],
          route: ['Vladimir', 'Bogolyubovo', 'Suzdal', 'Kideksha', 'Yaroslavl', 'Rostov'],
          description: 'Spend the week of your life exploring Moscow & St. Petersburg. This 8-day trip offers unparalleled access to Russia\'s most famous cities and all their attractions. Signature tour to Moscow & St Petersburg, group or private, on your choice, will dazzle you with stunning architecture & heritage as you rub shoulders with the locals, all under the guidance of our expert local tour guides. This tour runs vice versa and we customize tours on request.',
          price: 1227
        }
      ],
      selectContent: [
        {
          headLine: 'Some text',
          items: ['Any', 'Lorem', 'Ipsum', 'Dolar', 'Sit', 'Amet']
        },
        {
          headLine: 'Some text',
          default: 'Any',
          items: ['Any', 'Red', 'Pink', 'Yellow', 'Green', 'Orange']
        },
        {
          headLine: 'Some text',
          items: ['Any', 'If', 'You', 'Can', 'Keep', 'Your']
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
    z-index: 1;
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
  }
}
h2.tripfinder-headline {
  margin-top: 85px;
  padding-bottom: 10px;
}
.trip-finder-container {
  width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .aside-wrap {
    width: 270px;
    .aside {
      background-color: $color--white;
      border: 1px solid $color--gray8_90;
      box-sizing: border-box;
      border-radius: 4px;
      width: 100%;
      padding: 15px 15px 7px 14px;
      &:last-child {
        margin-top: 86px;
      }
      .aside-headline {
        @include font--AcromNormalBold;
        font-size: 24px;
        line-height: 29px;
        color: $color--gray1_13;
      }
      .switch-checkbox-wrap {
        margin-top: 22px;
        margin-bottom: 10px;
      }
      .select-wrap {
        background: $color--white;
        box-sizing: border-box;
        width: 240px;
        height: 46px;
        margin-bottom: 10px;
        margin-top: 22px;
        &:first-of-type {
          margin-top: 10px;
        }
      }
      .change-order-wrap {
        $select-item-height: 42px;

        position: relative;
        height: $select-item-height * 2 + 2;
        .select-wrap {
          position: absolute;
          transition: all 0.2s ease;
          margin: 0;
          height: $select-item-height;
          &:first-child {
            top: 0;
          }
          &:last-child {
            bottom: 0;
          }
        }
        &.active {
          .select-wrap {
            &:first-child {
              top: calc(100% - #{$select-item-height});
            }
            &:last-child {
              bottom: calc(100% - #{$select-item-height});
            }
          }
        }
      }
    }

    .clear-selected-btn {
      @include disableSelection;
      width: 150px;
      height: 34px;
      background: $color--white;
      border: 1px solid $color--gray13;
      box-sizing: border-box;
      margin: 0 auto;
      margin-top: 17px;
      margin-bottom: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 18px;
      color: $color--gray13;
      cursor: pointer;
      &.special {
        margin-top: 21px;
      }
      * {
        transition: all 0.1s linear;
      }
      span {
        &:first-child {
          margin-right: 5px;
          margin-top: 2px;
          /deep/ svg {
            transition: all 0.1s linear;
          }
        }
      }
      &:hover {
        border-color: $color--red;
        span {
          color: $color--red;
          &:first-child {
            /deep/ svg {
              fill: $color--red;
            }
          }
        }
      }
    }
  }
  .trip-finder-card {
    width: 870px;
    .card-item {
      margin-bottom: 40px;
      background-color: $color--white;
    }
  }
}
</style>
