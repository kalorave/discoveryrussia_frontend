<template>
  <header v-if="true" class="HeaderMenuMobile">
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
                    <nuxt-link v-if="j < mainLink.secondaryLinks.length / 2" :key="secondaryLink" :to="`/tour/${j}`" class="secondary-link">
                      {{ secondaryLink.name }}
                    </nuxt-link>
                  </template>
                </div>
                <div class="right-column">
                  <template v-for="(secondaryLink, j) in mainLink.secondaryLinks">
                    <nuxt-link v-if="j >= mainLink.secondaryLinks.length / 2" :key="secondaryLink" :to="`/tour/${j}`" class="secondary-link">
                      {{ secondaryLink.name }}
                    </nuxt-link>
                  </template>
                </div>
              </div>
            </template>
            <template v-else>
              <nuxt-link :key="mainLink" to="/" class="main-link">
                {{ mainLink.name }}
              </nuxt-link>
            </template>
            <span :key="mainLink" class="line" />
          </template>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      openMenu: false,
      showSecondary: null,
      links: [
        { name: 'Search Trip' },
        {
          name: 'Destinations',
          secondaryLinks: [
            { name: 'Moscow' },
            { name: 'Saint Petersburg' },
            { name: 'Trans Siberian tours' },
            { name: 'Winter trains' },
            { name: 'Altai' },
            { name: 'Arctic' },
            { name: 'Baltic States' },
            { name: 'Golden Ring' },
            { name: 'Central Asia' },
            { name: 'Russia cruises' },
            { name: 'F1, Sochi' },
            { name: 'Kamchatka' },
            { name: 'Lake Baikal' },
            { name: 'Northern Lights' },
            { name: 'Russian North' },
            { name: 'Scandinavia' },
            { name: 'Siberia' },
            { name: 'Stalingrad' },
            { name: 'Trans Mongolian' },
            { name: 'Ukraine' },
            { name: 'Ural' }
          ]
        },
        {
          name: 'Travel Themes',
          secondaryLinks: [
            { name: 'indigo' },
            { name: 'tomato' },
            { name: 'lightblule' },
            { name: 'red' }
          ]
        },
        {
          name: 'About Us',
          secondaryLinks: [
            { name: 'purple' },
            { name: 'pink' },
            { name: 'green' },
            { name: 'orange' }
          ]
        },
        { name: 'At a Glance' },
        { name: 'Itinerary' },
        { name: 'Inclusions' },
        { name: 'Dates & Rates' },
        { name: 'FAQ' },
        { name: 'Contacts' }
      ]
    }
  },
  methods: {
    popup () {
      document.body.classList.toggle('overflow-hidden')
      this.openMenu = !this.openMenu
    },
    openSecondary (i, length) {
      if (this.showSecondary === i) {
        this.showSecondary = null
        return
      }
      this.showSecondary = i
    }
  }
}

</script>

<style lang="scss" scoped>
.HeaderMenuMobile {
  position: absolute;
  left: 0;
  right: 0;
  padding-left: 24px;
  z-index: 9;
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
        text-decoration: none;
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
}

// animation for menu
.slide-fade-enter-active{transition: all .2s ease;}
.slide-fade-leave-active{transition: all .2s ease;}
.slide-fade-enter, .slide-fade-leave-to{transform: translateX(-500px);opacity: 0;}
</style>
