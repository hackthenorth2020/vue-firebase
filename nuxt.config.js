import colors from "vuetify/es5/util/colors";

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  // ssr: true,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: "%s - vue-firebase",
    title: "vue-firebase",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/vue-simple-alert.js", "~/plugins/vue-chartist.js"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyAFkzKrPqp0HSLpbS9K1bkL44UeD9FL0rw",
          authDomain: "vue-firebase-htn.firebaseapp.com",
          databaseURL: "https://vue-firebase-app.firebaseio.com",
          projectId: "vue-firebase-htn",
          // storageBucket: '<storageBucket>',
          // messagingSenderId: '<messagingSenderId>',
          appId: "1:756507990793:web:d96944760ae5cf794a51d8",
          // measurementId: '<measurementId>',
        },
        services: {
          auth: true, // Just as example. Can be any other service.
        },
      },
    ],
  ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#42a5f6",
          secondary: "#050b1f",
          accent: "#204165",
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vue-simple-alert", "vue-chartist.js", "vuetify"],
  },
};
