<template>
  <div class="home-issue con-box">
    <h2
      class="h2 animate__animated animate__fadeIn wow"
      data-wow-duration="1s"
      data-wow-delay=".5s"
    >环保议题</h2>
    <p
      class="p animate__animated animate__fadeIn wow"
      data-wow-duration="1s"
      data-wow-delay=".7s"
    >了解环保工作</p>

    <div class="swiper issue-swiper AN">
      <div class="swiper-wrapper AN">
        <router-link
          class="swiper-slide AN"
          v-for="(item,index) in types"
          :key="index"
          :to="{name: 'epDetail',query:{type:1,id: item.id,name: item.name,types_id: item.id }}"
        >
          <div class="img-box box-sha0 AN" :style="{backgroundImage: `url(${item.img_url})`}">
            <h1>{{item.name}}</h1>
            <p :style="{background: `${item.color}`}">{{item.e_name}}</p>
          </div>
          <span>{{item.main_text}}</span>
        </router-link>
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
    new this.$wow.WOW({
      live: false
    }).init()
    this.initSwiper()
  },
  methods: {
    initSwiper () {
      new Swiper(".issue-swiper", {
        slidesPerView: 'auto',
        // slidesPerView: 1,
        spaceBetween: 14,
        loop: false,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
      });
    }
  }
}
</script>

<style lang="less" scoped>
:deep(.swiper-slide-active) {
  margin: 0 15px 0 15px !important;
}
.home-issue {
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  .h2 {
    margin-bottom: 10px;
  }
  .p {
    margin: 10px 0 40px 0;
  }
  .issue-swiper {
    width: 96%;
    .swiper-wrapper {
      padding: 10px 0;
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
@media screen and (max-width: 1024px) {
  .home-issue {
    margin-bottom: 0px;
    .p {
      margin: 10px 0 20px 0;
    }
    .issue-swiper::-webkit-scrollbar {
      display: none;
    }
    .issue-swiper {
      overflow: scroll;

      .swiper-wrapper {
        justify-content: normal;
        .swiper-slide {
          height: auto;
          span {
            display: none;
          }
        }
      }
    }
  }
}
</style>