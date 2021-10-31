<template>
  <div :style="{transform: `rotate(${Math.floor(Math.random() * (0 - 2)) + 0})`}" class="tip">
    <div class="meta-box">
      <span>每天</span>
      <span :style="{color: `${this.tip.ep_type?.color}`}" class="issue">{{ this.tip.ep_type?.name }}</span>
    </div>
    <div class="tip-icon"><img :src="this.tip.img_url"
                               loading="lazy">
    </div>
    <p class="title">{{ this.tip.tips_name }}</p>
    <div class="tip-actions">
      <div id="tip_commitments_post_738" class="tip-commitments">
        <span class="js-tip-commitments">{{ this.tip.count }} 人已做到！</span>
      </div>
      <div class="tip-action-buttons has-committed">
        <div class="social-box">
          <a class="tip-share-facebook"
             href="https://www.facebook.com/sharer/sharer.php?u=https://www.greenpeace.org/hongkong/tip/%e8%87%aa%e5%82%99%e6%89%8b%e5%b7%be%e4%bb%94%ef%bc%8c%e6%9f%94%e9%9f%8c%e6%84%9b%e5%9c%b0%e7%90%83/"
             rel="noopener noreferrer" target="_blank">
            <span class="icon-facebook"></span>
          </a>
          <a class="tip-share-whatsapp"
             href="whatsapp://send?text=https://www.greenpeace.org/hongkong/tip/%e8%87%aa%e5%82%99%e6%89%8b%e5%b7%be%e4%bb%94%ef%bc%8c%e6%9f%94%e9%9f%8c%e6%84%9b%e5%9c%b0%e7%90%83/"
             rel="noopener noreferrer" target="_blank">
            <span class="icon-whatsapp"></span>
          </a>
          <a class="tip-share-twitter"
             href="https://twitter.com/intent/tweet?text=自備手巾仔，柔韌愛地球&amp;url=https://www.greenpeace.org/hongkong/tip/%e8%87%aa%e5%82%99%e6%89%8b%e5%b7%be%e4%bb%94%ef%bc%8c%e6%9f%94%e9%9f%8c%e6%84%9b%e5%9c%b0%e7%90%83/"
             rel="noopener noreferrer" target="_blank">
            <span class="icon-twitter"></span>
          </a>
        </div>
        <form action="#" class="tip-engage" method="POST">
          <button class="button-orange button" type="submit">我做得到！</button>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Tips",
  props: {
    tip: {
      type: Object,
      default: {}
    }
  },

}
</script>

<style lang="less" scoped>
.tip {
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0 0 8px 0 rgb(217, 210, 210);
  overflow: hidden;
  transition: box-shadow 140ms linear, -webkit-box-shadow 140ms linear;
  width: 299px;
  height: 412px;
  padding: 15px;
  color: #292f47;
  background-color: #fff;
  text-align: center;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: column;

  // 文字盒子
  .meta-box {
    color: #898b92;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    justify-content: space-between;
  }

  // icon
  .tip-icon {
    height: 105px;

    img {
      height: 100%;
      width: auto;
      vertical-align: top;
    }
  }

  // 标题
  .title {
    vertical-align: inherit;
    font-size: 24px;
    line-height: 40px;
  }
}

@media only screen and (min-width: 1024px) {
  .tip {

    .meta-box {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: start;
      align-items: flex-start;
    }
  }
}
</style>
