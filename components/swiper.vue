<template>
  <div class="containers">
    <div class="rows">
      <swiper class="swiper" :options="swiperOption" style="">
        <swiper-slide class="slide">
          <div class="imgs" @click="$router.push('/goodsinfo')">
            <!-- <img :src="`${cdnUrl}/images/dxsqSwiper.jpg`" class="img" alt="" /> -->
            <img src="../static/images/dxsqSwiper2.jpg" class="img" alt="" />
          </div>
        </swiper-slide>
        <swiper-slide class="slide">
          <div class="imgs" @click="$router.push('/goodsinfo')">
            <img src="../static/images/月饼节.gif" class="img" alt="" />
          </div>
        </swiper-slide>
        <swiper-slide class="slide">
          <div class="imgs" @click="$router.push('/goodsinfo')">
            <img src="../static/images/年货礼包6.png" class="img" alt="" />
          </div>
        </swiper-slide>
        <!--  <swiper-slide class="slide">
          <div class="imgs">
            <img src="../static/images/qnzyq2.png" class="img" alt="" />
          </div>
        </swiper-slide> -->
        <swiper-slide class="slide">
          <div class="imgs" @click="$router.push('/goodsinfo')">
            <img src="../static/images/粽子4.jpg" class="img" alt="" />
          </div>
        </swiper-slide>
      </swiper>

      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
    </div>
  </div>
</template>
<script>
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";
  // import { cdnUrl } from "../common/setting";

  import "swiper/css/swiper.css";
  export default {
    name: "PageSwiper",
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        // cdnUrl,
        swiperOption: {
          loop: true,
          effect: "fade",
          slidesPerView: 1,
          pagination: {
            el: "#main-slider-pagination",
            type: "bullets",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          autoplay: {
            delay: 1800,
          },
        },
      };
    },
  };
</script>
<style lang="scss" scoped>
  .containers {
    .rows {
      .swiper {
        width: 100%;
        height: 600px;
        .slide {
          .img {
            width: 100%;
            height: 600px;
          }
        }
      }
    }
  }

  // .swiper {
  //   transition: all 1s;
  //   &:hover {
  //     transform: scale(0.9);
  //   }
  // }
  @media only screen and (max-width: 450px) {
    .containers {
      height: 180px;
      width: 100%;
      .rows {
        width: 100%;
        height: 100%;
        position: relative;

        .swiper {
          height: 100%;
          width: 100%;
          .slide {
            width: 100%;
            height: 100%;
            .imgs {
              height: 100%;
              width: 100%;

              img {
                height: 100%;
                width: 100%;
              }
            }
          }
        }

        .swiper-button-prev {
          position: absolute;
        }
        .swiper-button-next {
          position: absolute;
        }
      }
    }
  }
  @media only screen and (min-width: 1850px) {
    .containers {
      height: 780px;

      .rows {
        height: 100%;

        .swiper {
          width: 100%;
          height: 100%;

          .slide {
            .img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
</style>
