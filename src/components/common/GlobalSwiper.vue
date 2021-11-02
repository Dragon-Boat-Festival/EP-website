<template>
  <div class="bg">
    <div class="home-swiper-view animate__animated animate__fadeIn AN" :style="{backgroundColor}">
      <!--         ref="background" -->
      <BackgroundMotion
          v-if="img_url"
          eClassName="section-featured-background"
          :style="{background: `url(${img_url})  left center/auto 85% no-repeat`}"
      />
      <!-- 整体容器 -->
      <div class="swiper-con con-box" style="display: flex; justify-content: space-between">
        <div class="swiper-content">
          <!-- swiper翻页器 -->
          <slot name="swiper-pagination"></slot>

          <slot name="h2"></slot>
          <slot name="subtitle"></slot>
          <span :style="{color: `${textColor}`}">{{ spanText }}</span>
        </div>
        <!-- swiper整体 -->
        <!-- 右侧内容 -->
        <slot name="right-swiper"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css"
// 背景图片
import BackgroundMotion from "@/components/common/BackgroundMotion";


export default {
  name: "GlobalSwiper",
  props: {

    // 背景图片
    img_url: {
      type: String,
      default: ""
    },
    // 背景颜色
    backgroundColor: {
      type: String,
      default: "#f0f0f0"
    },
    // 翻牌器背景颜色
    /*swiperBg: {
      type: String,
      default: "swiper-pg-white"
    },*/
    spanText: {
      type: String,
      default: ""
    },
    // 文字颜色
    textColor: {
      type: String,
      default: "#000"
    }
  },
  components: {
    BackgroundMotion
  },
  mounted() {
    this.$nextTick(() => {
      // setTimeout(() => {
      // console.log(this.$refs['background'].$el.offsetHeight);

      // }, 1800)

    })
  }
}

</script>

<style lang="less" scoped>
// banner背景图片样式
.section-featured-background {
  top: -100px;
  height: 900px;
  bottom: -100px;
  position: absolute;
  left: 0;
  right: 0;
  transition: transform 100ms ease-out, -webkit-transform 100ms ease-out;
}

.home-swiper-view {
  height: 610px;
  overflow-x: hidden;

  .swiper-con {
    display: flex;
    margin-top: 40px;

    .swiper-content {
      margin-left: 10px;
      width: 250px;

      span {
        line-height: 1.5;
      }
    }
  }
}

@media screen and(max-width: 1300px) {
  .home-swiper-view {
    height: 550px;
  }
}

@media screen and (max-width: 1024px) {
  .home-swiper-view {
    height: 730px;
    overflow: hidden;

    .swiper-con {
      flex-direction: column;

      .swiper-content {
        margin-left: 0 !important;

        span {
          display: none;
        }
      }
    }
  }
}
</style>
