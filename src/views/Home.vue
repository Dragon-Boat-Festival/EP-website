<template>
  <div class="home">
    <home-swiper v-if="homeData.banner_news" :banner-news="homeData.banner_news" />
    <h1>1</h1>
  </div>
</template>
<script>
import homeSwiper from "@/components/Home/homeSwiper"

import { getHomeData } from '@/tools/request'

export default {
  name: 'Home',
  data () {
    return {
      homeData: {},
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getData()
    })
  },
  components: {
    homeSwiper
  },
  methods: {
    async getData () {
      // console.log(result);
      let res = await getHomeData()
      this.homeData = res.data.result
      console.log(this.homeData);
    },
  }
}
</script>