import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/reset.css";
import "iview/dist/styles/iview.css";
import "@/assets/css/index.css";

import { Button, Table, Form, Input, FormItem, Message } from "iview";
Vue.component("Button", Button);
Vue.component("Table", Table);
Vue.component("Form", Form);
Vue.component("FormItem", FormItem);
Vue.component("Input", Input);
Vue.prototype.$Message = Message;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
