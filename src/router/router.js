import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '@/components/LoginPage.vue';
import HomePage from '@/components/HomePage.vue';
import DocImporter from '@/components/DocImporter.vue';
import SentimentAnalysis from '@/components/SentimentAnalysis.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // This ensures that the navigation works as expected

  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/documents',
      name: 'DocImporter',
      component: DocImporter,
    },
    {
      path: '/sentiment-analysis',
      name: 'Sentiment Analysis',
      component: SentimentAnalysis,
    },
  ],
});
