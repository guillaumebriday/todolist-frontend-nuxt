<template>
  <nav v-if="$auth.loggedIn" class="bg-indigo">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between">
        <div>
          <nuxt-link class="text-white no-underline font-bold text-3xl hover:underline" to="/" exact>
            Todolist
          </nuxt-link>
        </div>

        <div>
          <button class="text-grey-light ml-4 border border-white py-2 px-4 rounded hover:bg-white hover:text-indigo" @click="$auth.logout()">
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
