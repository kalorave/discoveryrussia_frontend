<template>
  <div class="main-wrap">
    <div v-bar class="day-items-wrap">
      <dayDescriptionCard />
    </div>
    <div class="aside-wrap">
      <div class="selection-setting-wrap">
        <TourSelectionSettings />
      </div>
      <div class="tour-calculator-wrap">
        <h3 class="headline">
          Tour Calculator
        </h3>
        <DesktopTourCalculator />
      </div>
    </div>
  </div>
</template>

<script>
import dayDescriptionCard from '~/components/desktop/dayDescriptionCard.vue'
import TourSelectionSettings from '~/components/desktop/TourSelectionSettings.vue'
import DesktopTourCalculator from '~/components/desktop/DesktopTourCalculator.vue'

export default {
  components: {
    dayDescriptionCard,
    TourSelectionSettings,
    DesktopTourCalculator
  }
}
</script>

<style lang="scss" scoped>
.main-wrap {
  display: flex;
  justify-content: space-between;
  width: 1170px;
  height: 990px;
  margin: 0 auto;
  margin-top: 12px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 1000%;
    height: 62px;
    bottom: 0;
    right: 370px;
    z-index: 10000;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);
  }
}
.day-items-wrap {
  width: 784px;
}
.aside-wrap {
  margin-left: 5px;
  width: 370px;
  height: 100%;
  .tour-calculator-wrap {
    .headline {
      @include font--AcromNormalBold;
      text-align: center;
      color: $color--gray1_13;
      font-size: 36px;
      line-height: 43px;
      margin-top: 60px;
      margin-bottom: 25px;
    }
  }
}
</style>
