<template>
  <div class="home">
    <!-- 头部banner   -->
    <GlobalSwiper
      v-if="homeData.banner_news"
      :img_url="`http://49.233.14.172:9999/imgs/2021/10/6c11ffef2aa3387a.webp`"
      swiperBg="swiper-pg"
      spanText="你知道吗？地球现在有多少个问题。土壤被破坏、气候变化带来温室效应、生物多样性减少、森林面积减少......"
    >
      <template v-slot:swiper-pagination>
        <!-- swiper翻页器 -->
        <div :class="`swiper-pagination swiper-pg` "></div>
      </template>
      <template v-slot:h2>
        <h2 class="h2" style="color: var(--green)">行动带来改变</h2>
      </template>
      <template v-slot:subtitle>
        <p class="subtitle">保护环境，人人有责</p>
      </template>
      <template v-slot:right-swiper>
        <div class="swiper home-swiper">
          <!-- 单个swiper -->
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item,index) in homeData.banner_news"
              :key="index"
              @click="this.$router.push({path:'/newsDetail', query: { news_id: item.news_id }})"
            >
              <div class="slide-con box-sha1 AN">
                <div class="left-img" :style="{ backgroundImage: `url(${item.main_img})` }"></div>
                <div class="right-content">
                  <div class="title">
                    <p :style="{color:item.ep_type.color}">
                      {{ item.ep_type.name }}
                      <span>专题报道</span>
                    </p>
                    <span>{{ (item.release_time).substring(0, 10) }}</span>
                  </div>
                  <p class="box-p">{{ item.title }}</p>
                  <span class="button ANM bor-rad box-sha1">立即浏览</span>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-next swiper-bt box-sha2"></div>
          <div class="swiper-button-prev swiper-bt box-sha2"></div>
        </div>
      </template>
    </GlobalSwiper>

    <!-- 项目部分   -->
    <home-project
      v-if="homeData.project_date"
      :project-date="homeData.project_date"
      class-name="dark"
    >
      <template v-slot:h2>
        <h2 class="h2">重点环保项目</h2>
      </template>
      <template v-slot:span>
        <span class="p">我们持续关注本地及全球环保议题，以不同项目跟进和推动实际改变。</span>
      </template>
    </home-project>

    <!-- earth   -->
    <Earth v-if="homeData.project_date" />

    <!-- 环保分类模块 -->
    <home-issue v-if="homeData.project_date" :types="homeData.types" />

    <!-- 环保概念模块 -->
    <!-- <div class="home-concept" v-if="homeData.project_date">
      <BackgroundMotion
        eClassName="banners_background"
        :style="{background: `url(http://49.233.14.172:9999/imgs/2021/11/252277c5299c53b7.jpg)`}"
      />
    </div>-->
  </div>
</template>
<script>
import homeProject from "@/components/Home/homeProject"
import homeIssue from "@/components/Home/homeIssue"
import Earth from '@/components/Home/earth'
import GlobalSwiper from "@/components/common/GlobalSwiper";
import { getHomeData } from '@/tools/request'
import BackgroundMotion from "@/components/common/BackgroundMotion";


import Swiper from "swiper";
import { mapMutations } from "vuex"

export default {
  name: 'Home',
  data () {
    return {
      homeData: {},
      isTrue: true
    }
  },
  created () {
    this.getData()
    new this.$wow.WOW({
      live: false
    }).init()
  },
  updated () {
    this.$nextTick(() => {
      if (this.isTrue) {
        this.initSwiper()
        this.isTrue = false
        this.changeIsData()
      }
    })
  },
  components: {
    GlobalSwiper,
    homeProject,
    Earth,
    homeIssue,
    BackgroundMotion
  },
  methods: {
    ...mapMutations(['changeIsData']),
    async getData () {
      let res = await getHomeData()
      this.homeData = res.result
    },
    initSwiper () {
      new Swiper(".home-swiper", {
        // 循环模式选项
        loop: false,
        // 自动播放
        autoplay: false,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        grabCursor: true,
        // slidesPerView: "auto",

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      })
    },
  },


}
</script>
<style lang="less" scoped>
@import '~@/assets/css/homeSwiper.css';
// 背景
.home-concept {
  position: relative;
  top: 0;
  left: 0;
  min-height: 575px;
  overflow: hidden;
  top: 0;
  .banners_background {
    position: absolute;
    left: 0;
    right: 0;
    background-size: cover !important;
    background-position: center !important;
    top: -34px;
    bottom: -270px;
    transition: transform 100ms ease-out, -webkit-transform 100ms ease-out;
  }
}
</style>

