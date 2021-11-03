<template>
  <!-- 精选文章模块中的 文章 -->
  <router-link
    :to="{ path: '/newsDetail', query: {news_id: news?.news_id} }"
    class="card-update compact"
    :style="{borderBottom: `${index < 2 ? '1px solid var(--gray) !important': 'none'}`}"
  >
    <!--  左边文字  -->
    <div class="left-content">
      <!--   上部分     -->
      <div class="meta-box">
        <span class="types" :style="{color: `${news.ep_type?.color}`}">{{ news.ep_type?.name }}</span>
        <span>专题报道</span>
      </div>
      <!--   中间 文章标题     -->
      <p class="title">{{ news?.title }}</p>
      <!--   底部时间     -->
      <span class="time meta-box">{{ news.release_time?.substring(0, 10) }}</span>
    </div>
    <!--  右边图片  -->
    <div class="right-img" :style="{backgroundImage: `url(${news?.main_img})`}"></div>
    <!--    {{ news }}-->
  </router-link>
</template>

<script>
export default {
  name: "ArticlesItem",
  props: {
    news: {
      type: Object,
      default: {}
    },
    index: {
      type: Number,
    }
  }
}
</script>

<style scoped lang="less">
//  外层盒子
.compact {
  align-items: center;
  width: 100%;
  padding: 20px 0;
}

.card-update {
  display: flex;
  justify-content: space-between;
  text-decoration: none !important;
  border-bottom: none !important;
  color: var(--black);
}

// 左边部分
.left-content {
  width: 70%;
  display: flex;
  flex-direction: column;

  // 文字
  .meta-box {
    margin: 8px 0 0;
    display: flex;
    flex-direction: row;
    color: #898b92;
    font-size: 12px;
    line-height: 18px;

    // 分类
    .types {
      padding-right: 10px;
    }
  }

  // 文章标题
  .title {
    line-height: 1.5;
    align-items: center;
    margin: 0;
    -webkit-box-align: center;
    display: flex;
    margin: 5px 0;
  }

  // 时间
  .time {
    margin-right: 0;
  }
}

// 右边图片
.right-img {
  width: 95px;
  height: 95px;
  border-radius: 3px;
  box-shadow: 0 0 8px 0 rgb(199, 196, 196);
  background-color: #e5e8e9;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: box-shadow 140ms linear, -webkit-box-shadow 140ms linear;
  overflow: hidden;
}

@media only screen and (min-width: 1024px) {
  .compact {
    height: auto;
    clear: both;
    /*文字盒子*/

    // 左边
    .left-content {
      display: block;
      padding-bottom: 0;
      padding-left: 0;
      // 上面
      .meta-box {
        -webkit-box-orient: vertical;
        flex-direction: row;
        -webkit-box-direction: normal;
        -webkit-box-pack: start;
        justify-content: flex-start;
        -webkit-box-align: start;
        align-items: flex-start;
      }

      // 文章标题
      .title {
        font-size: 22px;
        min-height: 85px;
        font-size: 22px;
        margin: 0 !important;
      }
    }

    // 右边图片
    .right-img {
      width: 95px;
      height: 95px;
    }

    /*w外层盒子*/

    .card-update:not(.force-mobile) .box {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
    }
  }
}
</style>
