<template>
  <div class="inner">
    <template v-if="level == 1">
      <div class="icon-wrap"><simple-svg src="/img/icon_levels_easy.svg" /></div>
      <span class="text">Easy</span>
    </template>
    <template v-if="level == 2">
      <div class="icon-wrap"><simple-svg src="/img/icon_levels_moderate.svg" /></div>
      <span class="text">Moderate</span>
    </template>
    <template v-if="level == 3">
      <div class="icon-wrap"><simple-svg src="/img/icon_levels_daring.svg" /></div>
      <span class="text">Daring</span>
    </template>
    <template v-if="level == 4">
      <div class="icon-wrap"><simple-svg src="/img/icon_levels_difficult.svg" /></div>
      <span class="text">Difficult</span>
    </template>
    <template v-if="level == 5">
      <div class="icon-wrap"><simple-svg src="/img/icon_levels_challenging.svg" /></div>
      <span class="text">Challenging</span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    level: {
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
