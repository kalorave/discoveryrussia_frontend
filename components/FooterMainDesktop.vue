<template>
  <footer class="footer-background">
    <div class="footer-container">
      <nav class="main-links-wrap">
        <a v-for="item in footerLinks" :key="item" class="main-link">{{ item }}</a>
        <div class="footer-social">
          <a><simple-svg src="/img/icon_social_desk_instagram.svg" /></a>
          <a><simple-svg src="/img/icon_social_desk_facebook.svg" /></a>
        </div>
      </nav>
      <div class="line" />
      <div class="footer-copy">
        <span>&copy; 2016-2019 discovery russia. all rights reserved.</span>
        <span>Australia, Sydney abn: 39616347150</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      footerLinks: [
        'Testimonials',
        'Privacy',
        'Contacts',
        'Terms & conditions',
        'Site map'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: $color--white;
  cursor: pointer;
}

.footer-background {
  background-color: $color--gray2_32;
  .footer-container {
    box-sizing: border-box;
    width: 1170px;
    margin: 0 auto;
    padding-right: 30px;
    padding-left: 28px;
  }
}

.main-links-wrap {
  display: flex;
  justify-content: space-between;
  justify-content: flex-start;
  padding-top: 62px;
  padding-bottom: 57px;
  .main-link {
    margin-left: 34px;
    font-size: 18px;
    color: $color--white;
    &:first-child {
      margin-left: 0;
    }
  }
  .footer-social {
    margin-left: 74px;
    margin-top: -2px;
    display: inline-block;
    a:first-child {
      margin-right: 9px;
    }
  }
}

.footer-copy {
  color: $color--white;
  font-size: 18px;
  line-height: 22px;
  color: $color--white;
  opacity: 0.4;
  margin-left: 4px;
  margin-top: 36px;
  span:last-child {
    margin-left: 100px;
  }
  padding-bottom: 41px;
}
</style>
