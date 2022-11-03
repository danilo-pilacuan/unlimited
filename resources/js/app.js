import vue from 'vue'
window.Vue = vue;

import App from './components/App.vue';

//importamos Axios
import VueAxios from 'vue-axios';
import axios from 'axios';
import store from './store'

import VueLazyload from 'vue-lazyload'


//Importamos y configuramos el Vue-router
import VueRouter from 'vue-router';
import {routes} from './routes';
import Buefy from 'buefy'
import './customBuefy.scss'
import Carousel3d from 'vue-carousel-3d';
import "mdi-icons/css/materialdesignicons.min.css";
import VueCarousel from 'vue-carousel';


import { VueEditor } from "vue2-editor";

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Buefy)
Vue.use(Carousel3d);
Vue.use(VueEditor);
Vue.use(VueLazyload);
Vue.use(VueCarousel);


const router = new VueRouter({
    mode: 'history',
    routes: routes
});

//finalmente, definimos nuestra app de Vue
const app = new Vue({
    el: '#app',
    router: router,
    store:store,
    render: h => h(App),
});
