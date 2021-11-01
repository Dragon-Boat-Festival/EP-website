<template>
  <session class="no_found">
    <BackgroundMotion
        eClassName="section-featured-background"
        :style="{background: `url(http://49.233.14.172:9999/imgs/2021/11/eda5b48aae9b9f8b.jpg) left center/auto 85% no-repeat`}"
    />
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
}
</style>
