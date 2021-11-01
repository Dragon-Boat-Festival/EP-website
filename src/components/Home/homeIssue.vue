<template>
  <div class="home-issue con-box">
    <h2 class="h2">环保议题</h2>
    <p class="p">了解环保工作</p>

    <div class="swiper issue-swiper AN">
      <div class="swiper-wrapper AN">
        <div class="swiper-slide AN" v-for="(item,index) in types" :key="index">
          <div class="img-box box-sha0 AN" :style="{backgroundImage: `url(${item.img_url})`}">
            <h1>{{item.name}}</h1>
            <p :style="{background: `${item.color}`}">{{item.e_name}}</p>
          </div>
          <span>{{item.main_text}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/css/swiper.css"

export default {
  props: ['types'],
  mounted () {
    this.initSwiper()
  },
  methods: {
    initSwiper () {
      new Swiper(".issue-swiper", {
        slidesPerView: 'auto',
        // slidesPerGroup: 3,
        spaceBetween: 14,
      });
    }
  }
}
</script>

<style lang="less" scoped>
.home-issue {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  .h2 {
    margin-bottom: 10px;
  }
  .p {
    margin: 10px 0 40px 0;
  }
  .issue-swiper {
    width: 96%;
    .swiper-wrapper {
      .swiper-slide {
        width: 180px !important;
        height: 305px;
        .img-box:hover {
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.8x);
        }
        .img-box {
          height: 245px;
          background-size: cover;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex-direction: column;
          border-radius: 8px;
          cursor: pointer;
          h1 {
            margin-bottom: 15px;
            color: var(--white);
            font-size: 60px;
          }
          p {
            width: 100%;
            height: 40px;
            line-height: 40px;
            color: var(--white);
            letter-spacing: 8px;
            text-align: center;
            margin: 0;
            border-radius: 0 0 8px 8px;
          }
        }
        span {
          display: inline-block;
          margin: 15px 0;
          text-align: center;
          font-size: 16px;
          line-height: 1.3;
        }
      }
    }
  }
}
@media screen and (max-width: 1300px) {
  .home-issue {
    padding: 40px 0;
    .issue-swiper {
      width: 100%;
      .swiper-wrapper {
        justify-content: space-around;
        .swiper-slide {
          width: 145px !important;
          height: 270px;
          .img-box {
            height: 190px;
            h1 {
              font-size: 44px;
            }
          }
          span {
            font-size: 14px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .home-issue {
    .issue-swiper {
      .swiper-wrapper {
        .swiper-slide {
          height: auto;
          .img-box {
          }
          span {
            display: none;
          }
        }
      }
    }
  }
}
</style>