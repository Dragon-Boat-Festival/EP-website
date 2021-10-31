<template>
  <!-- projectOrTypes 公共盒子  -->
  <section :class="`section-text-images only-text ${theme}  text-align-default column-two`">

    <slot name="content"></slot>
  </section>
</template>

<script>
export default {
  props: {
    theme: {type: String, default: "light-theme"} // 主题颜色
  },
  name: "CommonBox"
}
</script>

<style scoped lang="less">

.section-text-images {
  padding: 0 !important;
  display: flex;
  -webkit-box-align: stretch;
  align-items: stretch;
  display: flex;
  align-items: center;

}

// 白色主题
.section-text-images.light-theme {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(238, 238, 238, 0)), to(#eee));
  color: black;
}

// 黑色主题
.section-text-images.dark-theme {
  background: #292f47;
  color: #fff;
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(238, 238, 238, 0)), to(rgba(9, 7, 54, 0.65)));;
}

.text-align-center {
  text-align: center;
}


</style>
