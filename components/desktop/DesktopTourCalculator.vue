<template>
  <div class="DesktopTourCalculator">
    <div class="switch-groupPrivate">
      <div :class="{active: !switchGroupPrivate}" @click="switchGroupPrivate = false">
        Group tour
      </div>
      <div :class="{active: switchGroupPrivate}" @click="switchGroupPrivate = true">
        Private tour
      </div>
    </div>
    <div class="main-content">
      <div class="switch-class-block">
        <p :class="{active: switchClassItem}" @click="switchClassItem = true">
          1st class train
        </p>
        <p :class="{active: !switchClassItem}" @click="switchClassItem = false">
          2nd class train
        </p>
      </div>
      <div class="select-version">
        <label>
          <span :class="{active: checkVersion}" class="checkbox-mark" />
          <input v-model="checkVersion" hidden type="checkbox">
          <span class="text">Light version</span>
        </label>
        <div class="tooltip-wrap">
          <simple-svg class="info-icon" width="100%" height="100%" src="/img/icon_info.svg" />
          <tooltip :message="tooltipMessage" />
        </div>
      </div>
      <div class="calculator-table">
        <div class="row">
          <drSelect />
        </div>
        <div class="row half-cell-wrap">
          <div class="half-cell">
            <drSelect />
          </div>
          <div class="half-cell">
            <drSelect />
          </div>
        </div>
        <div class="row">
          <drSelect />
        </div>
      </div>
      <div class="calculator-price">
        <p class="price-item-wrap">
          <span>Single room</span><span>$ 9,999 USD </span><span>per person</span>
        </p>
        <p class="price-item-wrap double-rom">
          <span>Double room</span><span>$ 9,999 USD </span><span>per person</span>
        </p>
        <p class="price-item-wrap total-price">
          <span>Total</span><span>$ 9,999 USD </span>
        </p>
        <div class="btn-wrap price-item-wrap">
          <input type="button" class="main-btn-red" value="Book trip">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drSelect from '~/components/ui_components/drSelect.vue'
import Tooltip from '~/components/Tooltip.vue'

export default {
  components: {
    drSelect,
    Tooltip
  },
  data () {
    return {
      switchClassItem: false,
      switchGroupPrivate: true,
      checkVersion: null,
      tooltipMessage: 'some strong text'
    }
  }
}
</script>

<style lang="scss" scoped>
.DesktopTourCalculator {
  background-color: $color--white;
  border: 1px solid $color--gray8_90;
  padding-bottom: 14px;
  .switch-groupPrivate {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    line-height: 20px;
    color: $color--gray1_13;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 41px;
      background-image: linear-gradient(270deg, $color--white 49.79%, $color--gray9_96 100%);
      position: relative;
      border-bottom: 1px solid $color--gray8_90;
      color: $color--gray1_13;
      cursor: pointer;
      transition: all 0.1s linear;
      &:last-child:after {
        content: '';
        display: block;
        position: absolute;
        height: calc(100% + 1px);
        width: 1px;
        background-color: $color--gray8_90;
        top: 0;
        left: -1px;
      }
    }
    div.active {
      background: $color--white;
      border-bottom: 1px solid white;
    }
  }
  .main-content {
    margin-top: 29px;
    padding-left: 15px;
    padding-right: 15px;
    .switch-class-block {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 48px;
      p {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(50% - 4px);
        border: 2px solid $color--blue;
        color: $color--blue;
        cursor: pointer;
        transition: all 0.1s linear;
        font-size: 16px;
      }
      p.active {
        color: $color--white;
        background-color: $color--blue;
      }
    }
    .select-version {
      display: flex;
      margin-top: 15px;
      label {
        cursor: pointer;
        display: flex;
        align-items: center;
      }
      .checkbox-mark {
        display: inline-block;
        box-sizing: border-box;
        width: 16px;
        height: 16px;
        background: $color--gray16;
        border: 2px solid $color--blue;
        display: flex;
        justify-content: center;
        align-items: center;
        &:after {
          content: "";
          width: 10px;
          height: 10px;
          background-color: $color--blue;
          opacity: 0;
          transition: all 0.1s ease;
        }
        &.active {
          &:after {
            opacity: 1;
          }
        }
      }
      .text {
        &::selection {background-color: transparent;}
        font-size: 16px;
        line-height: 20px;
        color: $color--gray13;
        margin-left: 5px;
        margin-top: -1px;
      }
      .tooltip-wrap {
        width: 14px;
        height: 14px;
        margin-top: 4px;
        margin-left: 8px;
      }
    }
    .calculator-table {
      margin-top: 15px;
      border: 2px solid $color--blue;
      .row {
        height: 46px;
        &.half-cell-wrap {
          display: flex;
        }
        border-top: 2px solid $color--blue;
        &:first-child {
          border-top: none;
        }
        .half-cell {
          width: 50%;
          &:last-child {
            border-left: 2px solid $color--blue;
          }
        }
      }
    }
  }
  .calculator-price {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 23px 0 0 8px;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: $color--gray15;
    position: relative;
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 304px;
      border-top: 1px dashed $color--gray8_90;
      top: 96px;
      left: 8px;
    }
    .price-item-wrap {
      width: 50%;
      box-sizing: border-box;
      &.double-rom {
        padding-left: 5px;
      }
      &.total-price {
        margin-top: 28px;
        span:nth-child(2) {
          color: $color--gray1_13;
        }
      }
      span {
        display: block;
        &:nth-child(2) {
          font-size: 18px;
          line-height: 20px;
          color: $color--blue;
          margin-top: 7px;
        }
      }
    }
  }
  .btn-wrap {
    margin-top: 30px;
    .main-btn-red {
      font-size: 17px;
      height: 40px;
      width: 170px;
      margin-left: -5px;
    }
  }
}
</style>
