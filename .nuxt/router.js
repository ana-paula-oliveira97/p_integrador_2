import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _17215da5 = () => interopDefault(import('..\\pages\\a_gangue.vue' /* webpackChunkName: "pages/a_gangue" */))
const _70abef19 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _08902392 = () => interopDefault(import('..\\pages\\debuts.vue' /* webpackChunkName: "pages/debuts" */))
const _22212b48 = () => interopDefault(import('..\\pages\\escolhida.vue' /* webpackChunkName: "pages/escolhida" */))
const _ea6ba0d4 = () => interopDefault(import('..\\pages\\morteS.vue' /* webpackChunkName: "pages/morteS" */))
const _5d86ef1e = () => interopDefault(import('..\\pages\\poster.vue' /* webpackChunkName: "pages/poster" */))
const _144b810a = () => interopDefault(import('..\\pages\\sangue.vue' /* webpackChunkName: "pages/sangue" */))
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
    path: "/debuts",
    component: _08902392,
    name: "debuts"
  }, {
    path: "/escolhida",
    component: _22212b48,
    name: "escolhida"
  }, {
    path: "/morteS",
    component: _ea6ba0d4,
    name: "morteS"
  }, {
    path: "/poster",
    component: _5d86ef1e,
    name: "poster"
  }, {
    path: "/sangue",
    component: _144b810a,
    name: "sangue"
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
