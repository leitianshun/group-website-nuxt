<template>
  <div class="container">
    <div style="" class="zx-box">
      <img
        class="row col-12 col-xl-12 img-fluid"
        style="width: 100%; margin: 0; padding: 0"
        src="../../static/images/kgdj1.jpg"
        alt="" />

      <div class="main-box row col-12 col-xl-12 justify-content-between">
        <div class="left-box col-12 col-xl-4">
          <ul class="col-12">
            <li class="">
              <h3>产品中心</h3>
            </li>
            <li>
              <i class="bi bi-handbag"></i>

              年货节礼盒
              <i class="bi bi-chevron-right"></i>
            </li>
            <li>
              <i class="bi bi-handbag"></i>

              挑夫优选礼盒
              <i class="bi bi-chevron-right"></i>
            </li>
            <li>
              <i class="bi bi-handbag"></i>

              挑夫甄选礼盒
              <i class="bi bi-chevron-right"></i>
            </li>
            <li>
              <i class="bi bi-handbag"></i>

              挑夫精选礼盒
              <i class="bi bi-chevron-right"></i>
            </li>
            <li>
              <i class="bi bi-handbag"></i>

              挑夫干货礼盒
              <i class="bi bi-chevron-right"></i>
            </li>
            <li>
              <i class="bi bi-handbag"></i>

              御牛献礼礼盒
              <i class="bi bi-chevron-right"></i>
            </li>
            <li>
              <i class="bi bi-handbag"></i>

              五洲六道菜礼盒
              <i class="bi bi-chevron-right"></i>
            </li>
            <li>
              <i class="bi bi-handbag"></i>

              瓜子花生炒货礼盒
              <i class="bi bi-chevron-right"></i>
            </li>
            <li>
              <i class="bi bi-handbag"></i>

              瓜子花生炒货礼盒
              <i class="bi bi-chevron-right"></i>
            </li>
            <li></li>
          </ul>
          <div class="contact">
            <h5>联系我们</h5>
            <p>地址： 合肥市蜀山区湖光路电子商务产业园2期1号楼</p>
            <p>电话：400-9123009</p>
            <p>邮箱：jgtf123@163.com</p>
          </div>
        </div>

        <div class="right-box col-xl-7 col-12">
          <div class="top-box col-12">
            <h5>产品中心</h5>
            <p @click="goHome()">
              主页
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </span>
            </p>
          </div>
          <ul class="ul-box row justify-content-around">
            <li class="col-12 col-xl-4">
              <img src="../../static/images/年货礼包1.jpg" alt="" />
              <div class="tip">年货节礼盒</div>
            </li>
            <li class="col-12 col-xl-4">
              <img src="../../static/images/年货礼包2.png" alt="" />
              <div class="tip">挑夫优选礼盒</div>
            </li>
            <div class="w-100"></div>

            <li class="col-12 col-xl-4">
              <img src="../../static/images/年货礼包3.png" alt="" />
              <div class="tip">挑夫甄选礼盒</div>
            </li>
            <li class="col-12 col-xl-4">
              <img src="../../static/images/年货礼包4.png" alt="" />
              <div class="tip">挑夫精选礼盒</div>
            </li>
            <div class="w-100"></div>
            <li class="col-12 col-xl-4">
              <img src="../../static/images/年货礼包5.png" alt="" />
              <div class="tip">儿时记忆零食礼盒</div>
            </li>
            <li class="col-12 col-xl-4">
              <img src="../../static/images/年货礼包6.png" alt="" />
              <div class="tip">挑夫干货礼盒</div>
            </li>
            <div class="w-100"></div>

            <li class="col-12 col-xl-4">
              <img src="../../static/images/蒙城1.jpg" alt="" />
              <div class="tip">蒙城好物礼盒套餐一</div>
            </li>
            <li class="col-12 col-xl-4">
              <img src="../../static/images/蒙城2.jpg" alt="" />
              <div class="tip">蒙城好物礼盒套餐一</div>
            </li>
            <div class="w-100"></div>

            <li class="col-12 col-xl-4">
              <img src="../../static/images/蒙城3.jpg" alt="" />
              <div class="tip">蒙城好物礼盒套餐一</div>
            </li>
            <li class="col-12 col-xl-4">
              <img src="../../static/images/蒙城4.jpg" alt="" />
              <div class="tip">蒙城好物礼盒套餐一</div>
            </li>
            <div class="w-100"></div>
            <li class="col-12 col-xl-4">
              <img src="../../static/images/组合礼包1.jpg" alt="" />
              <div class="tip">御牛献礼礼盒1</div>
            </li>
            <li class="col-12 col-xl-4">
              <img src="../../static/images/组合礼包2.jpg" alt="" />
              <div class="tip">五洲六道菜礼盒</div>
            </li>
            <div class="w-100"></div>

            <li class="col-12 col-xl-4">
              <img src="../../static/images/组合礼包3.jpg" alt="" />
              <div class="tip">瓜子花生炒货礼盒</div>
            </li>
            <li class="col-12 col-xl-4">
              <img src="../../static/images/组合礼包4.jpg" alt="" />
              <div class="tip">牛腱王礼盒</div>
            </li>
            <div class="w-100"></div>

            <li class="col-12 col-xl-4">
              <img src="../../static/images/组合礼包5.jpg" alt="" />
              <div class="tip">礼遇五洲礼盒</div>
            </li>
            <li class="col-12 col-xl-4">
              <img src="../../static/images/组合礼包6.jpg" alt="" />
              <div class="tip">鸿运五洲礼盒</div>
            </li>
            <div class="w-100"></div>

            <li class="col-12 col-xl-4">
              <img src="../../static/images/组合礼包7.jpg" alt="" />
              <div class="tip">润包礼盒</div>
            </li>
            <li class="col-12 col-xl-4">
              <img src="../../static/images/组合礼包8.jpg" alt="" />
              <div class="tip">五洲牛肉礼盒</div>
            </li>
            <div class="w-100"></div>

            <li class="col-12 col-xl-4">
              <img src="../../static/images/sxdami.png" alt="" />
              <div class="tip">寿县大米</div>
            </li>
            <li class="col-12 col-xl-4">
              <img src="../../static/images/山茶油主图6.png" alt="" />
              <div class="tip">山茶油</div>
            </li>
            <div class="w-100"></div>

            <li class="col-12 col-xl-4">
              <img src="../../static/images/五华鸡养殖环境9.png" alt="" />
              <div class="tip">五华鸡</div>
            </li>
            <li class="col-12 col-xl-4">
              <img src="../../static/images/黑芝麻蜂蜜丸主图6.png" alt="" />
              <div class="tip">黑芝麻蜂蜜丸</div>
            </li>
            <div class="w-100"></div>

            <li class="col-12 col-xl-4">
              <img src="../../static/images/sxyou.png" alt="" />
              <div class="tip">寿县香油</div>
            </li>
            <li class="col-12 col-xl-4">
              <img src="../../static/images/大别山黄牛肉主图6.jpg" alt="" />
              <div class="tip">大别山黄牛肉</div>
            </li>
            <div class="w-100"></div>

            <li class="col-12 col-xl-4">
              <img src="../../static/images/主图_2.png" alt="" />
              <div class="tip">白桃水果茶</div>
            </li>
            <li class="col-12 col-xl-4">
              <img src="../../static/images/2.jpg" alt="" />
              <div class="tip">葡萄水果茶</div>
            </li>
          </ul>
          <!-- <div class="news-box col-12">
            <ul class="ul-box col-12">
              <li class="col-12">
                <img src="/images/tsimg-2.jpg" class="col-12 img-fluid" alt="" />
                <div class="ts-content col-12">
                  <h4 class="text-truncate">曲苑奇葩——寿县渔鼓</h4>
                  <p class="text-truncate">
                    安徽曲艺一枝花界首渔鼓又称道筒子或坠子嗡，行话为溜兰条儿，是一种安徽省的传统说唱艺术。源于明代叙事性道情，后由道士以道教为演说题材，到民间传道时流传至界首，约有四
                  </p>
                </div>
              </li>

              <li col-12>
                <img src="/images/tsimg-3.jpg" alt="" />
                <div class="ts-content">
                  <h4 class="text-truncate">寿县二院到新马集开展“医”心为民送医下乡活动</h4>
                  <p class="text-truncate">
                    党史学习教育开展以来，阜阳市第二人民医院把学党史、悟思想、办实事、开新局贯穿学习教育全过程，把我为群众办实事，服务基层保健康实践活动作为党史学习教育的重要内容。7月
                  </p>
                </div>
              </li>

            </ul>
            <div class="paging col-12" style="margin-top: 20px">
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
            </div>
          </div> -->
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
    margin-bottom: 20px;
    // .bg-img {
    //   width: 100%;
    //   height: 260px;
    //   background-image: url(/images/tsimg.jpg);
    //   background-position: center;
    //   background-repeat: no-repeat;
    //   background-size: cover;
    // background-attachment: fixed; //图片滑动时固定
    // }
    .main-box {
      display: flex;
      margin: 20px 0;
      padding: 0;
      .left-box {
        // width: 247px;
        // height: 600px;
        // border: 1px solid gray;
        padding: 0;
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
        margin: 0;
        width: 100%;
        box-shadow: 0px 0px 1px gray;
        margin-bottom: 20px;
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
        padding: 0;
        .ul-box {
          list-style: none;
          padding: 0;
          margin: 20px 0;
          li {
            cursor: pointer;
            height: 200px;
            // width: 275px;
            box-shadow: 0 0 2px rgba(41, 40, 40, 0.9);
            position: relative;
            margin-bottom: 30px;
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
</style>
