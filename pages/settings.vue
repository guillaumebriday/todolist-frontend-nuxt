<template>
  <div>
    <div class="container md:flex mx-auto my-3 px-4">
      <sidebar class="flex-none w-full md:max-w-xs" />

      <nuxt-child class="animated" />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  components: {
    Sidebar
  }
}
</script>
