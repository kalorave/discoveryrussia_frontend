<template>
  <div class="DesktopSpecialTour">
    <trip-ad-banner v-for="item in bannerContent" :key="item.id" :content="item" class="desktop-special-tour" />
  </div>
</template>

<script>
import TripAdBanner from '~/components/TripAdBanner.vue'

export default {
  components: {
    TripAdBanner
  },
  data () {
    return {
      bannerContent: [
        { id: 1, text: 'Kid friendly' },
        { id: 2, text: 'Kid friendly' },
        { id: 3, text: 'White Xmas 2019/2020' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.DesktopSpecialTour {
  @include grid-row;
}
.desktop-special-tour {
  @include grid-item;
  width: 370px;
  height: 300px;
}
</style>
