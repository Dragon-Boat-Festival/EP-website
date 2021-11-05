<template>
  <div :class="`home-project-view ${className}`">
    <div class="project-view con-box">
      <!-- 左侧内容 -->
      <div class="project-left">
        <!-- swiper翻页器 -->
        <div class="swiper-pagination1 swiper-pg-white"></div>
        <slot name="h2"></slot>
        <slot name="span"></slot>
      </div>
      <!-- 右侧swiper -->
      <div class="project-right">
        <div class="swiper home-project-swiper">
          <div class="swiper-wrapper">
            <router-link
              class="swiper-slide animate__animated animate__fadeInRight wow"
              v-for="(item,index) in projectDate"
              :to="{name: 'epDetail',query:{type:0,id: item.id,name: item.name,types_id: item.ep_type.id }}"
              data-wow-duration="1s"
              :data-wow-delay="`${(index +  1) * 0.1}s`"
              :key="index"
            >
              <ProjectBox :projectData="item" :className="`${className}`" />
            </router-link>
          </div>
          <div class="swiper-button-next swiper-bt box-sha2"></div>
          <div class="swiper-button-prev swiper-bt box-sha2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectBox from "@/components/common/ProjectBox";
import Swiper from "swiper"
import "swiper/css/swiper.css"

export default {
  props: {
    projectDate: {
      type: Array,
      default: [],
    },
    className: {
      type: String,
      default: "light"
    },

  },
  components: {
    ProjectBox
  },
  mounted () {
    new this.$wow.WOW({
      live: false
    }).init()
    this.$nextTick(() => {
      this.initSwiper()
    })
  },

  methods: {
    initSwiper () {
      new Swiper(".home-project-swiper", {
        // slidesPerView: 3,
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
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination1",
          clickable: true,
        },
      })
    },
  }
}
</script>

<style lang="less" scoped>
.swiper-button-next {
  position: absolute !important;
  top: 36%;
  right: -2%;
}

.swiper-button-prev {
  position: absolute !important;
  top: 36%;
  left: 28%;
  z-index: 8;
}

.home-project-view {
  overflow-x: hidden;
  padding: 40px 0;
  .project-view {
    position: relative;

    .project-left {
      position: absolute;
      margin-left: 10px;
      width: 250px;
    }

    .project-right {
      margin-left: 330px;

      .home-project-swiper {
        overflow: visible;
        -webkit-clip-path: inset(-100vw -100vw -100vw 0);
        clip-path: inset(-100vw -100vw -100vw 0);

        .swiper-slide {
          width: auto !important;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 60px;
        }
      }
    }
  }
}

@media screen and (max-width: 1300px) {
  .swiper-button-next {
    position: absolute !important;
    top: 35%;
    right: 2% !important;
  }

  .swiper-button-prev {
    left: 355px;
  }

  .project-right {
    .home-project-swiper {
      .swiper-slide {
        margin-right: 50px !important;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .swiper-slide-active {
    margin: 0 !important;
  }
  .home-project-view {
    .project-view {
      flex-direction: column;

      .project-left {
        position: relative;
        width: 100%;
        margin-left: 0 !important;
        margin-bottom: 20px;
      }

      .project-right {
        margin-left: 0;

        .home-project-swiper {
          overflow: visible;
          -webkit-clip-path: inset(-100vw -100vw -100vw -20px);
          clip-path: inset(-100vw -100vw -100vw -20px);
        }
      }
    }
  }
}
</style>
