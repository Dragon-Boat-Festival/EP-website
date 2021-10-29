<template>
  <div class="home-project-view">
    <div class="project-view con-box">
      <!-- 左侧内容 -->
      <div
        class="project-left animate__animated animate__fadeIn wow"
        data-wow-duration="1s"
        data-wow-delay=".5s"
      >
        <!-- swiper翻页器 -->
        <div class="swiper-pagination1 swiper-pg-white"></div>
        <h2 class="h2">重点项目</h2>
        <span class="p">我们持续关注本地及全球环保议题，以不同项目跟进和推动实际改变。</span>
      </div>
      <!-- 右侧swiper -->
      <div class="project-right">
        <div class="swiper home-project-swiper">
          <div class="swiper-wrapper">
            <router-link
              to="/"
              class="swiper-slide"
              v-for="(item,index) in projectDate"
              :key="index"
            >
              <div
                class="slide-img box-sha0 AN"
                :style="{ backgroundImage: `url(${item.img_url})` }"
              ></div>
              <div class="slide-text">
                <p class="h4">{{item.name}}</p>
                <p :style="{color:item.ep_type.color}">{{item.ep_type.name}}</p>
                <a>{{item.news_count}}篇专题报道</a>
              </div>
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
import Swiper from "swiper"
import "swiper/css/swiper.css"

export default {
  props: ['projectDate'],
  mounted () {
    new this.$wow.WOW({
      live: false
    }).init()
    this.$nextTick(() => {
      this.initSwiper()
      console.log(this.projectDate);
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
  padding: 40px 0 20px 0;
  background-color: var(--twoBg);
  .project-view {
    position: relative;
    .project-left {
      position: absolute;
      top: 0;
      left: 20px;
      margin-left: 10px;
      color: var(--white);
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

          .slide-img {
            width: 244px;
            height: 244px;
            border-radius: 50%;
            background-position: center;
            background-size: cover;
          }
          .slide-img:hover {
            box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.7);
            -webkit-box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.7);
          }
          .slide-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: var(--white);
            .h4 {
              margin: 15px 0 0 0;
            }
            p {
              margin: 5px 0 0 0;
            }
            a {
              margin-top: 10px;
              font-size: 10px;
            }
          }
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
    // position: absolute;
    left: 34%;
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
  .home-project-view {
    .project-view {
      flex-direction: column;
      .project-left {
        width: 100%;
        margin-bottom: 20px;
      }
      .project-right {
        margin-left: 0;
        .home-project-swiper {
          // .swiper-slide {
          //   width: 33% !important;
          //   .slide-img {
          //     width: 200px !important;
          //     height: 200px !important;
          //   }
          // }
        }
      }
    }
  }
}
</style>