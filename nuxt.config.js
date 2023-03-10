export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // target: 'static',
  head: {
    title: '挑夫团购',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" },
    ],
    // <script type="text/javascript" src="https://cdn.dowebok.com/131/js/wow.min.js"></script>
    // <script type="text/javascript" src="http://www.jeendo.com/script/wow/wow.min2.js"></script>
    script: [{ src: 'https://cdn.dowebok.com/131/js/wow.min.js' }, { src: 'http://www.jeendo.com/script/wow/wow.min2.js' }]
  },
  server: {
    port: 4000, // default: 3000

  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./global-styles/styles.css', 'animate.css/animate.css'],
  // lintOnSave: false,
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: './plugins/router.js', ssr: true }, { src: './plugins/wow.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/toast',
  ],
  toast: {
    position: 'top-center',
    duration: 3000,
    fitToScreen: true,
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
        }
      }
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
    // extractCSS: true,

    // base: process.env.NODE_ENV === 'production' ? '/group-website-nuxt' : '/',
    // extend(config, { isDev }) {
    //   if (!isDev) {
    //     config.output.publicPath = './static/'
    //   }
    // },
  },
  // generate: {
  //   dir: 'docs',
  //   subFolders: false
  // },
  router: {
    base: process.env.NODE_ENV === 'development' ? '/' : "/group-website-nuxt"
    // base: '/group-website-nuxt/'
  },

}
