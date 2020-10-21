import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import viewer from "v-viewer/src/component.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  viewer,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
