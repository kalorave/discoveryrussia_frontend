<template>
  <div class="InclusionsDesktop">
    <div class="column">
      <template v-for="(item, loop) in inclusionsArr">
        <div v-if="loop<inclusionsArr.length/2" :key="item" class="column-item">
          <div :class="`icon-${loop+1}`" class="icon-wrap">
            <simple-svg :src="`/img/${item.icon}.svg`" width="100%" height="100%" />
          </div>
          <ul class="detailed-list">
            <li v-for="(listItem, loop2) in item.description" :key="listItem">
              <div v-if="loop2!==0" class="icon-wrap">
                <simple-svg width="100%" height="100%" src="/img/icon_check_mark.svg" />
              </div>
              <p>{{ listItem }}</p>
            </li>
          </ul>
        </div>
      </template>
    </div>
    <div class="column">
      <template v-for="(item, loop) in inclusionsArr">
        <div v-if="loop>=inclusionsArr.length/2" :key="item" class="column-item">
          <div :class="`icon-${loop+1}`" class="icon-wrap">
            <simple-svg :src="`/img/${item.icon}.svg`" width="100%" height="100%" />
          </div>
          <ul class="detailed-list">
            <li v-for="(listItem, loop2) in item.description" :key="listItem">
              <div v-if="loop2!==0" class="icon-wrap">
                <simple-svg width="100%" height="100%" src="/img/icon_check_mark.svg" />
              </div>
              <p>{{ listItem }}</p>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      inclusionsArr: [
        {
          id: 1,
          icon: 'icon_inclusions_car',
          description: [
            'Accommodation',
            'Centrally located hand-picked hotels',
            '3 nights Beijing // 1 night Ulaanbaatar // 2 nights Lake Baikal/Irkutsk // 2 nights Ekaterinburg // 2 nights Kazan // 2 nights Nizhny Novgorod // 2 nights Moscow // 4 nights St. Petersburg',
            '1 night at Terelj National Park in ger camp (yurt)',
            '5 nights on board'
          ]
        },
        {
          id: 2,
          icon: 'icon_inclusions_bus',
          description: [
            'Transportation',
            'rain 1st class compartment (2-berth) as per itinerary',
            'from Moscow to Kazan by train fare first class',
            'from Kazan to Yekaterinburg by train fare first class',
            'from Yekaterinburg to Lake Baikal by train fare first class',
            'from Lake Baikal to Vladivostok by train fare first class',
            'Superior trains on the route',
            'Meet & greet at every location',
            'Return airport/train station transfers',
            'Full metro/public transport pass in Moscow',
            'Transportation on tours as per program in a comfortable a/c car/minivan/bus'
          ]
        },
        {
          id: 3,
          icon: 'icon_why_us_shield',
          description: [
            'Your comfort counts',
            'Dedicated local English-speaking guide in all places as per program',
            'Russian local sim card with data',
            'Discovery Russia 24/7 English-speaking support line',
            'Best places to stay, to eat, to go out and have fun - safe and secure with the Australian tour operator',
            'The group tour is fully escorted by a bilingual tour director',
            'Group size 20 people maximum. All our group departures are guaranteed.'
          ]
        },
        {
          id: 4,
          icon: 'icon_inclusions_meals',
          description: [
            'Meals',
            'Full breakfast in the hotels (except Day 1)',
            '3 lunches: Buryat lunch at Lake Baikal // Russian lunch in Taltsy with tea and honey degustation // Tatar cooking master-class with lunch in Kazan',
            'Group tour: Welcome dinner & Farewell dinner'
          ]
        },
        {
          id: 5,
          icon: 'icon_why_us_star',
          description: [
            'Sightseeing',
            'Moscow full day (8 hours) guided tour: the Moscow Kremlin, the Kremlin Armory, the Red Square, Moscow metro tour, Novodevichy Convent, Arbat area',
            "Moscow full day (8 hours) guided tour: the State Tretyakov Gallery, Stalin's skyscrapers tour, the Izmailovo Kremlin, the VDNKh & Museum of Cosmonautics",
            'Kazan full day (8 hours) guided tour: the Kazan Kremlin, Kul Sharif Mosque, Syumbike tower, Chak-chak museum, Old Tatar village',
            'Yekaterinburg full day (8 hours) guided tour: Church of All Saints, Museum of minerals, the Ipatiev House, Europe-Asia border, Pyzhma military museum',
            'Irkutsk full day (8 hours) guided tour: Taltsy Open Air Siberian Museum with Matryoshka painting master class and interactive program Tea in Russia & Great Tea Way with tea degustation, Irkutsk historical downtown, St. Epiphany Cathedral, Kirov Square',
            'Lake Baikal (Listvyanka) full day (8 hours) guided tour: Shaman rock, Baikal Museum of Limnology, Chersky Stone observation point, local souvenir market',
            'Vladivostok full day (8 hours) guided tour: harbour, Submarine S-56, Golden Bridge, viewpoint Eagle’s Nest, Vokzalnaya Square, the monument of the Trans-Siberian Railway, Vladivostok fortress museum'
          ]
        },
        {
          id: 6,
          icon: 'icon_why_us_card',
          description: [
            'Entrance tickets & visas',
            'Entrance tickets to all listed attractions',
            'Russian visa letter of invitation (required by the Ministry of Tourism to grant you a Russian visa) is provided free of charge'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.InclusionsDesktop {
  display: flex;
  width: 1170px;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 39px;
  overflow: hidden;
  .column {
    width: 50%;
    &:last-child {
      margin-left: 35px;
    }
  }
}

.column-item {
  display: flex;
  margin-top: 32px;
  &:first-child {
    margin-top: 0;
  }
  .icon-wrap {
    display: flex;
    justify-content: center;
    width: 56px;
    margin-left: -7px;
    &.icon-1 {height: 40px;}
    &.icon-2 {height: 42px;}
    &.icon-3 {height: 43px;}
    &.icon-4 {height: 38px;}
    &.icon-5 {height: 39px;}
    &.icon-6 {height: 30px;}
  }
  .detailed-list {
    width: 100%;
    width: 470px;
    border-bottom: 1px solid $color--gray8_90;
    margin-top: -5px;
    box-sizing: border-box;
    padding-left: 16px;
    padding-right: 25px;
    padding-bottom: 10px;
    li {
      display: flex;
      justify-content: flex-start;
      font-size: 16px;
      line-height: 24px;
      color: $color--gray13;
      &:first-child {
        p {
          @include font--AcromNormalBold;
          font-size: 24px;
          line-height: 36px;
          color: $color--gray1_13;
          margin: 0;
        }
      }
      .icon-wrap {
        width: 18px;
        height: 12px;
        margin-top: 8px;
        box-sizing: border-box;
        margin-left: 0;
        margin-right: 8px;
      }
      p {
        width: 100%;
        margin-top: 2px;
        margin-bottom: 4px;
      }
    }
  }
}
</style>
