<template>
  <div class="bg-grey-lighter font-sans">
    <navbar />

    <nuxt class="animated" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  },

  head () {
    return {
      title: this.$route.name,
      titleTemplate: '%s | Todolist'
    }
  }
}
</script>
