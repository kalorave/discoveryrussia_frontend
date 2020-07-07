<template>
  <div class="inner">
    <h4 class="main-headline">
      {{ content.mainHeadline }}
    </h4>
    <div :style="`background-image: url(/img/${content.headImg})`" class="main-img" />
    <h5 class="text-title">
      {{ content.secondaryHeadline }}
    </h5>
    <ul class="day-schedule">
      <li v-for="item in content.listItems" :key="item">
        {{ item }}
      </li>
    </ul>
    <div class="body-block-wrap">
      <div v-for="block in content.bodyBlocks" :key="block" class="body-block-item">
        <div v-if="block.img" :style="`background-image: url(/img/${block.img})`" class="block-img" />
        <h5 class="text-title">
          {{ block.headline }}
        </h5>
        <p v-for="paragraph in block.text" :key="paragraph" class="content-text">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: {
        dayNumber: 1,
        mainHeadline: 'DAY 1 — Start in Moscow',
        headImg: 'card_bgc.jpg',
        secondaryHeadline: 'Kremlin, city tour & Novodevichy',
        listItems: [
          'Day Schedule',
          '• Breakfast',
          '• Guided tour to Moscow Kremlin (all the highlights including the Armory)',
          "• Moscow city tour: the Red Square, Lenin’s Mausoleum, Saint Basil's Cathedral, GUM, the Bolshoi Theatre, KGB Headquarters & other attractions of the downtown",
          '• Guided tour to Novodevichy Convent',
          '• Sparrow Hills (Lenin Hills)',
          '• Take a ride by famous Moscow metro',
          '• Arbat street'
        ],
        bodyBlocks: [
          {
            img: 'card_bgc.jpg',
            headline: 'Moscow guided tour',
            text: [
              'Enjoy a guided visit to the Moscow Kremlin, and see all the treasures of the famous museums. “Kremlin” is not actually a specific place name, but means “fortress”. The most well-known kremlin is of course the one in Moscow, at Red Square.',
              'And Red Square is not actually Red because of the red bricks, but because "red" in the old Russian language meant "beautiful". And "Kremlin" meant a castle. So…there are many kremlins in Russia and in Moscow alone we can show you a few!',
              'Guided tour to the Novodevichy Convent, UNESCO World Heritage Site. It was founded in 1524 to celebrate the victory over Lithuania. The oldest building is the white Cathedral, with 16th-century frescoes. Novodevichy is the functioning monastery, please respect and be dressed accordingly.'
            ]
          },
          {
            img: false,
            headline: 'The Moscow Kremlin',
            text: [
              'The name "Kremlin" means "fortress inside a city", this construction had to protect the city from enemies. The Moscow Kremlin acquired the status of a sacral symbol representing the power of the great country. Holiday to Moscow is not complete without a visit to the Kremlin. Modern walls and towers of the Kremlin were constructed of red brick at the end of the 15th century. Now behind its walls, there are government buildings and a huge museum complex where thousands of artefacts telling about the history and the culture of Russia are stored. In 1990 both Red Square and the Moscow Kremlin were included in the UNESCO World Heritage List.'
            ]
          },
          {
            img: 'card_bgc.jpg',
            headline: "St. Basil's Cathedral",
            text: [
              "Pokrovsky Cathedral, or St. Basil's Cathedral, is not just a church. It is a memorial temple constructed on Red Square in honour of the capture of Kazan and Astrakhan. The main fight in which the Russian troops won a victory happened in the day of the Intercession of the Theotokos. So the temple was consecrated in honour of this Christian holiday. The cathedral consists of separate churches. Each of them is also consecrated in honour of holidays in which there were decisive fights for Kazan: Trinities, the Palm Sunday and others."
            ]
          },
          {
            img: 'card_bgc.jpg',
            headline: 'Red Square',
            text: [
              'Red Square is a historical symbol of Moscow. The name of the square originated from the Russian word "Krasnaya" meaning "red" because it is related to the word "krasivaya" meaning "beautiful". Red square separates the Kremlin from a historic merchant quarter known as Kitai-gorod. Thousands of tourists come here not only from all corners of Russia but also from around the world.',
              'Get to know the city by taking a metro ride to the place of your first visit. The Metro is one of the fastest ways to get anywhere in this city, and to avoid traffic jams. Metro is the fastest ways to get anywhere in this city, and to avoid traffic jams. If you want to see the Bolshoi, it’s a good idea to book your tickets in advance!'
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
//main style
.inner {
  box-sizing: border-box;
  width: 770px;
  margin: 0 auto;
  background-color: $color--white;
  border: 1px solid $color--gray8_90;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 23px 26px 60px 18px;
}
.main-img, .block-img {
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  width: 100%;
  height: 250px;
}
.block-img {
  margin-top: 39px;
}
.text-title {
  font-family: Acrom;
  font-size: 24px;
  line-height: 36px;
  @include font--AcromNormalBold;
  margin-top: 24px;
  margin-bottom: 8px;
}
//end main style
.main-headline {
  @include font--AcromNormalBold;
  font-size: 30px;
  line-height: 36px;
  color: $color--gray1_13;
  margin-bottom: 23px;
}
.day-schedule {
  margin-left: 33px;
  li {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: $color--gray13;
    margin-top: 4px;
    &:first-child {
      margin-top: auto;
      font-weight: bold;
      font-size: 18px;
      line-height: 20px;
      color: $color--gray1_13;
      padding-bottom: 4px;
    }
  }
}
.body-block-wrap {
  .body-block-item {
    .block-img {

    }
    .content-text {
      font-size: 16px;
      line-height: 24px;
      color: $color--gray13;
      margin-top: 37px;
      &:first-of-type {
        margin-top: auto;
      }
    }
  }
}
</style>
