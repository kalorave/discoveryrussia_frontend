<template>
  <section class="inner">
    <h4>Done!</h4>
    <div class="icon-wrap">
      <simple-svg src="/img/icon_done.svg" />
    </div>
    <div class="successful-message">
      <p>We took you request</p>
      and will contact you {{ message }}!
    </div>
    <button type="button" @click="$emit('close-done', false)">
      Ok, thanks!
    </button>
  </section>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      require: false,
      default: 'in 24 hours'
    }
  }
}
</script>

<style lang="scss" scoped>
.inner {
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
  .icon-wrap {
    text-align: center;
    margin-top: 69px;
    padding-bottom: 19px;
  }
  .successful-message {
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: $color--black;
  }
  button {
    display: block;
    margin: 0 auto;
    margin-top: 69px;
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
