import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _70abef19 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _08902392 = () => interopDefault(import('..\\pages\\debuts.vue' /* webpackChunkName: "pages/debuts" */))
const _5d86ef1e = () => interopDefault(import('..\\pages\\poster.vue' /* webpackChunkName: "pages/poster" */))
const _0c127873 = () => interopDefault(import('..\\pages\\tickets.vue' /* webpackChunkName: "pages/tickets" */))
const _c604d9b0 = () => interopDefault(import('..\\pages\\movies\\a_gangue.vue' /* webpackChunkName: "pages/movies/a_gangue" */))
const _2499e539 = () => interopDefault(import('..\\pages\\movies\\escolhida.vue' /* webpackChunkName: "pages/movies/escolhida" */))
const _622be9d9 = () => interopDefault(import('..\\pages\\movies\\morteS.vue' /* webpackChunkName: "pages/movies/morteS" */))
const _65880c84 = () => interopDefault(import('..\\pages\\movies\\sangue.vue' /* webpackChunkName: "pages/movies/sangue" */))
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
    path: "/about",
    component: _70abef19,
    name: "about"
  }, {
    path: "/debuts",
    component: _08902392,
    name: "debuts"
  }, {
    path: "/poster",
    component: _5d86ef1e,
    name: "poster"
  }, {
    path: "/tickets",
    component: _0c127873,
    name: "tickets"
  }, {
    path: "/movies/a_gangue",
    component: _c604d9b0,
    name: "movies-a_gangue"
  }, {
    path: "/movies/escolhida",
    component: _2499e539,
    name: "movies-escolhida"
  }, {
    path: "/movies/morteS",
    component: _622be9d9,
    name: "movies-morteS"
  }, {
    path: "/movies/sangue",
    component: _65880c84,
    name: "movies-sangue"
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
