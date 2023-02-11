<template>
  <div>
    <div style="" class="zx-box container">
      <!-- <img src="/images/zximg-1.jpg" alt="" /> -->
      <!-- <div class="bg-img img-fluid row col-12 col-xl-12"></div> -->
      <img
        class="row col-12 col-xl-12 img-fluid"
        style="width: 100%; margin: 0; padding: 0"
        src="../../static/images/kgdj1.jpg"
        alt="" />

      <div class="main-box row justify-content-between">
        <div class="left-box col-12 col-xl-3 wow animate__fadeInLeft" data-wow-delay="100ms" data-wow-duration="2000ms">
          <ul class="row">
            <li class="col-12">
              <h3>关于我们</h3>
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

            <li></li>
          </ul>
          <div class="contact align-self-start">
            <h5>联系我们</h5>
            <p>地址： 合肥市蜀山区湖光路电子商务产业园2期1号楼</p>
            <p>电话：400-9123009</p>
            <p>邮箱：jgtf123@163.com</p>
          </div>
        </div>

        <div
          class="right-box col-12 col-xl-8 wow animate__fadeInRight"
          data-wow-delay="100ms"
          data-wow-duration="2000ms">
          <div class="top-box col-12">
            <h5>关于我们</h5>
            <p @click="goHome()">
              主页
              <i class="bi bi-chevron-right"></i>
            </p>
          </div>
          <div class="about-content row" style="margin: 10px">
            <img src="../../static/images/zl.png" class="col-xl-12 col-sm-12" alt="" />
            <p class="col-xl-12 col-sm-12">
              安徽九个挑夫电子商务有限公司是合肥恩讯信息科技有限公司旗下全资子公司，是一家为城域(县域、区域)
              电商、乡村振兴、农村电商等领域提供专业运营服务机构，通过不断地摸索，九个挑夫全面渗透县域电商领域，布局农业全产业链，形成以农村电商平台建设与运营、农村电商公共服务中心建设与运营、区域公共品牌培育与运营、农产品上行赋能体系建设与运营、三级物流体系建设运营、电商云仓建设与运营、乡村振兴人才培训、乡村产业开发与运营、县域商业体系建设与运营等多位一体的乡村振兴服务体系。先后为太湖县、怀宁县、界首市、莘县蒙城县、寿县、固镇县、繁昌区、明光市等地提供系统性的农村电商运营服务。
            </p>
          </div>
          <div>
            <img src="../../static/images/ggpp.png" class="col-xl-12 col-sm-12" alt="" />
            <img src="../../static/images/gywm_02.jpg" class="col-xl-12 col-sm-12" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    mounted() {
      /* eslint-disable */
      new WOW({
        boxClass: "wow",
        live: true,
        offset: 100,
        animateClass: "animated",
        mobile: true,
      }).init();
    },
    methods: {
      goHome() {
        this.$router.push("/");
      },
    },
  };
</script>
<style lang="scss" scoped>
  .zx-box {
    // height: 1000px;
    .bg-img {
      width: 100%;
      height: 260px;
      background-image: url(/images/zximg-1.jpg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      margin: 0;
      padding: 0;
    }
    .main-box {
      display: flex;
      margin: 50px 0;
      // padding: 0 50px;
      .left-box {
        width: 247px;
        // height: 600px;
        // border: 1px solid gray;
        padding: 0;

        ul {
          // border: 1px solid gray;
          margin: 0;
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
                padding: 0;
              }
            }
            span {
              margin: 0 10px;
            }
          }
        }
        .contact {
          box-shadow: 0px 0px 1px gray;
          margin-top: 10px;
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
        // margin-left: 50px;
        width: 100%;
        box-shadow: 0px 0px 1px gray;
        // margin-bottom: 20px;
        margin: 0;
        padding: 0;
        .top-box {
          padding: 30px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid rgb(233, 222, 222);
          p {
            cursor: pointer;
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
        .about-content {
          img {
          }
          p {
            margin-top: 15px;
          }
        }
        .news-box {
          .ul-box {
            list-style: none;
            padding: 0;

            li {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              padding: 0 20px;
              height: 60px;
              border-bottom: 1px solid rgb(233, 222, 222);
              line-height: 60px;
              &:last-child {
                // border: none;
              }

              cursor: pointer;
              &:hover {
                background: rgb(248, 248, 248);
              }
              span {
                margin: 0 10px;
              }
            }
          }
        }
      }
    }
  }
</style>
