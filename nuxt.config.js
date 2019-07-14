import pkg from './package'
require('dotenv').config()

const BASE_URL = process.env.BASE_URL || 'http://localhost:8000'

export default {
  mode: 'spa',
  loading: false,

  env: {
    baseURL: BASE_URL
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/tailwind.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/font-awesome.js', ssr: false },
    { src: '~/plugins/directives.js', ssr: false },
    { src: '~/plugins/axios.js', ssr: false },
    { src: '~/plugins/datetime.js', ssr: false },
    { src: '~/plugins/laravel-echo.js', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'nuxt-purgecss'
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: `${BASE_URL}/api/v1/`
  },

  /*
   ** Auth module configuration
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'access_token' },
          logout: { url: '/auth/logout', method: 'delete' },
          user: { url: '/auth/me', method: 'get', propertyName: false }
        }
      }
    },

    redirect: {
      home: '/app/active'
    }
  },

  router: {
    middleware: ['auth']
  },

  pageTransition: 'fade-in',

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: {
      plugins: [
        require('postcss-import'),
        require('postcss-nested'),
        require('tailwindcss'),
        require('postcss-preset-env')({
          autoprefixer: {
            flexbox: 'no-2009'
          },
          stage: 3
        })
      ]
    },
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
    }
  }
}
