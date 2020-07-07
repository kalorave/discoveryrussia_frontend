<template>
  <footer class="footer-background">
    <nav class="footer-container">
      <div class="main-links">
        <div class="main-links-wrap">
          <a v-for="item in footerLinks" :key="item">{{ item }}</a>
        </div>
        <a class="login-btn-wrap">Log in</a>
      </div>
      <div class="line" />
      <div class="footer-copy">
        <p>&copy; 2016-2019 discovery russia. all rights reserved.</p>
        <p>Australia, Sydney abn: 39616347150</p>
      </div>
      <div class="social-links">
        <a><simple-svg src="/img/icon_social_google.svg" /></a>
        <a><simple-svg src="/img/icon_social_linkedin.svg" /></a>
        <a><simple-svg src="/img/icon_social_facebook.svg" /></a>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      footerLinks:
      [
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
  color: $color--white;
  text-decoration: none;
  cursor: pointer;
}

.footer-background {
  background-color: $color--gray2_32;
  .footer-container {
    box-sizing: border-box;
    width: 270px;
    margin: 0 auto;
    padding-top: 29px;
  }
}

.main-links {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 12px;
  padding-bottom: 11px;
  .main-links-wrap {
    display: flex;
    flex-wrap: wrap;
    width: 220px;
    a {
      margin-right: 16px;
      line-height: 24px;
    }
  }
  .login-btn-wrap {
    margin-top: 6px;
    margin-right: -1px;
    border-bottom: 1px solid $color--white;
    padding-bottom: 1px;
  }
}
.footer-copy {
  color: $color--gray5_59;
  font-size: 10px;
  line-height: 24px;
  margin-top: 10px;
}
.social-links {
  margin-top: 13px;
  padding-bottom: 87px;
  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 24px;
    height: 24px;
    margin-left: 4px;
    &:first-child {
      margin-left: 0;
    }
  }
}

</style>
