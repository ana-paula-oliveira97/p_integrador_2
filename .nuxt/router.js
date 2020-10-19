import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2eb4ba67 = () => interopDefault(import('..\\pages\\a_gangue.vue' /* webpackChunkName: "pages/a_gangue" */))
const _17799997 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _2e9f9379 = () => interopDefault(import('..\\pages\\debuts.vue' /* webpackChunkName: "pages/debuts" */))
const _6c70b44c = () => interopDefault(import('..\\pages\\escolhida.vue' /* webpackChunkName: "pages/escolhida" */))
const _3f591226 = () => interopDefault(import('..\\pages\\morte_subita_2.vue' /* webpackChunkName: "pages/morte_subita_2" */))
const _849c5650 = () => interopDefault(import('..\\pages\\morteS.vue' /* webpackChunkName: "pages/morteS" */))
const _04242db3 = () => interopDefault(import('..\\pages\\poster.vue' /* webpackChunkName: "pages/poster" */))
const _28c1e4bd = () => interopDefault(import('..\\pages\\sangue.vue' /* webpackChunkName: "pages/sangue" */))
const _1ae05566 = () => interopDefault(import('..\\pages\\sangue_de_pelicano.vue' /* webpackChunkName: "pages/sangue_de_pelicano" */))
const _361f7b71 = () => interopDefault(import('..\\pages\\tickets.vue' /* webpackChunkName: "pages/tickets" */))
const _3731745c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2eb4ba67,
    name: "a_gangue"
  }, {
    path: "/about",
    component: _17799997,
    name: "about"
  }, {
    path: "/debuts",
    component: _2e9f9379,
    name: "debuts"
  }, {
    path: "/escolhida",
    component: _6c70b44c,
    name: "escolhida"
  }, {
    path: "/morte_subita_2",
    component: _3f591226,
    name: "morte_subita_2"
  }, {
    path: "/morteS",
    component: _849c5650,
    name: "morteS"
  }, {
    path: "/poster",
    component: _04242db3,
    name: "poster"
  }, {
    path: "/sangue",
    component: _28c1e4bd,
    name: "sangue"
  }, {
    path: "/sangue_de_pelicano",
    component: _1ae05566,
    name: "sangue_de_pelicano"
  }, {
    path: "/tickets",
    component: _361f7b71,
    name: "tickets"
  }, {
    path: "/",
    component: _3731745c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
