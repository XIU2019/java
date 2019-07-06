import Vue from 'vue'
import Router from 'vue-router'
import BlogHeader from '@/components/common/BlogHeader.vue'
import BlogLogin from '@/components/manage/BlogLogin.vue'
import BlogIndex from '@/components/home/BlogIndex.vue'
import TestLogin from '@/components/manage/TestLogin.vue'
import home from '@/components/home/home.vue'
import Main from '@/views/Main.vue'
import vhome from '@/components/home/vhome.vue'
import Home from '@/views/Home.vue'
import PlayArticles from '@/views//nav1/PlayArticles.vue'
import Login from '@/views/Login.vue'
import SeleArticles from '@/views//nav1/SeleArticles.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   redirect: '/login'
    // },
    {
      path: '/index',
      name: 'BlogIndex',
      component: BlogIndex,
      hidden: true,
    },
    {
      path: '/header',
      name: 'BlogHeader',
      component: BlogHeader,
      hidden: true
    },

    // {
    //   path: '/manage',
    //   redirect: '/login'
    // },
    // {
    //   path: '/login',
    //   name: 'BlogLogin',
    //   component: BlogLogin,
    //   hidden: true
    // },
    {
      path: '/TestLogin',
      name: 'TestLogin',
      component: TestLogin,
      hidden: true,
    },
    {
      path: '/play',
      name: 'play',
      component: PlayArticles,
      hidden: true
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      hidden: true
    },
    {
      path: '/vhome',
      name: 'vhome',
      component:vhome,
      hidden: true
    },
    //正式页面
    {
      path: '/login',
      name: 'login',
      component:Login,
      hidden: true
    },
    {
      path: '/',
      component: Home,
      name: '管理文章',
      iconCls: 'el-icon-message',//图标样式class
      children: [
        { path: '/main', component: Main, name: '主页', hidden: true },
        { path: '/play', component: PlayArticles, name: 'PlayArticles' },
        // { path: '/form', component: Form, name: 'Form' },
        // { path: '/user', component: user, name: '列表' },
      ]
    },






  ]
})
