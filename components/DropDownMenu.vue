<template>
  <section class="inner">
    <div
      @mouseleave="mouseleave"
      @mouseover="mouseover"
    >
      <slot />
    </div>
    <transition :name="animationName">
      <div
        v-show="isHover"
        class="content"
        @mouseover="mouseover"
        @mouseleave="mouseleave"
      >
        <ul v-for="column in columnsNumber" :key="column" class="column">
          <template v-for="(link, i) in options">
            <nuxt-link
              v-if="divideСolumns(column, i)"
              :key="`${column}-${link.id}`"
              :to="`/search/${link.id}`"
              tag="li"
              class="search-icon"
              @click.native="closeDropMenu"
            >
              <span>{{ link.name }}</span>
            </nuxt-link>
          </template>
        </ul>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data () {
    return {
      isHover: false,
      columnsNumber: 3,
      animationName: 'fade'
    }
  },
  methods: {
    closeDropMenu () {
      this.isHover = false
      this.animationName = ''
    },
    mouseover () {
      this.isHover = true
      this.animationName = 'fade'
    },
    mouseleave () {
      this.isHover = false
    },
    divideСolumns (columnNumber, i) {
      const dividedLength = Math.ceil(this.options.length / this.columnsNumber)
      switch (columnNumber) {
        case 1:
          return i < dividedLength
        case 2:
          return i > dividedLength - 1 && i < dividedLength * 2
        case 3:
          return i > dividedLength * 2 - 1
        default:
          return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.inner {
  position: relative;
}
.content {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  border-radius: 4px;
  background-color: $color--white;
  color: black;
  width: 527px;
  background: $color--white;
  border: 1px solid $color--gray8_90;
  box-sizing: border-box;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  position: absolute;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  ul {
    width: 150px;
    margin-bottom: 18px;
    &:first-child {
      margin-left: 15px;
    }
    &:last-child {
      margin-right: 15px;
    }
    li {
      margin-top: 18px;
      margin-top: 18px;
      &.active-link {
        color: $color--blue;
        span {
          border-bottom: 1px solid transparent;
          &:hover {
            border-bottom-color: transparent;
          }
        }
      }
      span {
        border-bottom: 1px solid transparent;
        &:hover {
          border-bottom: 1px solid $color--black;
        }
      }
    }
  }
}

.fade-enter-active {transition: opacity .3s linear;}
.fade-leave-active {transition: opacity .5s linear;}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
