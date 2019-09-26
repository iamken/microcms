import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/post/:id',
      name: 'Article',
      component: Article
    }
  ]
})
