import Vue from 'vue';
import Router from 'vue-router';
import Article from '@/components/article';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'article',
      component: Article
    }
  ]
});
