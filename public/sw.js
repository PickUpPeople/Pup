/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-cc34c9704fdc5482a0bd.js"
  },
  {
    "url": "commons-3904086099486032b176.js"
  },
  {
    "url": "app-be6efc165a34b15707af.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-cf2fd0f92da7499f18b1.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3e840595e0cf0a949b3b138e5fb652bf"
  },
  {
    "url": "styles.cd6a2fbcd572e36162d3.css"
  },
  {
    "url": "styles-7b972f7cb5b2c706881c.js"
  },
  {
    "url": "component---src-pages-index-js-07000a9f32df164bf312.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "b8ac506f2e3e51dea9d9f9903f847882"
  },
  {
    "url": "component---src-pages-players-js-4eece0cf65ef84cabe16.js"
  },
  {
    "url": "page-data/players/page-data.json",
    "revision": "0420936c1e606467d81751153e9af2fe"
  },
  {
    "url": "component---src-templates-content-template-js-4cccd4e958c64d4838be.js"
  },
  {
    "url": "page-data/Player/coach/page-data.json",
    "revision": "1ab43eacd293a0fd5b7715a40480a952"
  },
  {
    "url": "page-data/Player/fadzayi/page-data.json",
    "revision": "299b1e5f4db4cf50faddf8e2a5ffa9de"
  },
  {
    "url": "page-data/Player/george/page-data.json",
    "revision": "23c4e34f620e21f21d0630851f13758a"
  },
  {
    "url": "page-data/Player/jacinta/page-data.json",
    "revision": "ec0650ac5a8e19d5012043bc1279a720"
  },
  {
    "url": "page-data/Player/marcus/page-data.json",
    "revision": "7582566ae47dc746edb06600b183eb8f"
  },
  {
    "url": "page-data/Player/marshall/page-data.json",
    "revision": "f0e718f02e15632ac6a58652977eee90"
  },
  {
    "url": "page-data/Player/nate/page-data.json",
    "revision": "13e6fa514c83a008744cb70caef9ba64"
  },
  {
    "url": "page-data/Player/zac/page-data.json",
    "revision": "9bb5b484e4b5271d805659c0dd986694"
  },
  {
    "url": "component---src-pages-hoops-js-6900e2a16cc68152b6f3.js"
  },
  {
    "url": "page-data/hoops/page-data.json",
    "revision": "e644c91d33ed493197f24bd84ffcb00b"
  },
  {
    "url": "page-data/Hoop/hoop-01/page-data.json",
    "revision": "962ba477d744666f63821ea7b40e9950"
  },
  {
    "url": "page-data/Hoop/hoop-1/page-data.json",
    "revision": "3f99ae3753147398f84707dd96732477"
  },
  {
    "url": "page-data/Hoop/hoop-2/page-data.json",
    "revision": "c0582f8bf709ffd854762c3f13868206"
  },
  {
    "url": "page-data/Hoop/hoop-3/page-data.json",
    "revision": "f2e4e5020f7cdda7ab113814898e0294"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "e342c8462526e3a55e3705910d592371"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-be6efc165a34b15707af.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
