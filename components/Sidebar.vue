<template>
  <div>
    <h2 class="text-gray-500 font-normal text-base">
      SETTINGS
    </h2>

    <p class="my-4">
      <nuxt-link class="no-underline hover:underline" :class="[isProfileActive ? 'text-indigo-500' : 'text-gray-600']" :to="{ name: 'settings-profile'}" exact>
        <fa icon="user" class="mr-2" /> Profile
      </nuxt-link>
    </p>

    <p class="my-4">
      <nuxt-link class="no-underline hover:underline" :class="[isSecurityActive ? 'text-indigo-500' : 'text-gray-600']" :to="{ name: 'settings-security'}" exact>
        <fa icon="key" class="mr-2" />Security
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    isProfileActive () {
      return this.$route.name === 'settings-profile'
    },

    isSecurityActive () {
      return this.$route.name === 'settings-security'
    }
  }
}
</script>
