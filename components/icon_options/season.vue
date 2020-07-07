<template>
  <div class="inner">
    <div class="icon-wrap"><simple-svg src="/img/icon_weather.svg" /></div>
    <span class="text">{{ season }}</span>
  </div>
</template>

<script>
export default {
  props: {
    season: {
      type: String,
      required: false,
      default: 'All year round'
    }
  }
}
</script>

<style lang="scss" scoped>
.inner {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>
