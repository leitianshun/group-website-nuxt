<template>
  <div class="container">
    <div style="" class="zx-box">
      <img
        class="row col-12 col-xl-12 img-fluid"
        style="width: 100%; margin: 0; padding: 0"
        src="../../static/images/kgdj1.jpg"
        alt="" />
      <div class="main-box row justify-content-between">
        <div class="left-box col-xl-3 col-12 wow animate__fadeInLeft" data-wow-delay="100ms" data-wow-duration="2000ms">
          <ul>
            <li>
              <h3>商品购买</h3>
            </li>
            <li @click="$router.push('/')">
              <i class="bi bi-house-door"></i>
              回到首页
              <i class="bi bi-chevron-right"></i>
            </li>
            <li @click="$router.push('/product-center')">
              <i class="bi bi-bag"></i>
              产品中心
              <i class="bi bi-chevron-right"></i>
            </li>
            <li @click="$router.push('/core-service')">
              <i class="bi bi-award"></i>
              核心业务
              <i class="bi bi-chevron-right"></i>
            </li>
            <li @click="$router.push('/contact-us')">
              <i class="bi bi-telephone"></i>
              联系我们
              <i class="bi bi-chevron-right"></i>
            </li>
            <li @click="$router.push('/about-us')">
              <i class="bi bi-window"></i>
              关于我们
              <i class="bi bi-chevron-right"></i>
            </li>

            <li></li>
          </ul>
          <div class="contact order-first">
            <h5>联系我们</h5>
            <p>合肥市蜀山区湖光路电子商务产业园2期1号楼</p>
            <p>电话：4009123009</p>
            <p>邮箱：jgtf123@163.com</p>
          </div>
        </div>

        <div
          class="right-box col-xl-8 col-12 wow animate__rubberBand"
          data-wow-delay="100ms"
          data-wow-duration="2000ms">
          <div class="top-box">
            <h5>团购商品</h5>
            <p>
              <nuxt-link to="/">
                主页
                <i class="bi bi-chevron-right"></i>
              </nuxt-link>
            </p>
          </div>
          <div class="goods-box">
            <section class="content">
              <div style="padding: 0 20px">
                <div style="margin-bottom: 10px">企业团购、量大价优，欢迎来电咨询：</div>
                <div>联系电话：400-9123-009 13866762944</div>
              </div>
              <div class="row justify-content-around" style="text-align: center; margin-top: 20px">
                <div class="col-xl-5 col-12">
                  关注微信公众号
                  <img src="/images/jgtfgzh.jpg" style="width: 100%" alt="" />
                </div>
                <div class="col-xl-5 col-12">
                  小程序(扫码下单)
                  <img src="../../static/images/tfyx.jpg" style="width: 100%" alt="" />
                </div>
              </div>
            </section>
            <hr />
            <div class="price-explain">
              <div style="height: 1px; width: 30%; background: rgb(170, 170, 170, 1)"></div>
              <div class="explain">价格说明</div>
              <div class="" style="height: 1px; width: 30%; background: rgb(170, 170, 170, 1)"></div>
            </div>

            <div style="text-align: justify">
              <div>1、销售价:商城价为商品的销售价，是您最终决定是否购买商品的依据。</div>
              <div>
                2、划线价:商品展示的划横线价格为参考价，并非原价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价(如厂商指导价、建议零售价等)或其他真实有依据的价格;由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。
              </div>
              <div>
                3、折扣:如无特殊说明，折扣指销售商在原价、或划线价(如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价)等某一价格基础_上计算出的优惠比例或优惠金额;如有疑问，您可在购买前联系销售商进行咨询。
              </div>
              <div>
                4、异常问题:商品促销信息以商品详情页“促销”栏中的信息为准;商品的具体售价以订单结算页价格为准;如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    async asyncData({ query }) {
      try {
        const { id } = await query;
        console.log(id);
      } catch (e) {
        console.log(e);
      }
    },
    data() {
      return {};
    },
    mounted() {
      /* eslint-disable */
      new WOW({
        boxClass: "wow",
        live: true,
        offset: 150,
        animateClass: "animated",
        mobile: true,
      }).init();
    },
    created() {
      this.con();
    },
    methods: {
      con() {
        // console.log(this.$route.query.id);
      },
    },
  };
</script>
<style lang="scss" scoped>
  .zx-box {
    // height: 1000px;
    // .bg-img {
    //   width: 100%;
    //   height: 260px;
    //   background-image: url(/images/zximg-1.jpg);
    //   background-position: center;
    //   background-repeat: no-repeat;
    //   background-size: cover;
    // }
    .main-box {
      display: flex;
      margin: 20px 0;
      padding: 0;
      .left-box {
        width: 247px;
        padding: 0;
        // height: 600px;
        // border: 1px solid gray;
        ul {
          // border: 1px solid gray;
          box-shadow: 0px 0px 1px gray;
          width: 100%;
          padding: 0;
          list-style: none;
          text-align: center;
          li {
            width: 100%;
            height: 76px;
            line-height: 76px;
            border-bottom: 1px solid rgb(233, 222, 222);
            &:not(:first-child) {
              cursor: pointer;
              &:hover {
                background: rgb(248, 248, 248);
              }
            }
            &:first-child {
              background: var(--themeColor);
              color: white;

              h3 {
                height: 76px;
                line-height: 76px;
              }
            }
            span {
              margin: 0 10px;
            }
          }
        }
        .contact {
          box-shadow: 0px 0px 1px gray;

          h5 {
            padding: 10px;
            text-align: center;
            background: var(--themeColor);
            color: white;
          }
          p {
            padding: 10px;
            margin: 0;
          }
        }
      }
      .right-box {
        // margin: 0 0 10px;
        width: 100%;
        box-shadow: 0px 0px 1px gray;
        margin-bottom: 20px;
        .top-box {
          padding: 30px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid rgb(233, 222, 222);
          P {
            a {
              color: black;
              text-decoration: none;
            }
          }
          h5 {
            position: relative;
            color: var(--themeColor);
            &::after {
              position: absolute;
              content: "";
              display: block;
              bottom: -38px;
              left: 0px;
              width: 89px;
              height: 2px;
              background: var(--themeColor);
            }
          }
        }
        .goods-box {
          padding: 20px 0;
          .price-explain {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 20px 0;
            .explain {
              // margin: 0 20px;
            }
          }
        }
      }
    }
  }
</style>

<!-- <template>
  <div>商品详情</div>
</template>
<script>
  export default {
    // name: "component_name",

    
  };
</script>
<style scoped></style> -->
