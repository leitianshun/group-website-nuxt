<template>
  <div class="footer">
    <div class="left wow animate__slideInUp" data-wow-delay="100ms" data-wow-duration="1200ms">
      <h5>安徽九个挑夫电子商务有限公司</h5>
      <p>
        <i class="bi bi-geo-alt-fill"></i>
        合肥市蜀山区湖光路电子商务产业园2期1号楼
      </p>
      <p>联系电话：400-9123-009</p>
      <!-- <p>服务热线：4009-123009</p> -->
      <p>
        企业官网：
        <a style="color: white; text-decoration: none" target="_blank" href="http://www.9tiaofu.com/">
          www.9tiaofu.com
        </a>
      </p>
      <p>
        <a style="color: white; text-decoration: none" target="_blank" href="http://www.9tiaofu.com/">
          http://www.9tiaofu.com
        </a>
      </p>
    </div>
    <div class="center wow animate__slideInUp" data-wow-delay="100ms" data-wow-duration="1300ms">
      <div>
        <!-- <img :src="`${cdnUrl}/images/qrcode.jpg`" alt="" /> -->
        <!-- <p>- 扫码立即联系我们 -</p> -->
        <ul>
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link">回到首页</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about-us" class="nav-link">关于我们</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/product-center" class="nav-link">产品中心</nuxt-link>
          </li>
          <li class="nav-item">
            <!-- :to="{ path: '/news', query: { pageNum: 1 } }" -->

            <nuxt-link to="/contact-us" class="nav-link">联系我们</nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link to="core-service" class="nav-link">核心业务</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="groupon" class="nav-link">团购有礼</nuxt-link>
          </li>
        </ul>
        <p>
          工信部备案：
          <a href="https://beian.miit.gov.cn/" style="color: white; text-decoration: none">皖B2-20190053</a>
        </p>
      </div>
    </div>
    <div class="right wow animate__slideInUp" data-wow-delay="100ms" data-wow-duration="1400ms">
      <p>Copyright©安徽九个挑夫电子商务有限公司 All rights reserved.</p>
      <!-- <a href="#" @click="show = true"><i class="">微信</i></a> -->
      <!-- <a href="#" @click="show = true"><i class="">微博</i></a> -->
      <div>
        <img style="width: 50px; margin: 5px" src="../static/images/jgtfgzh.jpg" alt="" />

        <span @click="show = true">九个挑夫微信公众号</span>
      </div>
      <div>
        <img style="width: 50px; margin: 5px" src="../static/images/tfyx.jpg" alt="" />
        <span @click="show = true">挑夫优选小程序</span>
      </div>
      <!-- <a style="color: white; text-decoration: none" href="https://weibo.com/u/7750659542">微博</a> -->
      <div v-if="show" class="wx-zzc" @click="show = false">
        <div style="z-index: 6; width: 200px; height: 200px">
          <span style="font-weight: bold; color: black">请扫描下方二维码</span>
          <button
            style="float: right; border: none; background-color: aquamarine; border-radius: 10px"
            @click="show = false">
            关闭
          </button>
          <!-- <img
            :src="`${cdnUrl}/images/qrcode.jpg`"
            style="width: 100%"
            alt=""
          /> -->

          <!-- <img src="assets/images/about/about-v1-img1.jpg" style="width:100%;z-index:10;"  alt=""> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //   import { cdnUrl } from "../common/setting";
  //  cdnUrl,   使用时需要在dta中返回
  export default {
    name: "PageFooter",
    data() {
      return {
        show: false,
      };
    },
    methods: {},
  };
</script>
<style lang="scss" scoped>
  .footer {
    // position: fixed;
    // text-align: center;
    display: flex;
    justify-content: space-around;
    left: 0;
    bottom: 0;
    width: 100%;
    // height: 200px;
    // line-height: 50px;
    color: #ffffff;
    background-color: var(--themeColor);
    padding: 20px 0;
    overflow: hidden;
    .left {
      width: 330px;
      height: 100%;
    }
    .center {
      width: 300px;
      height: 100%;

      text-align: center;
      ul {
        padding-right: 15px;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        li {
          width: 120px;

          a {
            color: white;
          }
        }
      }

      img {
        width: 170px;
        height: 170px;
      }
    }
    .right {
      cursor: pointer;
      width: 310px;
      height: 100%;
      // border: 1px solid red;
      text-decoration: none;
      p {
        text-align: center;
      }
    }
    .wx-zzc {
      position: fixed;
      top: 0;
      left: -30px;
      right: 0;
      bottom: 0;
      z-index: 3;
      background: rgba(255, 255, 255, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media only screen and (max-width: 450px) {
    .footer {
      width: 100%;
      height: 600px;
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      padding: 20px;
      .left {
        width: 100%;
        text-align: center;
      }
      .center {
        width: 100%;
        text-align: center;
      }
      .right {
        width: 100%;
        text-align: center;
        p {
          text-align: center;
        }
        span {
          margin: 0 20px;
        }
      }
    }
  }
</style>
