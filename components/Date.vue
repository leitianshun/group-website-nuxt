<template>
  <div class="main-box container" style="padding: 0">
    <!-- <div class="box row col-xl-12 col-12">
      <h5 style="width: 200px; line-height: 64px" class="col-12 col-xl-6">{{ date }}</h5>
      <div class="search col-12 col-xl-6">
        <span>站内搜索</span>
        <div class="search-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16">
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>

          <input type="text" placeholder="请输入关键字" />
        </div>
        <button>搜索</button>
      </div>
    </div> -->

    <!-- <div class="row " style="padding: 0; margin: 10px 0; width: 100%"> -->
    <!-- <img src="/images/img-1.jpg" class="img-fluid row col-xl-12 col-sm-12" style="margin: 10px 0" alt="" /> -->
    <!-- </div> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        date: "",
      };
    },
    computed: {},
    created() {
      this.dates();
    },
    methods: {
      dates() {
        setInterval(() => {
          const date = new Date();
          const ymd = date.toLocaleDateString();
          const sfm = date.toLocaleTimeString();
          const res = ymd + "-" + sfm + "";
          const ress = res.replace(/\//g, "-");
          this.$nextTick(() => {
            this.date = ress;
          });
        }, 1000);
      },
    },
  };
</script>
<style lang="scss" scoped>
  // .main-box {
  //   margin: 0;
  //   padding: 0;
  .box {
    display: flex;
    justify-content: space-between;
    // padding: 20px;
    // height: 72px;
    margin: 0;
    padding: 0;
    .search {
      display: flex;
      align-items: center;
      padding: 0;
      span {
        margin: 0 10px 0;
      }
      .search-box {
        border: 1px solid rgba(177, 153, 153, 0.5);
        display: flex;
        // height: 35px;
        // padding: 0 5px;
        // line-height: 35px;
        svg {
          color: gray;
          margin: 5px 0 0;
        }
        input {
          border: none;
          // margin: 4px 0 0;
          outline: none;
        }
      }
    }
    button {
      border-radius: 8px;
      margin: 0 5px;
      border: none;
      background-color: rgb(40, 151, 57);
      color: white;
      padding: 5px;
      width: 80px;
    }
  }
  // }

  // @media only screen and (max-width: 450px) {
  //   .contain {
  //     display: none;
  //   }
  // }
</style>
