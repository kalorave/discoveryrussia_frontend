<template>
  <div class="BreadCrumbs">
    <span class="text icon"><simple-svg src="/img/icon_breadCrumbs_home.svg" /><span class="slash-symbol">/</span></span>
    <span v-for="(item, i) in breadCrumbs" :key="item" :class="{'active': i == 1}" class="text"> {{ item }}<span class="slash-symbol">/</span> </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      breadCrumbs: [
        'Trip finder',
        'Train journeys'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.BreadCrumbs {
  @include grid-container;
  padding-left: 15px;
  padding-top: 24px;
  .text {
    .slash-symbol {
      color: $color--gray6_70;
      margin-left: 5px;
    }
    &:last-child {
      .slash-symbol {
        display: none;
      }
    }
  }
}
.text {
  height: 24px;
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: $color--gray6_70;
  cursor: pointer;
  &.active {
    color: $color--gray3_40;
  }
}
</style>
