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
    <Earth v-if="homeData.project_date"/>

    <!-- 环保分类模块 -->
    <home-issue v-if="homeData.project_date" :types="homeData.types"/>

    <!-- 环保概念模块 -->
    <div
        v-if="homeData.project_date"
        class="home-concept animate__animated animate__fadeIn wow"
        data-wow-duration="1s"
        data-wow-delay=".5s"
    >
      <BackgroundMotion
          eClassName="banners_background"
          :style="{background: `url(http://49.233.14.172:9999/imgs/2021/11/252277c5299c53b7.jpg)`}"
      />
      <div class="concept-text con-box">
        <h2 class="h2">环保相关概念</h2>
        <div class="text-box">
          <div class="text-bottom">
            <h2 class="h2">一词解释</h2>
            <p class="p">是指人类为解决现实的或潜在的环境问题，协调人类与环境的关系，保障经济、社会的持续发展而采取的各种行动的总称。</p>
          </div>
          <div class="text-bottom">
            <h2 class="h2">环保意义</h2>
            <p class="p">人类的环保行动作用于地球生态，生态反哺于人类更好的生存环境。环保，在这个循环里，始于人类，途经地球生态，终于人类。</p>
          </div>
          <div class="text-bottom">
            <h2 class="h2">相关概念</h2>
            <p class="p">环境成本又称环境降级成本，是指由于经济活动造成环境污染而使环境服务功能质量下降的代价。</p>
          </div>
          <div class="text-bottom">
            <h2 class="h2">最终目标</h2>
            <p class="p">环保的最终目标就是辅助人类追求更好更舒适的生活。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homeProject from "@/components/Home/homeProject"
import homeIssue from "@/components/Home/homeIssue"
import Earth from '@/components/Home/earth'
import GlobalSwiper from "@/components/common/GlobalSwiper";
import {getHomeData} from '@/tools/request'
import BackgroundMotion from "@/components/common/BackgroundMotion";


import Swiper from "swiper";

export default {
  name: 'Home',
  data() {
    return {
      homeData: {},
      isTrue: true // 是否需要请求 是否第一次进入页面
    }
  },
  created() {
    this.getData()
    new this.$wow.WOW({
      live: false
    }).init()
    window.addEventListener('scroll', this.handleScroll, true)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true)
  },
  updated() {
    this.$nextTick(() => {
      if (this.isTrue) {
        this.initSwiper()
        this.isTrue = false
      }
    })
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        document.body.scrollTop = this.$store.state.srcollNum
        document.documentElement.scrollTop = this.$store.state.srcollNum
        window.scrollTo(0, this.$store.state.srcollNum)
      }, 800);
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
    ...mapMutations(['changeScroll']),
    async getData() {
      let res = await getHomeData()
      this.homeData = res.result
    },
    initSwiper() {
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
    // 监听滚动方法
    handleScroll() {
      this.changeScroll(window.pageYOffset)
    }
  },


}
</script>
<style lang="less" scoped>
@import '~@/assets/css/homeSwiper.css';

.home-concept::before {
  content: '';
  height: 220px;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  background: -webkit-gradient(linear,
  left top,
  left bottom,
  from(rgba(0, 0, 0, 0.5)),
  to(rgba(0, 0, 0, 0)));
}

// 背景
.home-concept {
  position: relative;
  top: 0;
  left: 0;
  min-height: 645px;
  overflow: hidden;

  .banners_background {
    position: absolute;
    left: 0;
    right: 0;
    background-size: cover !important;
    background-position: center !important;
    top: 254px;
    bottom: -485px;
    transition: transform 100ms ease-out, -webkit-transform 100ms ease-out;
  }

  .concept-text {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    padding-bottom: 20px;

    > h2 {
      margin: 80px 0 300px 10px;
      color: var(--white);
    }

    .text-box {
      display: flex;

      .text-bottom {
        width: 25%;
        margin: 0 20px;

        h2 {
          color: var(--green);
        }

        p {
          color: var(--white);
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .home-concept {
    .concept-text {
      .text-box::-webkit-scrollbar {
        display: none;
      }

      .text-box {
        width: 100%;
        display: -webkit-box;
        overflow-y: hidden;
        overflow-x: scroll;
        margin-left: -20px;

        .text-bottom {
          width: 70%;
        }
      }
    }
  }
}
</style>

