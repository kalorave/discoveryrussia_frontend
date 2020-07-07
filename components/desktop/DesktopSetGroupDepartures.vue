<template>
  <div class="inner">
    <div class="header row">
      <div class="cell">
        Direction
      </div>
      <div class="cell">
        Dates
      </div>
      <div class="cell">
        Price
      </div>
    </div>
    <ul class="list-wrap">
      <li v-for="item in departuresList" :key="item" class="list-item row">
        <div class="cell">
          {{ item.route }}
        </div>
        <div class="cell">
          {{ item.interval }}
        </div>
        <div class="cell price-wrap">
          <div v-if="item.light" class="light">
            Light
          </div>
          <div class="">
            <div :class="{active: item.discountPrice}" class="main-price">
              <span v-if="item.discountPrice">&nbsp;</span>{{ item.price }}$ <span v-if="item.discountPrice">&nbsp;</span>
            </div>
            <div v-if="item.discountPrice" class="discount-price">
              {{ item.discountPrice }}$
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="btn-wrap">
      <div class="main-btn-white">
        <span>Show more</span>
        <span class="icon-wrap"><simple-svg src="/img/icon_double_arrow.svg" /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      departuresList: [
        {
          route: 'Beijing — St. Peterburd',
          interval: '21 dec 2019 — 15 jan 2020  (25 days)',
          price: 1500,
          discountPrice: 1100
        },
        {
          route: 'Beijing — St. Peterburd',
          interval: '03 dec 2019 — 28 jan 2020  (25 days)',
          light: true,
          price: 500
        },
        {
          route: 'Ulaanbaatar — Moscow',
          interval: '23 dec 2019 — 12 jan 2020  (20 days)',
          price: 1000
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.inner {
  width: 770px;
  margin: 0 auto;
  background-color: $color--white;
  border: 1px solid $color--gray8_90;
  box-sizing: border-box;
  padding-left: 33px;
  padding-right: 32px;
  padding-bottom: 20px;
  margin-bottom: 16px;
}
.row {
  display: flex;
  justify-content: space-between;
}
.cell {
  &:first-child {
    width: 220px;
  }
  &:nth-child(2) {
    width: 310px;
  }
  &:last-child {
    width: 130px;
    text-align: right;
  }
}
.header {
  @include font--AcromNormalBold;
  font-size: 16px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: $color--gray1_13;
  padding-top: 8px;
}
.list-wrap {
  border-top: 1px solid $color--gray8_90;
  border-bottom: 1px solid $color--gray8_90;
  margin-top: 5px;
  .list-item {
    border-bottom: 1px dashed $color--gray8_90;
    height: 60px;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: $color--gray13;
    &:last-child {
      border-bottom: none;
    }
    .price-wrap {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .light {
        width: 64px;
        height: 20px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background-color: $color--blue;
        color: $color--white;
        font-size: 14px;
        line-height: 20px;
        margin-right: 11px;
        margin-top: 2px;
      }
      .main-price.active {
        margin-top: -17px;
        font-size: 12px;
        line-height: 18px;
        text-decoration-line: line-through;
        color: $color--gray15;
      }
      .discount-price {
        color: $color--red;
      }
    }
  }
}
.btn-wrap {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  .main-btn-white {
    position: absolute;
    width: 222px;
    height: 38px;
    font-size: 14px;
    font-weight: normal;
    padding-bottom: 5px;
    margin: 0 auto;
    top: -1px;
    box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.06);
    color: $color--gray13;
    .icon-wrap {
      height: 20px;
      margin-top: 10px;
      margin-left: 7px;
    }
  }
}
</style>
