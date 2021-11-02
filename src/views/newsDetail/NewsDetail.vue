<template>
  <!-- 新闻详情页 -->
  <div class="news_detail">
    <!-- 头部banner    -->
    <CommonBanner :commonData="news_detail"/>
    <!--  新闻文字部分 -->
    <div class="con-box news-box" style="padding-left: 10px">
      <!-- 新闻头部 时间，专栏   -->
      <div class="meta-box">
        <div class="left-box">
          <span>专题报道</span>
          <span
              class="types"
              :style="{color: `${this.news_detail.ep_type?.color}`}"
          >{{ this.news_detail.ep_type?.name }}</span>
        </div>
        <span class="time">{{ this.news_detail.release_time?.substring(0, 10) }}</span>
      </div>
      <!--  文章标题  -->
      <h1 class="news_title">{{ this.news_detail?.title }}</h1>
      <!--   作者   -->
      <div class="meta-box">
        <span>作者：{{ this.news_detail?.author }}</span>
      </div>
      <div
          :style="{'--preBackground': `${news_detail.ep_type?.color}`}"
          class="newsDetail_content con-box"
          v-html="news_detail?.news_content"
      ></div>
    </div>
  </div>
  <!--  底部相关新闻  -->
  <!-- 相关新闻   -->
  <SectionRow
      background-color="var(--grayBackground)"
      v-if="about_news"
      :lastYear_news="about_news"
      h2-text="相关新闻"
  >
    <template v-slot:column-title>
      <div class="last-more">
        <h2 :style="{color: `${this.news_detail.ep_type?.color}`}"></h2>
      </div>
    </template>
  </SectionRow>
</template>

<script>
import {getNewsDetail} from "@/tools/request";
import CommonBanner from "@/components/common/CommonBanner";
import SectionRow from "@/components/common/SectionRow";

export default {
  name: "NewsDetail",
  components: {
    CommonBanner,
    SectionRow
  },
  data() {
    return {
      news_id: "", // 上一个页面需要传news_id
      news_detail: {}, // 新闻详情数据
      about_news: [], // 底部相关新闻
    }
  },
  mounted() {
    this.news_id = this.$route.query.news_id
    this._initData(this.news_id)
  },
  methods: {
    async _initData(news_id) {
      window.scrollTo(0, 0)
      const result = await getNewsDetail(news_id)
      console.log(result)
      if (!result.result.news_detail) return window.location.href = "/404"


      // 新闻详情数据赋值
      this.news_detail = result.result.news_detail
      this.about_news = result.result.about_news
      console.log(result)
    }
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        console.log(val);
        this._initData(val.query?.news_id)
      }
    }
  }
}
</script>

<style scoped lang="less">
.news-box {
  max-width: 900px;
}

:deep(.newsDetail_content) {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  // 板块
  pre {
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
    line-height: 3;
    background-color: var(--preBackground);
    color: white;
    padding: 60px 30px;
    margin: 40px 0;
  }

  // 图片
  img {
    max-width: 700px;
    width: 100%;
    margin-bottom: 8px;
    transition: opacity 140ms linear;
  }

  p {
    line-height: 2;
  }

  img:not(.full-width) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
  }
}

// 新闻详情
.news_detail {
  width: 100%;
  height: 100%;
  overflow: hidden;

  > * {
    position: relative;
    z-index: 2;
  }

  // 新闻详情 头部 时间 专栏
  .meta-box {
    display: flex;
    padding-top: 10px;
    color: var(--gray);
    line-height: 18px;
    font-size: 14px;
    margin: 16px 0;

    // 左边盒子
    .left-box {
      > span:first-child {
        margin-right: 10px;
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  // 新闻详情
  .news_detail {
    // 新闻详情 头部 时间 专栏
    .meta-box {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;
    }

    // 文章标题
    .news_title {
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
}
</style>
