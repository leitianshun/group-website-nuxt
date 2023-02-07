<template>
  <client-only>
    <span v-show="isVisible" href="#" class="scroll-to-top" @click="scrollToTop">
      <span style="font-size: 10px; display: flex; flex-direction: column">
        <i style="font-size: 25px; margin-top: -10px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-airplane-engines-fill"
            viewBox="0 0 16 16">
            <path
              d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0Z" />
          </svg>
        </i>
        回到顶部
      </span>
    </span>
  </client-only>
</template>

<script>
  import { debounce } from "vue-debounce";
  export default {
    data() {
      return {
        scrollTop: null,
        isVisible: false,
        visibleDistance: 200,
      };
    },
    mounted() {
      window.addEventListener("scroll", debounce(this.scrollListener, 100), true);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.scrollListener);
    },
    methods: {
      scrollListener() {
        if (window.pageYOffset) {
          this.scrollTop = window.pageYOffset;
        } else {
          this.scrollTop = 0;
        }
        // 控制按鈕顯示
        if (this.scrollTop > this.visibleDistance) {
          this.isVisible = true;
        } else {
          this.isVisible = false;
        }
      },
      scrollToTop() {
        this.intervalId = setInterval(() => {
          if (window.pageYOffset === 0) {
            clearInterval(this.intervalId);
          }
          window.scroll(0, window.pageYOffset - 200);
        }, 10);
      },
    },
  };
</script>

<style lang="scss">
  .scroll-to-top {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 70px;
    position: fixed;
    bottom: 51px;
    right: 20px;
    z-index: 99;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    text-align: center;
    transition: all 0.8s ease;

    // display: none;

    overflow: hidden;
    // background-color: white;
    cursor: pointer;
    span {
      margin-top: 10px;
      display: block;
      color: #fff;
      // line-height: 70px;
      font-weight: bold;
    }

    &::before {
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100px;

      background: var(--themeColor);

      transition: 900ms ease;
      z-index: -1;
    }

    &:hover:before {
      background: rgb(238, 146, 7);
    }

    &:hover {
      i {
        color: rgb(255, 255, 255);
      }
    }
  }
  @media only screen and (max-width: 450px) {
    .scroll-to-top {
      position: fixed;
      bottom: 40px;
      left: 290px;
      // display: none;
    }
  }
</style>
