<template>
  <div v-if="error" class="bg-red-100 border-t-4 border-red-500 shadow-md text-red-600 px-6 py-3 rounded relative mb-3" role="alert">
    <div class="flex">
      <fa icon="exclamation-triangle" class="mr-2" />

      <div class="flex-grow">
        <strong class="font-bold">
          Whoops !
        </strong>
        <span class="block sm:inline">
          {{ error.message }}
        </span>
      </div>

      <span class="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" @click.prevent="error = null">
        <fa icon="times" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
