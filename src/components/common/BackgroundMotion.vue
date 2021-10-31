<template>
  <div :class="`${eClassName} js-parallax-me`"
       :style="{ transform: `translate3d(0px, 0px, 0px)`}">

  </div>
</template>

<script>
import Tools from "@/tools/tools";

export default {
  name: "BackgroundMotion.vue",
  props: {
    eClassName: {type: String, default: ""}
  },
  mounted() {
    this.$nextTick(() => {
      Tools.backgroundMotion(this.eClassName)
    })
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.js-parallax-me {
  width: 120%;
  height: 120%;
}
</style>
