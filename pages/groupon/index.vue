<template>
  <div class="container">
    <div style="" class="zx-box">
      <img
        class="row col-12 col-xl-12 img-fluid"
        style="width: 100%; margin: 0; padding: 0"
        src="../../static/images/kgdj1.jpg"
        alt="" />

      <div class="main-box row justify-content-between">
        <div class="left-box col-xl-3 col-12">
          <ul>
            <li>
              <h3>团购有礼</h3>
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

        <div class="right-box col-xl-8 col-12">
          <div class="top-box">
            <h5>团购有礼</h5>
            <p>
              <nuxt-link to="/">
                主页
                <i class="bi bi-chevron-right"></i>
              </nuxt-link>
            </p>
          </div>
          <div class="img-box row">
            <img class="col-sm-12 col-xl-12" src="../../static/images/lipin.jpg" alt="" />
          </div>
          <hr />
          <div class="row">
            <img src="../../static/images/groupon2.jpg" class="col-xl-12 col-sm-12" style="margin-top: 10px" alt="" />
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
      margin: 20px 0 0;
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
        margin: 0 0 10px;
        width: 100%;
        box-shadow: 0px 0px 1px gray;
        margin-bottom: 20px;
        overflow: hidden;
        .img-box {
          margin-top: 10px;
          img {
            // width: 700px;
          }
        }
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
        .news-box {
          .ul-box {
            list-style: none;
            padding: 0;
            li {
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

  .loadBox {
    text-align: center;
    padding: 20px;
    .loading {
      text-align: center;
      // border: 1px solid red;
      @keyframes loading {
        0% {
          transform: rotate(0);
        }
        100% {
          transform: rotate(359deg);
        }
      }
      svg {
        animation: loading 0.6s linear infinite;
      }
    }
  }
</style>
