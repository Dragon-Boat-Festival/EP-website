<template>
  <!-- 项目或全球议题详情页 -->
  <div class="outer_block_container">
    <!--  头部banner  -->
    <CommonBanner :commonData="this.commonData" />
    <!-- 下部分项目目标 部分 全球议题显示   -->
    <CommonBox v-if="this.commonData?.describe">
      <template v-slot:content>
        <div
          class="ct-container slim animate__animated animate__fadeIn wow"
          data-wow-duration="1s"
          data-wow-delay=".5s"
        >
          <h2>{{ this.commonData?.describe }}</h2>
        </div>
      </template>
    </CommonBox>
    <!-- 下部分项目目标 部分 type == 0 显示   -->
    <CommonBox v-if="this.commonData?.target_text">
      <template v-slot:content>
        <div class="ct-container slim">
          <h2
            class="animate__animated animate__fadeIn wow"
            data-wow-duration="1s"
            data-wow-delay=".5s"
          >目标</h2>
          <template v-for="(text,index) in JSON.parse( this.commonData?.target_text)" :key="index">
            <p>{{ text }}</p>
          </template>
        </div>
      </template>
    </CommonBox>
    <!-- 轮播图部分   -->
    <CommonBox theme="light-theme">
      <template v-slot:content>
        <CommonSwiper
          :color="this.commonData?.color ?this.commonData?.color : this.commonData?.ep_type?.color "
          :swiperData="this.commonData?.ep_detail_content_swiper"
          :type="this.$route?.query?.type"
        ></CommonSwiper>
      </template>
    </CommonBox>
    <!--  关于环保议题相关的项目盒子 只有当 type === 1 的时候显示 我们的提倡  -->
    <section v-if="this.$route.query?.type == 1" class="section-projects is-loaded light">
      <home-project :project-date="this.project" class-name="light">
        <template v-slot:h2>
          <h2 class="h2">我们提倡</h2>
        </template>
        <template v-slot:span>
          <span class="p">{{ this.commonData?.promote_desc }}</span>
        </template>
      </home-project>
    </section>
    <!--  你能改变的  -->
    <section class="change js-parallax-me" :style="{background: `#faf5f5`}">
      <!-- 头部banner   -->
      <GlobalSwiper
        v-if="change_news?.length > 0"
        swiperBg="swiper-pg"
        :backgroundColor="`${this.commonData?.color ? this.commonData?.color : '#f5f5f5' }`"
        :spanText="this.commonData?.change_desc"
        :text-color="this.commonData?.color ? '#fff' : '#000'"
      >
        <template v-slot:swiper-pagination>
          <!-- swiper翻页器 -->
          <div
            :class="`swiper-pagination ${this.commonData?.color ? 'swiper-pg-white' : 'swiper-pg'}` "
          ></div>
        </template>
        <template v-slot:h2>
          <h2
            class="h2 animate__animated animate__fadeIn wow"
            data-wow-duration="1s"
            data-wow-delay=".5s"
            :style="{color: `${this.commonData?.color ? '#fff' : '#000'}`}"
          >你能成就改变</h2>
        </template>
        <template v-slot:subtitle>
          <p
            class="subtitle animate__animated animate__fadeIn wow"
            data-wow-duration="1s"
            data-wow-delay=".8s"
          ></p>
        </template>
        <template v-slot:right-swiper>
          <div class="swiper home-swiper">
            <!-- 单个swiper -->
            <div class="swiper-wrapper">
              <div
                class="swiper-slide animate__animated animate__fadeInRight wow"
                v-for="(item,index) in change_news"
                :key="index"
                data-wow-duration=".8s"
                :data-wow-delay="`${(index +  1) * 0.1}s`"
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
    </section>
    <!-- 最近1年   -->
    <SectionRow
      background-color="var(--grayBackground)"
      v-if="lastYear_news"
      :lastYear_news="lastYear_news"
    >
      <template v-slot:column-title>
        <div class="last-more">
          <h2
            :style="{color: `${this.commonData?.color}`}"
            class="h2 animate__animated animate__fadeIn wow"
            data-wow-duration="1s"
            data-wow-delay=".5s"
          >过去一年</h2>
        </div>
      </template>
    </SectionRow>
    <!-- 2010'S   -->
    <SectionRow v-if="LastDecade_news" :lastYear_news="LastDecade_news">
      <template v-slot:column-title>
        <div class="last-more">
          <h2
            :style="{color: `${this.commonData?.color}`}"
            class="animate__animated animate__fadeIn wow"
            data-wow-duration="1s"
            data-wow-delay=".5s"
          >2010's</h2>
        </div>
      </template>
    </SectionRow>
    <!-- 描述2   -->
    <CommonBox theme="dark" v-if="this.commonData?.describe2 ">
      <template v-slot:content>
        <div
          class="ct-container slim animate__animated animate__fadeIn wow"
          data-wow-duration="1s"
          data-wow-delay=".5s"
        >
          <h2>{{ this.commonData?.describe2 }}</h2>
        </div>
      </template>
    </CommonBox>

    <!--  小提示 tips  -->
    <section class="section-featured section-featured-tips">
      <GlobalSwiper
        v-if="change_news?.length > 0"
        swiperBg="swiper-pg"
        backgroundColor="var(--grayBackground)"
        textColor="#000"
      >
        <template v-slot:swiper-pagination>
          <!-- swiper翻页器 -->
          <div :class="`swiper-pagination2 swiper-pg` "></div>
        </template>
        <template v-slot:h2>
          <h2
            class="h2 animate__animated animate__fadeIn wow"
            data-wow-duration="1s"
            data-wow-delay=".5s"
            style="color: black"
          >日常环保贴士</h2>
        </template>
        <template v-slot:subtitle>
          <p
            class="subtitle animate__animated animate__fadeIn wow"
            data-wow-duration="1s"
            data-wow-delay=".8s"
            style="color: black"
          >爱护环境多一些</p>
        </template>
        <template v-slot:right-swiper>
          <div class="swiper tips-swiper swiper-container">
            <!-- 单个swiper -->
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in this.tips" :key="index">
                <tips
                  :tip="item"
                  class="animate__animated animate__fadeInRight wow"
                  data-wow-duration="1s"
                  :data-wow-delay="`${(index +  1) * 0.1}s`"
                />
              </div>
            </div>
            <div class="swiper-button-next swiper-bt box-sha2"></div>
            <div class="swiper-button-prev swiper-bt box-sha2"></div>
          </div>
        </template>
      </GlobalSwiper>
    </section>

    <!-- 名言警句部分   -->
    <CommonBox v-if="this.commonData?.saying">
      <template v-slot:content>
        <div class="ct-container slim">
          <h2
            class="animate__animated animate__fadeIn wow"
            data-wow-duration="1s"
            data-wow-delay=".5s"
          >{{ this.commonData?.saying }}</h2>
          <p
            class="animate__animated animate__fadeIn wow"
            data-wow-duration="1s"
            data-wow-delay=".8s"
            style="padding-left: 23px"
          >—— {{ this.commonData?.saying_author }}</p>
        </div>
      </template>
    </CommonBox>
    <!-- 相关新闻   -->
    <SectionRow
      background-color="var(--grayBackground)"
      v-if="related_news"
      :lastYear_news="related_news"
      h2-text="相关新闻"
    >
      <template v-slot:column-title>
        <div class="last-more">
          <h2 :style="{color: `${this.commonData?.color}`}"></h2>
        </div>
      </template>
    </SectionRow>
  </div>
</template>

<script>
import CommonBanner from "@/components/common/CommonBanner";
import BackgroundMotion from "@/components/common/BackgroundMotion";
import CommonBox from "@/components/projectOrTypes/commonBox";
import CommonSwiper from "@/components/projectOrTypes/CommonSwiper";
import GlobalSwiper from "@/components/common/GlobalSwiper";
import homeProject from "@/components/Home/homeProject";
import SectionRow from "@/components/common/SectionRow";
import Tips from '@/components/projectOrTypes/Tips'
import { getProjectOrTypesData } from "@/tools/request";
import Swiper from "swiper";

export default {
  name: "ProjectOrTypes",
  components: {
    CommonBanner,
    CommonBox,
    BackgroundMotion,
    CommonSwiper,
    homeProject,
    SectionRow,
    GlobalSwiper,
    Tips
  },
  data () {
    return {
      commonData: {},
      params: {}, // 此对象里的数据需要从 上一级页面传过来 this.$router.params
      project: [],// 项目数据
      change_news: [], // 改变栏的新闻内容
      lastYear_news: [], //过去一年的新闻
      LastDecade_news: [], // 2010's
      tips: [], // 小提示
      related_news: [] // 底部相关新闻
    }
  },


  mounted () {
    window.scrollTo(0, 0)
    if (this.$route.query.id) {
      this._initData(this.$route.query)
    }
  },
  updated () {
    // 初始化swiper
    this.$nextTick(() => {

      this._initSwiper()
    })
  },
  methods: {
    async _initData (data) {

      let result = await getProjectOrTypesData({
        type: Number(data.type),
        id: Number(data.id),
        name: data.name,
        types_id: data.types_id?.trim() ? Number(data.types_id) : ""
      })
      if (!result.result.commonData)
        return window.location.href = "/404"
      window.scrollTo(0, 0)
      // 类型数据
      this.commonData = result.result.commonData
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
      // 相关新闻
      this.related_news = result.result.related_news
    },
    _initSwiper () {
      // 第一个轮播图 你能改变
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
      // 第二个轮播图 tips
      const tips = new Swiper(".tips-swiper", {
        slidesPerView: 'auto',
        // 循环模式选项
        loop: false,
        // 自动播放
        autoplay: false,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          setTranslate () {
            const slide = this.slide
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
  watch: {
    $route: {
      handler: function (val, oldVal) {
        // 有重新获取 
        if (val.query.id) {
          this._initData(val.query)
        }
      }
    }
  },

}
</script>

<style scoped lang="less">
@import '~@/assets/css/homeSwiper.css';
.swiper-button-next {
  left: 100% !important;
}
.home-swiper-view .con-box {
  display: block;
}
.tips-swiper .swiper-slide-active {
  margin: 0 !important;
}

:deep(.section-featured .home-swiper-view) {
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
    padding: 0px 20px 0px 20px;
    font-size: 19px;
  }

  p {
    padding: 0px 20px 0px 20px;
  }
}

// 小提示部分
.section-featured-tips {
  color: #fff;
  box-sizing: border-box;
  // 轮播
  .tips-swiper {
    width: 75% !important;
    height: auto !important;
    box-sizing: border-box;
    margin: 0 auto;
    position: relative;
    left: 38px;
    overflow: visible;
    padding-top: 15px;
    padding-bottom: 30px;
    list-style: none;
    z-index: 1;
    // 每一个slide
    .swiper-slide {
      //width: 80vw;
      box-sizing: border-box;
      width: 299px !important;
      max-width: 300px;
      margin: 0 10px !important;

      //margin-right: 10vw;
      //margin-bottom: 20px;
      //margin-left: 0;
    }
  }
}
@media screen and (max-width: 1300px) {
  .swiper-button-next {
    left: 93% !important;
  }
  .section-featured-tips .tips-swiper .swiper-slide {
    width: 250px !important;
  }
}
@media screen and (max-width: 1024px) {
  .section-featured-tips .tips-swiper {
    width: 100% !important;
    left: 0 !important;
    margin-left: 0 !important;
    padding-top: 0 !important;
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
}

@media only screen and (min-width: 1024px) {
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
    // margin-left: -4px !important;
    // 每一个slide
    .swiper-slide {
      width: auto !important;
      max-width: none !important;
    }
  }
}
</style>
