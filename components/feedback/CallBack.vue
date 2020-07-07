<template>
  <section class="inner">
    <form v-if="!showDone">
      <h4>Request call back</h4>
      <div class="description">
        <p>Still can not find the best trip?</p>
        <p>Let us help you to choose.</p>
        <p>Our travel experts are available 24/7</p>
        and it is free!
      </div>
      <div class="fields-wrap">
        <input v-model="userName" class="input-field" type="text" placeholder="Name">
        <input v-model="userPhone" class="input-field" type="phone" placeholder="Phone">
        <input v-model="userEmail" class="input-field err-data" type="email" placeholder="E-mail*">
        <input v-model="userCountry" class="input-field" type="text" placeholder="Country*">
        <div class="select-wrap">
          <dr-select :where-falls="'top'" :options="selectOptions" @get-select="callBackTime = $event" />
        </div>
        <input type="submit" value="Make requet" @click.prevent="sendData">
      </div>
    </form>
    <div v-else class="done-screen-wrap">
      <done-screen :message="callBackTime" @close-done="showDone = $event" />
    </div>
  </section>
</template>

<script>
import DoneScreen from '~/components/feedback/DoneScreen.vue'
import drSelect from '~/components/ui_components/drSelect.vue'

export default {
  components: {
    DoneScreen,
    drSelect
  },
  data () {
    return {
      showDone: false,
      userName: '',
      userEmail: '',
      userPhone: '',
      userCountry: '',
      callBackTime: '',
      selectOptions: {
        headLine: 'Preferred time for a call',
        items: ['ASAP', '6:00–9:00', '9:00–12:00', '12:00–15:00', '15:00–18:00', '18:00–21:00', '21:00–00:00']
      }
    }
  },
  methods: {
    sendData () {
      // const userData = `Name: ${this.userName}; E-mail: ${this.userEmail}; Phone: ${this.userPhone}; Country: ${this.userCountry}; Time: ${this.callBackTime}`
      // console.log(userData)
      this.userName = this.userEmail = this.userPhone = this.userCountry = ''
      this.showDone = !this.showDone
    }
  }
}
</script>

<style lang="scss" scoped>
.inner {
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 999;
}
form {
  width: 370px;
  height: 509px;
  background: $color--white;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  h4 {
    @include font--AcromNormalBold;
    font-size: 30px;
    line-height: 36px;
    width: 100%;
    text-align: center;
    color: $color--gray1_13;
    padding-top: 17px;
    padding-bottom: 19px;
  }
  .description {
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: $color--black;
    margin: 0 auto;
    width: 260px;
    padding-bottom: 17px;
  }
}
.fields-wrap {
  width: 340px;
  margin: 0 auto;
  input, textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid $color--gray17;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    padding-left: 8px;
    padding-right: 8px;
    &.err-data {
      border-color: $color--red;
    }
    &::placeholder {
      color: #B3B3B3;
    }
  }
  .input-field {
    height: 44px;
    margin-bottom: 8px;
  }
  .select-wrap {
    height: 42px;
  }
  input[type = submit] {
    display: block;
    margin: 0 auto;
    margin-top: 26px;
    width: 170px;
    height: 40px;
    font-size: 18px;
    font-weight: bold;
    color: $color--white;
    background-color: $color--blue;
    border: none;
    outline: none;
    cursor: pointer;
  }
}
</style>
