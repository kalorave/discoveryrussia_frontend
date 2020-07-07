<template>
  <div class="inner">
    <template>
      <div class="icon-wrap"><simple-svg src="/img/icon_calendar.svg" /></div>
      <span class="text">{{day}} days</span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    day: {
      type: Number,
      required: false,
      default: ''
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
