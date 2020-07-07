<template>
  <form class="SignUpForm">
    <p class="headline-text">
      Stay tuned and get fresh travel ideas on Discovery Russia tours and travels
    </p>
    <div class="main-wrap">
      <div class="input-wrap">
        <input class="input-field" type="text" placeholder="Enter name">
      </div>
      <div class="input-wrap">
        <input :class="{incorrect: incorrectData}" class="input-field" type="email" placeholder="Enter e-mail">
        <p v-show="incorrectData" class="incorrect-data-msg">
          Something goes wrong here
        </p>
      </div>
      <div class="btn-wrap">
        <input class="main-btn-blue" type="submit" value="Sign up">
      </div>
      <div class="form-footer">
        <div class="form-footer-wrap">
          <p class="about-users">
            Some text about user's
          </p>
          <a class="personal-data">&nbsp;personal data&nbsp;</a>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      incorrectData: true
    }
  }
}
</script>

<style lang="scss" scoped>
.SignUpForm {
  .headline-text {
    margin: 0 auto;
    margin-top: 5px;
    width: 296px;
    text-align: center;
    font-size: 12px;
    letter-spacing: 0.1px;
    line-height: 16px;
    color: $color--white;
    @include media-desktop {
      font-size: 18px;
      line-height: 20px;
      margin-top: 0;
      width: 100%;
    }
  }
  .main-wrap {
    width: 247px;
    margin: 0 auto;
    padding-bottom: 11px;
    display: flex;
    flex-direction: column;
    @include media-desktop {
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 39px;
    }
    .input-wrap {
      margin-top: 6px;
      @include media-desktop {
        margin: 0;
        width: 50%;
      }
      &:first-child {
        margin-top: 22px;
        @include media-desktop {
          margin: 0;
          display: flex;
          justify-content: flex-end;
          .input-field {
            margin-right: 10px;
          }
        }
      }
      .input-field {
        box-sizing: border-box;
        padding: 7px;
        width: 247px;
        height: 42px;
        @include media-desktop {
          height: 49px;
          margin-left: 10px;
          padding-top: 10px;
          letter-spacing: -0.4px;
        }
        border: 2px solid $color--blue;
        outline: none;
        background: transparent;
        color: $color--white;
        transition: all 0.2s linear;
        &::placeholder {
          color: $color--white;
          font-size: 12px;
          @include media-desktop {
            font-weight: bold;
            font-size: 16px;
            line-height: 20px;
          }
        }
        &:active, &:focus {
          background-color: rgba(0, 0, 0, .3);
        }
      }
      .incorrect {
        border-color: $color--red;
      }
      .incorrect-data-msg {
        margin-top: 6px;
        line-height: 5px;
        font-size: 10px;
        color: $color--red;
        @include media-desktop {
          margin-left: 10px;
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
    .btn-wrap {
      margin-top: 15px;
      .main-btn-blue {
        font-weight: normal;
        font-size: 18px;
        width: 247px;
        height: 40px;
      }
      @include media-desktop {
        order: 4;
        width: 50%;
        .main-btn-blue {
          margin-left: 10px;
          height: 48px;
        }
      }
    }
    .form-footer {
      @include media-desktop {
        order: 4;
        width: 50%;
        display: flex;
        justify-content: flex-end;
      }
      .form-footer-wrap {
        line-height: 16px;
        font-size: 12px;
        @include media-desktop {
          margin-right: 63px;
          font-size: 14px;
          line-height: 16px;
          margin-top: 12px;
          letter-spacing: 0.1px;
        }
      }
      text-align: center;
      margin-top: 9px;
      letter-spacing: 0.1px;
      .about-users {
        color: $color--white;
      }
      .personal-data {
        display: inline-block;
        color: $color--blue;
        text-decoration: none;
        border-bottom: 1px solid $color--blue;
        line-height: 14px;
        cursor: pointer;
      }
      @include media-desktop {
        order: 3;
      }
    }
  }
}
</style>
