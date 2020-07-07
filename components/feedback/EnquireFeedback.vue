<template>
  <section class="inner">
    <form v-if="!showDone">
      <h4>Enquire</h4>
      <div class="fields-wrap">
        <input v-model="userName" class="input-field" type="text" placeholder="Name">
        <input v-model="userEmail" class="input-field err-data" type="email" placeholder="E-mail*">
        <input v-model="userPhone" class="input-field" type="phone" placeholder="Phone">
        <textarea v-model="userMessage" placeholder="Message" />
        <input type="submit" value="Send" @click.prevent="sendData">
      </div>
    </form>
    <div v-else class="done-screen-wrap">
      <done-screen @close-done="showDone = $event" />
    </div>
  </section>
</template>

<script>
import DoneScreen from '~/components/feedback/DoneScreen.vue'

export default {
  components: {
    DoneScreen
  },
  data () {
    return {
      showDone: false,
      userName: '',
      userEmail: '',
      userPhone: '',
      userMessage: ''
    }
  },
  methods: {
    sendData () {
      // const userData = `Name: ${this.userName}; E-mail: ${this.userEmail}; Phone: ${this.userPhone}; Message: ${this.userMessage};`
      // console.log(userData)
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
    padding-bottom: 11px;
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
  textarea {
    height: 201px;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 0px 0px 4px 0px;
  }
  input[type = submit] {
    display: block;
    margin: 0 auto;
    margin-top: 22px;
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
