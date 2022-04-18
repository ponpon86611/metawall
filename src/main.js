import Vue from 'vue';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import App from './App.vue';

window.jQuery = $;
window.$ = $;

Vue.use(VueAxios, axios);
axios.defaults.withCredentials = true;

new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');
