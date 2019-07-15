import path from 'path'
import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'
import pkg from './package'
require('dotenv').config()

const BASE_URL = process.env.BASE_URL || 'http://localhost:8000'

class TailwindExtractor {
  static extract (content) {
    return content.match(/[A-Za-z0-9-:/]+/g) || []
  }
}

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
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: 'UA-54003772-12'
  },

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
    }
  },

  extend (config, { isDev }) {
    if (!isDev) {
      config.plugins.push(
        new PurgecssPlugin({
          paths: glob.sync([
            path.join(__dirname, './pages/**/*.vue'),
            path.join(__dirname, './layouts/**/*.vue'),
            path.join(__dirname, './components/**/*.vue')
          ]),
          extractors: [
            {
              extractor: TailwindExtractor,
              extensions: ['vue']
            }
          ],
          whitelist: ['fade-']
        })
      )
    }
  }
}
