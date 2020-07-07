<template>
  <header class="HeaderMenu">
    <menu class="menu-wrap">
      <template v-if="showDesktopVersion">
        <nuxt-link class="logo" to="/">
          <simple-svg src="/img/icon_logo.svg" />
        </nuxt-link>
        <div class="header-nav-panel">
          <a class="header-icon special"><simple-svg src="/img/icon_call24.svg" /></a>
          <a class="header-icon"><simple-svg src="/img/icon_letter_white.svg" /></a>
          <div :class="{active: openMenu}" class="header-icon open-menu-btn" @click="popup">
            <div :class="{active: !openMenu}" class="open">
              <simple-svg src="/img/icon_burger_btn.svg" />
            </div>
            <div :class="{active: openMenu}" class="close">
              <simple-svg src="/img/icon_burger_close.svg" />
            </div>
          </div>
          <transition v-if="links" name="slide-fade">
            <nav v-show="openMenu" class="mobile-nav-menu">
              <template v-for="(mainLink, i) in links">
                <template v-if="mainLink.secondaryLinks">
                  <a :key="mainLink" class="main-link open-secondary" @click="openSecondary(i)">{{ mainLink.name }}<simple-svg :class="{active: showSecondary == i}" src="/img/icon_arrow_mark_gray.svg" /></a>
                  <div v-if="showSecondary == i" :key="mainLink" class="secondary-links-wrap">
                    <div class="left-column">
                      <template v-for="(secondaryLink, j) in mainLink.secondaryLinks">
                        <a v-if="j < mainLink.secondaryLinks.length / 2" :key="secondaryLink" class="secondary-link">{{ secondaryLink.name }}</a>
                      </template>
                    </div>
                    <div class="right-column">
                      <template v-for="(secondaryLink, j) in mainLink.secondaryLinks">
                        <a v-if="j >= mainLink.secondaryLinks.length / 2" :key="secondaryLink" class="secondary-link">{{ secondaryLink.name }}</a>
                      </template>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <a :key="mainLink" class="main-link">{{ mainLink.name }}</a>
                </template>
                <span :key="mainLink" class="line" />
              </template>
            </nav>
          </transition>
        </div>
      </template>
      <div v-else class="desktop-nav-panel">
        <nav class="nav-panel-wrap">
          <nuxt-link class="logo" to="/">
            <simple-svg src="/img/icon_logo.svg" width="100%" height="100%" />
          </nuxt-link>
          <div class="nav-panel">
            <div class="left">
              <nuxt-link class="search-icon" to="/search">
                <span><simple-svg src="/img/icon_search.svg" /></span>
                <span>Search</span>
              </nuxt-link>
              <a>
                <drop-down-menu :options="destinations">Destinations</drop-down-menu>
              </a>
              <a class="open-drop-down">
                <drop-down-menu :options="travelThemesLinks">Travel themes</drop-down-menu>
              </a>
              <a>About us</a>
              <a>Contacts</a>
            </div>
            <div class="right">
              <a class="callback-icon"><span><simple-svg src="/img/icon_call24.svg" width="100%" height="100%" /></span><span>+61 2 8310 7667</span></a>
              <a class="letter-icon"><span><simple-svg src="/img/icon_letter_white.svg" width="100%" height="100%" /></span></a>
              <a class="admin-enter-icon"><span><simple-svg src="/img/icon_enter.svg" width="100%" height="100%" /></span></a>
            </div>
          </div>
        </nav>
      </div>
    </menu>
  </header>
</template>

<script>
import DropDownMenu from '~/components/DropDownMenu.vue'

export default {
  components: {
    DropDownMenu
  },
  data () {
    return {
      openMenu: false,
      links: null,
      travelThemesLinks: [
        { id: '1', path: false, name: 'Heritage Tours' },
        { id: '2', path: false, name: 'Senior Travels' },
        { id: '3', path: false, name: 'Events' },
        { id: '4', path: false, name: 'Luxury Trains' },
        { id: '5', path: false, name: 'Train journeys' },
        { id: '6', path: false, name: 'The Snow Empire' },
        { id: '7', path: false, name: 'Kid Friendly' },
        { id: '8', path: false, name: 'WWII Tours' },
        { id: '9', path: false, name: 'Adventures' },
        { id: '10', path: false, name: 'Russian Cruises' },
        { id: '11', path: false, name: 'Winter Trains' },
        { id: '12', path: false, name: 'Wildlife & Nature' }
      ],
      // destinationsLinks: [
      //   { 'id': '1', 'path': false, 'name': 'Moscow' },
      //   { 'id': '2', 'path': false, 'name': 'Saint Petersburg' },
      //   { 'id': '3', 'path': false, 'name': 'Trans Siberian tours' },
      //   { 'id': '4', 'path': false, 'name': 'Winter trains' },
      //   { 'id': '5', 'path': false, 'name': 'Arctic' },
      //   { 'id': '6', 'path': false, 'name': 'Baltic States' },
      //   { 'id': '7', 'path': false, 'name': 'Golden Ring' },
      //   { 'id': '8', 'path': false, 'name': 'Central Asia' },
      //   { 'id': '9', 'path': false, 'name': 'Russia cruises' },
      //   { 'id': '10', 'path': false, 'name': 'F1, Sochi' },
      //   { 'id': '11', 'path': false, 'name': 'Kamchatka' },
      //   { 'id': '12', 'path': false, 'name': 'Lake Baikal' },
      //   { 'id': '13', 'path': false, 'name': 'Northern Lights' },
      //   { 'id': '14', 'path': false, 'name': 'Russian North' },
      //   { 'id': '15', 'path': false, 'name': 'Scandinavia' },
      //   { 'id': '16', 'path': false, 'name': 'Siberia' },
      //   { 'id': '17', 'path': false, 'name': 'Stalingrad' },
      //   { 'id': '18', 'path': false, 'name': 'Trans Mongolian' },
      //   { 'id': '19', 'path': false, 'name': 'Ukraine' },
      //   { 'id': '20', 'path': false, 'name': 'Ural' },
      //   { 'id': '21', 'path': false, 'name': 'Caucasus mountains' }
      // ],
      showSecondary: null,
      showDesktopVersion: true,
      showModalNav: true,
      width: 0,
      height: 0
    }
  },
  computed: {
    destinations () {
      return this.$store.state.destinations.list
    }
  },
  created () {
    this.addData()
  },
  beforeMount () {
    if (this.process.client) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  beforeDestroy () {
    if (this.process.client) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    popup () {
      document.body.classList.toggle('overflow-hidden')
      this.openMenu = !this.openMenu
    },
    addData () {
      const self = this
      this.$axios.$get('http://www.mocky.io/v2/5df154db31000055008f0f4f')
        .then(function (response) {
          self.links = response
          self.loaded = true
        })
    },
    openSecondary (i, length) {
      if (this.showSecondary === i) {
        this.showSecondary = null
        return
      }
      this.showSecondary = i
    },
    handleResize () {
      this.width = window.innerWidth
      this.height = window.innerHeight

      if (this.width >= 1200) {
        this.showDesktopVersion = false
      } else {
        this.showDesktopVersion = true
      }
    },
    goToTour () {
      this.$router.push('/tour/' + 1)
    }
  }
}

</script>

<style lang="scss" scoped>
.HeaderMenu {
  .menu-wrap {
    position: absolute;
    left: 0;
    right: 0;
    padding-left: 24px;
    z-index: 9;
    @include media-desktop {
      padding: 0;
      height: 65px;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    .logo {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .header-nav-panel {
      display: flex;
      justify-content: center;
      align-items: center;
      .header-icon {
        width: 56px;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-sizing: border-box;
        img {
          margin-right: -3px;
        }
      }
      .open-menu-btn {
        .open, .close {
          position: absolute;
          opacity: 0;
          transition: all 0.3s ease;
        }
        .active {
          opacity: 1;
        }
      }
      .open-menu-btn.active {
        background-color: $color--white;
      }
      .header-icon.special {
        box-sizing: border-box;
        padding-bottom: 6px;
        padding-left: 6px;
      }
      .mobile-nav-menu {
        position: absolute;
        height: calc(100vh - 56px);
        background-color: $color--white;
        top: 56px;
        left: 0;
        right: 0;
        bottom: 0;
        overflow-x: hidden;
        z-index: 1100;
        padding: 0 8px;
        padding-top: 10px;
        padding-bottom: 80px;
        .open-secondary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          img {
            margin-right: 9px;
            margin-top: 2px;
            &.active {
              transform: rotate(180deg);
            }
            // transform: rotate(180deg);
          }
        }
        .line {
          background-color: $color--gray8_90;
          &:last-child {
            display: none;
            padding-bottom: 30px;
          }
        }
        a {
          display: block;
          cursor: pointer;
          font-family: Lato;
          font-size: 14px;
          color: $color--gray1_13;
          margin-left: 16px;
          &.main-link {
            padding: 9px 0;
            padding-bottom: 8px;
          }
        }
        .secondary-links-wrap {
          margin-top: -4px;
          display: flex;
          padding-bottom: 8px;
          .secondary-link {
            margin-top: 14px;
          }
          .left-column {
            margin-left: 9px;
            width: 50%;
          }
          .right-column {
            margin-left: 18px;
            width: 50%;
          }
        }
      }
    }
    .desktop-nav-panel {
      margin: 0 auto;
      @include media-desktop {
        width: $desktop-screen - 30px;
      }
      .nav-panel-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2px;
        a {
          cursor: pointer;
          text-decoration: none;
          color: $color--white;
        }
        .logo {
          width: 88px;
        }
        .nav-panel {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left, .right {
            display: flex;
          }
          .left {
            margin-right: 35px;
            a {
              margin-right: 30px;
              letter-spacing: -0.3px;
            }
          }
          a {
            display: flex;
            align-items: center;
            font-size: 21px;
            margin-right: 19px;
            &.admin-enter-icon {
              margin-right: 0;
              span {
                &:first-child {
                  width: 30px;
                  height: 30px;
                }
              }
            }
            &.letter-icon {
              span {
                &:first-child {
                  width: 31px;
                  height: 30px;
                }
              }
            }
            &.callback-icon {
              letter-spacing: 0.3px;
              span {
                &:first-child {
                  width: 38px;
                  height: 38px;
                  margin-top: -5px;
                  margin-right: 9px;
                }
                &:last-child {
                  font-size: 24px;
                  height: 45px;
                  display: flex;
                  align-items: center;
                }
              }
            }
            &.search-icon{
              span {
                margin-right: 7px;
                &:first-child {
                  height: 23px;
                  width: 20px;
                  margin-right: 5px;
                  margin-bottom: -3px;
                }
              }
            }
          }
        }
      }
    }
  }
}

// animation for menu
.slide-fade-enter-active{transition: all .2s ease;}
.slide-fade-leave-active{transition: all .2s ease;}
.slide-fade-enter, .slide-fade-leave-to{transform: translateX(-500px);opacity: 0;}
</style>
