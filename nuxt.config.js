import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - حكايا الفنجان',
    title: 'قائمة',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'كوفي شوب حكايا الفنجان - مرج الحمام - إسكان عالية' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'image_src', name: 'image_src', content: 'https://hkaya.vercel.app/images/thumbnail/social.jpg' },
      { hid: 'og:image', property: 'og:image', content: 'https://hkaya.vercel.app/images/thumbnail/social.jpg' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://hkaya.vercel.app/images/thumbnail/social.jpg' },

      { hid: 'og:title', property: 'og:title', content: 'حكايا الفنجان - قائمة' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'حكايا الفنجان - قائمة' },
      { hid: 'og:description', property: 'og:description', content: 'كوفي شوب حكايا الفنجان - مرج الحمام - إسكان عالية' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'كوفي شوب حكايا الفنجان - مرج الحمام - إسكان عالية' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { href: "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Tajawal:wght@200;300;400;500;700;800;900&family=Whisper&display=swap", rel: "stylesheet" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/app.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
