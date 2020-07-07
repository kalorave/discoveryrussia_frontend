<template>
  <div class="wrap">
    <div class="figure-group">
      <figure v-for="item in content.iconInfo" :key="item" class="icon-description">
        <span class="main-icon"><simple-svg :src="`/img/${item.iconName}.svg`" width="80%" height="100%" /></span>
        <span>{{ item.iconText }}</span>
        <span v-if="item.info" class="tooltip-wrap">
          <simple-svg width="100%" height="100%" src="/img/icon_info.svg" />
          <tooltip :message="item.info" />
        </span>
      </figure>
    </div>
    <div class="route-cities">
      <div class="route-cities-header">
        <span class="icon-wrap">
          <simple-svg width="100%" src="/img/icon_location_mark.svg" />
        </span>
        <span class="qty-city">{{ content.routCities.length + 1 }} cities</span>
      </div>
      <div class="cities-wrap">
        <template v-for="item in content.routCities">
          <span :key="item" class="icon-wrap">
            <simple-svg width="100%" height="100%" src="/img/icon_arrow_route.svg" />
          </span><span :key="item" class="name-wrap">{{ item }}</span>
        </template>
      </div>
      <div class="route-cities-footer">
        <a href="#">
          <span>Download full info</span>
          <span class="icon-wrap"><simple-svg src="/img/icon_pdf.svg" /></span>
        </a>
      </div>
    </div>
    <div class="main-text-wrap">
      <div class="text-wrap">
        <p>{{ content.mainText }}</p>
        <p class="special">
          <span class="icon-wrap"><simple-svg width="100%" height="100%" src="/img/icon_arrow_route.svg" /></span>
          <span>Cross Asia and a half of Europe during one epic journey</span>
        </p>
      </div>
      <a class="read-more-btn" href="#">Read more<span><simple-svg src="/img/icon_arrow_blue.svg" /></span></a>
    </div>
  </div>
</template>

<script>
import Tooltip from '~/components/Tooltip.vue'

export default {
  components: {
    Tooltip
  },
  data () {
    return {
      content: {
        iconInfo: [
          { iconName: 'icon_levels_challenging', iconText: 'Challenging', info: 'This tour fits any age and fitness level' },
          { iconName: 'icon_weather', iconText: 'All year round' },
          { iconName: 'icon_group', iconText: 'Group / Private' },
          { iconName: 'icon_calendar', iconText: 'Group dates', info: 'This tour fits any age and fitness level' }
        ],
        routCities: ['Beijing', 'Ulaanbaatar', 'Lake Baikal', 'Yekaterinburg', 'Kazan', 'Nizhny Novgorod', 'Vladimir', 'Bogolyubovo', 'Yaroslavl', 'Rostov the Great', 'Suzdal', 'Moscow', 'St.Petersburg'],
        mainText: "Travel from Beijing to St Petersburg visiting exciting and mysterious Mongolia, the world's largest Lake Baikal, Yekaterinburg where Siberia ends. And there is more. Dig deeper into local life and discover secret spots of great historical heritage, and finally, explore vibrant Moscow & majectic St Petersburg!"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 1170px;
  margin: 0 auto;
  display: flex;
  .figure-group {
    padding-top: 3px;
    width: 170px;
    position: relative;
    color: $color--gray1_13;
    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 187px;
      width: 1px;
      background-color: silver;
      right: 0;
      top: 20px;
    }
    .icon-description {
      height: 20px;
      margin-top: 16px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .main-icon {
        width: 29px;
      }
      &:nth-child(1) .main-icon {height: 14px;}
      &:nth-child(2) .main-icon {height: 17.78px;}
      &:nth-child(3) .main-icon {height: 16.15px;}
      &:nth-child(4) .main-icon {height: 18px;}

      .icon-text {
        width: 110px;
        height: 20px;
        font-family: Lato;
        font-size: 16px;
        line-height: 20px;
        color: $color--gray1_13;
      }
      .tooltip-wrap {
        display: inline-block;
        height: 14px;
        width: 14px;
        margin-left: 6px;
        margin-top: 1px;
        cursor: pointer;
      }
    }
  }
  .route-cities {
    width: 270px;
    margin: 0 30px;
    margin-top: 20px;
    color: $color--gray1_13;
    .route-cities-header {
      display: flex;
      align-items: center;
      .icon-wrap {
        width: 14px;
        height: 19px;
        padding-left: 2px;
      }
      .qty-city {
        margin-left: 8px;
        margin-top: -2px;
      }
    }
    .cities-wrap {
      padding-left: 23px;
      padding-top: 2px;
      .icon-wrap {
        margin-left: 4px;
        margin-right: 4px;
        display: inline-block;
        width: 5px;
        height: 8px;
        &:first-child {
          display: none;
        }
      }
      .name-wrap {
        font-size: 14px;
        line-height: 22px;
      }
    }
    .route-cities-footer {
      a {
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        color: $color--blue;
      }
      padding-left: 24px;
      margin-top: 30px;
      .icon-wrap {
        margin-left: 11px;
      }
    }
  }
  .main-text-wrap {
    width: 670px;
    padding-top: 18px;
    padding-left: 1px;
    .text-wrap {
      font-size: 16px;
      line-height: 24px;
      color: $color--gray13;
      p.special {
        display: inline-flex;
        align-items: center;
        margin-top: 37px;
        .icon-wrap {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 6px;
          height: 11px;
          margin-right: 17px;
        }
      }
    }
    .read-more-btn {
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      margin-top: 16px;
      color: $color--blue;
      span {
        margin-left: 7px;
      }
    }
  }
}
</style>
