<template>
  <div class="home-issue con-box">
    <h2 class="h2">环保议题</h2>
    <p class="p">了解环保工作</p>

    <div class="swiper issue-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in types" :key="index">
          <img :src="item.img_url" alt />
          <h2>{{item.name}}</h2>
          <p>{{item.e_name}}</p>
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
        slidesPerView: 6,
        spaceBetween: 10,
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
    width: 90%;
    .swiper-wrapper {
      .swiper-slide {
        height: 245px;
        width: 19% !important;
        img {
          height: 100%;
        }
      }
    }
  }
}
</style>