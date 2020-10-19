import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _70abef19 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _5d86ef1e = () => interopDefault(import('..\\pages\\poster.vue' /* webpackChunkName: "pages/poster" */))
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
    path: "/about",
    component: _70abef19,
    name: "about"
  }, {
    path: "/poster",
    component: _5d86ef1e,
    name: "poster"
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
