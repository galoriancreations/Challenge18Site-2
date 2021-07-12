export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Challenge 18",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Challenge 18, conducted by Ting Global, is the most important sustainability and leadership games tournament in the world, in which clubs from all over the world collaborate in acheving the SDG’s." }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Spartan:wght@300;400;500;600;700;800;900&display=swap" }
    ],
    script: [
      { hid: "fontawesome", src: "https://kit.fontawesome.com/5225b7dab1.js", crossorigin: "anonymous" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/sass/main.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/main.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "cookie-universal-nuxt",
    "nuxt-route-meta"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      "vue-agile"
    ]
  },

  pageTransition: {
    name: "page",
    mode: "out-in"
  },

  loading: {
    color: "#ffcc04",
    height: "4px"
  },

  router: {
    middleware: [
      "check-auth",
      "check-route"
    ]
  },

  publicRuntimeConfig: {
    emailjsKey: process.env.EMAILJS_KEY,
    emailjsTemplate: process.env.EMAILJS_TEMPLATE,
    emailjsService: process.env.EMAILJS_SERVICE,
    paypalSandbox: process.env.PAYPAL_SANDBOX,
    paypalLive: process.env.PAYPAL_LIVE
  }
}
