<template>
  <!-- 项目或全球议题详情页 -->
  <div class="outer_block_container">
    <!--  头部banner  -->
    <section class="section-hero-top">
      <!--   背景   -->
      <BackgroundMotion eClassName="background" :style="{backgroundImage: `url(${this.types?.banner_url})`}"/>
      <!--   黑阴影   -->
      <div class="section-hero-shade"></div>
      <!--  文字内容部分    -->
      <div class="ct-container">
        <div class="content">
          <div class="top-bar">
            <a href="https://www.greenpeace.org/hongkong/" class="back-button">
              <i class="iconfont icon-zuo"></i>
            </a>
            <a href="#" data-topic="68" class="js-issue-follow button button-orange light"
               style="display: none;">立即关注</a>
            <a href="#" data-topic="68" class="js-issue-unfollow button not-following button-orange light"
               style="display: inline;">你正在关注</a>
          </div>
          <div class="hero-issue-title">
            <h1>{{ this.types.name }}</h1>
            <p>{{ this.types.e_name }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- 下部分项目目标 部分   -->
    <CommonBox>
      <template v-slot:content>
        <div class="ct-container slim"><h2>
          {{ this.types.describe }}</h2>
        </div>
      </template>
    </CommonBox>
    <!-- 轮播图部分   -->
    <CommonBox theme="dark-theme">
      <template v-slot:content>
        <CommonSwiper :color="this.types.color" :swiperData="this.types.ep_detail_content_swiper"
                      :type="this.params.type"/>

      </template>

    </CommonBox>
    <!--  关于环保议题相关的项目盒子 只有当 type === 1 的时候显示  -->
    <section v-if="this.params.type === 1" class="section-projects is-loaded light ">
      <home-project :project-date="this.project" class-name="light">
        <template v-slot:h2>
          <h2 class="h2">我们提倡</h2>
        </template>
        <template v-slot:span>
          <span class="p">{{ this.types.promote_desc }}</span>

        </template>
      </home-project>

    </section>
    <!--  你能改变的  -->
    <section class="change js-parallax-me" :style="{background: `${this.types.color}`}">
      <!-- 头部banner   -->
      <GlobalSwiper v-if="change_news.length > 0"
                    swiperBg="swiper-pg" :backgroundColor="this.types.color"
                    :spanText="this.types.change_desc" textColor="#fff">
        <template v-slot:swiper-pagination>
          <!-- swiper翻页器 -->
          <div :class="`swiper-pagination swiper-pg-white` "></div>

        </template>
        <template v-slot:h2>
          <h2 class="h2" style="">你能成就改变</h2>
        </template>
        <template v-slot:subtitle>
          <p class="subtitle"></p>
        </template>
        <template v-slot:right-swiper>
          <div class="swiper home-swiper">
            <!-- 单个swiper -->
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in change_news" :key="index">
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
    </section>
    <!-- 最近1年   -->
    <SectionRow background-color="var(--grayBackground)" v-if="lastYear_news" :lastYear_news="lastYear_news">

      <template v-slot:column-title>
        <div class="last-more">
          <h2 :style="{color: `${this.types.color}`}">过去一年</h2>
        </div>

      </template>


    </SectionRow>
    <!-- 2010'S   -->
    <SectionRow v-if="LastDecade_news" :lastYear_news="LastDecade_news">

      <template v-slot:column-title>
        <div class="last-more">
          <h2 :style="{color: `${this.types.color}`}">2010's</h2>
        </div>

      </template>


    </SectionRow>
    <!-- 描述2   -->
    <CommonBox theme="dark">
      <template v-slot:content>
        <div class="ct-container slim"><h2>
          {{ this.types.describe2 }}</h2>
        </div>
      </template>
    </CommonBox>

    <!--  小提示 tips  -->
    <section class="section-featured section-featured-tips">
      <GlobalSwiper v-if="change_news.length > 0"
                    swiperBg="swiper-pg" backgroundColor="var(--grayBackground)"
                    textColor="#000">
        <template v-slot:swiper-pagination>
          <!-- swiper翻页器 -->
          <div :class="`swiper-pagination2 swiper-pg` "></div>

        </template>
        <template v-slot:h2>
          <h2 class="h2" style="color: black">日常环保贴士</h2>
        </template>
        <template v-slot:subtitle>
          <p class="subtitle" style="color: black">爱护环境多一些</p>
        </template>
        <template v-slot:right-swiper>
          <div class="swiper tips-swiper swiper-container">
            <!-- 单个swiper -->
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in this.tips" :key="index">
                <tips :tip="item"/>
              </div>

            </div>
            <div class="swiper-button-next swiper-bt box-sha2"></div>
            <div class="swiper-button-prev swiper-bt box-sha2"></div>
          </div>
        </template>
      </GlobalSwiper>
    </section>

    <!-- 名言警句部分   -->
    <CommonBox>
      <template v-slot:content>
        <div class="ct-container slim"><h2>
          {{ this.types.saying }}</h2>
          <p style="padding-left: 23px">—— {{ this.types.saying_author }}</p>

        </div>
      </template>
    </CommonBox>
  </div>
</template>

<script>
import BackgroundMotion from "@/components/common/BackgroundMotion";
import CommonBox from "@/components/projectOrTypes/commonBox";
import CommonSwiper from "@/components/projectOrTypes/CommonSwiper";
import GlobalSwiper from "@/components/common/GlobalSwiper";
import homeProject from "@/components/Home/homeProject";
import SectionRow from "@/components/common/SectionRow";
import Tips from '@/components/projectOrTypes/Tips'
import {getProjectOrTypesData} from "@/tools/request";
import Swiper from "swiper";

export default {
  name: "ProjectOrTypes",
  components: {
    CommonBox,
    BackgroundMotion,
    CommonSwiper,
    homeProject,
    SectionRow,
    GlobalSwiper,
    Tips
  },
  data() {
    return {
      types: {},
      params: {
        type: 1,
        id: 5,
        name: "森林",
        types_id: 5
      }, // 此对象里的数据需要从 上一级页面传过来 this.$router.params
      project: [],// 项目数据
      change_news: [], // 改变栏的新闻内容
      lastYear_news: [], //过去一年的新闻
      LastDecade_news: [], // 2010's
      tips: [], // 小提示
    }
  },
  created() {
    // 请求数据
    this._initData()
  },
  updated() {
    // 初始化swiper
    this.$nextTick(() => {
      this._initSwiper()
    })
  },
  methods: {
    async _initData() {
      let result = await getProjectOrTypesData(this.params)
      // 类型数据
      this.types = result.result.types
      // 项目数据
      this.project = result.result.project
      // 改变栏的新闻内容
      this.change_news = result.result.change_news
      // 过去一年的新闻
      this.lastYear_news = result.result.lastYear_news
      // 2010's
      this.LastDecade_news = result.result.LastDecade_news
      // 小提示
      this.tips = result.result.tips
      console.log(result)
    },
    _initSwiper() {
      // 第一个轮播图 你能改变
      new Swiper(".home-swiper", {
        // 循环模式选项
        loop: false,
        // 自动播放
        autoplay: false,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        grabCursor: true,
        slidesPerView: "auto",

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
      // 第二个轮播图 tips
      new Swiper(".tips-swiper", {
        direction: 'horizontal', // 垂直切换选项
        loop: false, // 循环模式选项
        // width: 960,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        freeMode: true, // 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          setTranslate() {
            const slide = this.slide
            console.log(slide)
          }
        },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination2",
          clickable: true,
        },
      })

    },
  },

}
</script>

<style scoped lang="less">
@import "~@/assets/css/homeSwiper.css";

/deep/ .section-featured .home-swiper-view {
  height: auto !important;
}

/*外层盒子*/
.outer_block_container {
  //padding-top: 50px;
  overflow: hidden;

  section {
    min-height: 400px;
    //background-image: linear-gradient(to bottom, rgba(238, 238, 238, 0) 0%, #eee 100%);
  }

  // 头部banner 部分
  .section-hero-top {
    height: 70vh;
    padding: 0 !important;
    background-size: cover;
    background-position: center;;
    overflow: hidden;
    // 图片样式
    .background {
      position: absolute;
      //height: 533px;
      left: 0;
      right: 0;
      background-size: cover;
      background-position: center;
      top: -34px;
      bottom: -100px;
      //background-image: var(--background-img);
      transition: transform 100ms ease-out, -webkit-transform 100ms ease-out;
    }

    // 黑阴影
    .section-hero-shade {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      left: 0;
    }

    // 黑阴影-上
    .section-hero-shade::before {
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      height: 101px;
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0), #000);
      content: "";
    }

    // 黑阴影-下
    .section-hero-shade::after {
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 210px;
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
      content: "";
    }

    // banner 文字部分
    .ct-container:not {
      position: relative;
    }

    //banner 文字部分
    .ct-container {
      height: 100%;
      width: 100%;
      margin: 0 auto;
      z-index: 20;
      // 内容
      .content {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-pack: justify;
        justify-content: space-between;
        height: 100%;
        // banner 顶部 导航栏
        .top-bar {
          display: flex;
          -webkit-box-pack: justify;
          justify-content: space-between;
          padding: 10px 20px;
          -webkit-box-align: center;
          align-items: center;
          z-index: 5;
          // 返回按钮
          .back-button {
            text-decoration: none;
            border-bottom: none !important;
            color: #fff;
            // 图标
            .icon-zuo {
              font-weight: bolder;
              font-size: 18px;
            }
          }
        }

        // 全球议题文字部分
        .hero-issue-title {
          color: #fff;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          flex-direction: column;
          -webkit-box-align: center;
          align-items: center;
          z-index: 5;
          // 标题
          h1 {
            font-size: 90px;
            line-height: 0;
            letter-spacing: 10px;

            text-align: center;
          }

          // p
          p {
            font-size: 16px;
            line-height: 21px;
            letter-spacing: 8px;
            text-transform: uppercase;
            font-family: Montserrat;
            line-height: 21px;
            margin-bottom: 50px;
          }

        }
      }
    }

  }


  // 改变部分
  .change {
    h2 {
      font-size: 38px;
      color: #fff;
    }

    .subtitle {
      line-height: 1.5;
      color: #fff;
      font-size: 18px;
    }
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  // 最近新闻 几个栏目
  .last-more {
    h2 {
      color: #00b474;
      padding: 0 !important;
      font-size: 28px;
    }
  }


}

// ct-container slim  文字格言部分
.ct-container {
  width: 100%;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 30px;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;

  h2 {
    padding: 40px 20px 30px 20px;
    font-size: 19px;
  }
}

// 小提示部分
.section-featured-tips {
  color: #fff;
  box-sizing: border-box;
  // 轮播
  .tips-swiper {
    height: auto !important;

    box-sizing: border-box;
    margin: 0 auto;
    position: relative;
    overflow: visible;
    padding-top: 15px;
    padding-bottom: 15px;
    list-style: none;
    z-index: 1;

    // 每一个slide
    .swiper-slide {
      //width: 80vw;
      box-sizing: border-box;
      width: 299px !important;
      max-width: 300px;
      //margin-right: 10vw;
      //margin-bottom: 20px;
      //margin-left: 0;
    }

  }
}


@media only screen and (min-width: 1280px) {
  // banner 文字部分
  .ct-container {
    max-width: 1200px;
  }

  .ct-container.slim {
    padding: 0 120px;
  }

  // 导航
  .top-bar {
    //justify-content: space-between !important;
  }
}

@media only screen and (min-width: 1024px) {
  // banner 文字
  .hero-issue-title {
    h1 {
      font-size: 150px !important;
      line-height: 0 !important;
      letter-spacing: 16.7px !important;
      color: #fff;
    }

    p {
      font-size: 22px;
      letter-spacing: 11px;
      margin-bottom: 90px;

    }
  }

  // banner 下部分 文字
  .ct-container {
    //width: 58% !important;

    h2 {
      font-size: 30px !important;

    }
  }

  // 改变部分
  .change {
    h2 {
      //font-size: 38px;
      margin: 40px 0;
    }
  }

  // 最近新闻 几个栏目
  .last-more {
    h2 {
      margin-bottom: 20px;
      font-size: 38px !important;
    }
  }

  .tips-swiper {
    // 每一个slide
    .swiper-slide {
      width: auto !important;
      max-width: none !important;
      margin: 0 20px !important;
    }
  }

}
</style>
