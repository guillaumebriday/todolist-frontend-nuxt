<template>
  <div>
    <section class="bg-indigo-100 py-20">
      <div class="w-5/6 max-w-3xl ml-auto mr-auto h-full">
        <div class="flex items-center justify-center text-center h-full">
          <div>
            <h1 class="text-4xl sm:text-5xl font-semibold mb-4">
              Todolist
            </h1>

            <h2 class="text-2xl sm:text-3xl text-indigo-800 opacity-75 font-normal leading-tight mb-8">
              An Open source todolist application made with Laravel And Vue.js
            </h2>

            <div class="flex flex-col sm:flex-row justify-center pt-8">
              <nuxt-link class="bg-indigo-500 no-underline hover:bg-indigo-600 text-xl text-white font-semibold px-8 py-2 rounded whitespace-no-wrap mb-2 sm:mb-0 sm:mr-2" :to="{ name: 'register' }" exact>
                Register
              </nuxt-link>

              <nuxt-link class="bg-transparent no-underline text-xl text-indigo-500 font-semibold hover:text-indigo-600 px-8 py-2 border border-indigo-200 hover:border-indigo-400 rounded whitespace-no-wrap mt-2 sm:mt-0 sm:ml-2" :to="{ name: 'login' }" exact>
                Login
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 py-8">
      <div class="w-5/6 max-w-6xl ml-auto mr-auto mt-8 mb-8">
        <div class="flex flex-wrap -mx-6 -my-6">
          <div class="w-full sm:w-1/2 lg:w-1/4 px-6 py-6">
            <div class="mb-8">
              <fa :icon="['far', 'lightbulb']" size="2x" class="text-indigo-500" />
            </div>
            <h3 class="text-3xl font-semibold mb-3">
              Never forget your tasks
            </h3>
            <p class="text-lg leading-normal text-gray-600 mb-8">
              You can add unlimited tasks and let the application manage it for you. You can add due date or completed status.
            </p>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/4 px-6 py-6">
            <div class="mb-8">
              <fa :icon="['far', 'clock']" size="2x" class="text-indigo-500" />
            </div>
            <h3 class="text-3xl font-semibold mb-3">
              Real time application
            </h3>
            <p class="text-lg leading-normal text-gray-600 mb-8">
              Add a task on your computer and see it pop on your phone or tablet instantly.
            </p>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/4 px-6 py-6">
            <div class="mb-8">
              <fa icon="lock" size="2x" class="text-indigo-500" />
            </div>
            <h3 class="text-3xl font-semibold mb-3">
              Authentication with JWT
            </h3>
            <p class="text-lg leading-normal text-gray-600 mb-8">
              JWT are an important piece in ensuring trust and security in your application. JWT allow claims, such as user data, to be represented in a secure manner.
            </p>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/4 px-6 py-6">
            <div class="mb-8">
              <fa icon="mobile-alt" size="2x" class="text-indigo-500" />
            </div>
            <h3 class="text-3xl font-semibold mb-3">
              Responsive Design
            </h3>
            <p class="text-lg leading-normal text-gray-600 mb-8">
              Work on your desktop, your mobile and almost every devices you need.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-8">
      <div class="w-5/6 max-w-3xl ml-auto mr-auto mt-8 mb-8">
        <div class="flex flex-col justify-center text-center pb-8">
          <h2 class="text-5xl font-semibold mb-4">
            Ready for production. Completely Open source and free.
          </h2>
          <h3 class="text-3xl text-indigo-800 opacity-75 font-normal mb-8">
            Try it now !
          </h3>
        </div>

        <div class="bg-white rounded shadow-2xl overflow-hidden">
          <div class="flex flex-col-reverse md:flex-row">
            <div class="flex-1">
              <div class="bg-gray-100 p-8">
                <h5 class="text-xl font-semibold mb-8">
                  What you get when you sign up:
                </h5>
                <ul>
                  <li class="mb-4">
                    <div class="flex items-center">
                      <div class="mr-4">
                        <fa :icon="['far', 'check-circle']" size="2x" class="text-indigo-500" />
                      </div>
                      <p class="text-lg leading-normal">
                        Unlimited tasks
                      </p>
                    </div>
                  </li>
                  <li class="mb-4">
                    <div class="flex items-center">
                      <div class="mr-4">
                        <fa :icon="['far', 'check-circle']" size="2x" class="text-indigo-500" />
                      </div>
                      <p class="text-lg leading-normal">
                        Real time application with Websockets
                      </p>
                    </div>
                  </li>
                  <li class="mb-4">
                    <div class="flex items-center">
                      <div class="mr-4">
                        <fa :icon="['far', 'check-circle']" size="2x" class="text-indigo-500" />
                      </div>
                      <p class="text-lg leading-normal">
                        Authentication with JWT
                      </p>
                    </div>
                  </li>
                  <li class="">
                    <div class="flex items-center">
                      <div class="mr-4">
                        <fa :icon="['far', 'check-circle']" size="2x" class="text-indigo-500" />
                      </div>
                      <p class="text-lg leading-normal">
                        Responsive Design
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex flex-col items-center p-8 h-full">
                <div class="flex flex-1 mb-8">
                  <div class="flex self-start items-center">
                    <span class="text-3xl text-gray-600 mr-2">
                      $
                    </span>
                    <span class="text-5xl font-semibold text-indigo-500 mr-3" style="font-size: 5.6rem;">
                      0
                    </span>
                    <span class="text-xl text-gray-600">
                      / month
                    </span>
                  </div>
                </div>
                <nuxt-link class="bg-indigo-500 hover:bg-indigo-600 no-underline text-xl text-white font-semibold px-6 py-3 text-center rounded whitespace-no-wrap w-full" :to="{ name: 'register'}" exact>
                  Getting started
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-gray-100 py-8">
      <p class="text-center text-gray-500 text-xs mb-4">
        Made with <fa icon="heart" class="text-red-500" /> by <a href="https://guillaumebriday.fr" class="text-gray-500">
          Guillaume Briday
        </a>.
      </p>

      <p class="text-center text-gray-500 text-xs">
        Source code available on <a href="https://github.com/guillaumebriday/todolist-frontend-nuxt" class="text-gray-500">
          <fa :icon="['fab', 'github']" /> GitHub
        </a>.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  auth: 'guest',

  head () {
    return {
      title: 'Home'
    }
  }
}
</script>
