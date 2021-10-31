<template>'
  <!-- 文章 分栏部分 共用模块 -->
  <section class="section-mixed-content-row layout-default text-align-default ">

    <div class="ct-container">
      <!-- h2-title 标题 在头部 相关推荐新闻 -->
      <!--      <div class="h2-title">
              <h2 class="h2">
                相关文章 </h2>
            </div>-->

      <slot name="column-title"></slot>
      <!--  swiper    -->
      <div class="swiper-container mini-swiper">
        <div class="swiper-wrapper">

          <NewsColumn class="swiper-slide card-mini mini-update" v-for="(item, index) in lastYear_news" :news="item"
                      :key="index"></NewsColumn>

        </div>
        <div class="swiper-button-prev swiper-bt box-sha2"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
        <div class="swiper-button-next swiper-bt box-sha2"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
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
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._init()
    })
  },
  methods: {
    _init() {
      const swiper = new Swiper('.mini-swiper', {
        direction: 'horizontal', // 垂直切换选项
        initialSlide: 2, // 初始化
        loop: false, // 循环模式选项
        // width: 90,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        // freeMode: true, //  freeMode: true, 。。默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
        slideToClickedSlide: true,
        centeredSlides: true,
        slidesPerView: "auto",
        lazyLoading: true,
        // spaceBetween: 1,
        preventClicksPropagation: true, //阻止click冒泡。拖动Swiper时阻止click事件。

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
.section-mixed-content-row {
  min-height: 0 !important;
  padding: 20px 0 !important;
  //overflow: hidden;

  .h2-title {
    margin-bottom: 3rem;

    h2 {
      text-align: center;
    }
  }

  // 轮播
  .mini-swiper {
    padding-top: 15px;
    padding-bottom: 15px;
    overflow: visible;

    .swiper-wrapper {
      -webkit-box-align: stretch;
      align-items: stretch;
    }

    .swiper-slide {
      padding-left: 20px;
      margin-right: 0;
      margin-left: 20px;
      height: auto;
      border-left: 1px solid rgba(0, 0, 0, .2);
    }

    .swiper-slide:first-child {
      margin-left: -20px;
      border-left: none !important;
    }

    //
    .card-mini {
      display: block;
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

  h1:first-child, h2:first-child {
    margin-top: 0;
  }
}

</style>
