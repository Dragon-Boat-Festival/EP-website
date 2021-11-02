<template>
  <div
      ref="bgm"
      :class="`${eClassName} js-parallax-me`"
      :style="{ transform: `translate3d(0px, 0px, 0px)`}"
  ></div>
</template>

<script>
// import Tools from "@/tools/tools";

export default {
  name: "BackgroundMotion.vue",
  props: {
    eClassName: {type: String, default: ""}
  },
  data() {
    return {
      prevTop: 0,
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.backgroundMotion()
      }, 1000);
    })
  },
  methods: {
    backgroundMotion() {
      console.log('123')
      const winHeight = window.innerHeight //窗口高

      // console.log(this.elClassName)
      const El = document.querySelector(`.${this.eClassName}`)
      const divHeight = El.offsetHeight // 盒子高度
      const divTop = this.$refs.bgm.getBoundingClientRect().top //盒子距离html顶部高度
      console.log(divTop);

      // console.log(divHeight)
      // 监听滚动条
      this.prevTop = divTop
      window.addEventListener('scroll', () => {
        //滚动条滚动高度
        const winTop = document.documentElement.scrollTop

        if (winTop + winHeight > divTop && winTop < divTop + divHeight) {
          //判断div是否出现在屏幕

          if (winTop >= this.prevTop) {
            //滚动条往下

            El.style.transform = `translate3d(0px, ${window.scrollY *
            -0.15}px, 0px)`
          } else {
            //滚动条往上

            El.style.transform = `translate3d(0px, ${window.scrollY *
            -0.15}px, 0px)`
          }
          this.prevTop = document.documentElement.scrollTop
        }
      })
      // console.log(divTop)
    },
  },
}
</script>

<style scoped lang="less">
</style>
