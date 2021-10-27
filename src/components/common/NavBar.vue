<template>
  <!-- pc 移动端都显示的盒子 -->
  <div class="nav-Container box-sha1 animate__animated animate__fadeInDown">
    <div class="nav-bar AN con-box">
      <div class="nav-left ANM" @click="toHome">
        <span class="iconfont icon-search ANM mobile-show"></span>
        <img src="~@/assets/images/logo.png" alt="logo" />
      </div>
      <div class="nav-content pc-show">
        <router-link to="/" class="nav-item p">
          <span class="iconfont icon-earth_line"></span>
          <p class="ANM">进入首页</p>
        </router-link>
        <router-link to="/" class="nav-item p">
          <span class="iconfont icon-xinxi"></span>
          <p class="ANM">最新消息</p>
        </router-link>
      </div>
      <div class="nav-right">
        <span class="iconfont icon-search ANM pc-show"></span>
        <button class="bor-rad box-sha1 AN">希望为环保做出贡献吗</button>
      </div>
    </div>
  </div>
  <!-- 移动端显示的盒子 -->
  <div class="mobile-Container box-sha2 animate__animated animate__fadeInDown">
    <div class="nav-content">
      <router-link to="/" class="nav-item p">
        <span class="iconfont icon-earth_line"></span>
        <p class="ANM">进入首页</p>
      </router-link>
      <router-link to="/" class="nav-item p">
        <span class="iconfont icon-xinxi"></span>
        <p class="ANM">最新消息</p>
      </router-link>
    </div>
  </div>
  <!-- 占位盒子 -->
  <div class="nav-placeholder"></div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    toHome () {
      this.$router.go('/')
    }
  }
}
</script>


<style lang="less" scoped>
@media screen and (max-width: 1024px) {
  .mobile-Container,
  .mobile-show {
    display: block !important;
  }
  .pc-show {
    display: none !important;
  }
  .nav-left {
    flex: 3 !important;
    justify-content: flex-start !important;
    img {
      max-width: 180px !important;
    }
  }
  .nav-right {
    flex: 1 !important;
    button {
      overflow: hidden;
      max-width: 100px;
      max-height: 40px;
      padding: 4px 15px !important;
      font-size: 13px;
    }
  }
  .nav-placeholder {
    height: 100px !important;
  }
}
@media screen and (max-width: 512px) {
  .nav-right {
    button {
      max-width: 100px;
      padding: 4px 15px !important;
      font-size: 12px;
    }
  }
}
@media screen and (max-width: 376px) {
  .nav-right {
    display: none !important;
  }
  .nav-left {
    justify-content: flex-start !important;
    img {
      margin-left: 10%;
    }
  }
}

.nav-Container {
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--green);
  height: 50px;
  width: 100vw;
  z-index: 9;
  animation-duration: 0.3s;
  .nav-bar {
    height: 100%;
    display: flex;
    align-items: center;
    color: var(--white);
    transition: all 0.3s;
    .nav-left {
      flex: 1.5;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        max-width: 200px;
        overflow: hidden;
      }
      .mobileBox {
        display: none;
      }
    }
    .nav-content {
      flex: 2;
      display: flex;
      align-items: center;
      .nav-item {
        display: flex;
        align-items: center;
        color: var(--white);
        text-decoration: none;
        flex: 1;
        .iconfont {
          font-size: 26px;
          margin-right: 15px;
        }
        .icon-xinxi {
          font-size: 22px;
        }
      }
    }
    .icon-search {
      font-size: 24px;
      margin-right: 20px;
    }
    .nav-right {
      flex: 2;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 10px;
      button {
        background-color: var(--button);
        border: none;
        color: var(--white);
        padding: 10px 30px;
        cursor: pointer;
      }
      button:hover {
        background-color: #f07800;
      }
    }
  }
}
.mobile-show {
  display: none;
}
.mobile-Container {
  display: none;
  position: fixed;
  top: 45px;
  left: 0;
  background-color: var(--white);
  height: 50px;
  width: 100vw;
  animation-duration: 0.3s;
  z-index: 8;
  .nav-content {
    display: flex;
    align-items: center;
    justify-content: center;
    .nav-item {
      width: 200px;
      display: flex;
      align-items: center;
      // justify-content: space-between;
      justify-content: center;
      text-decoration: none;
      .iconfont {
        font-size: 24px;
        margin: 0 10px;
      }
    }
  }
}
.nav-placeholder {
  width: 100%;
  height: 50px;
}
</style>