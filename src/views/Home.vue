<template>
  <div class="home">
    <home-swiper v-if="homeData.banner_news" :banner-news="homeData.banner_news" />
    <home-project v-if="homeData.project_date" :project-date="homeData.project_date" />
  </div>
</template>
<script>
import homeSwiper from "@/components/Home/homeSwiper"
import homeProject from "@/components/Home/homeProject"

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
    homeSwiper,
    homeProject
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