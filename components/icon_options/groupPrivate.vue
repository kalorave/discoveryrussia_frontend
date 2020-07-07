<template>
  <div class="inner">
    <template v-if="typeTrip == 1">
      <div class="icon-wrap"><simple-svg src="/img/icon_group.svg" /></div>
      <span class="text">Group</span>
    </template>
    <template v-if="typeTrip == 2">
      <div class="icon-wrap"><simple-svg src="/img/icon_group.svg" /></div>
      <span class="text">Private</span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    typeTrip: {
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
