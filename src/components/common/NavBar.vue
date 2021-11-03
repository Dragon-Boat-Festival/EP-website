<template>
  <!-- pc 移动端都显示的盒子 -->
  <div class="nav-Container box-sha1 animate__animated animate__fadeInDown">
    <div class="nav-bar AN con-box">
      <div class="nav-left ANM">
        <span class="iconfont icon-search ANM mobile-show" @click="showSearch"></span>
        <img
          src="http://49.233.14.172:9999/imgs/2021/11/75315bcdd0d6a2ea.png"
          @click="toHome"
          alt="logo"
        />
      </div>
      <div class="nav-content pc-show">
        <router-link :to="{ path: '/' }" class="nav-item p">
          <span class="iconfont icon-earth_line"></span>
          <p class="ANM">进入首页</p>
        </router-link>
        <router-link :to="{ path: '/newsMessage' }" class="nav-item p">
          <span class="iconfont icon-xinxi"></span>
          <p class="ANM">最新消息</p>
        </router-link>
      </div>
      <div class="nav-right">
        <span class="iconfont icon-search ANM pc-show" @click="showSearch"></span>
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
  <!-- 弹出搜索框 -->
  <el-drawer direction="ttb" size="35%" v-model="isDrawer" title="搜索">
    <input type="text" placeholder="输入关键字搜索" v-model="inputData" class="AN" />
    <span class="iconfont icon-butongguodechacha" @click="emptyData" v-if="inputData !== ''"></span>
    <p class="ANM">搜索</p>
  </el-drawer>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      isDrawer: false,
      // 输入框输入的值
      inputData: ''
    }
  },
  methods: {
    toHome () {
      console.log(1);
      this.$router.push('/')
    },
    showSearch () {
      this.isDrawer = !this.isDrawer
    },
    // 清空输入框
    emptyData () {
      this.inputData = ''
    }
  }
}
</script>

<style lang="less">
// 搜索样式
.el-overlay {
  top: 49px !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  z-index: 6 !important;
}
.el-drawer__close {
  font-size: 25px !important;
  color: var(--black) !important;
  transition: all 0.3s !important;
}
.el-drawer__close-btn:hover i {
  color: var(--green) !important;
}
.el-drawer__header {
  margin: 0 auto !important;
  width: 97%;
  max-width: 1200px;
  padding: 35px 0 !important;
}
.el-drawer__header > :first-child {
  letter-spacing: 2px !important;
  font-weight: 700 !important;
  font-size: 38px !important;
  color: var(--black) !important;
}
.el-drawer {
  background-color: #e6f5f5 !important;
}
.el-drawer__body {
  margin-left: 40px !important;
  display: flex !important;
  input {
    width: 90%;
    font-size: 18px;
    height: 50px;
    line-height: 50px;
    border-radius: 24px 0 0 24px;
    padding-left: 16px;
    border: 1px solid rgb(87, 87, 87);
    outline: none;
  }
  span {
    color: var(--black);
    position: absolute;
    top: 172px;
    right: 160px;
  }
  p {
    text-align: center;
    width: 80px;
    height: 50px;
    line-height: 50px;
    margin: 0;
    padding: 0 20px;
    border-radius: 0 24px 24px 0;
    background-color: var(--button);
    font-size: 18px;
    font-weight: 700;
    border: 1px solid rgb(87, 87, 87);
    border-left: none;
    color: var(--white);
  }
}
@media screen and (max-width: 1024px) {
  .el-overlay {
    top: 95px !important;
  }
  .el-drawer__header > :first-child {
    margin: 10px 0 0 10px !important;
  }
  .el-drawer__body {
    margin-left: 10px !important;
    p {
      padding: 0 10px !important;
    }
    span {
      top: 143px !important;
      right: 110px !important;
    }
  }
}
</style>
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
    height: 95px !important;
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
  z-index: 11;
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
