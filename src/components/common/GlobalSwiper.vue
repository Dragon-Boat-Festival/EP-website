<template>
  <div class="bg">
    <div
      class="home-swiper-view animate__animated animate__fadeIn AN"
      :style="{backgroundColor: color}"
    >
      <!--         ref="background" -->
      <BackgroundMotion
        v-if="img_url"
        eClassName="section-featured-background"
        :style="{background: `url(${img_url})  left center/auto 85% no-repeat`}"
      />
      <!-- 整体容器 -->
      <div class="swiper-con con-box">
        <div class="swiper-content">
          <!-- swiper翻页器 -->
          <slot name="swiper-pagination"></slot>

          <slot name="h2"></slot>
          <slot name="subtitle"></slot>
          <span
            :style="{color: `${textColor}`}"
            class="animate__animated animate__fadeIn wow"
            data-wow-duration="1s"
            data-wow-delay=".7s"
          >{{ spanText }}</span>
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
      default: "var(--white)"
    },
    spanText: {
      type: String,
      default: ""
    },
    // 文字颜色
    textColor: {
      type: String,
      default: "var(--black)"
    }
  },
  components: {
    BackgroundMotion
  },
  data () {
    return {
      color: ""

    }
  },
  mounted () {
    this.color = this.backgroundColor
    this.$nextTick(() => {
      new this.$wow.WOW({
        live: false
      }).init()
    })
  },

  computed: {
    isDarks () {
      return this.$store.state.isDark
    }
  },
  watch: {
    isDarks: {
      handler: function (val, oldVal) {
        // console.log(val);
        if (this.backgroundColor == '#ffbe00') {
          this.color = this.backgroundColor
          if (val) {
            this.color = "rgb(224 167 0)"
          }
        }
        if (this.backgroundColor == '#62cbd7') {
          this.color = this.backgroundColor
          if (val) {
            this.color = "rgb(81 164 174)"
          }
        }
        if (this.backgroundColor == '#f96d8c') {
          this.color = this.backgroundColor
          if (val) {
            this.color = "rgb(200 86 111)"
          }
        }
        if (this.backgroundColor == '#afaa91') {
          this.color = this.backgroundColor
          if (val) {
            this.color = "rgb(145 141 120)"
          }
        }
        if (this.backgroundColor == '#00b474') {
          this.color = this.backgroundColor
          if (val) {
            this.color = "rgb(0 145 94)"
          }
        }
        if (this.backgroundColor == '#008fe2') {
          this.color = this.backgroundColor
          if (val) {
            this.color = "rgb(0 96 151)"
          }
        }
      }
    }
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
        color: var(--black);
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
