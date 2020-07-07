<template>
  <div v-if="whyUsObj" class="WhyUsDesktop">
    <div class="row">
      <div v-for="item in anotherOrder(whyUsObj)" :key="item.id" class="item">
        <div class="icon">
          <div class="icon-wrap">
            <simple-svg :src="`/img/icon_why_us_${item.name}.svg`" width="100%" height="100%" />
          </div>
        </div>
        <div class="text-block">
          <h4 class="headline">
            {{ item.headline }}
          </h4>
          <p class="text-content">
            {{ item.description }}
          </p>
        </div>
      </div>
      <div class="btn-wrap">
        <input class="main-btn-white" type="button" value="Show more">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      whyUsObj: null
    }
  },
  created () {
    this.addData()
  },
  methods: {
    addData () {
      const self = this
      this.$axios.$get('http://www.mocky.io/v2/5ded324633000010002b90d8')
        .then(function (response) {
          self.whyUsObj = response
          self.loaded = true
        })
    },

    anotherOrder (arr) {
      const newArr = []

      for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) { newArr.push(arr[i]) }
      }

      for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) { newArr.push(arr[i]) }
      }

      return newArr
    }
  }
}
</script>

<style lang="scss" scoped>
.WhyUsDesktop {
  width: 100%;
  .row {
    @include grid-row;
    margin-top: 19px;
    .item {
      @include grid-item;
      @include col-desktop(4);
      display: flex;
      justify-content: space-between;
      margin-top: 22px;
      .icon {
        width: 55px;
        height: 66px;
        margin-right: 12px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
      }
      // icons size
      &:nth-child(1) .icon-wrap {width: 55px;height: 42px; margin-right: -4px;}
      &:nth-child(2) .icon-wrap {width: 36px;height: 43px; margin-right: 2px;}
      &:nth-child(3) .icon-wrap {width: 41px;height: 66px; margin-right: -4px;}
      &:nth-child(4) .icon-wrap {width: 55px;height: 59px; margin-right: -1px;}
      &:nth-child(5) .icon-wrap {width: 41px;height: 39px; margin-right: 0px;}
      &:nth-child(6) .icon-wrap {width: 42px;height: 30px; margin-right: -4px; margin-top: 3px;}
      .text-block {
        width: 301px;
        font-size: 16px;
        line-height: 24px;
        color: $color--gray11;
        .headline {
          font-weight: bold;
          font-size: 18px;
          line-height: 20px;
          color: $color--black;
        }
        .text-content {
          margin-top: 13px;
        }
      }
    }
    .btn-wrap {
      width: 100%;
      display: flex;
      justify-content: center;
      @include media-desktop {
        margin-top: 25px;
      }
      .main-btn-white {
        width: 128px;
        height: 40px;
        @include media-desktop {
          width: 194px;
          height: 48px;
        }
      }
    }
  }
}
</style>
