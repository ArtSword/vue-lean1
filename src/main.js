import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './store'
import router from './router'

//Vue.use(VueAxios, axios);

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(Vuex);

Vue.prototype.axios = axios;

axios.defaults.baseURL = '/api';
Vue.config.productionTip = false;

// 使用axios
/*axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_API_ROOT;
axios.defaults.headers = {
    "Content-Type": "application/json"
};*/

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
