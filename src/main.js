// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import VueScrollTo from "vue-scrollto";

import "./assets/styles.scss";
//import "style-loader!css-loader!sass-loader?modules!./assets/styles.scss";


import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;
Vue.use(VueScrollTo);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});

