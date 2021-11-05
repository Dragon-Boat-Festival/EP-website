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
        <!-- <button class="bor-rad box-sha1 AN">希望为环保做出贡献吗</button> -->

        <!--           :active-icon=""
        :inactive-icon=""-->
        <el-switch
          v-model="isDark"
          style="margin-left: 24px"
          active-color="var(--green)"
          inactive-color="var(--twoBg)"
          :inline-prompt="true"
          :active-icon="Moon"
          :inactive-icon="Sunny"
        ></el-switch>
        <el-icon class="is-loading">
          <sunny />
        </el-icon>
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
      <router-link to="/newsMessage" class="nav-item p">
        <span class="iconfont icon-xinxi"></span>
        <p class="ANM">最新消息</p>
      </router-link>
    </div>
  </div>
  <!-- 占位盒子 -->
  <div class="nav-placeholder"></div>
  <!-- 弹出搜索框 -->
  <el-drawer direction="ttb" size="auto" v-model="$store.state.isDrawer" title="搜索">
    <form @submit.prevent="goSearchView" class="wd9 con-box">
      <input
        type="text"
        placeholder="输入文章关键字搜索"
        @input="search($event)"
        v-model="inputData"
        class="searchInput AN"
        required
      />
      <span
        class="iconfont icon-butongguodechacha ANM"
        @click="emptyData"
        @keyup.enter="goSearchView"
        v-if="inputData !== ''"
      ></span>
      <input type="submit" class="searchButton ANM" value="搜索" />
    </form>
    <div class="searchData con-box" v-if="searchData.rows">
      <p v-if="searchData.count == 0">没有要搜索文章有该相关的的内容哦</p>
      <p v-else>文章({{searchData.count}})</p>
      <ArticleItem
        v-for="(item, index) in searchData.rows"
        :news="item"
        :key="index"
        :index="index"
      />
    </div>
    <div :class="searchData.count > 0 ? 'paging con-box pb':'paging con-box'">
      <el-pagination
        @size-change="changePage"
        @current-change="changePage"
        v-model:currentPage="currentPage"
        :hide-on-single-page="searchData.count > 6 ? false : true"
        background
        layout="prev, pager, next"
        :total="searchData.count"
        :page-size="6"
      ></el-pagination>
    </div>
  </el-drawer>
</template>

<script>
import { Sunny, Moon } from '@element-plus/icons'

import ArticleItem from "@/components/selectedNews/ArticleItem"

import { getSearchData } from '@/tools/request'
import { mapMutations } from "vuex"

export default {
  name: 'NavBar',
  components: {
    ArticleItem,
    Sunny,
    Moon
  },
  data () {
    return {
      // Check: Sunny,
      // Close: Moon,
      // 输入框输入的值
      inputData: '',
      // 搜索的结果
      searchData: [],
      //标记当前事件函数的时间戳
      lastTimeStamp: 0,
      // 当前展示第几页数据
      currentPage: 1,
      // 切换夜晚模式
      isDark: false
    }
  },
  methods: {
    ...mapMutations(['openDrawer', 'changeDrawer']),
    // 回到首页
    toHome () {
      this.$router.push('/')
    },
    // 显示搜索框
    showSearch () {
      this.openDrawer()
    },
    // 清空输入框
    emptyData () {
      this.inputData = ''
      this.searchData = []
    },
    // 搜索内容
    search (event) {
      this.lastTimeStamp = event.timeStamp;
      setTimeout(() => {
        if (this.lastTimeStamp == event.timeStamp) {
          this.searchCallBack(this.currentPage)
        }
      }, 1000);
    },
    // 搜索回调
    async searchCallBack (pageNum) {
      if (this.inputData == '') {
        this.searchData = []
      } else {
        let result = await getSearchData({
          keyword: this.inputData,
          types_id: 0,
          column_id: 0,
          pageNum: pageNum,
          pageSize: 6
        })
        this.searchData.count = result.result.count
        this.searchData.rows = result.result.rows
      }

    },
    // 去搜索页面
    goSearchView () {
      this.searchCallBack()
    },
    // 点击页码回调
    changePage (num) {
      this.currentPage = num
      console.log(this.currentPage);
      this.searchCallBack(this.currentPage)
    }
  }
}
</script>

<style lang="less">
// 分页样式
.el-pagination.is-background .el-pager li:not(.disabled).active {
  color: var(--white) !important;
  background-color: #0fb87d !important ;
}
.el-pagination.is-background .el-pager li:not(.disabled, .active):hover {
  color: var(--el-text-color-regular) !important;
}
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  // transition: all 0.2s;
  background-color: transparent !important;
}
// 搜索样式
.el-drawer.ttb {
  min-height: 35% !important;
}
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
  width: 88%;
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
  margin: 0 !important;
  padding: 0 !important;
  .searchInput {
    width: 90%;
    font-size: 18px;
    height: 50px;
    line-height: 50px;
    border-radius: 24px 0 0 24px;
    padding-left: 16px;
    border: 1px solid rgb(87, 87, 87);
    outline: none;
  }
  .iconfont {
    color: var(--black);
    position: absolute;
    top: 19px;
    right: 170px;
  }
  .searchButton {
    text-align: center;
    width: 130px;
    height: 54px;
    line-height: 54px;
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
      top: 20px !important;
      right: 150px !important;
    }
  }
}
</style>
<style lang="less" scoped>
.con-box {
  position: relative;
  display: flex;
  align-items: center;
}
.wd9 {
  width: 90%;
}
.searchData {
  position: relative;
  padding: 50px 10px 20px 10px;
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  p {
    position: absolute;
    top: 20px;
    left: 10px;
    font-weight: 700;
  }
}
.paging {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 40px;
}
@media screen and (max-width: 1024px) {
  .pb {
    padding-bottom: 100px;
  }
  .searchData {
    grid-template-columns: repeat(auto-fill, minmax(35%, 1fr));
  }
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
  .searchData {
    grid-template-columns: none;
  }
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
