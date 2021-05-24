import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';

import Navigator from 'nativescript-vue-navigator';
import {routes} from './route';

import './app.scss';
import './css/app.css';

import {TNSFontIcon, fonticon} from 'nativescript-fonticon';

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

TNSFontIcon.paths = {
  'fa' : './assets/css/fontawesome.css'
};

TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

Vue.use(Navigator, {routes});
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

new Vue({
  render: h => h("Navigator", {attrs:{defaultRoute:'/'}})
}).$start();