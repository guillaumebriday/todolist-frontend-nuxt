<template>
  <div v-on-clickaway="handleClickAway" class="my-4">
    <transition name="fade-out-down" mode="out-in">
      <task-form v-if="isShown" ref="taskForm" class="animated fastest" :form="form" :error="error" @submit="addTask">
        <div class="flex items-center my-4">
          <loading-button
            :is-loading="isLoading"
            :disabled="isDisabled"
            :class="{'opacity-50 cursor-not-allowed' : isDisabled}"
            icon="plus"
            class="btn-indigo text-sm"
          >
            Add
          </loading-button>

          <span class="ml-4 text-gray-800 text-sm cursor-pointer hover:underline" @click="cancel">
            Cancel
          </span>
        </div>
      </task-form>

      <button v-else class="animated fastest hover:underline text-gray-800 text-sm cursor-pointer" @click="isShown = true">
        <fa icon="plus" class="mr-1" />
        Add task
      </button>
    </transition>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { mixin as clickaway } from 'vue-clickaway'
import Form from '@/utils/Form'
import TaskForm from '@/components/Tasks/TaskForm'
import LoadingButton from '@/components/LoadingButton'
import Task from '@/models/Task'

export default {
  components: {
    TaskForm,
    LoadingButton
  },

  mixins: [clickaway],

  data () {
    return {
      isLoading: false,
      isShown: false,
      error: null,
      form: new Form({
        title: '',
        due_at: null
      })
    }
  },

  computed: {
    isDisabled () {
      return this.form.title === '' || this.isLoading
    }
  },

  methods: {
    addTask () {
      if (this.isDisabled) {
        return false
      }

      this.isLoading = true
      this.error = null

      Task.$create({
        data: {
          title: this.form.title,
          due_at: dayjs(this.form.due_at).isValid() ? dayjs(this.form.due_at).second(0) : null
        }
      }).then(() => {
        this.form.reset()
        this.$refs.taskForm.$refs.task.focus()
        this.isLoading = false
      })
        .catch(error => {
          this.error = error.response.data
          this.isLoading = false
        })
    },

    clearDueAt () {
      this.form.due_at = null
    },

    cancel () {
      this.isShown = false

      this.form.reset()
    },

    handleClickAway () {
      if (this.isDisabled) {
        this.cancel()
      }
    }
  }
}
</script>
