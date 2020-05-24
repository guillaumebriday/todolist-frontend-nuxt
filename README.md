# Todolist-frontend-nuxt Application

![](https://github.com/guillaumebriday/todolist-frontend-nuxt/workflows/Lint/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/61117a85-2c1d-4308-be10-3c77413e8a74/deploy-status)](https://app.netlify.com/sites/todolist-frontend-nuxt/deploys)

> Frontend for https://github.com/guillaumebriday/todolist-backend-laravel app, built for a serie of articles on my [blog](https://guillaumebriday.fr/).

> If you want to see this project in plain [Vue.js](https://vuejs.org/), I created the same application available here: [todolist-frontend-vuejs](https://github.com/guillaumebriday/todolist-frontend-vuejs).

The purpose of this repository is to consume API, provide by [a Laravel Application](https://github.com/guillaumebriday/todolist-backend-laravel), with the [Nuxt.js](https://nuxtjs.org/) JavaScript front-end framework.

![Screenshot](https://raw.githubusercontent.com/guillaumebriday/todolist-frontend-vuejs/master/screenshot.png)

## Some of the tools used in this project

- [Nuxt.js](https://nuxtjs.org/)
- [dayjs](https://github.com/iamkun/dayjs)
- [Laravel Echo](https://github.com/laravel/echo)
- [Pusher](https://github.com/pusher/pusher-js)
- [Tailwind CSS](https://github.com/tailwindcss/tailwindcss)
- [PostCSS](https://github.com/postcss/postcss)
- [@nuxtjs/auth](https://github.com/nuxt-community/auth-module)
- [@nuxtjs/axios](https://github.com/nuxt-community/axios-module)
- [@nuxtjs/dotenv](https://github.com/nuxt-community/dotenv-module)
- [@nuxtjs/pwa](https://github.com/nuxt-community/pwa-module)
- [@vuex-orm/core](https://github.com/vuex-orm/vuex-orm)
- [@vuex-orm/plugin-axios](https://github.com/vuex-orm/plugin-axios)
- [ESLint](https://eslint.org/)

## Installation

Setting up your development environment on your local machine :
```
$ git clone https://github.com/guillaumebriday/todolist-frontend-nuxt.git
$ cd todolist-frontend-nuxt
$ cp .env.example .env
$ yarn install
$ yarn dev
```

## Useful commands
Building the app :
```
$ yarn build

# Or

$ yarn generate
```

Running ESLint :
```bash
$ yarn lint
```

## Broadcasting & WebSockets

Before using WebSockets, you need to set the ```PUSHER_APP_KEY``` key in your .env file.

You could generate a key on [https://pusher.com/](https://pusher.com/).

## Deploy in production

This application is hosted on [Netlify](https://www.netlify.com/) and available on [https://todolist-nuxt.guillaumebriday.me/](https://todolist-nuxt.guillaumebriday.me/).

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
