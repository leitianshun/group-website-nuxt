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
              <h3>联系我们</h3>
            </li>
            <li>
              <i class="bi bi-window"></i>
              电商视频
              <i class="bi bi-chevron-right"></i>
            </li>
            <li>
              <i class="bi bi-window"></i>
              培训课件
              <i class="bi bi-chevron-right"></i>
            </li>
            <li>
              <i class="bi bi-window"></i>
              物流配套
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
            <h5>联系我们</h5>
            <p>
              <nuxt-link to="/">
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
              </nuxt-link>
            </p>
          </div>
          <div class="contact-box">
            <div class="row">
              <div class="col-xl-6 col-lg-6" style="margin: 20px 0">
                <div class="comment-form__input-box">
                  <input v-model="name" type="text" placeholder="名字" name="name" />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6" style="margin: 20px 0">
                <div class="comment-form__input-box">
                  <input v-model="email" type="email" placeholder="邮箱" name="email" />
                  <!-- <p class="notice">{{ emailNotice }}</p> -->
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-6 col-lg-6" style="margin: 20px 0">
                <div class="comment-form__input-box">
                  <input v-model="phone" type="text" placeholder="手机号" name="phone" />
                  <!-- <p class="notice">{{ phoneNotice }}</p> -->
                </div>
              </div>
              <div class="col-xl-6 col-lg-6" style="margin: 20px 0">
                <!-- <div class="comment-form__input-box">
                  <input v-model="subject" type="email" placeholder="主题" name="Subject" />
                </div> -->
                <div class="comment-form__input-box">
                  <textarea
                    v-model="message"
                    name="message"
                    style="border: 1px solid"
                    rows="2"
                    cols="40"
                    placeholder="留言"></textarea>
                </div>
              </div>
            </div>
            <div class="row justify-content-center" style="margin-top: 20px">
              <div class="col-xl-12 col-lg-12">
                <button class="thm-btn" @click="submit">发送消息留言</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: "",
        email: "",
        phone: "",
        message: "",
      };
    },
    methods: {
      submit() {
        console.log("submit");
      },
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
        // margin: 0 0 10px;
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
              background: var(--themeColor);
            }
          }
        }
        .contact-box {
          margin-top: 30px;
          .comment-form__input-box {
            input {
              width: 100%;
              padding: 20px;
              border: none;
              background: #f6f4ec;
              border-radius: 10px;
              outline: none;
              font-size: 14px;
              color: #727d73;
              font-weight: 400;
              text-transform: capitalize;
            }
          }
          .thm-btn {
            position: relative;
            display: inline-block;
            vertical-align: middle;
            // -webkit-appearance: none;
            border: none;
            outline: none !important;
            background-color: var(--themeColor);
            color: white;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            padding: 18px 50px;
            border-radius: 10px;
            letter-spacing: 0.1em;
            transition: all 0.3s linear;
            overflow: hidden;
            z-index: 1;
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
</style>
