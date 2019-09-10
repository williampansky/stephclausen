/**
 * Site configuration options for a Gatsby site are placed in a file at
 * the root of the project folder called `gatsby-config.js`.
 *
 * @name gatsby-config
 * @see https://www.gatsbyjs.org/docs/gatsby-config/
 */
/* eslint-disable camelcase */
const path = require(`path`);
module.exports = {
  siteMetadata: {
    title: `Steph Clausen`,
    description: ``,
    author: `@gatsbyjs`,
  },
  plugins: [
    /**
     * Wrapper around the webpack feature for aliasing import statements.
     * @name gatsby-plugin-alias-imports
     * @see [Docs]{@link https://www.gatsbyjs.org/packages/gatsby-plugin-alias-imports/}
     */
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': 'src'
        },
        extensions: ['js', 'jsx']
      }
    },

    /**
     * Source plugin for pulling content types, entries, and assets into
     * Gatsby from [Contentful] spaces. It creates links between entry types
     * and asset so they can be queried in Gatsby using GraphQL.
     * [Contentful]: https://www.contentful.com/
     *
     * @name gatsby-source-contentful
     * @see https://www.gatsbyjs.org/packages/gatsby-source-contentful/
     */
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
        environment: 'master',
        forceFullSync: false,
        // host: `preview.contentful.com`,
        localeFilter: locale => locale.code === 'en-US',
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID
      }
    },

    /**
     * The web app manifest _(part of the PWA specification)_ enabled by this
     * plugin allows users to add your site to their home screen on most
     * mobile browsers — see [here]. The manifest provides configuration
     * and icons to the phone.
     *
     * This plugin provides several features beyond manifest configuration
     * to make your life easier, they are:
     *
     * - **Auto icon generation** - generates icon sizes from a single source
     * - **Favicon support**
     * - **Legacy icon support (iOS)**
     * - **Cache busting**
     * - **Localization** - Provides unqiue manifests [(Example)]
     *
     * @name gatsby-plugin-manifest
     * @see https://www.gatsbyjs.org/packages/gatsby-plugin-manifest
     * [here]: https://caniuse.com/#feat=web-app-manifest
     * [Example]: https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n
     */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },

    /**
     * Adds drop-in support for making a Gatsby site work offline and more
     * resistant to bad network connections. It creates a service worker for
     * the site and loads the service worker into the client.
     *
     * If you’re using this with `gatsby-plugin-manifest` _(recommended)_
     * this plugin should be listed after that plugin so the manifest file can
     * be included in the service worker.
     *
     * @name gatsby-plugin-offline
     * @see https://www.gatsbyjs.org/packages/gatsby-plugin-offline
     */
    'gatsby-plugin-offline',

    /**
     * Gatsby plugin to handle PostCSS.
     *
     * @name gatsby-plugin-postcss
     * @see https://www.gatsbyjs.org/packages/gatsby-plugin-postcss
     */
    `gatsby-plugin-postcss`,

    /**
     * Provides drop-in support for server rendering data
     * added with [React-Helmet].
     *
     * React Helmet is a component which lets you control your document
     * head using their React component.
     *
     * With this plugin, attributes you add in their component,
     * e.g. `title`, `meta` attributes, etc. will get added to the static
     * HTML pages Gatsby builds.
     *
     * This is important not just for site viewers, but also for SEO — `title`
     * and `description` metadata stored in the document head is a key
     * component used by Google in determining placement in search results.
     *
     * @name gatsby-plugin-react-helmet
     * @see https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet
     * [React-Helmet]: https://github.com/nfl/react-helmet
     */
    'gatsby-plugin-react-helmet',

    /**
     * Create `robots.txt` for your Gatsby site.
     *
     * @name gatsby-plugin-robots-txt
     * @see https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt
     */
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://ux.credera.com/'
      }
    },

    /**
     * Provides drop-in support for SASS/SCSS stylesheets
     *
     * @name gatsby-plugin-sass
     * @see https://www.gatsbyjs.org/packages/gatsby-plugin-sass
     */
    'gatsby-plugin-sass',

    /**
     * Aims to provide excellent out-of-the box settings
     * for processing common web image formats.
     *
     * @name gatsby-plugin-sharp
     * @see https://www.gatsbyjs.org/packages/gatsby-plugin-sharp
     */
    `gatsby-plugin-sharp`,

    /**
     * A Gatsby source plugin for sourcing data into your
     * Gatsby application from your local filesystem.
     *
     * @name gatsby-plugin-filesystem
     * @see https://www.gatsbyjs.org/packages/gatsby-plugin-filesystem
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },

    /**
     * Add Google Analytics gtag.js to a site. Does the same thing as
     * [gatsby-plugin-google-analytics], but instead of adding deprecated
     * `analytics.js` script, it uses `gtag.js`. Includes Outbound Link module.
     *
     * @name gatsby-source-gtag
     * @see https://www.gatsbyjs.org/packages/gatsby-plugin-gtag
     * [gatsby-plugin-google-analytics]: https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics
     */
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: ``,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true
      }
    },

    /**
     * Creates `ImageSharp` nodes from image types that are supported by
     * the [Sharp] image processing library and provides fields in their
     * GraphQL types for processing your images in a variety of ways
     * including resizing, cropping, and creating responsive images.
     *
     * @name gatsby-transformer-sharp
     * @see https://www.gatsbyjs.org/packages/gatsby-transformer-sharp
     * [Sharp]: https://github.com/lovell/sharp
     */
    `gatsby-transformer-sharp`,
  ]
}
