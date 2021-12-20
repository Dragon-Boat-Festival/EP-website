<template>
  <section class="section-history">
    <div class="ct-container con-box slim">
      <h2
          class="animate__animated animate__fadeIn wow h2"
          data-wow-duration="1s"
          data-wow-delay=".5s"

      >环保相关纪念日</h2>

      <div id="history-globe"></div>
      <div class="swiper-container label-swiper">
        <div class="swiper-wrapper label-wrapper">
          <div
              v-for="(item,index) in this.slide1"
              :key="index"
              class="swiper-slide label-slide"
          >{{ item }}
          </div>
        </div>
      </div>

      <div class="swiper-container maxi-swiper maxi-swiper-centered cards-swiper controlled-swiper">
        <div class="swiper-wrapper maxi-wrapper">
          <div
              v-for="(item,index) in this.slide2"
              :key="index"
              :data-latitude="item.latitude"
              :data-longitude="item.longitude"
              class="swiper-slide card-explainer swiper-slide-active"
          >
            <div class="description">
              <h4>{{ item.title }}</h4>
              <p class="subtitle">{{ item.subtitle }}</p>
              <span>{{ item.span }}</span>
            </div>
            <div
                :data-background="item.img_url"
                class="thumbnail lazy swiper-lazy"
                data-was-processed="true"
            >
              <div class="swiper-lazy-preloader"></div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev swiper-bt box-sha2"></div>
        <!--左箭头。如果放置在swiper外 面，需要自定义样式。-->
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
  data() {
    return {
      slide1: ["1915", "1960", "1970", "1971", "1972", "1977", "1981", "1986", "1987", "1989", "1995", "2000", "2008"],
      slide2: [
        {
          latitude: "39.55",
          longitude: "116.23",
          title: "中国植树节", subtitle: "China Arbor Day",
          span: "中国曾于1915年规定清明节为植树节，最初由林学家凌道扬等创议设立，而后在1928年将植树节改为孙中山逝世的3月12日，以纪念革命先驱的植树造林愿望。这一设定被中国大陆和中国台湾沿用到现在。",
          img_url: "https://images.freeimages.com/images/large-previews/b84/handful-of-dirt-5-1400892.jpg"
        }, {
          latitude: "46.14",
          longitude: "6.04",
          title: "世界气象日", subtitle: "World Meteorological Day",
          span: `1960年6月，世界气象组织通过决议，从1961年起将公约生效日，即3月23日定为"世界气象日"。每年的“世界气象日”都确定一个主题， 要求各国成员在这一天举行庆祝活动，并广泛宣传气象工作的重要作用。`,
          img_url: "https://images.freeimages.com/images/large-previews/c7b/sunsets-2-1369123.jpg"
        }, {
          latitude: "38.53",
          longitude: "-77.02",
          title: "世界地球日", subtitle: "The World Earth Day",
          span: "地球日由盖洛德·尼尔森和丹尼斯·海斯于1970年发起。现今，地球日的庆祝活动已发展至全球192个国家，每年有超过10亿人参与其中，使其成为世界上最大的民间环保节日。",
          img_url: "https://images.freeimages.com/images/large-previews/ace/globe-asia-1228197.jpg"
        }, {
          latitude: "32.42",
          longitude: "51.4",
          title: "世界湿地日", subtitle: "World Wetlands Day",
          span: "1971年2月2日，来自18个国家的代表在伊朗南部海滨小城拉姆萨尔签署了《关于特别是作为水禽栖息地的国际重要湿地公约》。为了纪念这一创举，并提高公众的湿地保护意识，1996年《湿地公约》常务委员会第19次会议决定，从1997年起，将每年的2月2日定为世界湿地日。",
          img_url: "https://images.freeimages.com/images/large-previews/b7f/wetlands-at-sunset-1409535.jpg"
        }, {
          latitude: "59.23",
          longitude: "18",
          title: "世界环境日", subtitle: "World Environment Day",
          span: `1972年6月5日，联合国在瑞典首都斯德哥尔摩举行第一次人类环境会议，通过了著名的《人类环境宣言》及保护全球环境的“行动计划”，提出“为了这一代和将来世世代代保护和改善环境”的口号。这是人类历史上第一次在全世界范围内研究保护人类环境的会议。出席会议的113个国家和地区的1300名代表建议将大会开幕日定为“世界环境日”。`,
          img_url: "https://images.freeimages.com/images/large-previews/097/oxygen-1409353.jpg"
        }, {
          latitude: "40.44",
          longitude: "-73.55",
          title: "世界水日", subtitle: "World Water Day",
          span: "1977年召开的“联合国水事会议”，向全世界发出严重警告：水不久将成为一个深刻的社会危机，石油危机之后的下一个危机便是水。1993年1月18日，第四十七届联合国大会作出决议，确定每年的3月22日为“世界水日”。2020年3月22日，水利部12314监督举报服务平台正式上线运行。",
          img_url: "https://images.freeimages.com/images/large-previews/ee2/playing-with-water-1196066.jpg"
        }, {
          latitude: "41.52",
          longitude: "12.37",
          title: "世界粮食日", subtitle: "World Food Day",
          span: "世界粮食日起始于1981年10月16日，是世界各国政府每年在10月16日围绕发展粮食和农业生产举行纪念活动的日子，其宗旨在于唤起全世界对发展粮食和农业生产的高度重视。",
          img_url: "https://images.freeimages.com/images/large-previews/8e4/grain-1326682.jpg"
        }, {
          latitude: "39.55",
          longitude: "116.23",
          title: "全国土地日", subtitle: "National Land Day",
          span: `1986年6月25日，第六届全国人民代表大会常务委员会第十六次会议通过并颁布我国第一部专门调整土地关系的大法——《中华人民共和国土地管理法》。为纪念这一天,即《土地管理法》颁布的日期确定为全国土地日。“土地日”是国务院确定的第一个全国纪念宣传日。中国是世界上第一个为保护土地而设立专门纪念日的国家。`,
          img_url: "https://images.freeimages.com/images/large-previews/7ee/mountains-1362783.jpg"
        }, {
          latitude: "40.44",
          longitude: "-73.55",
          title: "世界人口日", subtitle: "international Population Day",
          span: "世界人口日是每年的7月11日。1987年7月11日，地球人口达到50亿。为纪念这个特殊的日子，1989年，联合国建议国际社会把每年的7月11日定为世界人口日，以便把重点放在紧迫性的人口总体发展计划和解决这些问题的方案。",
          img_url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13524585749%2F1000&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638619373&t=9285b2bda0e064cc3111e0e35d99edb4"
        }, {
          latitude: "46.14",
          longitude: "6.04",
          title: "世界无烟日", subtitle: "World No Tobacco Day",
          span: "从1989年开始，世界无烟日改为每年的5月31日，因为第二天是国际儿童节，希望下一代免受烟草危害。烟草依赖是一种慢性疾病，烟草危害是世界最严重的公共卫生问题之一，吸烟和二手烟问题严重危害人类健康。",
          img_url: "https://images.freeimages.com/images/large-previews/035/don-t-smoke-7-1314914.jpg"
        }, {
          latitude: "40.44",
          longitude: "-73.55",
          title: "国际臭氧层保护日", subtitle: "International Ozone Layer Protection Day",
          span: "保护臭氧层就是保护蓝天，保护地球生命。1995 年1月23日联合国大会决定，每年的9月16日为国际保护臭氧层日，要求所有缔约国按照《关于消耗臭氧层物质的蒙特利尔议定书》及其修正案的目标，采取具体行动纪念这个日子。",
          img_url: "https://images.freeimages.com/images/large-previews/90a/revelations-1183858.jpg"
        }, {
          latitude: "40.44",
          longitude: "-73.55",
          title: "国际生物多样性日", subtitle: "International Day for Biological Diversity",
          span: "国际生物多样性日是鉴于公共教育和增强民众生态意识对在各层面执行《生物多样性公约》的重要性，联合国大会于2000年12月20日通过了第55/201号决议，宣布每年5月22日，即《生物多样性公约》通过之日为国际生物多样性日。",
          img_url: "https://images.freeimages.com/images/large-previews/d20/wildlife-at-masai-mara-1508940.jpg"
        }, {
          latitude: "40.44",
          longitude: "-73.55",
          title: "世界海洋日", subtitle: "World Oceans Day",
          span: "2008年12月5日第63届联合国大会通过第111号决议，决定自2009年起，每年的6月8日为“世界海洋日”。联合国秘书长潘基文就此发表致辞时指出，人类活动正在使海洋世界付出可怕的代价，个人和团体都有义务保护海洋环境，认真管理海洋资源。",
          img_url: "https://images.freeimages.com/images/large-previews/482/malta-1635368.jpg"
        },]
    }
  },

  created() {
    this.$nextTick(() => {
      this._initSwiper()
      this.loadEarth()
    })
  },

  methods: {
    _initSwiper() {
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

    loadEarth() {

      function mID(lat, long) {
        return (
            'glbl-marker_' +
            lat.toString().replace('.', '♥') +
            '_' +
            long.toString().replace('.', '♥')
        );
      }

      const globe = document.getElementById('history-globe');
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

<style lang="less" scoped>
.swiper-button-prev {
  left: 55px;
}

.swiper-button-next {
  right: 55px;
}

// 大盒子
.section-history {
  min-height: 400px;
  min-height: 400px;
  padding: 40px 0;
  position: relative;
  z-index: 2;
  background: var(--green);
  overflow: hidden;

  .ct-container {
    margin: 0 auto;

    > h2 {
      position: absolute;
      width: 300px;
      margin-left: 20px;
    }

    //canvas
    #history-globe {
      position: relative;
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
    position: relative;
    list-style: none;
    z-index: 1;
    transition: box-shadow 140ms linear, opacity 140ms linear,
    filter 140ms linear, transform 140ms linear,
    -webkit-box-shadow 140ms linear, -webkit-filter 140ms linear,
    -webkit-transform 140ms linear;

    .label-wrapper {
      width: 100%;
      height: 30px;

      // 当前轮播的盒子
      .swiper-slide-active {
        font-size: 32px;
        font-weight: 700;
        position: relative;
        top: -10px;
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
        border-radius: 10px;
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.7);
        margin: 0 3%;

        // 文字部分
        .description {
          box-sizing: content-box;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          padding: 0 20px;
          height: 60%;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -webkit-box-pack: center;

          h4 {
            text-align: center;
            font-size: 25px;
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
          }

          span {
            font-size: 15px;
            line-height: 28px;
            text-align: center;
            font-weight: 400;
          }
        }

        // 图片
        .thumbnail {
          width: 100%;
          height: 50%;
          padding-top: 0;
          border-radius: 0 0 10px 10px;
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
}

// 大于1024
@media screen and (min-width: 1024px) {
  .section-history {
    .ct-container {
      > h2 {
        margin-left: 10px;
      }
    }
  }

  .swiper-wrapper {
    width: 100%;
  }

  .section-history .maxi-swiper-centered {
    padding-top: 15px;
    width: 1090px;

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
        width: 280px;
        height: 100% !important;
        padding: 0 40px !important;

        h4 {
          font-size: 40px !important;
        }

        .subtitle {
          letter-spacing: 8px;
          line-height: 1.7;
        }

        span {
          font-size: 18px !important;
          padding-top: 20px !important;
        }
      }

      // 图片
      .thumbnail {
        width: calc(100% - 280px) !important;
        height: 100% !important;
        border-radius: 0 10px 10px 0 !important;
      }
    }
  }

  // 第二个轮播图 盒子
  .maxi-swiper-centered .swiper-slide {
    width: calc(100% - 200px);
    margin: 0 100px;
  }
}

@media screen and (max-width: 524px) {
  .section-history
  .maxi-swiper
  .swiper-wrapper
  .card-explainer
  .description
  span {
    line-height: 16px;
    font-size: 13px;
  }

  .section-history
  .maxi-swiper
  .swiper-wrapper
  .card-explainer
  .description
  h4 {
    line-height: normal;
  }
}
</style>
