<!-- Please remove this file from your project -->
<template>
  <div class="contain" style="">
    <!-- <div class="bgImg">
      <img src="../static/images/headImg.jpg" alt="" />
      <h3>
        寿县电子商务公共服务中心
        <h6 style="margin-top: 10px" class="colorToggle">Shouxian Rural E-Commerce Public Service Center</h6>
      </h3>
    </div> -->
    <header class="head-box">
      <!-- <img src="../static/images/headImg.jpg" alt="" /> -->
      <div class="left-box">
        <h3>挑夫团购</h3>
        <p>安徽九个挑夫电子商务有限公司</p>
      </div>
      <div class="center-box">
        <img src="../static/images/logo.png" alt="" />
      </div>
      <div class="right-box">
        <i class="bi bi-telephone-fill"></i>
        <div>
          <h5>400-9123-009</h5>
          <h5>13866762944</h5>
        </div>
      </div>
    </header>

    <nav class="navbar-expand-lg navbar-light bg-light navs">
      <div class="list">
        <ul class="items">
          <li class="nav-item">
            <nuxt-link active-class="active" to="/" exact class="nav-link">首页</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" to="/about-us" class="nav-link">关于我们</nuxt-link>
          </li>
          <li class="nav-item nav-item-list">
            <nuxt-link active-class="active" to="/product-center" class="nav-link">产品中心</nuxt-link>
            <!-- <ul class="nav-list">
              <li>端午粽子系列</li>
              <li>中秋月饼系列</li>
              <li>春节年货系列</li>
              <li>品牌茶叶系列</li>
              <li>杂粮大米系列</li>
              <li>卤味熟食系列</li>
              <li>糕点系列</li>
            </ul> -->
          </li>
          <li class="nav-item">
            <!-- :to="{ path: '/news', query: { pageNum: 1 } }" -->

            <nuxt-link active-class="active" to="/contact-us" class="nav-link">联系我们</nuxt-link>
          </li>

          <li class="nav-item nav-item-list">
            <nuxt-link active-class="active" to="core-service" class="nav-link">核心业务</nuxt-link>
            <!-- <ul class="nav-list">
              <li>横山牛肉</li>
              <li>大雄山泉</li>
              <li>寿县大米</li>
              <li>年货大礼包</li>
              <li>粽子大礼包</li>
              <li>月饼大礼包</li>
            </ul> -->
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" to="groupon" class="nav-link">团购有礼</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="mobile">
      <div class="header">
        <a href="/">
          <!-- <img
            :src="`${cdnUrl}/images/dxsqtext.png`"
            style="width: 100px; height: 30px"
            alt="dxsq"
          /> -->
        </a>
        <div>{{ name }}</div>
        <div class="iconfont open" @click="active = true">
          <i class="bi bi-justify"></i>
        </div>
      </div>

      <div v-if="active" class="menu">
        <div class="silder-bar">
          <div class="menu-header" style="">
            <!-- <img :src="`${cdnUrl}/images/dxsqtext.png`" style="width: 150px; height: 40px; color: white" alt="" /> -->
            <div class="iconfont close" @click="active = false">
              <i class="bi bi-x-lg"></i>
            </div>
          </div>
          <ul class="menu-list">
            <li class="nav-item" @click="active = false">
              <nuxt-link :to="{ path: '/', query: { name: '首页' } }" class="nav-link">首页</nuxt-link>
            </li>
            <li class="nav-item" @click="active = false">
              <nuxt-link
                active-class="active"
                :to="{ path: '/about-us', query: { name: '关于我们' } }"
                class="nav-link">
                关于我们
              </nuxt-link>
            </li>
            <li class="nav-item" @click="active = false">
              <nuxt-link
                active-class="active"
                :to="{ path: '/product-center', query: { name: '产品中心' } }"
                class="nav-link">
                产品中心
              </nuxt-link>
            </li>
            <li class="nav-item" @click="active = false">
              <!-- <nuxt-link :to="{ path: '/news', query: { pageNum: 1 } }" class="nav-link">行业新闻</nuxt-link> -->
              <nuxt-link
                active-class="active"
                :to="{ path: '/contact-us', query: { name: '联系我们' } }"
                class="nav-link">
                联系我们
              </nuxt-link>
            </li>
            <li class="nav-item" @click="active = false">
              <nuxt-link
                active-class="active"
                :to="{ path: '/core-service', query: { name: '核心业务' } }"
                class="nav-link">
                核心业务
              </nuxt-link>
            </li>
            <li class="nav-item" @click="active = false">
              <nuxt-link active-class="active" :to="{ path: '/groupon', query: { name: '团购有礼' } }" class="nav-link">
                团购有礼
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div style="color: white; padding: 0 20px; text-align: left">
          <div style="text-align: center">
            <i class="bi bi-telephone-fill" style="margin-right: 5px"></i>
            400-9123009
          </div>
          <div style="margin-top: 10px; text-align: left">
            <hr />
            <span>
              <i class="bi bi-geo-alt-fill"></i>
              合肥市蜀山区湖光路电子商务产业园2期1号楼
            </span>
          </div>
          <hr />
          <div>
            <p>版权所有：安徽九个挑夫电子商务有限公司</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import { cdnUrl } from '../common/setting'

  export default {
    name: "PageHeader",

    data() {
      return {
        active: false,
        isShow: false,
        name: "首页",
      };
    },
    watch: {
      $route: {
        immediate: true,
        deep: true,
        handler() {
          this.name = this.$route.query.name;
        },
      },
    },

    methods: {},
  };
</script>

<style lang="scss" scoped>
  .contain {
    border-bottom: 1px solid gray;
    position: sticky;
    top: 0;
    width: 100%;
    height: auto;
    z-index: 99;
    .head-box {
      // background-image: url(/images/sx.jpg);
      // width: 100%;
      // background-repeat: no-repeat;
      // background-size: cover;
      // background-position: center center;
      height: 90px;
      background: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 50px;
      // padding-left: 50px;
      .left-box {
        text-align: center;
        h3 {
          animation: colorToggle 2.5s ease-in infinite alternate;
          @keyframes colorToggle {
            0% {
              color: rgba(93, 160, 84, 0.8);
            }
            50% {
              color: rgba(40, 114, 40, 0.8);
            }
            100% {
              color: var(--themeColor);

              // color: rgb(47, 250, 77);
            }
          }
        }
        p {
          color: var(--themeColor);
        }
      }
      .center-box {
        img {
          width: 100px;
          height: 40px;
        }
      }
      .right-box {
        display: flex;
        align-items: center;
        color: var(--themeColor);
        i {
          margin-right: 20px;
          font-size: 35px;
        }
        div {
          h5 {
          }
        }
      }
    }
    .navs {
      width: 100%;
      // height: 50px;
      .list {
        background: var(--themeColor);
        width: 100%;
        height: 50px;

        .items {
          // background-color: beige;
          list-style: none;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 0 30px 0;
          margin: 0;
          height: 100%;
          .nav-item-list {
            position: relative;
            &:hover {
              .nav-list {
                display: block;
              }
            }
            .nav-list {
              //选项列表
              text-align: center;
              display: none;
              color: white;
              list-style: none;
              position: absolute;
              width: 115px;
              left: 10%;
              padding: 13px 0 0 0;
              // bottom: -115px;
              // border: 1px solid green;
              // box-shadow: 0px 2px 5px rgb(97, 94, 94);
              &::before {
                content: "";
                display: block;
                top: -3px;
                left: 48px;
                position: absolute;
                width: 10px;
                height: 10px;
                /* background: red; */
                border: transparent 8px solid;
                border-top-color: rgb(46, 58, 46);
                transform: rotate(179deg);
              }
              li {
                background: rgb(86, 102, 86);
                border: 1px solid rgb(175, 152, 152);
                padding: 5px;
                &:hover {
                  background: var(--themeColor);
                }
              }
            }
          }
          .active {
            color: rgb(192, 235, 0);
          }
          li {
            cursor: pointer;
            a {
              color: white;
              margin: 0 22px;
              transition: all 0.6s;
              position: relative;
              @keyframes change {
                0% {
                  color: rgba(241, 243, 144, 0.6);
                }
                30% {
                  color: rgba(156, 243, 116, 0.8);
                }
                50% {
                  color: rgba(153, 240, 142, 0.5);
                }
                80% {
                  color: rgba(174, 224, 109, 0.8);
                }
                100% {
                  color: rgb(87, 247, 12);
                }
              }
              &:hover {
                animation: change 1.5s linear 0s infinite;
              }
              &:hover {
                background-color: rgb(235, 176, 15);
                transform: scale(1.2);
              }
              // &:focus {
              //   color: rgb(235, 97, 0);
              // }
              &::after {
                content: "";
                position: absolute;
                // top: 0;
                left: 5px;
                right: 0;
                bottom: 5px;
                height: 2px;
                width: 0;
                background-color: rgb(244, 247, 86);
                transition: all 1s;
                @keyframes width {
                  0% {
                    width: 0;
                  }
                  30% {
                    width: 30%;
                  }
                  50% {
                    width: 50%;
                  }
                  80% {
                    width: 80%;
                  }
                  100% {
                    width: calc(100% - 10px);
                  }
                }
              }
              &:hover::after {
                // width: calc(100% - 10px);
                animation: width 1s linear 0s infinite alternate;
              }
            }
          }
        }
      }
    }
    .mobile {
      display: none;
    }
  }
  @media only screen and (max-width: 450px) {
    .contain {
      width: 100%;
      position: sticky;
      top: -1px;
      // height: 50px;
      // z-index: 10;
      // .navs {
      //   .list {
      //     .items {
      //       // display: none;
      //       // border: 1px solid red;
      //     }
      //   }
      // }
      .head-box {
        display: none;
      }
      .navs {
        width: 100%;
        display: none;
      }
      .mobile {
        // position: fixed;
        // top: 0;
        // left: 0;
        // width: 100%;
        // z-index: 999;
        // border-bottom: 1px solid rgb(161, 160, 160);
        // background-color: white;
        display: block;

        .header {
          width: 100%;
          height: 40px;
          background: var(--themeColor);
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          position: relative;
        }

        // img {
        //   margin: 10px;
        // }
        .open {
          // float: right;
          // align-self: flex-end;
          // justify-content: flex-end;
          // margin: 0 10px 0 auto;
          // margin-right: -100px;
          position: absolute;
          top: 0;
          right: 0;
          width: 50px;
          height: 100%;
          color: white;
          font-size: 25px;
          // margin: 1px 50px;
          // line-height: 50px;
          // font-weight: bold;
          // width: 20px;
        }

        .menu {
          width: 240px;
          // border: 1px solid red;
          height: 100%;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 20;
          background-color: rgb(240, 144, 55);
          // opacity: 1;
          // transform: translateX(0);
          // visibility: visible;
          transition: all 0.9s;
          // position: relative;
          // &::after {
          //   content: "";

          //   position: absolute;
          //   top: 0;
          //   left: 0;
          //   right: 0;
          //   bottom: 0;
          //   background-color: #000000;
          //   opacity: 0.5;
          // }
          .silder-bar {
            padding: 30px 0 0;
            // .menu-header {
            //   // width: 400px;
            //   padding: 0 10px;
            // }
            .close {
              float: right;
              width: 40px;
              font-size: 26px;
              // margin: 10px 30px;
              color: white;
              font-weight: bold;
              svg {
              }
            }
            .menu-list {
              list-style: none;
              padding: 0;
              margin-top: 30px;
              text-align: center;
              .nav-item {
                .nav-link {
                  color: white;
                  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
                  height: 50px;
                  // line-height: 50px;
                }
              }
            }
          }
        }
      }
    }
  }
  // @media only screen and (max-width: 375px) {
  //   .mobile {
  //     .menu {
  //       .menu-header {
  //         width: 350px;
  //       }
  //     }
  //   }
  // }
  @media only screen and (min-width: 1850px) {
    .contain {
      .navs {
        .nav-items {
          margin-left: 246px;
        }
      }
    }
  }
</style>
