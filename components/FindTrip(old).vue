<template>
  <section class="findTripCard">
    <h2 class="card-headline">
      Where can we take you?
    </h2>
    <div v-if="select" :class="{ active: showList }" class="select" @click.self="showList=!showList">
      <div class="name" @click="showList=!showList">
        {{ select.firstSelect.headLine }}
      </div>
      <div v-if="select.firstSelect.id == null" class="default" @click="showList=!showList">
        {{ select.firstSelect.items[0].value }}
      </div>
      <div v-else class="default" @click="showList=!showList">
        {{ select.firstSelect.id }}
      </div>
      <transition name="slide-fade">
        <div v-show="showList" class="options">
          <label v-for="item in select.firstSelect.items" :key="item" class="option">
            <input v-model="select.firstSelect.id" :value="item.value" :name="select.firstSelect.name" type="radio">
            {{ item.value }}
          </label>
        </div>
      </transition>
      <div v-show="showList" class="overlay" @click="showList=!showList" />
      <div class="arrow" @click="showList=!showList">
        <svg width="14" height="9" viewBox="0 0 14 9" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L7 7L13 1" stroke="#B3B3B3" stroke-width="2" fill="none" />
        </svg>
      </div>
    </div>
    <div :class="{ active: showList1 }" class="select" @click.self="showList1=!showList1">
      <div class="select-wrap">
        <div class="name" @click="showList1=!showList1">
          Choose destination
        </div>
        <div class="default" @click="showList1=!showList1">
          Any
        </div>
        <transition name="slide-fade">
          <ul v-show="showList1" class="options">
            <li class="option-item">
              <label class="option">
                <span @click="showList1=!showList1">Red</span>
                <input type="radio" name="choosedestination">
              </label>
            </li>
          </ul>
        </transition>
        <div v-show="showList1" class="overlay" @click="showList1=!showList1" />
      </div>
      <div class="arrow" @click="showList1=!showList1">
        <svg width="14" height="9" viewBox="0 0 14 9" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L7 7L13 1" stroke="#B3B3B3" stroke-width="2" fill="none" />
        </svg>
      </div>
    </div>
    <div :class="{ active: showList2 }" class="select" @click.self="showList2=!showList2">
      <div class="name" @click="showList2=!showList2">
        Choose trip style
      </div>
      <div class="default" @click="showList2=!showList2">
        Any
      </div>
      <transition name="slide-fade">
        <div v-show="showList2" class="options">
          <label class="option">
            <input type="radio" name="choosedestination">
            Any
          </label>
          <label class="option">
            <input type="radio" name="choosedestination">
            Red
          </label>
          <label class="option">
            <input type="radio" name="choosedestination">
            Green
          </label>
          <label class="option">
            <input type="radio" name="choosedestination">
            Blue
          </label>
        </div>
      </transition>
      <div v-show="showList2" class="overlay" @click="showList2=!showList2" />
      <div class="arrow" @click="showList2=!showList2">
        <svg width="14" height="9" viewBox="0 0 14 9" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L7 7L13 1" stroke="#B3B3B3" stroke-width="2" fill="none" />
        </svg>
      </div>
    </div>
    <div class="third-elem-wrap">
      <div :class="{ active: showList3 }" class="select third" @click.self="showList3=!showList3">
        <div class="name" @click="showList3=!showList3">
          Duration
        </div>
        <div class="default" @click="showList3=!showList3">
          3 Weeks
        </div>
        <transition name="slide-fade">
          <div v-show="showList3" class="options">
            <label class="option">
              <input type="radio" name="choosedestination">
              3 Weeks
            </label>
            <label class="option">
              <input type="radio" name="choosedestination">
              4 Days
            </label>
            <label class="option">
              <input type="radio" name="choosedestination">
              1 Month
            </label>
          </div>
        </transition>
        <div v-show="showList3" class="overlay" @click="showList3=!showList3" />
        <div class="arrow" @click="showList3=!showList3">
          <svg width="14" height="9" viewBox="0 0 14 9" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="#B3B3B3" stroke-width="2" fill="none" />
          </svg>
        </div>
      </div>
      <div :class="{ active: showList4 }" class="select third" @click.self="showList4=!showList4">
        <div class="name" @click="showList4=!showList4">
          Comfort level
        </div>
        <div class="default" @click="showList4=!showList4">
          *****
        </div>
        <transition name="slide-fade">
          <div v-show="showList4" class="options">
            <label class="option">
              <input type="radio" name="choosedestination">
              *****
            </label>
            <label class="option">
              <input type="radio" name="choosedestination">
              ****
            </label>
            <label class="option">
              <input type="radio" name="choosedestination">
              ***
            </label>
            <label class="option">
              <input type="radio" name="choosedestination">
              **
            </label>
          </div>
        </transition>
        <div v-show="showList4" class="overlay" @click="showList4=!showList4" />
        <div class="arrow" @click="showList4=!showList4">
          <svg width="14" height="9" viewBox="0 0 14 9" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="#B3B3B3" stroke-width="2" fill="none" />
          </svg>
        </div>
      </div>
      <div :class="{ active: showList5 }" class="select third" @click.self="showList5=!showList5">
        <div class="name" @click="showList5=!showList5">
          Season
        </div>
        <div class="default" @click="showList5=!showList5">
          Autumn
        </div>
        <transition name="slide-fade">
          <div v-show="showList5" class="options">
            <label class="option">
              <input type="radio" name="choosedestination">
              Spring
            </label>
            <label class="option">
              <input type="radio" name="choosedestination">
              Summer
            </label>
            <label class="option">
              <input type="radio" name="choosedestination">
              Autumn
            </label>
            <label class="option">
              <input type="radio" name="choosedestination">
              Winter
            </label>
          </div>
        </transition>
        <div v-show="showList5" class="overlay" @click="showList5=!showList5" />
        <div class="arrow" @click="showList5=!showList5">
          <svg width="14" height="9" viewBox="0 0 14 9" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="#B3B3B3" stroke-width="2" fill="none" />
          </svg>
        </div>
      </div>
    </div>
    <input class="main-btn-red" type="button" value="Find trip">
  </section>
</template>

<script>
export default {
  data () {
    return {
      showList: false,
      showList1: false,
      showList2: false,
      showList3: false,
      showList4: false,
      showList5: false,
      select: null,
      options: [{
        label: 'Choose theme',
        name: 'theme',
        value: 0,
        values: [
          { id: 0, name: 'Any' },
          { id: 1, name: 'Heritage' },
          { id: 2, name: 'Train journeys' },
          { id: 3, name: 'Wildlife & nature' },
          { id: 4, name: 'Senior travels' },
          { id: 5, name: 'Winter trains' },
          { id: 6, name: 'Kids friendly' },
          { id: 7, name: 'Adventures' },
          { id: 8, name: 'Events' },
          { id: 9, name: 'The snow empire' }
        ]
      }, {
        label: 'Choose destination',
        values: [
          { id: 0, name: 'Any' }
        ]
      }]
    }
  },
  created () {
    this.$axios.$get('http://www.mocky.io/v2/5de77704370000a21d0928c9')
      .then((response) => {
        this.select = response
      })
  }
}
</script>

<style lang="scss" scoped>
.findTripCard {
  background: $color--white;
  box-shadow: 0px 2px 6px 20px rgba(0, 0, 0, 0.15);
  margin: 32px 12px 0;
  border-radius: 4px;
  padding: 12px;
  .card-headline {
    @include font--AcromNormalBold;
    font-size: 18px;
    line-height: 30px;
    color: $color--gray1_13;
    margin-bottom: 12px;
  }
  .select {
    position: relative;
    background: $color--gray9_96;
    cursor: pointer;
    transition: all 0.5s ease;
    margin-top: 8px;
    padding:0 8px;
    height: 40px;
    .name {
      font-size: 12px;
      font-weight: 600;
      line-height: 19px;
      color: $color--gray3_40;
    }
    .default {
      font-size: 14px;
      font-weight: bold;
      line-height: 18px;
    }
    .options {
      background: $color--white;
      position: absolute;
      width: 100%;
      left: 0;
      top: 44px;
      display: flex;
      flex-wrap: wrap;
      z-index: 300;
      border: 2px solid $color--blue;
      box-sizing: border-box;
      padding: 10px 14px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
      input {
        display: none;
      }
      .option {
        display: inline-block;
        font-weight: 600;
        font-size: 14px;
        line-height: 30px;
        width: calc(50% - 8px);
        &:nth-child(2n) {
          margin-left: 16px;
        }
      }
    }
    .overlay {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 290;
    }
    .arrow {
      position: absolute;
      right: 8px;
      top: 0;
      bottom: 0;
      transition: all 0.5s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &.active, &:hover{
      background: $color--blue;
      .name, .default {
        color: $color--white;
      }
      .arrow {
        transform: scaleY(-1);
        svg path{
          stroke: #fff;
        }
      }
    }
  }
  .third-elem-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .select {

    }
    .select.third {
      width: 32.353%;
      box-sizing: border-box;
      .option {
        width: 100%;
        &:nth-child(2n) {
          margin-left: 0;
        }
      }
    }
  }
  .main-btn-red {
    margin-top: 8px;
    margin-bottom: 7px;
  }
}
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  /* .slide-fade-leave-active до версии 2.1.8 */
  opacity: 0;
}
</style>
