<template>
  <div>
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
      titleTemplate: '%s | Todolist',
      bodyAttrs: {
        class: 'bg-gray-200 font-sans'
      }
    }
  }
}
</script>
