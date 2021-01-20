export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "client",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~plugins/ws", mode: "client" },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/vuetify",
    "@nuxtjs/axios",
    "@nuxtjs/toast",
    /** Authentication Module */
    "@nuxtjs/auth",
    "nuxt-vuex-localstorage"
  ],
  axios: {
    baseURL: "http://127.0.0.1:3333" // Used as fallback if no runtime config is provided
  },

  /**
   * Auth Module Detail Endpoints
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/api/auth/login",
            method: "post",
            propertyName: "user_token"
          },
          logout: false,
          user: {
            url: "/api/auth/user",
            method: "get",
            propertyName: ""
          }
        }
        //tokenType:""
      }
    }
  },

  // show success error message
  toast: {
    position: "top-center",
    register: [
      // Register custom toasts
      {
        name: "my-error",
        message: "Oops...Something went wrong",
        options: {
          type: "error"
        }
      }
    ], // you can pass a single action as below
    action: {
      text: "Cancel",
      onClick: (e, toastObject) => {
        toastObject.goAway(0);
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
