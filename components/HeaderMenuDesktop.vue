<template>
  <header class="HeaderMenuDesktop">
    <div class="header-menu-wrap">
      <div class="main-links">
        <nuxt-link to="/">
          <simple-svg src="/img/icon_logo.svg" width="100%" height="100%" />
        </nuxt-link>
        <nuxt-link class="search-icon" to="/search">
          <span><simple-svg src="/img/icon_search.svg" /></span>Search
        </nuxt-link>
        <a><drop-down-menu :options="destinations">Destinations</drop-down-menu></a>
        <a><drop-down-menu :options="themes">Travel themes</drop-down-menu></a>
        <nuxt-link to="/about">
          About us
        </nuxt-link>
        <nuxt-link to="/contact">
          Contacts
        </nuxt-link>
      </div>
      <div class="service-links">
        <a class="open-callBack"><span><simple-svg src="/img/icon_call24.svg" width="100%" height="100%" /></span>+61 2 8310 7667</a>
        <a class="letter-icon"><simple-svg src="/img/icon_letter_white.svg" width="100%" height="100%" /></a>
        <!-- <a class="enter-icon"><simple-svg src="/img/icon_enter.svg" width="100%" height="100%" /></a> -->
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import DropDownMenu from '~/components/DropDownMenu.vue'

export default {
  components: {
    DropDownMenu
  },
  data () {
    return {
      // travelThemesLinks: [
      //   { id: '1', path: false, name: 'Heritage Tours' },
      //   { id: '2', path: false, name: 'Senior Travels' },
      //   { id: '3', path: false, name: 'Events' },
      //   { id: '4', path: false, name: 'Luxury Trains' },
      //   { id: '5', path: false, name: 'Train journeys' },
      //   { id: '6', path: false, name: 'The Snow Empire' },
      //   { id: '7', path: false, name: 'Kid Friendly' },
      //   { id: '8', path: false, name: 'WWII Tours' },
      //   { id: '9', path: false, name: 'Adventures' },
      //   { id: '10', path: false, name: 'Russian Cruises' },
      //   { id: '11', path: false, name: 'Winter Trains' },
      //   { id: '12', path: false, name: 'Wildlife & Nature' }
      // ]
      // ,
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
      // ]
    }
  },
  computed: {
    ...mapState('destinations', { destinations: 'list' }),
    ...mapState('themes', { themes: 'list' })
    // destination() {
    //   return this.$store.state.destinations.list
    // }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: $color--white;
  text-decoration: none;
  cursor: pointer;
}

.HeaderMenuDesktop {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  height: 65px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  .header-menu-wrap {
    margin: 0 auto;
    width: 1170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.main-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  a {
    margin-right: 34px;
    margin-top: 3px;
    &:first-child {
      width: 88px;
      cursor: pointer;
      margin-top: 8px;
      margin-left: 2px;
      margin-right: 71px;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  .search-icon {
    display: flex;
    align-items: center;
    span {
      height: 23px;
      width: 19px;
      margin-right: 5px;
      margin-top: 7px;
    }
  }
}
.service-links {
  display: flex;
  justify-content: space-between;
  .open-callBack {
    display: flex;
    align-items: center;
    font-size: 24px;
    margin-right: 22px;
    margin-bottom: -5px;
    span {
      width: 38px;
      height: 36px;
      margin-top: -5px;
      margin-right: 12px;
    }
  }
  .letter-icon {
    width: 31px;
    height: 22px;
    // margin-right: 20px;
    margin-top: 9px;
  }
  .enter-icon {
    width: 30px;
    height: 30px;
    margin-right: 2px;
    margin-top: 5px;
  }
}
</style>
