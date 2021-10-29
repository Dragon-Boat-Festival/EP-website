<template>
  <div class="bg">
    <div class="home-swiper-view animate__animated animate__fadeIn AN">
      <!-- 整体容器 -->
      <div class="swiper-con con-box">
        <!-- 右侧内容 -->
        <div class="swiper-content">
          <!-- swiper翻页器 -->
          <div class="swiper-pagination swiper-pg"></div>
          <h2 class="h2">行动带来改变</h2>
          <p class="subtitle">保护环境，人人有责</p>
          <span class="p">你知道吗？地球现在有多少个问题。土壤被破坏、气候变化带来温室效应、生物多样性减少、森林面积减少......</span>
        </div>
        <!-- swiper整体 -->
        <div class="swiper home-swiper">
          <!-- 单个swiper -->
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in bannerNews" :key="index">
              <div class="slide-con box-sha1 AN">
                <div class="left-img" :style="{ backgroundImage: `url(${item.main_img})` }"></div>
                <div class="right-content">
                  <div class="title">
                    <p :style="{color:item.ep_type.color}">
                      {{item.ep_type.name}}
                      <span>专题报道</span>
                    </p>
                    <span>{{(item.release_time).substring(0,10)}}</span>
                  </div>
                  <p class="box-p">{{item.title}}</p>
                  <span class="button ANM bor-rad box-sha1">立即浏览</span>
                </div>
              </div>
            </div>
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
  props: ['bannerNews'],
  mounted () {
    this.$nextTick(() => {
      this.initSwiper()
    })
  },
  updated () {
    this.$nextTick(() => {


    })
  },
  methods: {
    initSwiper () {
      new Swiper(".home-swiper", {
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
          el: ".swiper-pagination",
          clickable: true,
        },
      })
    },
  }
}

</script>

<style lang="less" scoped>
/deep/.swiper-slide-active {
  margin: 0 100px 0 25px;
}
.bg {
  background-image: linear-gradient(
    to bottom,
    rgba(238, 238, 238, 0) 0%,
    #eee 100%
  );
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(238, 238, 238, 0)),
    to(#eee)
  );
}
.home-swiper-view {
  height: 610px;
  overflow-x: hidden;
  background-color: #f0f0f0;
  background: url('~@/assets/images/world.webp') left center/auto 140% no-repeat;
  .swiper-con {
    display: flex;
    margin-top: 40px;
    .swiper-content {
      margin-left: 10px;
      width: 250px;
      h2 {
        color: var(--green);
        margin-bottom: 20px;
      }
      span {
        margin-top: 20px;
      }
    }
    .home-swiper {
      margin-left: 70px;
      width: 860px;
      height: 525px;
      overflow: visible;
      clip-path: inset(-100vw -100vw -100vw -15px);
      .swiper-slide {
        transition: all 0.3s;
        .slide-con {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          overflow: auto;
          cursor: pointer;
          background-color: var(--white);
          margin-left: -25px;
          .left-img {
            border-radius: 10px 0 0 10px;
            float: left;
            width: 58%;
            height: 100%;
            background-color: var(--white);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
          .right-content {
            height: 98%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 20px;
            border-top: 5px solid var(--button);
            .title {
              display: flex;
              align-items: center;
              flex-direction: column;
              height: 50px;
              line-height: 0.1;
              span {
                font-weight: normal;
                font-size: 14px;
                color: var(--gray);
              }
            }
            span {
              font-weight: bold;
              margin-top: 10px;
              color: var(--button);
              background-color: var(--white);
            }
            span:hover {
              background-color: rgb(245, 245, 245);
            }
          }
        }
        .slide-con:hover {
          box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.4);
          -webkit-box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
}
.swiper-button-prev {
  position: relative !important;
  top: -53.5% !important;
  left: -10px !important;
}
.swiper-button-next {
  position: relative !important;
  top: -50% !important;
  left: 102% !important;
}
@media screen and (max-width: 1300px) {
  .home-swiper-view {
    height: 550px;
    background: url('~@/assets/images/world.webp') left center/auto 120%
      no-repeat;
    .home-swiper {
      width: 625px !important;
      height: 460px !important;
      .swiper-slide {
        .slide-con {
          .right-content {
            .title {
              line-height: 0.4 !important;
            }
            p {
              margin: 20px 0 10px 0 !important;
            }
          }
        }
      }
    }
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
      .home-swiper {
        width: 90% !important;
        height: 856px !important;
        margin-left: 0 !important;
        .swiper-slide {
          .slide-con {
            height: 65% !important;
            .left-img {
              width: 100%;
              height: 64% !important;
              border-radius: 10px 10px 0 0 !important;
            }
            .right-content {
              height: 35% !important;
              p {
                margin: 10px 0 10px 0 !important;
              }
            }
          }
        }
      }
    }
  }
  /deep/.swiper-slide-active {
    margin: 0 20px 0 25px;
  }
}
</style>