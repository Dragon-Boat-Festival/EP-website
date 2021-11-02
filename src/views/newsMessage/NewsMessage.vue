<template>
  <!-- 最新消息页 -->
  <!-- 头部banner   -->
  <GlobalSwiper
      v-if="homeData.banner_news"
      swiperBg="swiper-pg"
      spanText="你知道吗？地球现在有多少个问题。土壤被破坏、气候变化带来温室效应、生物多样性减少、森林面积减少......"
  >
    <template v-slot:swiper-pagination>
      <!-- swiper翻页器 -->
      <div :class="`swiper-pagination swiper-pg` "></div>
    </template>
    <template v-slot:h2>
      <h2 class="h2" style="color: var(--green)">行动带来改变</h2>
    </template>
    <template v-slot:subtitle>
      <p class="subtitle">保护环境，人人有责</p>
    </template>
    <template v-slot:right-swiper>
      <div class="swiper home-swiper">
        <!-- 单个swiper -->
        <div class="swiper-wrapper">
          <div
              class="swiper-slide"
              v-for="(item,index) in homeData.banner_news"
              :key="index"
              @click="this.$router.push({path:'/newsDetail', query: { news_id: item.news_id }})"
          >
            <div class="slide-con box-sha1 AN">
              <div class="left-img" :style="{ backgroundImage: `url(${item.main_img})` }"></div>
              <div class="right-content">
                <div class="title">
                  <p :style="{color:item.ep_type.color}">
                    {{ item.ep_type.name }}
                    <span>专题报道</span>
                  </p>
                  <span>{{ (item.release_time).substring(0, 10) }}</span>
                </div>
                <p class="box-p">{{ item.title }}</p>
                <span class="button ANM bor-rad box-sha1">立即浏览</span>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-next swiper-bt box-sha2"></div>
        <div class="swiper-button-prev swiper-bt box-sha2"></div>
      </div>
    </template>
  </GlobalSwiper>
</template>

<script>
import GlobalSwiper from "@/components/common/GlobalSwiper";
import {getNewsMessage} from "@/tools/request";

export default {
  name: "NewsMessage",
  components: {
    GlobalSwiper
  },
  mounted() {
    this._initData()
  },
  methods: {
    async _initData() {
      const result = await getNewsMessage()
      console.log(result)
    }
  },
}
</script>

<style scoped>

</style>
