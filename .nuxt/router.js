import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _17215da5 = () => interopDefault(import('..\\pages\\a_gangue.vue' /* webpackChunkName: "pages/a_gangue" */))
const _70abef19 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _11064974 = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _22212b48 = () => interopDefault(import('..\\pages\\escolhida.vue' /* webpackChunkName: "pages/escolhida" */))
const _2f3c33ab = () => interopDefault(import('..\\pages\\morte_subita_2.vue' /* webpackChunkName: "pages/morte_subita_2" */))
const _2f7fea54 = () => interopDefault(import('..\\pages\\noticia-netflix.vue' /* webpackChunkName: "pages/noticia-netflix" */))
const _5d86ef1e = () => interopDefault(import('..\\pages\\poster.vue' /* webpackChunkName: "pages/poster" */))
const _1d9ff9ea = () => interopDefault(import('..\\pages\\sangue_de_pelicano.vue' /* webpackChunkName: "pages/sangue_de_pelicano" */))
const _0c127873 = () => interopDefault(import('..\\pages\\tickets.vue' /* webpackChunkName: "pages/tickets" */))
const _df386c44 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _17215da5,
    name: "a_gangue"
  }, {
    path: "/about",
    component: _70abef19,
    name: "about"
  }, {
    path: "/blog",
    component: _11064974,
    name: "blog"
  }, {
    path: "/escolhida",
    component: _22212b48,
    name: "escolhida"
  }, {
    path: "/morte_subita_2",
    component: _2f3c33ab,
    name: "morte_subita_2"
  }, {
    path: "/noticia-netflix",
    component: _2f7fea54,
    name: "noticia-netflix"
  }, {
    path: "/poster",
    component: _5d86ef1e,
    name: "poster"
  }, {
    path: "/sangue_de_pelicano",
    component: _1d9ff9ea,
    name: "sangue_de_pelicano"
  }, {
    path: "/tickets",
    component: _0c127873,
    name: "tickets"
  }, {
    path: "/",
    component: _df386c44,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
