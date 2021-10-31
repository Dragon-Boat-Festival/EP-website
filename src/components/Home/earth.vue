<template>
  <section class="section-history">
    <div class="ct-container slim">
      <h2>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">自1971年开始的环保里程……</font>
        </font>
      </h2>

      <div id="history-globe"></div>
      <div class="swiper-container label-swiper">
        <div class="swiper-wrapper label-wrapper">
          <div
            class="swiper-slide label-slide"
            v-for="(item,index) in this.slide1"
            :key="index"
          >{{ item }}</div>
        </div>
      </div>

      <div class="swiper-container maxi-swiper maxi-swiper-centered cards-swiper controlled-swiper">
        <div class="swiper-wrapper maxi-wrapper">
          <div
            class="swiper-slide card-explainer swiper-slide-active"
            v-for="(item,index) in this.slide2"
            :key="index"
            :data-latitude="item.latitude"
            :data-longitude="item.longitude"
          >
            <div class="description">
              <h4>{{ item.title }}</h4>
              <p class="subtitle">{{ item.subtitle }}</p>
              <span>{{ item.span }}</span>
            </div>
            <div
              class="thumbnail lazy swiper-lazy"
              :data-background="item.img_url"
              data-was-processed="true"
            >
              <div class="swiper-lazy-preloader"></div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev swiper-bt box-sha2"></div>
        <!--左箭头。如果放置在swiper外面，需要自定义样式。-->
        <div class="swiper-button-next swiper-bt box-sha2"></div>
        <!--右箭头。如果放置在swiper外面，需要自定义样式。-->
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper'
import "swiper/css/swiper.css"
import Globalicious from "@/tools/Globalicious";

export default {
  name: "Earth",
  components: {},
  data () {
    return {
      slide1: ["1971", "1982", "1986", "1987", "1995", "1996", "1997", "2004", "2011", "2012", "2015", "2015", "2018", "2018", "2019", "2020"],
      slide2: [{
        latitude: "66.160507",
        longitude: "-153.369141",
        title: "反核武", subtitle: "anti-nuclear weapons",
        span: "先鋒成員掛起「綠色和平」橫額，駕船反對美國進行核試。綠色和平多次抗議累積民間聲音反核，令法國終在1974年結束於南太平洋的核試。",
        img_url: "http://49.233.14.172:9999/imgs/2021/10/6428bbe632aa55d0.jpg"
      }, {
        latitude: "51.509865",
        longitude: "-0.118092",
        title: "禁止捕鯨", subtitle: "WHALING MORATORIUM",
        span: "經過多次海上行動，正面揭露和阻截捕鯨惡行後，國際捕鯨委員會 (International Whaling Commission) 最終通過《禁止商業捕鯨公約》，嚴格禁止商業捕鯨。",
        img_url: "http://49.233.14.172:9999/imgs/2021/10/6329e738c3af6e00.jpg"
      }, {
        latitude: "-36.848461",
        longitude: "174.763336",
        title: "彩虹不滅", subtitle: "YOU CAN’T SINK A RAINBOW",
        span: "彩虹勇士號 (Rainbow Warrior) 前往南太平洋，抗議法國核試，卻於途中遭法國特工炸沉，攝影師 Fernando Pereira 不幸罹難。惟彩虹勇士精神不滅，法國政府最終道歉賠償。",
        img_url: "http://49.233.14.172:9999/imgs/2021/10/a18e4d7b0ab55e3b.jpg"
      }, {
        latitude: "-90",
        longitude: "0.1",
        title: "守護南極", subtitle: "protect the antarctic",
        span: "在南極設立基地，宣揚「世界公園」理念，守護地球的淨土資源。為1991年成功簽署《南極條約》播下種子，協議書禁止人類開採礦產最少50年（至2048年）。",
        img_url: "http://49.233.14.172:9999/imgs/2021/10/d56b26db2dbf85a4.jpg"
      }, {
        latitude: "59.496943",
        longitude: "0.567971",
        title: "不容妄為", subtitle: "BRENT SPAR REVERSAL",
        span: "綠色和平行動者透過佔領位於北海的 Brent Spar 儲油平台，迫使蜆殼公司 (Shell) 改變將其棄置於海底的計劃，最終大部份平台結構得以於陸上進行全面拆解回收。",
        img_url: "http://49.233.14.172:9999/imgs/2021/10/a531b9721ea07b6f.jpg"
      }, {
        latitude: "40.730610",
        longitude: "-73.935242",
        title: "核试终结", subtitle: "NUCLEAR TEST BAN",
        span: "經年爭取後，聯合國通過《全面禁止核試驗條約》(The Comprehensive Nuclear-Test-Ban Treaty)，禁止締約國進行任何核武器試驗爆炸。",
        img_url: "http://49.233.14.172:9999/imgs/2021/10/cce978bc3d5e7b1e.jpg"
      }, {
        latitude: "53.551086",
        longitude: "9.9908773",
        title: "环保制冷", subtitle: "GREENFREEZE",
        span: "2月14日绿色和平正式在香港注册为非政府组织，组成全球第33个办公室。同年，国际绿色和平自家研发Greenfreeze环保制冷技术，减少温室气体排放，革新制冷行业技术并获广泛利用。",
        img_url: "https://www.greenpeace.org/static/planet4-hongkong-stateless/2019/06/ac454636-gp0stqx0n.jpg"
      }, {
        latitude: "22.302711",
        longitude: "114.177216",
        title: "食物安全", subtitle: "food safety",
        span: "香港团队成立基因改造稻米项目，走入中国，调查基因改造水稻。经过7年努力，于2012年媒体引述农业部消息称，中国未来五至十年内都不会批准基因改造稻米商业化。",
        img_url: "http://49.233.14.172:9999/imgs/2021/10/3e3bdff824ab2235.jpg"
      }, {
        latitude: "36.778259",
        longitude: "-119.417931",
        title: "绿色网络", subtitle: "GREENER INTERNET",
        span: "在全球70万群众、连续20个月的行动所引发的舆论压力下，Facebook 终订下可再生能源为其发展的目标，承诺推动旗下的资料中心使用可再生能源。",
        img_url: "http://49.233.14.172:9999/imgs/2021/10/9b6f992ff431695b.jpg"
      }, {
        latitude: "43.304444",
        longitude: "-8.511389",
        title: "时尚去毒", subtitle: "DETOX MY FASHION",
        span: "全球最大时装品牌之一Zara 及其母公司Inditex 承诺，淘汰在供应链中使用有毒有害物质。这是自绿色和平在2011年发起「时尚去毒」项目以来，第八家作出无毒承诺的品牌。",
        img_url: "http://49.233.14.172:9999/imgs/2021/10/7832d2309d2302e2.jpg"
      }, {
        latitude: "22.302711",
        longitude: "114.177216",
        title: "保护鼠海豚", subtitle: "SAVE THE VAQUITA",
        span: "透过我们的卧底调查，揭发不法商人走私濒危「血花胶」来港，直接威胁濒危加湾鼠海豚(Vaquita) 的生存。在公众的施压下，香港政府加强执法，成功检控不法商人。",
        img_url: "http://49.233.14.172:9999/imgs/2021/10/ac04487f4ed62f11.jpg"
      }, {
        latitude: "90",
        longitude: "0.1",
        title: "守护北极", subtitle: "SAVE THE ARCTIC",
        span: "绿色和平号召全球800万人守护北极，2015年9月蚬壳终宣布停止在北极阿拉斯加州的钻油计划。绿色和平更督促所有石油公司放弃北极钻油，长远成立北极保护区。",
        img_url: "http://49.233.14.172:9999/imgs/2021/10/cc7b23397fb00021.jpg"
      }, {
        latitude: "37.532600",
        longitude: "127.024612",
        title: "能源转型", subtitle: "SAMSUNG'S CHANGE",
        span: "集结全球群众力量，推动Samsung 承诺能源转型，于2020年之前在美国、欧洲与中国等消费市场，迈向100%可再生能源。",
        img_url: "http://49.233.14.172:9999/imgs/2021/10/f097354816896192.jpg"
      }, {
        latitude: "22.302711",
        longitude: "114.177216",
        title: "守护郊野", subtitle: "SAVE COUNTRY PARKS",
        span: "集结超过5万人联署，与众多本地团体合作，成功推动政府认同发展棕地，无再提及开发郊野公园，守住香港青山绿水。",
        img_url: "http://49.233.14.172:9999/imgs/2021/10/b067b20de53b8195.jpg"
      }, {
        latitude: "12.8797",
        longitude: "121.7740",
        title: "气候正义", subtitle: "CLIMATE JUSTICE",
        span: "要求菲律宾人权委员会调查碳排巨擘无视气候危机侵犯人权；12月委员会在联合国会议正式宣布，企业理应肩负道德责任，或需向受气候变化影响的菲律宾人承担法律。",
        img_url: "http://49.233.14.172:9999/imgs/2021/10/7f85eeca9842524d.jpg"
      }, {
        latitude: "37.532600",
        longitude: "127.024612",
        title: "碳中和目标", subtitle: "CARBON NEUTRALITY GOALS",
        span: "科学家警告，应对全球气候危机，全球碳排必须在2030年前减半，2050年达成「净零碳排」目标。2020年底，韩国、中国、日本相继宣布碳中和目标，为东亚的气候与能源项目建立新里程。",
        img_url: "http://49.233.14.172:9999/imgs/2021/10/84f59f35797a3feb.jpg"
      },]
    }
  },

  created () {
    this.$nextTick(() => {
      console.log(1);
      this._initSwiper()
      this.loadEarth()
    })
  },

  methods: {

    _initSwiper () {
      const Swiper1 = new Swiper('.label-swiper', {
        direction: 'horizontal', // 垂直切换选项
        loop: false, // 循环模式选项
        // width: 90,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        // freeMode: true, //  freeMode: true, 。。默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
        slideToClickedSlide: true,
        centeredSlides: true,
        slidesPerView: "auto",
        // spaceBetween: 1,
        preventClicksPropagation: false, //阻止click冒泡。拖动Swiper时阻止click事件。
        on: {
          doubleTap: function (swiper) {
            console.log(swiper)
            // alert('你点了Swiper');
          },
          // 触摸触发
          slideChangeTransitionStart: () => {
            console.log('hhh')
            Swiper2.lazy.load()
          }
        },
        // 懒加载
        lazy: {
          loadPrevNext: true, //允许将延迟加载应用到最接近的slide的图片（前一个和后一个slide）。
          loadOnTransitionStart: true // 默认当过渡到slide后开始加载图片，如果你想在过渡一开始就加载，设置为true
        },
      })
      const Swiper2 = new Swiper('.maxi-swiper', {
        direction: 'horizontal', // 垂直切换选项
        loop: false, // 循环模式选项
        // width: 960,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        // freeMode: true, // 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
        centeredSlides: true,
        slideToClickedSlide: true,
        slidesPerView: "auto",
        preventClicksPropagation: false, //阻止click冒泡。拖动Swiper时阻止click事件。
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // 懒加载
        lazy: {
          loadPrevNext: true, //允许将延迟加载应用到最接近的slide的图片（前一个和后一个slide）。
          loadOnTransitionStart: true // 默认当过渡到slide后开始加载图片，如果你想在过渡一开始就加载，设置为true
        },
      })
      Swiper1.controller.control = Swiper2;//Swiper1控制Swiper2，需要在Swiper2初始化后
      Swiper2.controller.control = Swiper1;//Swiper2控制Swiper1，需要在Swiper1初始化后
    },

    loadEarth () {

      function mID (lat, long) {
        return (
          'glbl-marker_' +
          lat.toString().replace('.', '♥') +
          '_' +
          long.toString().replace('.', '♥')
        );
      }

      const globe = document.getElementById('history-globe');
      console.log(globe)
      if (!globe) return;

      const years = document.querySelectorAll(
        '.section-history .label-swiper .swiper-slide'
      );
      const latitudes = document.querySelectorAll(
        '.section-history .maxi-swiper .swiper-slide[data-latitude]'
      );
      const longitudes = document.querySelectorAll(
        '.section-history .maxi-swiper .swiper-slide[data-longitude]'
      );
      console.log(latitudes)

      if (
        years.length !== latitudes.length ||
        latitudes.length !== longitudes.length
      ) {
        console.warn(
          '无法继续，请提供所有swiper的经度和纬度'
        );
        return;
      }

      /** swiper 容器
       ******************************************************************************************/
      const swiperContainer = document.querySelector(
        '.section-history .maxi-swiper'
      );

      /** 位置 svg
       ******************************************************************************************/
      const pin =
        '<svg viewBox="0 0 24 24" width="40" height="40" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.41"><path fill="#000000" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>';

      /** 建立坐标数组
       ******************************************************************************************/
      const markers = Array.from(latitudes).map(slide => {
        const lat = parseFloat(slide.dataset.latitude.trim());
        const long = parseFloat(slide.dataset.longitude.trim());
        return {
          lat,
          long,
        };
      });
      console.log(markers)

      /** 构建地球模型
       ******************************************************************************************/
      window.Earth = new Globalicious(globe, {
        speed: 0,
        incline: 10,
        startingRotation: -120, // East Asia
        borders: false,
        outline: false,
        sea: false,
        gridOver: false,
        gridUnder: false,
        land: '#000',
        // data: world_vars.templateUrl + '/src/tools/world-110m.json',
        data: '/src/tools/world-110m.json',
        goToDuration: 1000,
        goToEasing: 'easeInOutQuart',
      });

      /** 等待页面加载完，进行渲染位置角标
       ******************************************************************************************/
      if (!swiperContainer.swiper) return;

      /** 在 地球模型 上放置位置角标
       ******************************************************************************************/
      markers.forEach(marker => {
        window.Earth.mark(marker.lat, marker.long, pin);
      });

      /** 保存标记
       ******************************************************************************************/
      const markerEls = document.querySelectorAll('g.glbl-marker');

      /** 转到第一个位置
       ******************************************************************************************/
      window.Earth.goTo(markers[0].lat - 60, markers[0].long);
      if (document.getElementById(mID(markers[0].lat, markers[0].long))) {
        document
          .getElementById(mID(markers[0].lat, markers[0].long))
          .classList.add('is-current');
      }

      /**  监听 swiper slide 的更改，如果有更改进行 地标 更改
       ******************************************************************************************/
      swiperContainer.swiper.on('slideChange', function () {
        window.Earth.goTo(
          markers[this.activeIndex].lat - 60,
          markers[this.activeIndex].long
        );

        Array.from(markerEls).forEach(function (markerEl) {
          markerEl.classList.remove('is-current');
        });
        if (
          document.getElementById(
            mID(markers[this.activeIndex].lat, markers[this.activeIndex].long)
          )
        ) {
          document
            .getElementById(
              mID(markers[this.activeIndex].lat, markers[this.activeIndex].long)
            )
            .classList.add('is-current');
        }
      });
    },

  }
}
</script>

<style scoped lang="less">
// 大盒子
.section-history {
  min-height: 400px;
  padding: 40px 0 30px;
  position: relative;
  z-index: 2;
  background: var(--green);

  .ct-container {
    width: 100%;
    margin: 0 auto;

    > h2 {
      text-align: left;
      font-size: 19px;
      left: 20px;
    }

    //canvas
    #history-globe {
      position: relative;
      //top: -130px;
      height: 310px;
      width: 320px;
      margin: 0 auto -215px;
      overflow: hidden;
      background: 0 0;
    }
  }

  .swiper-container {
    overflow: visible;
    padding-top: 15px;
    padding-bottom: 15px;
    //margin:  0 auto;
    position: relative;
    list-style: none;
    z-index: 1;
    transition: box-shadow 140ms linear, opacity 140ms linear,
      filter 140ms linear, transform 140ms linear,
      -webkit-box-shadow 140ms linear, -webkit-filter 140ms linear,
      -webkit-transform 140ms linear;

    .label-wrapper {
      //left: 600px;
      width: 100%;
      height: 30px;

      // 当前轮播的盒子
      .swiper-slide-active {
        font-size: 32px;
        font-weight: 700;
        position: relative;
        top: -3px;
      }
    }
  }

  // 第一个轮播盒子
  .label-swiper {
    margin-bottom: 20px;
    height: 20px;

    .label-slide {
      width: 90px;
      text-align: center;
      font-family: Montserrat, sans-serif;
      font-size: 20px;
      font-weight: normal;
      line-height: 1;
      transition: all 140ms ease;
      cursor: pointer;
    }
  }

  // 第二个轮播
  .maxi-swiper {
    .swiper-wrapper {
      width: 90%;
      height: auto;
      position: relative;

      .card-explainer {
        color: var(--green);
        width: 90%;
        height: 500px;
        display: flex;
        flex-direction: column;
        background: var(--white);
        border-radius: 8px;
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.7);
        margin: 0 3%;
        //overflow: hidden;

        // 文字部分
        .description {
          box-sizing: content-box;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          padding: 40px;
          height: 60%;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -webkit-box-pack: center;

          h4 {
            text-align: center;
            font-size: 40px;
            line-height: 59px;
            margin: 0;
          }

          .subtitle {
            color: var(--green);
            letter-spacing: 1px;
            font-size: 14px;
            text-transform: uppercase;
            font-family: Montserrat, sans-serif;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.7;
          }

          span {
            font-size: 18px;
            padding-top: 20px;
            line-height: 28px;
            text-align: center;
            font-weight: 400;
          }
        }

        // 图片
        .thumbnail {
          width: 100%;
          height: 40%;
          padding-top: 0;
          border-radius: 0 8px 8px 0;
          box-shadow: none;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          background-color: #e5e8e9;
          overflow: hidden;
          transition: box-shadow 140ms linear, -webkit-box-shadow 140ms linear;
        }
      }
    }
  }

  h2 {
    position: relative;
    color: var(--white);
    z-index: 2;
  }

  // 按钮
  // .swiper-button-next,
  // .swiper-button-prev {
  //   background: var(--white);
  //   border-radius: 50%;
  //   width: 50px;
  //   height: 50px;
  //   display: flex;
  //   -webkit-box-align: center;
  //   align-items: center;
  //   justify-content: center;
  //   box-shadow: 0 0 8px 0 rgb(0 0 0 / 30%);
  //   font-weight: bolder;
  // }

  // .swiper-button-prev:after,
  // .swiper-button-next:after {
  //   font-size: 25px;
  //   color: var(--green);
  // }
  .swiper-button-next {
    position: absolute !important;
    top: 50%;
    right: 5%;
  }

  .swiper-button-prev {
    position: absolute !important;
    top: 50%;
    left: 5%;
    z-index: 8;
  }
}

// 大于 1280
@media only screen and (max-width: 1300px) {
  .swiper-button-next {
    position: absolute !important;
    top: 35%;
    right: 2% !important;
  }
  .ct-container {
    max-width: 1200px;
  }
}

// 大于1024
@media only screen and (min-width: 1024px) {
  .section-history h2 {
    text-align: left;
    font-size: 30px !important;
    position: absolute !important;
    left: 11.5% !important;
    width: 20% !important;
    line-height: 1.5;
  }

  .swiper-wrapper {
    width: 100%;
  }

  // .maxi-swiper {
  //   // 前进按钮
  //   .swiper-button-prev {
  //     left: 53px;
  //   }

  //   .swiper-button-next {
  //     right: 52px;
  //   }
  // }

  .section-history .maxi-swiper-centered {
    padding-top: 15px;
    width: 1160px;

    .swiper-slide {
      margin: 0 3%;
    }
  }

  .maxi-swiper-centered {
    padding-bottom: 30px;
  }

  .maxi-wrapper {
    height: 485px !important;

    .card-explainer {
      flex-direction: row !important;

      .description {
        padding: 40px !important;
        width: 280px;
        height: 100% !important;

        .subtitle {
          letter-spacing: 8px;
        }
      }

      // 图片
      .thumbnail {
        width: calc(100% - 280px) !important;
        height: 100% !important;
      }
    }
  }

  // 第二个轮播图 盒子
  .maxi-swiper-centered .swiper-slide {
    width: calc(100% - 200px);
    margin: 0 100px;
  }
}
</style>
