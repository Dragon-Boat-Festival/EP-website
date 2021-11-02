<template>
  <nav-bar v-if="this.$store.state.isData" />

  <router-view v-slot="{ Component }">
    <transition name="el-fade-in-linear">
      <keep-alive include="Home">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>

  <footer-view v-if="this.$store.state.isData" />
</template>
<script>
import NavBar from '@/components/common/NavBar'
import FooterView from '@/components/common/FooterView'
export default {
  components: {
    NavBar,
    FooterView
  }
}
</script>

<style lang="less">
@import '~@/assets/css/base.css';
</style>
