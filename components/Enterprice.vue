<template>
  <div class="box container">
    <div class="top-title">
      <h2>随心组合</h2>
      <p>查看更多...</p>
    </div>
    <!-- <div class="produce-box"> -->
    <ul class="ul-box row justify-content-around">
      <li class="col-12 col-xl-2">
        <img src="../static/images/组合礼包1.jpg" alt="" />
        <div class="tip">御牛献礼礼盒1</div>
      </li>
      <li class="col-12 col-xl-2">
        <img src="../static/images/组合礼包2.jpg" alt="" />
        <div class="tip">五洲六道菜礼盒</div>
      </li>
      <li class="col-12 col-xl-2">
        <img src="../static/images/组合礼包3.jpg" alt="" />
        <div class="tip">瓜子花生炒货礼盒</div>
      </li>
      <li class="col-12 col-xl-2">
        <img src="../static/images/组合礼包4.jpg" alt="" />
        <div class="tip">牛腱王礼盒</div>
      </li>
      <div class="w-100"></div>

      <li class="col-12 col-xl-2">
        <img src="../static/images/组合礼包5.jpg" alt="" />
        <div class="tip">礼遇五洲礼盒</div>
      </li>
      <li class="col-12 col-xl-2">
        <img src="../static/images/组合礼包6.jpg" alt="" />
        <div class="tip">鸿运五洲礼盒</div>
      </li>
      <li class="col-12 col-xl-2">
        <img src="../static/images/组合礼包7.jpg" alt="" />
        <div class="tip">润包礼盒</div>
      </li>
      <li class="col-12 col-xl-2">
        <img src="../static/images/组合礼包8.jpg" alt="" />
        <div class="tip">五洲牛肉礼盒</div>
      </li>
    </ul>
    <hr />
    <div class="aboutBg" style="">
      <div class="about-box">
        <h3>关于我们</h3>
        <p>
          安徽九个挑夫电子商务有限公司成立于2012年，专注于农村产业互联网孵化及运营,助力农产品通过互联网建立品牌、拓展市场为数字乡村品牌运营、传播、策划、营销提供一站式服务。
          九个挑夫已在安徽省覆盖建立运营数十家区县域电商进农村示范项目、培育镇乡农村便民服务站1000多家打通区县镇村三级物流运营体系解决镇到村最后-公里难题，助力农产品上行突破上亿元销售额成绩。
        </p>
      </div>
    </div>
    <hr />
    <!-- <img src="../static/images/youshi.jpg" class="row col-sm-12 col-xl-12" style="margin: 10px 0" alt="" /> -->
    <img src="../static/images/hzhb.png" class="row col-sm-12 col-xl-12" style="margin: 10px 0" alt="" />
    <!-- <img src="../static/images/aboutbg.jpg" alt="" /> -->
  </div>
  <!-- </div> -->
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .box {
    .aboutBg {
      display: flex;
      justify-content: flex-end;
      height: 260px;
      background-size: cover;
      background-repeat: no-repeat;
      margin: 10px 0;
      /* width: 100%; */
      background-image: url(../static/images/aboutbg.jpg);
      color: white;
      .about-box {
        margin-right: 20px;
        h3 {
          margin-top: 25px;
        }
        p {
          width: 430px;
        }
      }
    }
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
      // display: flex;
      // justify-content: space-around;
      // flex-wrap: wrap;
      li {
        cursor: pointer;
        width: 275px;
        padding: 0;
        box-shadow: 0 0 3px rgba(126, 119, 119, 0.9);
        position: relative;
        margin-bottom: 30px;
        list-style: none;
        position: relative;
        overflow: hidden;
        transition: all 0.5s linear;
        &:hover {
          .tip {
            bottom: 0;
            // position: static;
            // margin-top: 0;
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
          transition: all 0.6s linear;
          padding: 5px;
          // margin-top: 40px;
        }
        p {
          margin-top: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        img {
          width: 100%;
          // height: 260px;
        }
      }
    }
  }
</style>
