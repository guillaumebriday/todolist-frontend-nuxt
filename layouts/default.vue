<template>
  <div class="bg-grey-lighter font-sans">
    <nuxt class="animated" />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.$route.name,
      titleTemplate: '%s | Todolist'
    }
  }
}
</script>
