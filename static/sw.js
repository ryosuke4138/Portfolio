importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07944289bf01718aa849.js",
    "revision": "06d01e256e411e332452090f253d9b2f"
  },
  {
    "url": "/_nuxt/220a011f7f61fbef882f.js",
    "revision": "12069769a5ba553b66a3c21b62a36cd2"
  },
  {
    "url": "/_nuxt/35541681ac9ff9ace113.js",
    "revision": "edba8ad6cbaeec70c951bde07b1eb42f"
  },
  {
    "url": "/_nuxt/42c2e27fe75c410cdc4b.css",
    "revision": "858e558899ea619a81dd982b4e182f5d"
  },
  {
    "url": "/_nuxt/464d25bf588bfbac2841.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/6178cc1761d2bd2adf39.js",
    "revision": "3be6310e7d57cce9a1f7684e152445fd"
  },
  {
    "url": "/_nuxt/63a5cb1ab8f51318866e.js",
    "revision": "65e4ecb3db1cc21d0d5c2af2e93f862c"
  },
  {
    "url": "/_nuxt/64cbc96829fee40bf166.js",
    "revision": "6028668557d96275e8722bdb0be2dcb3"
  },
  {
    "url": "/_nuxt/c81bc1d13a624cbc25c8.css",
    "revision": "bee7f259c15a65f07cba2f47d3354ebc"
  },
  {
    "url": "/_nuxt/ca32955bfe6d7d979027.js",
    "revision": "2c1bdf3251fbabf6a6baaced9c7168b4"
  },
  {
    "url": "/_nuxt/df669bdb28409d7db7d7.js",
    "revision": "071e6d336a9921f09dd2101070d05954"
  },
  {
    "url": "/_nuxt/f1fcf08e0ccfdf00d02e.js",
    "revision": "415ad74db11d9f5f8db10bbb1a075d68"
  },
  {
    "url": "/_nuxt/fc6cde20c5726c9b67dc.css",
    "revision": "570a46bcac73e9592d39654829f3ca8a"
  }
], {
  "cacheId": "bael-cms-template",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/images/uploads/.*'), workbox.strategies.cacheFirst({"cacheName":"image-cache","cacheExpiration":{"maxEntries":100,"maxAgeSeconds":86400}}), 'GET')
