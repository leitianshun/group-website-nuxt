<template>
  <div>
    <Date></Date>
    <!-- <IndexNews></IndexNews> -->
    <swiper />
    <Produce></Produce>
    <Farming></Farming>
    <!-- <div v-if="isShow" style="text-align: center"><button @click="scrollToTop">回到顶部</button></div> -->
    <Enterprice></Enterprice>
    <!-- <div v-show="isShow" class="fixedImg-left">
      <button @click="isShow = false">关闭</button>
      <img src="../static/images/tuangou.jpg" style="" alt="" />
    </div> -->
    <div class="fixedImg-right" :style="{ top: top + 'px' }">
      <div class="title">在线客服</div>
      <div class="box-group">
        <h5>团购咨询</h5>
        <div>
          <i class="bi bi-telephone-fill" style="margin-right: 5px"></i>
          400-9123009
        </div>
        <div>
          <i class="bi bi-telephone-fill" style="margin-right: 5px"></i>
          17356578905
        </div>
        <!-- <div>
          <i class="bi bi-envelope" style="margin-right: 5px"></i>
          jgtf123@163.com
        </div> -->
      </div>
      <div class="box-weixin">
        <img src="../static/images/tfyx.jpg" alt="" />
        <div>微信扫一扫 立即下单</div>
      </div>
      <div class="box-weixin">
        <img src="../static/images/jgtfgzh.jpg" alt="" />
        <div>微信扫一扫 关注公众号</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Produce from "@/components/Produce.vue";
  import swiper from "@/components/swiper.vue";
  // import IndexNews from "@/components/IndexNews.vue";
  import Farming from "@/components/Farming.vue";
  import Enterprice from "@/components/Enterprice.vue";
  import Date from "@/components/Date";
  export default {
    name: "IndexPage",
    components: {
      Date,
      // IndexNews,
      swiper,
      Produce,
      Farming,
      Enterprice,
    },

    data() {
      return {
        isShow: true,
        top: "40",
        topDistance: "",
      };
    },
    // watch: {
    //   top: {
    //     immediate: true,
    //     deep: true,
    //     handler(val) {
    //       this.topDistance = val;
    //     },
    //   },
    // },
    mounted() {
      /* eslint-disable */
      new WOW({
        boxClass: "wow",
        live: true,
        offset: 150,
        animateClass: "animated",
        mobile: true,
      }).init();
      window.addEventListener("scroll", this.getScrollTop);
      // document.addEventListener("scroll", this.getScrollTop);
    },
    beforeDestroy() {
      // document.removeEventListener(`mousemove`, this.mouseMove);
      window.removeEventListener("scroll", this.getScrollTop);
    },
    methods: {
      getScrollTop() {
        const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        const screenWidth = window.screen.width || screen.width;
        if (screenWidth > 1500) {
          this.top = scrollTop + 200;
        } else {
          this.top = scrollTop + 90;
        }
      },
      scrollToTop() {
        /* 回到顶部方法  behavior:'smooth' 平滑滚动 */
        // const top = document.body.scrollTop || document.documentElement.scrollTop || window.pageYoffSet;
        // console.log(top);
        // window.scrollTo(0, 0);
        window.scroll({ top: 0, behavior: "smooth" });
      },
    },
  };
</script>
<style lang="scss" scoped>
  .fixedImg-left {
    position: fixed;
    height: 320px;
    width: 190px;
    left: 2px;
    top: 50%;
    bottom: auto;
    right: auto;
    z-index: 100;
    margin-top: -100px;
    @media only screen and (max-width: 450px) {
      // 450px以内
      display: none;
    }
    img {
      position: relative;
    }
    button {
      position: absolute;
      z-index: 10;
      border: none;
      right: 0;
      top: 0;
    }
  }
  .fixedImg-right {
    position: absolute;
    z-index: 100;
    // height: calc(100vh - 230px);
    // max-height: 580px;
    box-shadow: 0 0 5px gray;
    transition: all 0.4s;
    right: 10px;
    width: 150px;
    text-align: center;
    z-index: 100;
    background: #eeeeee;
    @media only screen and (max-width: 450px) {
      // 450px以内
      display: none;
    }
    .title {
      padding: 10px;
      background: var(--themeColor);
      text-align: center;
      color: #fff;
      font-weight: bold;
    }
    .box-group {
      padding: 5px;
      // background: #eeeeee;
      h5 {
      }
      div {
        color: var(--themeColor);
      }
    }
    .box-weixin {
      padding: 10px;

      img {
        width: 100%;
      }
      div {
        margin-top: 10px;
      }
    }
  }
</style>
