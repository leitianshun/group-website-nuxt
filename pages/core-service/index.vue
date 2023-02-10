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
              <h3>核心业务</h3>
            </li>

            <li>
              <i class="bi bi-bag"></i>

              横山牛肉
              <i class="bi bi-chevron-right"></i>
            </li>
            <li>
              <i class="bi bi-bag"></i>

              太湖锅巴
              <i class="bi bi-chevron-right"></i>
            </li>
            <li>
              <i class="bi bi-bag"></i>

              大雄山泉
              <i class="bi bi-chevron-right"></i>
            </li>
            <li>
              <i class="bi bi-bag"></i>

              怀宁贡糕
              <i class="bi bi-chevron-right"></i>
            </li>
            <li>
              <i class="bi bi-bag"></i>

              寿县大米
              <i class="bi bi-chevron-right"></i>
            </li>
            <li></li>
          </ul>
          <div class="contact order-first">
            <h5>联系我们</h5>
            <p>地址： 合肥市蜀山区湖光路电子商务产业园2期1号楼</p>
            <p>电话：400-9123009</p>
            <p>邮箱：jgtf123@163.com</p>
          </div>
        </div>

        <div class="right-box col-xl-8 col-12">
          <div class="top-box">
            <h5>核心业务</h5>
            <p>
              <nuxt-link to="/">
                主页
                <i class="bi bi-chevron-right"></i>
              </nuxt-link>
            </p>
          </div>

          <div class="news-box">
            <div class="goods-nav">
              <img src="../../static/images/iFCB_lt_news.png" alt="" />
              <span>新闻资讯</span>
              <div>
                <a href="http://www.9tiaofu.com/news?pageNum=1" target="_blank">
                  更多
                  <i class="bi bi-chevron-right"></i>
                </a>
              </div>
            </div>
            <ul class="ul-box">
              <li class="text-truncate">
                <span>2023-01-31</span>
                共青团安庆市委书记一行 莅临太湖县电商中心参观考察
                <i class="bi bi-chevron-right"></i>
              </li>
              <li class="text-truncate">
                <span>2023-01-11</span>
                固镇县副县长一行 莅临年货节活动现场检查指导
                <i class="bi bi-chevron-right"></i>
              </li>

              <!-- <li></li> -->
            </ul>
            <!-- <div class="paging">
              <nav aria-label="...">
                <ul class="pagination justify-content-center">
                  <li class="page-item disabled">
                    <a class="page-link">上一页</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item active" aria-current="page">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">下一页</a>
                  </li>
                </ul>
              </nav>
            </div> -->
          </div>
          <div class="goods-nav">
            <img src="../../static/images/iFCB_lt_news.png" alt="" />
            <span>团购好礼</span>
            <div>
              <nuxt-link to="/product-center">
                更多
                <i class="bi bi-chevron-right"></i>
              </nuxt-link>
            </div>
          </div>
          <ul class="goods-box col-sm-12">
            <div class="scroll-box">
              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/年货礼包1.jpg" alt="" />
                <div class="tip">年货节礼盒</div>
              </li>
              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/年货礼包2.png" alt="" />
                <div class="tip">挑夫优选礼盒</div>
              </li>
              <!-- <div class="w-100"></div> -->

              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/年货礼包3.png" alt="" />
                <div class="tip">挑夫甄选礼盒</div>
              </li>
              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/年货礼包4.png" alt="" />
                <div class="tip">挑夫精选礼盒</div>
              </li>
              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/年货礼包5.png" alt="" />
                <div class="tip">儿时记忆零食礼盒</div>
              </li>
              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/年货礼包6.png" alt="" />
                <div class="tip">挑夫干货礼盒</div>
              </li>
              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/蒙城1.jpg" alt="" />
                <div class="tip">蒙城好物礼盒套餐一</div>
              </li>
              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/蒙城2.jpg" alt="" />
                <div class="tip">蒙城好物礼盒套餐一</div>
              </li>

              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/蒙城3.jpg" alt="" />
                <div class="tip">蒙城好物礼盒套餐一</div>
              </li>
              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/蒙城4.jpg" alt="" />
                <div class="tip">蒙城好物礼盒套餐一</div>
              </li>
              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/组合礼包1.jpg" alt="" />
                <div class="tip">御牛献礼礼盒1</div>
              </li>
              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/组合礼包2.jpg" alt="" />
                <div class="tip">五洲六道菜礼盒</div>
              </li>

              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/组合礼包3.jpg" alt="" />
                <div class="tip">瓜子花生炒货礼盒</div>
              </li>
              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/组合礼包4.jpg" alt="" />
                <div class="tip">牛腱王礼盒</div>
              </li>

              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/组合礼包5.jpg" alt="" />
                <div class="tip">礼遇五洲礼盒</div>
              </li>
              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/组合礼包6.jpg" alt="" />
                <div class="tip">鸿运五洲礼盒</div>
              </li>

              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/组合礼包7.jpg" alt="" />
                <div class="tip">润包礼盒</div>
              </li>
              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/组合礼包8.jpg" alt="" />
                <div class="tip">五洲牛肉礼盒</div>
              </li>

              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/sxdami.png" alt="" />
                <div class="tip">寿县大米</div>
              </li>
              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/山茶油主图6.png" alt="" />
                <div class="tip">山茶油</div>
              </li>

              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/五华鸡养殖环境9.png" alt="" />
                <div class="tip">五华鸡</div>
              </li>
              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/黑芝麻蜂蜜丸主图6.png" alt="" />
                <div class="tip">黑芝麻蜂蜜丸</div>
              </li>

              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/sxyou.png" alt="" />
                <div class="tip">寿县香油</div>
              </li>
              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/大别山黄牛肉主图6.jpg" alt="" />
                <div class="tip">大别山黄牛肉</div>
              </li>

              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/主图_2.png" alt="" />
                <div class="tip">白桃水果茶</div>
              </li>
              <li class="goods-item" @click="$router.push('/goodsinfo')">
                <img src="../../static/images/2.jpg" alt="" />
                <div class="tip">葡萄水果茶</div>
              </li>
            </div>
          </ul>
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
  /* 1,滚动条 */
  ::-webkit-scrollbar {
    width: 20px;
    /* 纵向滚动条 宽度 */
    height: 15px;
    /* 横向滚动条 高度 */
    background: pink;
    /* 整体背景 */
    border-radius: 10px;
    /* 整体 圆角 */
  }
  /* 3,外层轨道 */
  ::-webkit-scrollbar-track {
    /* background: red; */
    border-radius: 10px;
  }
  // /* 4.内层轨道，它会覆盖外层轨道的样式。 */
  // ::-webkit-scrollbar-track-piece {
  //   width: 5px;
  //   background-color: red;
  //   margin: 0 -2px 0;
  // }
  /* 5,滑块 */
  ::-webkit-scrollbar-thumb {
    background: #e93821;
    min-height: 50px;
    min-width: 50px;
    border-radius: 10px;
    cursor: pointer;
  }
  // /* 纵向滑块悬浮 */
  // ::-webkit-scrollbar-thumb:vertical:hover {
  //   background: yellow;
  // }
  /* 横向滑块悬浮 */
  ::-webkit-scrollbar-thumb:horizontal:hover {
    background: rgb(245, 139, 52);
  }
  // /* 6,边角，两个滚动条交汇处 */
  // ::-webkit-scrollbar-corner {
  //   background: blue;
  // }

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
              // background: #e20612;
              background: var(--themeColor, green);
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
              background-color: var(--themeColor);
            }
          }
        }
        .news-box {
          margin-top: 20px;
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
        .goods-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          span {
            position: absolute;
            color: white;
            left: 53px;
          }
          a {
            color: black;
            text-decoration: none;
          }
        }

        .goods-box {
          margin: 20px 0;
          padding: 0;
          overflow-x: scroll;
          overflow-y: hidden;
          width: 100%;
          height: 200px;
          .scroll-box {
            box-shadow: 0 0 5px rgb(124, 122, 122);
            overflow: hidden;
            display: flex;
            width: calc(100% + 4000px);
            height: 100%;
            padding: 10px;
            &:hover {
              .goods-item {
                animation-play-state: paused;
              }
            }
            .goods-item {
              @keyframes carousel {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-4100px);
                }
              }
              animation: carousel 70s linear infinite;
              cursor: pointer;
              margin: 0 20px;
              box-shadow: 0 0 2px rgba(41, 40, 40, 0.9);
              position: relative;
              margin-bottom: 30px;
              height: 100%;
              width: 150px;
              list-style: none;
              padding: 0;
              position: relative;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
                transition: all 0.5s;
              }
              &:hover {
                .tip {
                  bottom: 0;
                }
                img {
                  transform: scale(1.1);
                }
              }
              .tip {
                background: red;
                text-align: center;
                color: white;
                padding: 0 3px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                position: absolute;
                left: 0;
                bottom: -34px;
                width: 100%;
                transition: all 0.4s ease-in-out;
                padding: 5px;
              }
            }
          }
        }
      }
    }
  }
</style>
