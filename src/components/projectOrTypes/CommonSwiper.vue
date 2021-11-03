<template>
  <!-- 大盒子 -->
  <div class="boxes">
    <!--  文字盒子  -->
    <div
      class="box animate__animated animate__fadeIn wow"
      data-wow-duration="1s"
      data-wow-delay=".5s"
      :style="{background: `${type == 0 ? 'var(--white)': 'var(--twoBg)'}`}"
    >
      <div class="with-images">
        <h2 :style="{color: `${color}`}" v-if="type == 0">{{ h2Text }}</h2>
        <p :style="{color: `${color}`}">{{ swiperData.text }}</p>
      </div>
    </div>
    <!--  图片盒子  -->
    <div class="box fit">
      <!-- Swiper -->
      <div class="swiper section-text-images-swiper">
        <div class="swiper-wrapper small_img">
          <div
            v-for="(item, index) in JSON.parse(swiperData?.img_arr ? swiperData?.img_arr : `[]`)"
            :key="index"
            class="swiper-slide image"
            :style="{backgroundImage: `url(${item})`}"
          >
            <!--            <div class="swiper-lazy-preloader"></div>-->
          </div>
        </div>
        <div
          class="project-pagination"
          :style="{opacity: `${ JSON.parse(this.swiperData?.img_arr ? this.swiperData?.img_arr : `[]`).length > 1 ? '1': '0'}`}"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css"

export default {
  name: "CommonSwiper",
  props: {
    swiperData: {
      type: Object,
      default: {}
    },
    // 类型
    type: {
      type: Number,
    },
    // 颜色
    color: {
      type: String,
    },
    h2Text: {
      type: String,
      default: "你知道吗？"
    }
  },
  data () {
    return {
      img_arr: []
    }
  },
  mounted () {
    new this.$wow.WOW({
      live: false
    }).init()
    this.$nextTick(() => {
      this._init()
    })
  },
  // updated () {
  // console.log('123')
  // },
  methods: {
    _init () {
      const swiper = new Swiper(".section-text-images-swiper", {
        direction: 'horizontal', // 垂直切换选项
        loop: false, // 循环模式选项
        speed: 300,
        autoplay: true,
        // width: 90,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        // freeMode: true, //  freeMode: true, 。。默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
        slideToClickedSlide: true,
        centeredSlides: true,
        // spaceBetween: 1,
        preventClicksPropagation: false, //阻止click冒泡。拖动Swiper时阻止click事件。
        grabCursor: true,
        pagination: {
          el: ".project-pagination",
          clickable: true

        },
        slidesPerView: "auto",

        /*/// 懒加载
        lazy: {
          loadPrevNext: true, //允许将延迟加载应用到最接近的slide的图片（前一个和后一个slide）。
          loadOnTransitionStart: true // 默认当过渡到slide后开始加载图片，如果你想在过渡一开始就加载，设置为true
        },*/
      });

    }

  }
}
</script>

<style scoped lang="less">
.small_img > .swiper-slide-active {
  margin: 0 !important;
}

// 大盒子
.boxes {
  display: flex;
  flex-direction: column;
  width: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  // 文字盒子
  .box:first-child {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    z-index: 2;
  }

  .box {
    display: flex;
    -webkit-box-flex: 1;
    flex: 1;
    padding: 40px 20px;
    -webkit-box-pack: center;
    justify-content: center;
    min-width: 0;
    min-height: 300px;
    align-items: center;
    box-sizing: border-box;

    p {
      letter-spacing: 5px;
      line-height: 1.5;
    }
  }

  .fit {
    height: 300px;
    min-height: 300px;
    padding: 0 !important;
    width: 100%;
    z-index: 1 !important;

    // swiper
    .section-text-images-swiper {
      width: 100%;
      padding: 0;
      height: 100%;
      position: relative;

      .image {
        background-size: cover;
        background-position: center;
        //width: 600px;
      }
    }
  }
}

// 分页器样式
/deep/ .project-pagination {
  top: 13px;
  display: flex;
  padding: 0;
  position: absolute;
  z-index: 3;
  justify-content: center;
  width: 100%;
  text-align: center;

  .swiper-pagination-bullet {
    display: inline-block;
    width: auto;
    -webkit-box-flex: 1;
    flex: 1;
    background-color: #fff !important;
    height: 4px;
    border-radius: 4px;
    opacity: 0.3;
    cursor: pointer;
  }

  .swiper-pagination-bullet:first-child {
    margin-left: 38px;
  }

  .swiper-pagination-bullet:last-child {
    margin-right: 38px;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
  }
}

@media only screen and (min-width: 1024px) {
  .boxes {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row !important;

    .box {
      padding: 70px 0;
      min-height: 500px;
    }

    .fit {
      height: auto !important;
      min-height: 50px !important;
    }
  }

  .section-text-images .box .with-images h2,
  .section-text-images .box .with-images p {
    width: initial;
    margin-left: calc(((100vw - 960px) / 2) + 20px);
    margin-right: 80px;
    letter-spacing: 5px;
    line-height: 1.5;
  }
}

@media only screen and (min-width: 1280px) {
  .section-text-images .box .with-images h2,
  .section-text-images .box .with-images p {
    width: initial;
    margin-left: calc(((100vw - 1200px) / 2) + 20px) !important;
    margin-right: 120px !important;
  }
}
</style>
