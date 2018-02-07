// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import bus from './components/bus';
import axios from 'axios';
import store from './vuex/store';
import Lockr from 'lockr';

Vue.config.productionTip = false;
Vue.use(iView);

axios.interceptors.request.use(function (config) {
  if (store.state.authKey) {
    config.headers.authKey = Lockr.get('authKey');
  }
  return config;
}, function (err) {
  return Promise.reject(err);
});

axios.defaults.timeout = 1000 * 15;
axios.defaults.headers.authKey = Lockr.get('authKey');
axios.defaults.headers['Content-Type'] = 'application/json';

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  bus.loading = true;
  next();
});

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish();
  bus.loading = false;
  window.scrollTo(0, 0);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
