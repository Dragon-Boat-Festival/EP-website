<template>
  <div class="slide-img box-sha0 AN" :style="{ backgroundImage: `url(${projectData.img_url})` }"></div>
  <div :class="`slide-text ${className}`">
    <p class="h4">{{ projectData.name }}</p>
    <p :style="{color:projectData.ep_type.color}">{{ projectData.ep_type.name }}</p>
    <a>{{ projectData.news_count }}篇专题报道</a>
  </div>
</template>

<script>
import { ElProgress } from 'element-plus';

export default {
  name: "ProjectBox",
  components: {
    ElProgress
  },
  props: {
    projectData: {
      type: Object,
      default: {}
    },
    className: {
      type: String,
      default: "light"
    }
  }
}
</script>

<style scoped lang="less">
.slide-img {
  width: 244px;
  height: 244px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
}

.slide-img:hover {
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.7);
}

.slide-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: inherit;

  .h4 {
    margin: 15px 0 0 0;
    color: inherit;
  }

  p {
    margin: 5px 0 0 0;
  }

  a {
    margin-top: 10px;
    font-size: 10px;
  }
}

.project-progress {
  position: absolute;
  top: 5px;
}

@media screen and (max-width: 1024px) {
  .slide-img {
    width: 200px;
    height: 200px;
  }
}

@media screen and (max-width: 512px) {
  .slide-img {
    width: 150px;
    height: 150px;
  }
}
</style>
