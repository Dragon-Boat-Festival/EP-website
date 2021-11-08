<template>
  <!-- 文章 分栏部分 共用模块 -->
  <section
    class="section-mixed-content-row layout-default text-align-default"
    :style="{backgroundColor}"
  >
    <div class="con-box">
      <!--       h2-title 标题 在头部 相关推荐新闻 -->
      <div class="h2-title">
        <h2
          class="h2 animate__animated animate__fadeIn wow"
          data-wow-duration="1s"
          data-wow-delay=".5s"
        >{{ h2Text }}</h2>
      </div>

      <slot name="column-title"></slot>
      <div class="mini-swiper">
        <div class="swiper-wrapper">
          <NewsColumn
            class="swiper-slide card-mini mini-update"
            v-for="(item, index) in lastYear_news"
            :news="item"
            :key="index"
          ></NewsColumn>
        </div>
        <div class="swiper-button-prev swiper-bt box-sha2"></div>
        <div class="swiper-button-next swiper-bt box-sha2"></div>
      </div>
    </div>
  </section>
</template>

<script>
import NewsColumn from "./NewsColumn";
import Swiper from "swiper";

export default {
  name: "SectionRow",
  components: {
    NewsColumn
  },
  props: {
    lastYear_news: {
      type: Array,
      default: []
    },
    backgroundColor: { // 背景颜色
      type: String,
      default: "var(--grayBackground)"
    },
    h2Text: {
      type: String,
      default: ""
    }
  },

  updated () {
    this.$nextTick(() => {
      new this.$wow.WOW({
        live: false
      }).init()
      this._init()
    })
  },
  mounted () {
    this.$nextTick(() => {
      this._init()
    })
  },

  methods: {
    _init () {
      new Swiper('.mini-swiper', {
        loop: false, // 循环模式选项
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        freeMode: true, //  freeMode: true, 。。默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
        slidesPerView: "auto",
        lazyLoading: true,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // 懒加载
        lazy: {
          loadPrevNext: true, //允许将延迟加载应用到最接近的slide的图片（前一个和后一个slide）。
          loadOnTransitionStart: true, // 默认当过渡到slide后开始加载图片，如果你想在过渡一开始就加载，设置为true
          loadPrevNextAmount: 4,
        },
      })
    }
  }
}
</script>

<style scoped lang="less">
:deep(.swiper-slide-active) {
  margin: 0 0 0 10px !important;
}
.section-mixed-content-row {
  min-height: 0 !important;
  overflow: hidden;

  .h2-title {
    margin-bottom: 3rem;

    h2 {
      text-align: center;
    }
  }

  // 轮播
  .mini-swiper {
    position: relative;
    padding-top: 15px;
    padding-bottom: 15px;
    .swiper-wrapper {
      -webkit-box-align: stretch;
      align-items: stretch;
      display: flex;
      width: 100%;
    }

    .swiper-slide {
      padding-left: 20px;
      margin-right: 0;
      margin-left: 20px;
      height: auto;
      border-left: 1px solid rgba(0, 0, 0, 0.2);
    }

    .swiper-slide:first-child {
      margin-left: -5px;
      border-left: none !important;
    }
    .swiper-slide:last-child {
      margin-right: 10px;
    }

    //
    .card-mini {
      display: flex;
      flex-direction: column;
      text-decoration: none !important;
      border-bottom: none !important;
      color: #000;
      width: 90%;
      max-width: 280px;
    }
  }
}

@media only screen and (min-width: 1024px) {
  .h2-title {
    font-size: 30px;
  }

  .swiper-slide {
    padding-left: 20px !important;
  }
}
@media screen and (max-width: 512px) {
  :deep(.swiper-slide-active) {
    margin: 0 0 0 10px !important;
  }
  .section-mixed-content-row .mini-swiper .swiper-slide:first-child {
    padding-left: 0 !important;
    margin-left: 0 !important;
  }
}
</style>
