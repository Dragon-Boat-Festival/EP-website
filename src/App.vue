<template>
  <nav-bar v-if="this.$store.state.isData" />

  <router-view v-slot="{ Component }">
    <transition name="el-fade-in-linear">
      <keep-alive include="Home">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>
<script>
import NavBar from '@/components/common/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="less">
@import '~@/assets/css/base.css';
</style>
