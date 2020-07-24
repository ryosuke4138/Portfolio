importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/077cf9361195289daf4b.js",
    "revision": "03702c5b63a57c3d124d8769191dd9e8"
  },
  {
    "url": "/_nuxt/0b98f707a308c4578ebc.js",
    "revision": "bf268b2690d81b9b3a580a9664c14e5f"
  },
  {
    "url": "/_nuxt/3adebefbd58787dfbe9f.js",
    "revision": "a7285da12b00c4773d76ce72122745ab"
  },
  {
    "url": "/_nuxt/44515f7ad77a4146ac3b.css",
    "revision": "858e558899ea619a81dd982b4e182f5d"
  },
  {
    "url": "/_nuxt/464d25bf588bfbac2841.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/6f4b6819592c54ff1728.js",
    "revision": "e6876d1b874910ff9016d24427e1f118"
  },
  {
    "url": "/_nuxt/96b3fa66f765c09e7a44.js",
    "revision": "4e8aeda0fa2c93f497b569322337d5b1"
  },
  {
    "url": "/_nuxt/c40874194baed2d8493d.js",
    "revision": "7dce0c26df243d86f3a22992142b7439"
  },
  {
    "url": "/_nuxt/c81bc1d13a624cbc25c8.css",
    "revision": "bee7f259c15a65f07cba2f47d3354ebc"
  },
  {
    "url": "/_nuxt/d1138250fde9142c3a02.js",
    "revision": "3277e5e7a8d0df0d5dfad807fdd6e1fe"
  },
  {
    "url": "/_nuxt/dfc2b1e5d8f53e058230.js",
    "revision": "bb96dc39182357a7083b4b95b76485de"
  },
  {
    "url": "/_nuxt/f60b6f68dcaea01ce027.js",
    "revision": "44fdda785f5675991a01edf8d78c55dc"
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
