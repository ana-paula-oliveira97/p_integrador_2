import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e3f5f8c4 = () => interopDefault(import('..\\pages\\a_gangue.vue' /* webpackChunkName: "pages/a_gangue" */))
const _5b8db3c0 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _22e73482 = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _54808383 = () => interopDefault(import('..\\pages\\escolhida.vue' /* webpackChunkName: "pages/escolhida" */))
const _f0008a38 = () => interopDefault(import('..\\pages\\morte_subita_2.vue' /* webpackChunkName: "pages/morte_subita_2" */))
const _b0252a86 = () => interopDefault(import('..\\pages\\noticia-netflix.vue' /* webpackChunkName: "pages/noticia-netflix" */))
const _429358aa = () => interopDefault(import('..\\pages\\poster.vue' /* webpackChunkName: "pages/poster" */))
const _bc097478 = () => interopDefault(import('..\\pages\\sangue_de_pelicano.vue' /* webpackChunkName: "pages/sangue_de_pelicano" */))
const _74d4a14c = () => interopDefault(import('..\\pages\\tickets.vue' /* webpackChunkName: "pages/tickets" */))
const _7b458e85 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/a_gangue",
    component: _e3f5f8c4,
    name: "a_gangue"
  }, {
    path: "/about",
    component: _5b8db3c0,
    name: "about"
  }, {
    path: "/blog",
    component: _22e73482,
    name: "blog"
  }, {
    path: "/escolhida",
    component: _54808383,
    name: "escolhida"
  }, {
    path: "/morte_subita_2",
    component: _f0008a38,
    name: "morte_subita_2"
  }, {
    path: "/noticia-netflix",
    component: _b0252a86,
    name: "noticia-netflix"
  }, {
    path: "/poster",
    component: _429358aa,
    name: "poster"
  }, {
    path: "/sangue_de_pelicano",
    component: _bc097478,
    name: "sangue_de_pelicano"
  }, {
    path: "/tickets",
    component: _74d4a14c,
    name: "tickets"
  }, {
    path: "/",
    component: _7b458e85,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
