import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '@/components/LoginPage.vue';
import DocImporter from '@/components/DocImporter.vue';
import SentimentAnalysis from '@/components/SentimentAnalysis.vue';
import SideNav from '@/components/SideNav.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/home',
      component: SideNav, // Apply the SideNav layout for all child routes
      children: [
        {
          path: 'documents',
          name: 'DocImporter',
          component: DocImporter,
        },
        {
          path: 'sentiment-analysis',
          name: 'SentimentAnalysis',
          component: SentimentAnalysis,
        },
      ],
    },
  ],
});
