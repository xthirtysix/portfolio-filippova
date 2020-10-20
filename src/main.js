import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Viewer from "v-viewer";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Viewer,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
