<template>
  <div class="DesktopWhatOtherSay">
    <div class="row">
      <div v-for="item in testimonials" :key="item.id" class="item">
        <testimonials-card :testimonials="item" class="desktop-what-other-say" />
      </div>
      <div class="icon-trustpilot-wrap">
        <simple-svg src="/img/icon_trustpilot_big.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import TestimonialsCard from '~/components/TestimonialsCard.vue'

export default {
  components: {
    TestimonialsCard
  },

  data () {
    return {
      testimonials: [
        {
          id: 1,
          headline: 'Excellent trip',
          stars: 5,
          publicationDate: '26 may',
          text: 'Excellent trip. Discovery Russia took good care . Hotel Tchaikovsky, St Petersburg was superb. The places selected, the commentary and care of the guides was awesome. My idea of Russia and Russians has changed for the better.',
          userName: 'Jonathan Mccluskey'
        },
        {
          id: 2,
          headline: 'This has been an incredible trip',
          stars: 5,
          publicationDate: '23 may',
          text: 'This has been an incredible trip. The service from Discovery Russia has been exceptional and the guides provided were knowledgeable about their cities and gave us an experience we will never forget. If I do this trip again I would take even longer to see this amazing country.',
          userName: 'Mark'
        },
        {
          id: 3,
          headline: 'Excellent service and support',
          stars: 5,
          publicationDate: '20 may',
          text: 'Excellent service and support. I would recommend this company to anyone. Very flexible, accommodating and fast when it comes to solving issues and making changes to suit. Great staff and great choice of activities.',
          userName: 'Sasa K'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.DesktopWhatOtherSay {
  .row {
    @include grid-row;
    .item {
      @include grid-item;
      @include col-desktop(4);
      position: relative;
      &:before {
        content: "";
        position: absolute;
        width: 0px;
        height: 208px;
        border: 1px dashed $color--gray12;
        left: -15px;
        top: 40px;
      }
      &:first-child:before {
        display: none;
      }
      .desktop-what-other-say {
        // width: 370px;
      }
    }
    .icon-trustpilot-wrap {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 18px;
      padding-bottom: 46px;
    }
  }
}
</style>
