<template>
  <div class="my-4">
    <form @submit.prevent="$emit('submit')">
      <form-error :error="error" />

      <div class="p-3 mb-4 appearance-none bg-white rounded-lg flex flex-col shadow">
        <input ref="task" v-model="form.title" v-focus class="w-full mb-2 pt-1 pb-2 px-2 focus:outline-none font-semibold border-b" placeholder="What needs to be done?" @keyup.esc="cancel">

        <div class="flex items-center text-xs">
          <fa :icon="['far', 'clock']" class="mr-1 text-gray-600" />
          <datetime v-model="form.due_at" type="datetime" placeholder="Due at" :minute-step="5" input-class="text-gray-600" />

          <span v-if="form.due_at" class="flex-none rounded-full bg-gray-500 hover:bg-red-500 h-6 w-6 cursor-pointer flex items-center justify-center shadow" @click="clearDueAt">
            <fa icon="times" class="text-white" />
          </span>
        </div>
      </div>

      <slot />
    </form>
  </div>
</template>

<script>
import 'vue-datetime/dist/vue-datetime.css'
import FormError from '@/components/FormError'

export default {
  components: {
    FormError
  },

  props: {
    form: {
      type: null,
      required: true
    },
    error: {
      type: Object,
      default: null
    }
  },

  methods: {
    clearDueAt () {
      this.form.due_at = null
    },

    cancel () {
      this.form.reset()
    }
  }
}
</script>
