<template>
  <div class="main-wrap">
    <h2 class="block-headline">
      Inclusions
    </h2>
    <div class="accordion-wrap">
      <ul class="accordion-items">
        <li v-for="(item, i) in inclusionsObj" :key="item" :class="{active: i == accordionSelected}" class="accordion-item">
          <div class="item-head" @click="openAccardion(i)">
            <p class="item-headline">
              <span>{{ item.headline }}</span>
            </p>
            <span class="icon arrow-icon"><img src="/img/icon_arrow_mark_gray.svg"></span>
          </div>
          <div v-show="i == accordionSelected" class="item-content">
            <ul>
              <li v-for="descriptionItem in item.description" :key="descriptionItem">
                <span><img src="/img/icon_check_mark.svg"></span>{{ descriptionItem }}
              </li>
            </ul>
          </div>
          <span class="line" />
        </li>
      </ul>
    </div>
    <a class="main-btn-blue"><span><img src="/img/icon_letter_white.svg"></span>Enquire</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inclusionsObj: [],
      accordionSelected: null
    }
  },
  created () {
    this.addData()
  },
  methods: {
    addData () {
      const self = this
      this.$axios.$get('http://www.mocky.io/v2/5ded4b9533000052002b910a')
        .then(function (response) {
          self.inclusionsObj = response
          self.loaded = true
        })
    },
    openAccardion (i) {
      if (this.accordionSelected === i) {
        this.accordionSelected = null
        return
      }
      this.accordionSelected = i
    }
  }
}
</script>

<style lang="scss" scoped>
.main-wrap {
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 60px;
  padding-bottom: 10px;
  h2 {
    padding-bottom: 8px;
  }
  .accordion-items {
    .line {
      background-color: $color--gray8_90;
    }
    .accordion-item {
      padding-left: 8px;
      padding-right: 8px;
      .item-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        font-weight: bold;
        font-size: 16px;
        position: relative;
        padding-left: 8px;
        padding-right: 7px;
        .icon.arrow-icon img {
          display: inline-block;
          margin-top: 14px;
          margin-bottom: 14px;
        }
      }
      .item-content{
        overflow: hidden;
        margin-top: -9px;
        padding-right: 12px;
        padding-bottom: 29px;
        ul {
          li {
            font-size: 12px;
            line-height: 16px;
            padding-left: 8px;
            margin-top: 8px;
            span {
              padding-right: 3px;
            }
          }
        }
      }
    }
    .accordion-item.active {
        .icon.arrow-icon img {
          transform: scale(1, -1);
      }
    }
  }
  .main-btn-blue {
    width: 140px;
    height: 37px;
    margin: 0 auto;
    margin-top: 23px;
    span {
      margin-left: 1px;
      margin-right: 9px;
      padding-top: 5px;
    }
  }
}
</style>
