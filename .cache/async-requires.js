// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-content-template-js": () => import("./../src/templates/content-template.js" /* webpackChunkName: "component---src-templates-content-template-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-content-js": () => import("./../src/pages/content.js" /* webpackChunkName: "component---src-pages-content-js" */),
  "component---src-pages-hoops-js": () => import("./../src/pages/hoops.js" /* webpackChunkName: "component---src-pages-hoops-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-players-js": () => import("./../src/pages/players.js" /* webpackChunkName: "component---src-pages-players-js" */),
  "component---src-pages-test-js": () => import("./../src/pages/test.js" /* webpackChunkName: "component---src-pages-test-js" */)
}

