import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _db044e3e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _28929c1d = () => interopDefault(import('..\\pages\\createpost.vue' /* webpackChunkName: "pages/createpost" */))
const _4fdc9566 = () => interopDefault(import('..\\pages\\mypost.vue' /* webpackChunkName: "pages/mypost" */))
const _38399710 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _833bca6e = () => interopDefault(import('..\\pages\\uploadimage.vue' /* webpackChunkName: "pages/uploadimage" */))
const _ef17f40a = () => interopDefault(import('..\\pages\\webchat.vue' /* webpackChunkName: "pages/webchat" */))
const _b82c16e0 = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages/auth/login" */))
const _2665a5f3 = () => interopDefault(import('..\\pages\\auth\\logout.vue' /* webpackChunkName: "pages/auth/logout" */))
const _25ae8a81 = () => interopDefault(import('..\\pages\\auth\\signup.vue' /* webpackChunkName: "pages/auth/signup" */))
const _339c88bf = () => interopDefault(import('..\\pages\\editPost\\_id.vue' /* webpackChunkName: "pages/editPost/_id" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/bn",
    component: _db044e3e,
    name: "index___bn"
  }, {
    path: "/createpost",
    component: _28929c1d,
    name: "createpost___en"
  }, {
    path: "/mypost",
    component: _4fdc9566,
    name: "mypost___en"
  }, {
    path: "/profile",
    component: _38399710,
    name: "profile___en"
  }, {
    path: "/uploadimage",
    component: _833bca6e,
    name: "uploadimage___en"
  }, {
    path: "/webchat",
    component: _ef17f40a,
    name: "webchat___en"
  }, {
    path: "/auth/login",
    component: _b82c16e0,
    name: "auth-login___en"
  }, {
    path: "/auth/logout",
    component: _2665a5f3,
    name: "auth-logout___en"
  }, {
    path: "/auth/signup",
    component: _25ae8a81,
    name: "auth-signup___en"
  }, {
    path: "/bn/createpost",
    component: _28929c1d,
    name: "createpost___bn"
  }, {
    path: "/bn/mypost",
    component: _4fdc9566,
    name: "mypost___bn"
  }, {
    path: "/bn/profile",
    component: _38399710,
    name: "profile___bn"
  }, {
    path: "/bn/uploadimage",
    component: _833bca6e,
    name: "uploadimage___bn"
  }, {
    path: "/bn/webchat",
    component: _ef17f40a,
    name: "webchat___bn"
  }, {
    path: "/bn/auth/login",
    component: _b82c16e0,
    name: "auth-login___bn"
  }, {
    path: "/bn/auth/logout",
    component: _2665a5f3,
    name: "auth-logout___bn"
  }, {
    path: "/bn/auth/signup",
    component: _25ae8a81,
    name: "auth-signup___bn"
  }, {
    path: "/bn/editPost/:id?",
    component: _339c88bf,
    name: "editPost-id___bn"
  }, {
    path: "/editPost/:id?",
    component: _339c88bf,
    name: "editPost-id___en"
  }, {
    path: "/",
    component: _db044e3e,
    name: "index___en"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
