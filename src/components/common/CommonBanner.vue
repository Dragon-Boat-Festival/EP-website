<template>
  <!-- 公共 banner 图片 -->
  <section class="section-hero-top">
    <!--   背景   -->
    <BackgroundMotion
      eClassName="banner_background"
      :style="{backgroundImage: `url(${commonData?.banner_url})`}"
    />
    <!--   黑阴影   -->
    <div class="section-hero-shade"></div>
    <!--  文字内容部分    -->
    <div class="ct-container">
      <div class="content">
        <div class="top-bar">
          <a class="back-button">
            <i class="iconfont icon-zuo ANM" @click="this.$router.go(-1)">上一页</i>
          </a>
        </div>
        <div class="hero-issue-title">
          <h1>{{ commonData?.name }}</h1>
          <p>{{ commonData?.e_name }}</p>
        </div>
      </div>
    </div>
  </section>
  <!-- 文章部分 -->
  <div class="con-box"></div>
</template>

<script>
import BackgroundMotion from "@/components/common/BackgroundMotion";

export default {
  name: "CommonBanner",
  components: {
    BackgroundMotion
  },
  props: {
    commonData: {
      type: Object,
      default: {}
    }

  },
  mounted () {
    console.log(this.$route)
  }
}
</script>

<style scoped lang="less">
// 头部banner 部分
.section-hero-top {
  position: relative;
  height: 70vh;
  padding: 0 !important;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  /*banner图片盒子 projectOrTypes.vue and newsDetail.vue*/

  .banner_background {
    position: absolute;
    left: 0;
    right: 0;
    background-size: cover;
    background-position: center;
    top: -34px;
    bottom: -100px;
    transition: transform 100ms ease-out, -webkit-transform 100ms ease-out;
  }

  // 黑阴影
  .section-hero-shade {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
  }

  // 黑阴影-上
  .section-hero-shade::before {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    height: 101px;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), #000);
    content: '';
  }

  // 黑阴影-下
  .section-hero-shade::after {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 210px;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.7)
    );
    content: '';
  }

  // banner 文字部分
  .ct-container:not {
    position: relative;
  }

  //banner 文字部分
  .ct-container {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    z-index: 20;
    // 内容
    .content {
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      -webkit-box-pack: justify;
      justify-content: space-between;
      height: 100%;
      // banner 顶部 导航栏
      .top-bar {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding: 20px 0;
        -webkit-box-align: center;
        align-items: center;
        z-index: 5;
        // 返回按钮
        .back-button {
          text-decoration: none;
          border-bottom: none !important;
          color: #fff;
          // 图标
          .icon-zuo {
            font-weight: bolder;
            font-size: 18px;
          }
        }
      }

      // 全球议题文字部分
      .hero-issue-title {
        color: #fff;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        z-index: 5;
        // 标题
        h1 {
          font-size: 40px;
          line-height: 0;
          letter-spacing: 10px;
          text-align: center;
        }

        // p
        p {
          font-size: 16px;
          line-height: 21px;
          letter-spacing: 8px;
          text-transform: uppercase;
          font-family: Montserrat;
          line-height: 21px;
          margin-bottom: 50px;
        }
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  // banner 文字
  .hero-issue-title {
    h1 {
      font-size: 80px !important;
      line-height: 0 !important;
      letter-spacing: 16.7px !important;
      color: #fff;
    }

    p {
      font-size: 22px;
      letter-spacing: 11px;
      margin-bottom: 90px;
    }
  }

  // banner 下部分 文字
  .ct-container {
    .content {
      .top-bar {
        padding: 20px 10px !important;
      }
    }

    h2 {
      font-size: 30px !important;
    }
  }
}

@media only screen and (min-width: 1280px) {
  // banner 文字部分
  .ct-container {
    max-width: 1200px;
  }

  .ct-container.slim {
    padding: 0 120px;
  }
}
</style>
