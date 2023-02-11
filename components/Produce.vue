<template>
  <div class="box container wow animate__backInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
    <div class="top-title row col-xl-12">
      <h2>品牌产品</h2>
      <p>查看更多...</p>
    </div>
    <!-- <div class="produce-box"> -->
    <ul class="ul-box row justify-content-around">
      <!-- offset-xl-1  设置偏移 -->
      <li class="col-12 col-xl-3" @click="$router.push({ path: '/goodsinfo', query: { id: 123 } })">
        <img src="../static/images/怀宁贡糕.jpg" alt="" />
        <img src="/images/hide.png" class="hide" alt="" />
        <div class="goods-box">
          <div class="goods-info">
            <span>
              <i class="bi bi-cart3"></i>
              怀宁贡糕
            </span>
            <button>查看详情</button>
          </div>

          <div class="price">
            价格：
            <span style="color: red">¥78</span>
          </div>
        </div>
      </li>

      <li class="col-12 col-xl-3" @click="$router.push('/goodsinfo')">
        <img src="../static/images/美林美蓝莓冰酒.png" alt="" />
        <img src="/images/hide.png" class="hide" alt="" />
        <div class="goods-box">
          <div class="goods-info">
            <span>
              <i class="bi bi-cart3"></i>
              美林美蓝莓冰酒
            </span>
            <button>查看详情</button>
          </div>

          <div class="price">
            价格：
            <span style="color: red">¥398</span>
          </div>
        </div>
      </li>

      <li class="col-12 col-xl-3" @click="$router.push('/goodsinfo')">
        <img src="../static/images/木耳.jpg" alt="" />
        <img src="/images/hide.png" class="hide" alt="" />
        <div class="goods-box">
          <div class="goods-info">
            <span>
              <i class="bi bi-cart3"></i>
              新合桑枝黑木耳
            </span>
            <button>查看详情</button>
          </div>

          <div class="price">
            价格：
            <span style="color: red">¥75</span>
          </div>
        </div>
      </li>
      <div class="w-100"></div>
      <li class="col-12 col-xl-3" @click="$router.push('/goodsinfo')">
        <img src="../static/images/sxdami.png" alt="" />
        <img src="/images/hide.png" class="hide" alt="" />
        <div class="goods-box">
          <div class="goods-info">
            <span>
              <i class="bi bi-cart3"></i>
              寿州大米
            </span>
            <button>查看详情</button>
          </div>

          <div class="price">
            价格：
            <span style="color: red">¥9.9</span>
          </div>
        </div>
      </li>

      <li class="col-12 col-xl-3" @click="$router.push('/goodsinfo')">
        <img src="../static/images/山茶油主图6.png" alt="" />
        <img src="/images/hide.png" class="hide" alt="" />
        <div class="goods-box">
          <div class="goods-info">
            <span>
              <i class="bi bi-cart3"></i>
              山茶油
            </span>
            <button>查看详情</button>
          </div>

          <div class="price">
            价格：
            <span style="color: red">¥9.9</span>
          </div>
        </div>
      </li>

      <li class="col-12 col-xl-3" @click="$router.push('/goodsinfo')">
        <img src="../static/images/五华鸡养殖环境9.png" alt="" />
        <img src="/images/hide.png" class="hide" alt="" />
        <div class="goods-box">
          <div class="goods-info">
            <span>
              <i class="bi bi-cart3"></i>
              太湖散养土鸡
            </span>
            <button>查看详情</button>
          </div>

          <div class="price">
            价格：
            <span style="color: red">¥9.9</span>
          </div>
        </div>
      </li>
      <div class="w-100"></div>

      <li class="col-12 col-xl-3" @click="$router.push('/goodsinfo')">
        <img src="../static/images/黑芝麻蜂蜜丸主图6.png" alt="" />
        <img src="/images/hide.png" class="hide" alt="" />
        <div class="goods-box">
          <div class="goods-info">
            <span>
              <i class="bi bi-cart3"></i>
              原味太湖芝麻丸
            </span>
            <button>查看详情</button>
          </div>

          <div class="price">
            价格：
            <span style="color: red">¥9.9</span>
          </div>
        </div>
      </li>

      <li class="col-12 col-xl-3" @click="$router.push('/goodsinfo')">
        <img src="../static/images/sxyou.png" alt="" />
        <img src="/images/hide.png" class="hide" alt="" />
        <div class="goods-box">
          <div class="goods-info">
            <span>
              <i class="bi bi-cart3"></i>
              寿县香油
            </span>
            <button>查看详情</button>
          </div>

          <div class="price">
            价格：
            <span style="color: red">¥9.9</span>
          </div>
        </div>
      </li>
      <li class="col-12 col-xl-3" @click="$router.push('/goodsinfo')">
        <img src="../static/images/主图_1.jpg" alt="" />
        <img src="/images/hide.png" class="hide" alt="" />
        <div class="goods-box">
          <div class="goods-info">
            <span>
              <i class="bi bi-cart3"></i>
              人参黑糖姜枣茶
            </span>
            <button>查看详情</button>
          </div>

          <div class="price">
            价格：
            <span style="color: red">¥9.9</span>
          </div>
        </div>
      </li>
      <!-- 此div是用来换行用的 -->
      <div class="w-100"></div>
      <li class="col-12 col-xl-3" @click="$router.push('/goodsinfo')">
        <img src="../static/images/大别山黄牛肉主图6.jpg" alt="" />
        <img src="/images/hide.png" class="hide" alt="" />
        <div class="goods-box">
          <div class="goods-info">
            <span>
              <i class="bi bi-cart3"></i>
              太湖大别山黄牛肉
            </span>
            <button>查看详情</button>
          </div>

          <div class="price">
            价格：
            <span style="color: red">¥9.9</span>
          </div>
        </div>
      </li>

      <li class="col-12 col-xl-3" @click="$router.push('/goodsinfo')">
        <img src="../static/images/主图_2.png" alt="" />
        <img src="/images/hide.png" class="hide" alt="" />
        <div class="goods-box">
          <div class="goods-info">
            <span>
              <i class="bi bi-cart3"></i>
              界首水蜜桃茉莉茶
            </span>
            <button>查看详情</button>
          </div>

          <div class="price">
            价格：
            <span style="color: red">¥9.9</span>
          </div>
        </div>
      </li>

      <li class="col-12 col-xl-3" @click="$router.push('/goodsinfo')">
        <img src="../static/images/2.jpg" alt="" />
        <img src="/images/hide.png" class="hide" alt="" />
        <div class="goods-box">
          <div class="goods-info">
            <span>
              <i class="bi bi-cart3"></i>
              界首白葡萄茉莉茶
            </span>
            <button>查看详情</button>
          </div>

          <div class="price">
            价格：
            <span style="color: red">¥9.9</span>
          </div>
        </div>
      </li>
    </ul>
    <hr />
    <img
      src="../static/images/img.jpg"
      class="wow animate__bounceInRight"
      data-wow-delay="100ms"
      data-wow-duration="2500ms"
      style="width: 100%"
      alt="" />
    <!-- <div class="bgimg"></div> -->
    <hr />
  </div>
  <!-- </div> -->
</template>

<script>
  export default {
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style lang="scss" scoped>
  .box {
    .top-title {
      padding: 20px;
      display: flex;
      margin: 0 0 20px;
      h2 {
        font-weight: bold;
        padding-left: 10px;
        border-left: 5px solid green;
      }
      p {
        margin: 10px 0 0 50px;
      }
    }
    .ul-box {
      padding: 0;
      margin: 0;
      display: flex;
      // justify-content: space-around;
      // flex-wrap: wrap;

      li {
        // margin: 0 10px;
        width: 275px;
        // height: 300px;
        overflow: hidden;
        cursor: pointer;
        // box-shadow: 0 0 2px rgba(41, 40, 40, 0.9);
        position: relative;
        margin-bottom: 30px;
        padding: 0;
        &:hover img {
          transform: scale(1.1);
        }
        img {
          width: 100%;
          height: 200px;
          transition: all 0.5s;
          margin-bottom: 8px;
        }
        .hide {
          position: absolute;
          top: 0;
          left: 0;
          display: none;
        }
        &:hover {
          .hide {
            display: block;
          }
        }
        // &:hover::before {
        //   content: "";
        //   position: absolute;
        //   display: block;
        //   bottom: 105px;
        //   left: 0;
        //   width: 100%;
        //   height: 259px;
        //   //   color: rgba(182, 223, 153, 0.9);
        //   background: rgba(182, 223, 153, 0.3);
        //   z-index: 100;
        // }
        list-style: none;
        .goods-box {
          padding: 10px;
          .goods-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
              // max-width: 80px;
            }
            button {
              // max-height: 26px;
              border: none;
              color: white;
              background: var(--themeColor);
              border-radius: 15px;
            }
          }
          .price {
            margin: 5px 0;
          }
        }
      }
    }
    // .bgimg {
    //   background: url(../static/images/img.jpg);
    //   background-position: center;
    //   background-repeat: no-repeat;
    //   // width: 100%;
    //   height: 500px;
    //   background-attachment: fixed;
    //   background-size: contain;
    // }
  }
</style>
