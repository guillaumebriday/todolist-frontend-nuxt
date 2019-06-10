import pkg from './package'
require('dotenv').config()

const BASE_URL = process.env.BASE_URL || 'http://localhost:8000'

export default {
  mode: 'spa',

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
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

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
    { src: '~/plugins/axios.js', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: `${BASE_URL}/api/v1/`
  },

  pageTransition: 'fade-in',

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: [
        require('postcss-import'),
        require('postcss-nested'),
        require('tailwindcss'),
        require('autoprefixer')
      ]
    },
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
    }
  }
}
