const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/adamwright/Documents/Development/pickUpLive/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-content-template-js": hot(preferDefault(require("/Users/adamwright/Documents/Development/pickUpLive/src/templates/content-template.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/adamwright/Documents/Development/pickUpLive/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/adamwright/Documents/Development/pickUpLive/src/pages/about.js"))),
  "component---src-pages-content-js": hot(preferDefault(require("/Users/adamwright/Documents/Development/pickUpLive/src/pages/content.js"))),
  "component---src-pages-hoops-js": hot(preferDefault(require("/Users/adamwright/Documents/Development/pickUpLive/src/pages/hoops.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/adamwright/Documents/Development/pickUpLive/src/pages/index.js"))),
  "component---src-pages-players-js": hot(preferDefault(require("/Users/adamwright/Documents/Development/pickUpLive/src/pages/players.js")))
}

