<template>
  <!-- 新闻详情页 -->
  <div class="news_detail">
    <!-- 头部banner    -->
    <section class="section-hero-top">
      <!-- 头部背景 -->
      <BackgroundMotion eClassName="background" :style="{backgroundImage: `url(${this.news_detail?.banner_url})`}"/>


    </section>
  </div>

</template>

<script>
import {getNewsDetail} from "@/tools/request";
import BackgroundMotion from "@/components/common/BackgroundMotion";

export default {
  name: "NewsDetail",
  components: {
    BackgroundMotion
  },
  data() {
    return {
      news_id: "46125674281294", // 上一个页面需要传news_id
      news_detail: {}, // 新闻详情数据
      about_news: [], // 底部相关新闻
    }
  },
  mounted() {
    this._initData(this.news_id)
  },
  methods: {
    async _initData(news_id) {
      const result = await getNewsDetail(news_id)
      // 新闻详情数据赋值
      this.news_detail = result.result.news_detail
      this.about_news = result.result.about_news
      console.log(result)
    }
  }
}
</script>

<style scoped lang="less">
.news_detail {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
