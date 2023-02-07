<template>
  <div class="box">
    <page-header />
    <nuxt class="view-box">
      <mouseEffect />
    </nuxt>
    <img src="../static/images/service.png" style="width: 100%; padding: 10px; background: #f7f5f5" alt="" />
    <page-fooer />
    <ScrollToTop></ScrollToTop>
  </div>
</template>
<script>
  import PageFooer from "../components/PageFooer.vue";
  import PageHeader from "../components/PageHeader.vue";
  import ScrollToTop from "../components/ScrollToTop.vue";
  import mouseEffect from "@/components/mouse-effect.vue";

  export default {
    name: "PageDefault",
    components: { PageHeader, PageFooer, ScrollToTop, mouseEffect },
    async asyncData({ query }) {
      try {
        const { name } = await query;
        console.log(name);
      } catch (e) {
        console.log(e);
      }
    },
    data() {
      return {
        top: "",
      };
    },
    created() {
      // console.log(this.$route);
    },
    mounted() {
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
        // console.log(scrollTop);
        // if (scrollTop > 2500) {
        //   this.isShow = true;
        // }
        this.top = scrollTop + 30;
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
<style lang="scss">
  @media only screen and (max-width: 450px) {
    .view-box {
      padding: 0 10px;
    }
  }
  a {
    text-decoration: none;
  }
</style>
