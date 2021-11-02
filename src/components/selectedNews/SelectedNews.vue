<template>
  <!--  精选文章 -->
  <GlobalSwiper
      swiperBg="swiper-pg"
      spanText="为你呈上近期环保热话及编辑推介文章，罗列国际和本地你不可不知道的重要资讯。"
      
  >
    <template v-slot:swiper-pagination>
      <!-- swiper翻页器 -->
      <div :class="`swiper-pagination swiper-pg` "></div>
    </template>
    <template v-slot:h2>
      <h2 class="h2" style="color: var(--black)">精选文章</h2>
    </template>
    <template v-slot:subtitle>
      <p class="subtitle">FROM THE EARTH</p>
    </template>
    <template v-slot:right-swiper>
      <div class="article_list">
        <ArticleItem/>
      </div>
    </template>
  </GlobalSwiper>
</template>

<script>
import GlobalSwiper from "@/components/common/GlobalSwiper";
import ArticleItem from "@/components/selectedNews/ArticleItem";

export default {
  name: "SelectedNews",
  components: {
    GlobalSwiper,
    ArticleItem
  }
}
</script>

<style scoped>
@import '~@/assets/css/homeSwiper.css';

.article_list {

}

@media only screen and (min-width: 1024px) {
  .article_list {
    width: 65%;
    display: grid;
    grid-column-gap: 30px;
    grid-template-columns:repeat(auto-fill, minmax(45%, 1fr));
  }
}
</style>
