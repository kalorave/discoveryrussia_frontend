<template>
  <div class="itinerary">
    <h2>Itinerary</h2>
    <div class="inner">
      <div class="days-slider">
        <slick ref="slick" :options="slickOptions" class="slick-nav">
          <div v-for="(day, i) in days" :key="day">
            <div class="day">
              <span>DAY</span>
              <span class="num">{{ i+1 }}</span>
            </div>
          </div>
        </slick>
      </div>
      <div class="days-slider">
        <slick ref="slick" :options="slickOptions2" class="slick-for">
          <div v-for="day in days" :key="day">
            <div class="slide" v-html="day" />
          </div>
        </slick>
      </div>
      <a href="#prev" />
      <a href="#prev" />
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick'
import '~/node_modules/slick-carousel/slick/slick.css'
export default {
  components: {
    Slick
  },
  data () {
    return {
      menu: false,
      slickOptions: {
        arrows: false,
        slidesToShow: 5,
        centerMode: true,
        focusOnSelect: true,
        infinite: false,
        variableWidth: true,
        asNavFor: '.slick-for'
      },
      slickOptions2: {
        arrows: false,
        infinite: false,
        asNavFor: '.slick-nav'
      },
      days: [
        "<div style='padding:55.15% 0 0;background:url(/img/Day-12-1.jpg) center/cover'></div><h3 style='font-family:Acrom;font-weight:bold;font-size:18px;line-height:20px;color:#222222;margin-top:16px'>Arrival at Ekaterinburg</h3><b style='font-family: Lato;font-style: normal;font-weight: bold;font-size: 14px;line-height: 20px;color: #222222;'>Day schedule</b><br>• Meet and greet at the train station<br>• Transfer to the hotel and check-in<br><div style='padding:55.15% 0 0;background:url(/img/Day-12-2.jpg) center/cover'></div><p>As a modern city seeped in historical significance, Ekaterinburg in Russia has a feast of sights to discover. The city is a large industrial, scientific and cultural center. It attracts travellers by rich historical heritage and truly wide selection of cultural programs. There are 30 museums in Ekaterinburg, several theatres and concert halls. The streets of the city are home to over 600 monuments and the history of each one is unforgettable and miraculous.</p>",
        "<img src='/img/Day-12-1.jpg' /><br><h3>Arrival at Ekaterinburg</h3><b>Day schedule</b><br>• Meet and greet at the train station<br>• Transfer to the hotel and check-in<br><img src='/img/Day-12-2.jpg' /><br><p>As a modern city seeped in historical significance, Ekaterinburg in Russia has a feast of sights to discover. The city is a large industrial, scientific and cultural center. It attracts travellers by rich historical heritage and truly wide selection of cultural programs. There are 30 museums in Ekaterinburg, several theatres and concert halls. The streets of the city are home to over 600 monuments and the history of each one is unforgettable and miraculous.</p>",
        "<img src='/img/Day-12-1.jpg' /><br><h3>Arrival at Ekaterinburg</h3><b>Day schedule</b><br>• Meet and greet at the train station<br>• Transfer to the hotel and check-in<br><img src='/img/Day-12-2.jpg' /><br><p>As a modern city seeped in historical significance, Ekaterinburg in Russia has a feast of sights to discover. The city is a large industrial, scientific and cultural center. It attracts travellers by rich historical heritage and truly wide selection of cultural programs. There are 30 museums in Ekaterinburg, several theatres and concert halls. The streets of the city are home to over 600 monuments and the history of each one is unforgettable and miraculous.</p>",
        "<img src='/img/Day-12-1.jpg' /><br><h3>Arrival at Ekaterinburg</h3><b>Day schedule</b><br>• Meet and greet at the train station<br>• Transfer to the hotel and check-in<br><img src='/img/Day-12-2.jpg' /><br><p>As a modern city seeped in historical significance, Ekaterinburg in Russia has a feast of sights to discover. The city is a large industrial, scientific and cultural center. It attracts travellers by rich historical heritage and truly wide selection of cultural programs. There are 30 museums in Ekaterinburg, several theatres and concert halls. The streets of the city are home to over 600 monuments and the history of each one is unforgettable and miraculous.</p>",
        "<img src='/img/Day-12-1.jpg' /><br><h3>Arrival at Ekaterinburg</h3><b>Day schedule</b><br>• Meet and greet at the train station<br>• Transfer to the hotel and check-in<br><img src='/img/Day-12-2.jpg' /><br><p>As a modern city seeped in historical significance, Ekaterinburg in Russia has a feast of sights to discover. The city is a large industrial, scientific and cultural center. It attracts travellers by rich historical heritage and truly wide selection of cultural programs. There are 30 museums in Ekaterinburg, several theatres and concert halls. The streets of the city are home to over 600 monuments and the history of each one is unforgettable and miraculous.</p>",
        "<img src='/img/Day-12-1.jpg' /><br><h3>Arrival at Ekaterinburg</h3><b>Day schedule</b><br>• Meet and greet at the train station<br>• Transfer to the hotel and check-in<br><img src='/img/Day-12-2.jpg' /><br><p>As a modern city seeped in historical significance, Ekaterinburg in Russia has a feast of sights to discover. The city is a large industrial, scientific and cultural center. It attracts travellers by rich historical heritage and truly wide selection of cultural programs. There are 30 museums in Ekaterinburg, several theatres and concert halls. The streets of the city are home to over 600 monuments and the history of each one is unforgettable and miraculous.</p>"
      ]
    }
  },
  methods: {
    toggle (data) {
      this[data] = !this[data]
    }
  }
}
</script>
<style>
.slide > img{
  width: 100%;
  height: auto;
}
</style>
<style lang="scss" scoped>
h2 {
  @include font--AcromNormalBold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: -1px;
  color: $color--gray1_13;
  margin: 61px 0 0 0;
}
.inner{
  margin: 16px 12px 0;
  padding: 16px 12px;
  border: 1px solid $color--gray8_90;
  background: $color--white;
}
.days-slider{
  position: relative;
  margin: 0 -12px;
  &::after{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: linear-gradient(90deg,
    #FFFFFF 1.56%,
    rgba(255, 255, 255, 0) 12.52%,
    rgba(255, 255, 255, 0) 87.38%,
    #FFFFFF 97.4%);
  }
  &+&{
    margin-top: 16px;
    &::after{
      content: none;
    }
  }
}
.day{
  width: 46px;
  height: 46px;
  font-size: 12px;
  font-weight: 600;
  color: $color--blue;
  border-style: solid;
  border-color: $color--blue;
  border-width: 1px;
  margin: 0 -1px 0 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  .slick-current &{
    color: $color--white;
    background: $color--blue;
  }
  .num{
    @include font--AcromNormalExtraBold;
    font-size: 180%;
  }
}
.slide{
  padding: 0 11px;
}
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  /* .slide-fade-leave-active до версии 2.1.8 */
  transform: translateX(100px);
  opacity: 0;
}

</style>
