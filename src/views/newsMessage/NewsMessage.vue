<template>
  <!-- 最新消息页 -->
  <!-- 头部banner   -->
  <GlobalSwiper
      v-if="related_news.length>0"
      swiperBg="swiper-pg"
      spanText="为你呈上近期环保热话及编辑推介文章，罗列国际和本地你不可不知道的重要资讯。"
  >
    <template v-slot:swiper-pagination>
      <!-- swiper翻页器 -->
      <div :class="`swiper-pagination swiper-pg` "></div>
    </template>
    <template v-slot:h2>
      <h2 class="h2" style="color: var(--black)">最新消息</h2>
    </template>
    <template v-slot:subtitle>
      <p class="subtitle">FROM THE EARTH</p>
    </template>
    <template v-slot:right-swiper>
      <div class="swiper home-swiper">
        <!-- 单个swiper -->
        <div class="swiper-wrapper">
          <div
              class="swiper-slide"
              v-for="(item,index) in related_news"
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
  <!-- 第二部分 -->
  <CommonBox theme="dark-theme">
    <template v-slot:content>
      <CommonSwiper
          :color="this.commonData?.color ?this.commonData?.color : this.commonData?.ep_type?.color "
          :swiperData='{img_arr: `["http://49.233.14.172:9999/imgs/2021/11/00d08af67985e41a.jpg"]`,text: "世界上无数人都在竭力追求更好的未来。在此你可以了解更多环保、生活相关的故事及消息。"}'
          :type="1"
      ></CommonSwiper>
    </template>
  </CommonBox>
  <!-- 精选文章 -->
  <SelectedNews class="selected-con" :related_news="this.selected_news"/>
  <!-- 专栏  -->
  <div class="column" v-for="(item, index) in this.news_column" :key="index">
    <SectionRow v-if="item.news?.length > 0" :lastYear_news="item.news">
      <template v-slot:column-title>
        <div class="last-more">
          <h2>
            <router-link to="/">
              {{ item.dataValues?.column_name }}
              <i class="iconfont icon-you"></i>
            </router-link>
          </h2>
        </div>
      </template>
    </SectionRow>
  </div>
</template>

<script>
import GlobalSwiper from "@/components/common/GlobalSwiper";
import CommonBox from "@/components/projectOrTypes/commonBox";
import CommonSwiper from "@/components/projectOrTypes/CommonSwiper";
import SelectedNews from "@/components/selectedNews/SelectedNews";
import SectionRow from "@/components/common/SectionRow";
import {getNewsMessage} from "@/tools/request";
import {mapMutations} from "vuex"
import Swiper from "swiper";

export default {
  name: "NewsMessage",
  components: {
    GlobalSwiper,
    CommonBox,
    CommonSwiper,
    SelectedNews,
    SectionRow
  },
  data() {
    return {
      related_news: [], // 相关新闻
      selected_news: [], // 精选文章
      news_column: [], // 新闻专栏数据
    }
  },
  created() {
    this._initData()
  },
  updated() {
    this.$nextTick(() => {
      this.initSwiper()
    })
  },
  methods: {
    ...mapMutations(['changeIsData']),
    async _initData() {
      const result = await getNewsMessage()
      //显示 nav
      result.result.related_news.length > 0 ? this.changeIsData() : null
      // 相关新闻
      this.related_news = result.result.related_news
      // 精选文章
      this.selected_news = result.result.selected_news
      // 新闻专栏
      this.news_column = result.result.news_column
      console.log(result)
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
  },
}
</script>

<style scoped lang="less">
@import '~@/assets/css/homeSwiper.css';

h2 {
  margin-bottom: 20px;
  font-size: 38px;
  color: var(--black);
  margin-left: 10px;

  a {
    display: flex;
    color: var(--black);
    align-items: center;

    i {
      margin-left: 5px;
    }
  }
}

.selected-con {
  height: auto;
}

@media only screen and (min-width: 1024px) {
  // 第二部分样式
  .selected-con {
    max-height: 450px !important;
    overflow: hidden;
  }
}
</style>
