// import 'animate.css'
// if (process.browser) {
//   const { WoW } = require('wowjs')
//   window.WoW = WoW
// }
// // console.log(WoW)

import { WOW } from 'wowjs'
import 'animate.css'
if (process.client) {
  window.WOW = WOW
}



// import Vue from "vue";
// const { WOW } = require("wowjs");
// Vue.prototype.$wow = WOW