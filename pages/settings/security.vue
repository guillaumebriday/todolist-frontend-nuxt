<template>
  <div class="flex-1">
    <div class="rounded overflow-hidden bg-white px-6 py-6 shadow-md">
      <p class="font-bold text-xl mb-6 pb-6 border-b">
        Update your password
      </p>

      <form class="w-full max-w-md" @submit.prevent="update" @keydown="form.errors.clear($event.target.name)">
        <div class="md:flex md:items-center mb-4">
          <div class="md:w-1/3">
            <label class="block text-gray-800 md:text-right text-sm font-bold mb-1 pr-4" for="current_password">
              Current password
            </label>
          </div>

          <div class="md:w-2/3">
            <input id="current_password" v-model="form.current_password" v-focus class="form-control" :class="{ 'border-red-500 mb-3' : form.errors.has('current_password') }" type="password" name="current_password" placeholder="Your current password">
            <p v-if="form.errors.has('current_password')" class="text-red-500 text-xs italic">
              {{ form.errors.get('current_password') }}
            </p>
          </div>
        </div>

        <div class="md:flex md:items-center mb-4">
          <div class="md:w-1/3">
            <label class="block text-gray-800 md:text-right text-sm font-bold mb-1 pr-4" for="password">
              New password
            </label>
          </div>

          <div class="md:w-2/3">
            <input id="password" v-model="form.password" class="form-control" :class="{ 'border-red-500 mb-3' : form.errors.has('password') }" type="password" name="password" placeholder="Your new password">
            <p v-if="form.errors.has('password')" class="text-red-500 text-xs italic">
              {{ form.errors.get('password') }}
            </p>
          </div>
        </div>

        <div class="md:flex md:items-center mb-4">
          <div class="md:w-1/3">
            <label class="block text-gray-800 md:text-right text-sm font-bold mb-1 pr-4" for="password_confirmation">
              New password confirmation
            </label>
          </div>

          <div class="md:w-2/3">
            <input id="password_confirmation" v-model="form.password_confirmation" class="form-control" :class="{ 'border-red-500 mb-3' : form.errors.has('password_confirmation') }" type="password" name="password_confirmation" placeholder="Your new password confirmation">
            <p v-if="form.errors.has('password_confirmation')" class="text-red-500 text-xs italic">
              {{ form.errors.get('password_confirmation') }}
            </p>
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3" />
          <div class="md:w-2/3">
            <loading-button :is-loading="isLoading" :disabled="isDisabled" :class="[{ 'opacity-50 cursor-not-allowed': isDisabled }]" class="btn-indigo">
              Update
            </loading-button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Form from '@/utils/Form'
import LoadingButton from '@/components/LoadingButton'

export default {
  components: {
    LoadingButton
  },

  data () {
    return {
      form: new Form({
        current_password: '',
        password: '',
        password_confirmation: ''
      }),
      isLoading: false
    }
  },

  computed: {
    isDisabled () {
      return this.isLoading || this.form.incompleted()
    },

    user () {
      return this.$auth.user.data
    }
  },

  methods: {
    update () {
      if (this.isDisabled) {
        return false
      }

      this.isLoading = true

      this.$axios.put(`/users/${this.user.id}`, this.form.data())
        .then(() => {
          this.isLoading = false

          this.form.reset()
        })
        .catch(({ response }) => {
          this.isLoading = false

          this.form.onFail(response.data.errors)
          this.form.resetFields()
        })
    }
  },

  head () {
    return {
      title: 'Security'
    }
  },

  transition (to, from) {
    if (from && from.name === 'settings-profile' && to.name === 'settings-security') {
      return 'fade-out-right'
    }
  }
}
</script>
