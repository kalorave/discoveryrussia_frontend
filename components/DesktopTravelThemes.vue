
<template>
  <div class="DesktopTravelThemes">
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
        { id: 9, text: 'Heritage' },
        { id: 1, text: 'Train journeys' },
        { id: 2, text: 'Wildlife & Nature' },
        { id: 5, text: 'Senior travel' },
        { id: 6, text: 'Winter trains' },
        { id: 3, text: 'Kid friendly' },
        { id: 7, text: 'Adventures' },
        { id: 8, text: 'Events' },
        { id: 4, text: 'The snow empire' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.DesktopTravelThemes {
  @include grid-row;
  margin-top: 8px;
}
  .desktop-special-tour {
    @include grid-item;
    margin-top: 30px;
    width: 370px;
    height: 300px;
  }

</style>
