<template>
  <div class="inner">
    <div class="selection-city">
      <div v-for="(item, i) in 4" :key="item" :class="{active: isActive2==i}" class="item-wrap" @click="isActive2=i">
        <div class="">
          Full
        </div>
        <div class="">
          19 cities | 25 days
        </div>
      </div>
    </div>
    <ul v-bar class="selection-timetable">
      <div>
        <li v-for="(item, i) in 8" :key="item" :class="{active: isActive == i}" @click="isActive = i">
          <span>{{ item }}</span>Day — The adventure begins!
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: undefined,
      isActive2: undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.inner {
  width: 370px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 90.1%, rgba(0, 0, 0, 0.05) 100%), #FFFFFF;
  border: 1px solid $color--gray8_90;
  box-sizing: border-box;
}

.selection-city {
  width: 338px;
  margin: 0 auto;
  padding-top: 12px;
  padding-bottom: 18px;
  margin-bottom: 16px;
  border-bottom: 1px solid $color--gray8_90;
  .item-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    cursor: pointer;
    div {
      transition: all .1s linear;
      &:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 211px;
        height: 30px;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: $color--gray15;
        border: 1px solid $color--gray15;
      }
      &:last-child {
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        color: $color--gray15;
        margin-right: 19px;
        margin-top: 1px;
      }
    }
    &:hover {
      div {
        color: $color--gray13;
        &:first-child {
          border-color: $color--gray13;
        }
      }
    }
    &.active {
      div {
        &:first-child {
          border-color: $color--blue;
          background-color: $color--blue;
          color: white;
        }
        &:last-child {
          color: $color--blue;
        }
      }
    }
  }
}

.selection-timetable {
  width: 338px;
  height: 157px;
  margin: 0 auto;
  margin-bottom: 12px;
  li {
    font-size: 14px;
    line-height: 32px;
    color: $color--gray1_13;
    cursor: pointer;
    height: 30px;
    margin-top: 2px;
    transition: all .1s linear;
    width: 93%;
    &:first-child {
      margin: 0;
    }
    span {
      font-weight: bold;
      font-size: 16px;
      line-height: 32px;
      margin-left: 19px;
      margin-right: 5px;
    }
    &:before {
      content: "";
      display: inline-block;
      width: 12px;
      height: 12px;
      box-sizing: border-box;
      border: 2px solid $color--gray17;
      border-radius: 100%;
      transition: all .1s linear;
    }
    &:hover {
      font-size: 16px;
      line-height: 32px;
      font-weight: bold;
      color: $color--blue;
      &:before {
        background-color: $color--blue;
        border: 2px solid $color--blue;
      }
    }
    &.active {
      font-size: 16px;
      line-height: 32px;
      font-weight: bold;
      color: $color--gray1_13 !important;
      &:before {
        background-color: $color--gray17 !important;
        border: 2px solid $color--gray17 !important;
      }
    }
  }
}
</style>
