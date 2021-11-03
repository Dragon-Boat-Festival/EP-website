<template>
  <!--  精选文章 -->
  <GlobalSwiper swiperBg="swiper-pg" spanText="为你呈上近期环保热话及编辑推介文章，罗列国际和本地你不可不知道的重要资讯。">
    <template v-slot:swiper-pagination>
      <!-- swiper翻页器 -->
      <div :class="`swiper-pagination swiper-pg` "></div>
    </template>
    <template v-slot:h2>
      <h2
        class="h2 animate__animated animate__fadeIn wow"
        data-wow-duration="1s"
        data-wow-delay=".5s"
        style="color: var(--black)"
      >精选文章</h2>
    </template>
    <template v-slot:subtitle>
      <p
        class="subtitle animate__animated animate__fadeIn wow"
        data-wow-duration="1s"
        data-wow-delay=".8s"
      >FROM THE EARTH</p>
    </template>
    <template v-slot:right-swiper>
      <div class="article_list">
        <ArticleItem
          v-for="(item, index) in this.related_news"
          :news="item"
          :key="index"
          :index="index"
        />
      </div>
    </template>
  </GlobalSwiper>
</template>

<script>
import GlobalSwiper from "@/components/common/GlobalSwiper";
import ArticleItem from "@/components/selectedNews/ArticleItem";

export default {
  name: "SelectedNews",
  props: {
    related_news: {
      type: Array,
      default: []
    }
  },
  components: {
    GlobalSwiper,
    ArticleItem
  },
  mounted () {
    new this.$wow.WOW({
      live: false
    }).init()
    // this.$nextTick(() => {
    //   console.log(this.related_news)

    // })
  }
}
</script>

<style scoped>
@import '~@/assets/css/homeSwiper.css';

.article_list {
  margin-bottom: 20px;
}

@media only screen and (min-width: 1024px) {
  .article_list {
    margin-left: 20%;
    width: 65%;
    display: grid;
    grid-column-gap: 30px;
    margin-bottom: 0 !important;
    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  }
}
</style>
