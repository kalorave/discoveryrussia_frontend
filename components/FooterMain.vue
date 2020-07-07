<template>
  <footer class="FooterMain">
    <nav class="footer-nav-panel">
      <div class="nav-items-wrap">
        <div v-for="item in footerLinks" :key="item" class="nav-item">
          <a href="#">{{ item }}</a>
        </div>
      </div>
      <div class="login-btn-wrap">
        <a href="#">Log in</a>
      </div>
      <nav v-if="!handleResize()" class="footer-social">
        <a href="#"><simple-svg src="/img/icon_social_google.svg" /></a>
        <a href="#"><simple-svg src="/img/icon_social_linkedin.svg" /></a>
        <a href="#"><simple-svg src="/img/icon_social_facebook.svg" /></a>
      </nav>
    </nav>
    <span class="line" />
    <div class="footer-copy">
      <p>&copy; 2016-2019 discovery russia. all rights reserved.</p>
      <p>Australia, Sydney abn: 39616347150</p>
    </div>
    <nav v-if="handleResize()" class="footer-social">
      <a href="#"><simple-svg src="/img/icon_social_google.svg" /></a>
      <a href="#"><simple-svg src="/img/icon_social_linkedin.svg" /></a>
      <a href="#"><simple-svg src="/img/icon_social_facebook.svg" /></a>
    </nav>
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
      ],
      width: 0,
      height: 0
    }
  },
  beforeMount () {
    if (this.process.client) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  beforeDestroy () {
    if (this.process.client) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize () {
      this.width = window.innerWidth
      this.height = window.innerHeight

      if (this.width >= 1200) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

  <style lang="scss" scoped>

  .FooterMain {
    @include breaking-container;
    box-sizing: border-box;
    padding: 29px 24px 87px 24px;
    @include media-desktop {
      padding: 60px 31px 42px 31px;
    }
    .footer-nav-panel {
      display: flex;
      justify-content: space-between;
      @include media-desktop {
        justify-content: flex-start;
      }
      a {
        font-size: 12px;
        line-height: 24px;
        color: $color--white;
        text-decoration: none;
        cursor: pointer;
        @include media-desktop {
          font-size: 18px;
          line-height: 21px;
        }
      }
      .nav-items-wrap {
        display: flex;
        width: 80%;
        flex-wrap: wrap;
        @include media-desktop {
          width: auto;
        }
        .nav-item {
          margin-right: 16px;
          @include media-desktop {
            margin-right: 32px;
          }
        }
      }
      .login-btn-wrap {
        a {
          padding-bottom: 0;
          border-bottom: 1px solid $color--white;
          @include media-desktop {
            border-bottom: none;
          }
        }
      }
    }
    .line {
      margin-top: 11px;
      @include media-desktop {
        margin-top: 55px;
      }
    }
    .footer-copy {
      margin-top: 14px;
      color: $color--gray5_59;
      font-size: 10px;
      line-height: 16px;
      @include media-desktop {
        display: flex;
        font-size: 18px;
        line-height: 21px;
        color: $color--white;
        margin-top: 36px;
      }
      p {
        @include media-desktop {
          // opacity: 0.4;
        }
        &:last-child {
          margin-top: 8px;
          @include media-desktop {
            margin-top: 0;
            margin-left: 105px;
          }
        }
      }
    }
    .footer-social {
      margin-top: 17px;
      @include media-desktop {
        margin-top: 0px;
        margin-left: 50px;
      }
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
  }
  </style>
