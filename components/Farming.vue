<template>
  <div class="box container wow animate__lightSpeedInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
    <div class="top-title col-xl-12">
      <h2>年货节礼盒</h2>
      <p>查看更多...</p>
    </div>
    <!-- <div class="produce-box"> -->
    <ul class="ul-box row justify-content-around">
      <li class="col-12 col-xl-2" @click="$router.push('/goodsinfo')">
        <img src="../static/images/年货礼包1.jpg" alt="" />
        <div class="tip">年货节礼盒</div>
      </li>
      <li class="col-12 col-xl-2" @click="$router.push('/goodsinfo')">
        <img src="../static/images/年货礼包2.png" alt="" />
        <div class="tip">挑夫优选礼盒</div>
      </li>
      <li class="col-12 col-xl-2" @click="$router.push('/goodsinfo')">
        <img src="../static/images/年货礼包3.png" alt="" />
        <div class="tip">挑夫甄选礼盒</div>
      </li>
      <li class="col-12 col-xl-2" @click="$router.push('/goodsinfo')">
        <img src="../static/images/年货礼包4.png" alt="" />
        <div class="tip">挑夫精选礼盒</div>
      </li>
      <div class="w-100"></div>
      <li class="col-12 col-xl-2" @click="$router.push('/goodsinfo')">
        <img src="../static/images/年货礼包5.png" alt="" />
        <div class="tip">儿时记忆零食礼盒</div>
      </li>
      <li class="col-12 col-xl-2" @click="$router.push('/goodsinfo')">
        <img src="../static/images/年货礼包6.png" alt="" />
        <div class="tip">挑夫干货礼盒</div>
      </li>
      <li class="col-12 col-xl-2" @click="$router.push('/goodsinfo')">
        <img src="../static/images/蒙城1.jpg" alt="" />
        <div class="tip">蒙城好物礼盒套餐一</div>
      </li>
      <li class="col-12 col-xl-2" @click="$router.push('/goodsinfo')">
        <img src="../static/images/蒙城2.jpg" alt="" />
        <div class="tip">蒙城好物礼盒套餐一</div>
      </li>
      <div class="w-100"></div>
      <li class="col-12 col-xl-2" @click="$router.push('/goodsinfo')">
        <img src="../static/images/蒙城好物组合礼盒一.jpg" alt="" />
        <div class="tip">蒙城好物组合礼盒一</div>
      </li>
      <li class="col-12 col-xl-2" @click="$router.push('/goodsinfo')">
        <img src="../static/images/蒙城好物组合礼盒二.jpg" alt="" />
        <div class="tip">蒙城好物组合礼盒二</div>
      </li>
      <li class="col-12 col-xl-2" @click="$router.push('/goodsinfo')">
        <img src="../static/images/蒙城好物组合礼盒三.jpg" alt="" />
        <div class="tip">蒙城好物组合礼盒三</div>
      </li>
      <li class="col-12 col-xl-2" @click="$router.push('/goodsinfo')">
        <img src="../static/images/蒙城好物组合礼盒四.jpg" alt="" />
        <div class="tip">蒙城好物组合礼盒四</div>
      </li>
    </ul>
    <hr />
  </div>
  <!-- </div> -->
</template>

<script>
  export default {};
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
      // display: flex;
      // justify-content: space-around;
      // flex-wrap: wrap;
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
  @media only screen and (max-width: 450px) {
  }
</style>
