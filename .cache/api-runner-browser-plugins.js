module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-157815269-1","head":false,"anonymize":true,"respectDNT":true,"pageTransitionDelay":0,"sampleRate":5,"siteSpeedSampleRate":10,"cookieDomain":"pickuppeople.co"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Pick Up People","short_name":"PUP","start_url":"/","background_color":"#f7f0eb","theme_color":"#a2466c","display":"standalone","icon":"src/assets/images/favicon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"precachePages":["/","/Players/","/Player/*","/Hoops/","/Hoop/*"]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
