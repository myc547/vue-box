// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import bus from './components/bus';

Vue.config.productionTip = false;
Vue.use(iView);

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
  components: { App },
  template: '<App/>'
});
