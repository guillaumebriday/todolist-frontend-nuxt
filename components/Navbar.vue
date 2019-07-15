<template>
  <nav v-if="$auth.loggedIn" class="bg-indigo-500">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between">
        <div>
          <nuxt-link class="text-white no-underline font-bold text-3xl hover:underline" to="/" exact>
            Todolist
          </nuxt-link>
        </div>

        <div>
          <nuxt-link class="text-white no-underline hover:underline ml-4" :to="{ name: 'settings-profile' }" exact>
            <fa icon="user" class="mr" />
            Profile
          </nuxt-link>

          <button class="text-gray-400 ml-4 border border-white py-2 px-4 rounded hover:bg-white hover:text-indigo-500" @click="$auth.logout()">
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
