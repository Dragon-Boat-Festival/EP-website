<template>
  <session class="no_found">
    <!-- 背景   -->
    <BackgroundMotion
        eClassName="banner_background"
        :style="{background: `url(http://49.233.14.172:9999/imgs/2021/11/eda5b48aae9b9f8b.jpg)`}"
    />
    <div class="section-hero-shade"></div>
    <!-- 内容   -->
    <div class="noFound_content con-box">
      <h2>抱歉，此网页可能已经不存在（就像我们的冬天）…</h2>
    </div>
  </session>
</template>

<script>
import BackgroundMotion from "@/components/common/BackgroundMotion";

export default {
  name: "NoFound",
  components: {
    BackgroundMotion
  }
}
</script>

<style scoped lang="less">

.no_found {
  display: flex;
  height: 75vh;
  min-height: 400px;
  background-image: linear-gradient(to bottom, rgba(238, 238, 238, 0) 0%, #eee 100%);
  position: relative;
  z-index: 2;
  padding: 0 !important;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  // 背景
  .banner_background {
    position: absolute;
    left: 0;
    right: 0;
    background-size: cover !important;
    background-position: center !important;
    top: -34px;
    bottom: -100px;
    transition: transform 100ms ease-out, -webkit-transform 100ms ease-out;
  }

  // 阴影
  .section-hero-shade {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 45px;

  }

  .section-hero-shade::before {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    height: 101px;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), #000);
    content: '';
  }

  .section-hero-shade::after {
    height: 210px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 64%, #000 74%, #000 100%);
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
  }

  // 文字
  .noFound_content {
    color: var(--white);
    position: absolute;
    font-size: 16px;
    bottom: 5%;
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    height: calc(100% - 200px) !important;

    h2 {
      text-align: left;
      padding-left: 10px;
      display: flex;
      line-height: 1.5;
    }
  }
}

@media only screen and (min-width: 1024px) {
  // 阴影
  .section-hero-shade {
    top: 0 !important;
  }

  .section-hero-shade::after {
    height: 100% !important;
    background-image: linear-gradient(to right, #000 5%, rgba(0, 0, 0, 0) 50%);
    background-image: -webkit-gradient(linear, left top, right top, color-stop(5%, #000), color-stop(50%, rgba(0, 0, 0, 0))) !important;
  }

  // 文字
  .noFound_content {
    width: 500px !important;
    -webkit-box-direction: normal;
    bottom: 20% !important;
    left: 15% !important;
    font-size: 26px !important;
    justify-content: space-around !important;

  }
}
</style>
