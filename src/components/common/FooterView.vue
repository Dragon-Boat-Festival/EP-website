<template>
  <div class="footer">
    <div class="con-box">
      <div class="footer-left">
        <img
          class="animate__animated animate__fadeIn wow"
          data-wow-duration="1s"
          data-wow-delay=".4s"
          src="http://49.233.14.172:9999/imgs/2021/11/75315bcdd0d6a2ea.png"
          alt="logo"
        />
        <p
          class="animate__animated animate__fadeIn wow"
          data-wow-duration="1s"
          data-wow-delay=".5s"
        >此环保网站属于广东省高新技术高级技工学校，2021年网页比赛-环保网站比赛作品。</p>
      </div>
      <div
        class="footer-right animate__animated animate__fadeIn wow"
        data-wow-duration="1s"
        data-wow-delay=".7s"
      >
        <div class="class">
          <p class="title">我们的班级</p>
          <span>21计算机技师班</span>
          <span>21计算机技师班</span>
          <span>21计算机技师班</span>
          <span>21计算机技师班</span>
        </div>
        <div class="class">
          <p class="title">我们的名字</p>
          <span>黄伟绩</span>
          <span>张伟杰</span>
          <span>阳怡侄</span>
          <span>高必学</span>
        </div>
        <div class="class">
          <p class="title">分工合作</p>
          <span>编写前端后端70%代码</span>
          <span>编写前端后端30%代码</span>
          <span>录入50%新闻数据</span>
          <span>录入50%新闻数据</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    new this.$wow.WOW({
      live: false
    }).init()
  },
}
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  background-color: var(--twoBg);
  padding: 40px 0;
  .con-box {
    display: flex;
    .footer-left {
      flex: 1;
      p {
        width: 330px;
        line-height: 2;
        color: var(--white);
        margin-left: 20px;
        letter-spacing: 4px;
      }
      img {
        width: 60%;
      }
    }
    .footer-right {
      flex: 1;
      display: flex;
      justify-content: space-around;
      .class {
        display: flex;
        flex-direction: column;
        color: var(--white);
        line-height: 2.5;

        .title {
          font-size: 20px;
          font-weight: 700;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .footer {
    .con-box {
      flex-direction: column;
      .footer-left {
        margin-left: -10px;
        p {
          margin-left: 10px;
          letter-spacing: 2px;
          font-size: 12px;
        }
      }
      .footer-right {
        .class {
          display: flex;
          flex-direction: column;
          color: var(--white);
          line-height: 2;
          font-size: 12px;
          .title {
            font-size: 16px;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>