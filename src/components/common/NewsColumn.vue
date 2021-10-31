<template>
  <router-link to="/" class="">
    <!--     图片       -->
    <div class="thumbnail lazy swiper-lazy "
         :data-background="news.main_img"
         data-was-processed="true">
      <div class="swiper-lazy-preloader"></div>
    </div>
    <!--     相关新闻信息       -->
    <div class="meta-box">
      <span class="time">{{ (news.release_time).substring(0, 10) }}</span>
      <span class="types" :style="{color: `${news.ep_type.color}`}">{{ news.ep_type.name }}</span>
    </div>
    <!--     新闻标题       -->
    <p class="news-title">{{ news.title }}</p>
  </router-link>
</template>

<script>

export default {
  name: "NewsColumn",
  props: {
    news: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped lang="less">
.thumbnail {
  width: 100%;
  height: 0;
  padding-top: 50%;
  border-radius: 3px;
  box-shadow: 0 0 15px 0 rgba(255, 255, 255, .5);
  background-color: #e5e8e9;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: box-shadow 140ms linear, -webkit-box-shadow 140ms linear;
  overflow: hidden;
}

.thumbnail:hover {
  box-shadow: 0 0 20px 0 rgba(90, 82, 82, 0.5);

}

.meta-box {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: 8px 0 0;
  display: flex;
  flex-direction: row;
  color: #898b92;
  font-size: 12px;
  line-height: 18px;

}

.news-title {
  line-height: 1.5
}

@media only screen and (min-width: 1024px) {
  .news-title {
    font-size: 22px;
  }
}
</style>
