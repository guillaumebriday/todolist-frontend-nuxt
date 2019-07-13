<template>
  <nav v-if="isLogged" class="bg-indigo">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between">
        <div>
          <nuxt-link class="text-white no-underline font-bold text-3xl hover:underline" to="/" exact>
            Todolist
          </nuxt-link>
        </div>

        <div>
          <button class="text-grey-light ml-4 border border-white py-2 px-4 rounded hover:bg-white hover:text-indigo" @click="logout">
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    isLogged: 'auth/isLogged'
  }),

  methods: {
    logout () {
      this.$axios.$delete('/auth/logout')
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>
