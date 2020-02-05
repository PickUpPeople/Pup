require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.pickuppeople.co`,
    title: `Pick Up People`,
    description: `Pick Up People is a photographic and storytelling project focused on BASKETBALL.
Via portrait photography, the project explores themes of human experience, social integration and cohesion, viewed through the lens of pick up / social basketball participants.`,
    author: `This works & Adam Wright`,
    lang: `en`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-157815269-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "pickuppeople.co"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `PickUpPeople`,
        accessToken: `MC5YaWdRV1JBQUFDSUFTSkdO.77-977-9XyEQ77-977-977-9BgLvv71WAe-_ve-_ve-_vUTvv70P77-977-9NWM_77-9YR4mNU_vv70W`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pick Up People`,
        short_name: `PUP`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://www.pickuppeople.co`,
        sitemap: `https://www.pickuppeople.co/sitemap.xml`,
        policy: [{ userAgent: "*", disallow: ["/"] }]
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/Players/`, `/Player/*`, `/Hoops/`, `/Hoop/*`]
      }
    }
  ]
};
