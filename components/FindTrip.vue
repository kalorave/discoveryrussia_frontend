<template>
  <section class="FindTrip">
    <div class="select-wrap">
      <div class="select item" />
      <div class="select item" />
      <div class="select item" />
      <div class="btn-wrap item">
        <input class="main-btn-red" type="button" value="Find trip">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      showList: false,
      showList1: false,
      showList2: false,
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
.FindTrip {
  box-sizing: border-box;
  width: 304px;
  padding: 16px;
  margin: 0 auto;
  margin-top: -57px;
  border-radius: 4px;
  background-color: $color--white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  @include media-desktop {
    width: 1030px;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: -40px;
  }
  .select-wrap {
    display: flex;
    flex-direction: column;
    @include media-desktop {
      flex-direction: row;
      justify-content: space-between;
    }
    .select {
      background-color: #555;
      width: 100%;
      height: 100%;
      height: 40px;
      @include media-desktop {
        width: 246px;
        height: 48px;
      }
    }
    .item {
      margin-top: 8px;
      &:first-child {
        margin-top: 0px;
      }
      @include media-desktop {
        margin-top: auto;
      }
    }
    .btn-wrap {
      .main-btn-red {
        height: 48px;
        width: 100%;
        @include media-desktop {
          width: 170px;
          height: 48px;
        }
      }
    }
  }
}

// #FindTrip {
//   background: $color--white;
//   box-shadow: 0px 2px 6px 20px rgba(0, 0, 0, 0.15);
//   margin: 32px 12px 0;
//   border-radius: 4px;
//   padding: 16px;
//   @include media-desktop {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     box-sizing: border-box;
//     margin: 0 auto;
//     padding: 0;
//     padding-bottom: 10px;
//     width: 1030px;
//     height: 80px;
//     margin-top: 305px;
//     display: flex;
//   }
//   .select {
//     position: relative;
//     background: $color--gray9_96;
//     cursor: pointer;
//     transition: all 0.5s ease;
//     width: 100%;
//     height: 100%;
//     background-color: #222;
//     outline: 1px solid red;
//     @include media-desktop {
//       width: 25%;
//     }
//     .name {
//       font-size: 12px;
//       font-weight: 600;
//       line-height: 19px;
//       color: $color--gray3_40;
//     }
//     .default {
//       font-size: 14px;
//       font-weight: bold;
//       line-height: 18px;
//     }
//     .options {
//       background: $color--white;
//       position: absolute;
//       width: 100%;
//       left: 0;
//       top: 44px;
//       display: flex;
//       flex-wrap: wrap;
//       z-index: 300;
//       border: 2px solid $color--blue;
//       box-sizing: border-box;
//       padding: 10px 14px;
//       box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
//       input {
//         display: none;
//       }
//       .option {
//         display: inline-block;
//         font-weight: 600;
//         font-size: 14px;
//         line-height: 30px;
//         width: calc(50% - 8px);
//         &:nth-child(2n) {
//           margin-left: 16px;
//         }
//       }
//     }
//     .overlay {
//       position: fixed;
//       left: 0;
//       right: 0;
//       top: 0;
//       bottom: 0;
//       z-index: 290;
//     }
//     .arrow {
//       position: absolute;
//       right: 8px;
//       top: 0;
//       bottom: 0;
//       transition: all 0.5s ease;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     }
//     &.active, &:hover{
//       background: $color--blue;
//       .name, .default {
//         color: $color--white;
//       }
//       .arrow {
//         transform: scaleY(-1);
//         svg path{
//           stroke: #fff;
//         }
//       }
//     }
//   }
//   .third-elem-wrap {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     .select {
//
//     }
//     .select.third {
//       width: 32.353%;
//       box-sizing: border-box;
//       .option {
//         width: 100%;
//         &:nth-child(2n) {
//           margin-left: 0;
//         }
//       }
//     }
//   }
//   .main-btn-red {
//     margin-top: 8px;
//     margin-bottom: 7px;
//     width: 100%;
//     @include media-desktop {
//       width: 170px;
//       height: 48px
//     }
//   }
// }
// .slide-fade-enter-active {
//   transition: all .2s ease;
// }
// .slide-fade-leave-active {
//   transition: all .2s ease;
// }
// .slide-fade-enter, .slide-fade-leave-to { //.slide-fade-leave-active до версии 2.1.8
//   opacity: 0;
// }
</style>
