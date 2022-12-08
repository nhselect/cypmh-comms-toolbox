export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      'Communication Toolbox',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  plugins: [
    { src: '~/node_modules/nhsuk-frontend/dist/nhsuk.min.js', mode: 'client' },
    { src: '~/plugins/to-readable-time.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/localforage',
  ],

  styleResources: {
    scss: [
      '~assets/scss/_variables.scss',
      'nhsuk-frontend/packages/core/all.scss',
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  // modules: ['nuxt-buefy', '@nuxt/content'],
  modules: ['@nuxt/content'],

  content: {
    liveEdit: false,
  },

/*
  hooks: {
    // Doc: https://content.nuxtjs.org/advanced#contentfilebeforeinsert
    'content:file:beforeInsert': async (document, database) => {
      // search for markdown
      if (document.extension === '.md' && document.profile) {
        // Replace Markdown string in database
        // with the JSON ATS version
        document.profile = await database.markdown.toJSON(document.profile)

        if (document.additionalResources) {
          for (let i = 0; i < document.additionalResources.length; i++) {
            document.additionalResources[i].description =
              await database.markdown.toJSON(
                document.additionalResources[i].description
              )
          }
        }
      }
    },
  },
*/
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
  },
}
