import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';

import Navigator from 'nativescript-vue-navigator';
import {routes} from './route';

import {Fontawesome} from 'nativescript-fontawesome';

Fontawesome.init();

import './css/app.css';

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

Vue.use(Navigator, {routes});

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

new Vue({
  render: h => h("Navigator", {attrs:{defaultRoute:'/'}})
}).$start();