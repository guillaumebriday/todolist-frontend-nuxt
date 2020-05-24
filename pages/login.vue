<template>
  <div class="h-screen flex justify-center items-center">
    <div class="w-full max-w-xs">
      <h1 class="text-4xl font-bold text-center mb-6">
        <nuxt-link class="text-gray-900 no-underline hover:underline" to="/" exact>
          Todolist
        </nuxt-link>
      </h1>

      <form class="form-card" @submit.prevent="login" @keydown="form.errors.clear($event.target.name)">
        <div class="mb-4">
          <label class="block text-gray-800 text-sm font-bold mb-2" for="email">
            Email
          </label>

          <input id="email" v-model="form.email" v-focus class="form-control" :class="{ 'border-red-500 mb-3' : form.errors.has('email') }" type="email" name="email" placeholder="Email">
          <p v-if="form.errors.has('email')" class="text-red-500 text-xs italic">
            {{ form.errors.get('email') }}
          </p>
        </div>

        <div class="mb-6">
          <label class="block text-gray-800 text-sm font-bold mb-2" for="password">
            Password
          </label>

          <input id="password" v-model="form.password" class="form-control" :class="{ 'border-red-500 mb-3' : form.errors.has('password') }" type="password" name="password" placeholder="Password">
          <p v-if="form.errors.has('password')" class="text-red-500 text-xs italic">
            {{ form.errors.get('password') }}
          </p>
        </div>

        <loading-button :is-loading="isLoading" :disabled="isDisabled" :class="[{ 'opacity-50 cursor-not-allowed': isDisabled }]" class="btn-indigo w-full">
          Sign In
        </loading-button>

        <div class="mt-4 text-sm">
          Don't have an account?
          <nuxt-link class="inline-block font-bold text-indigo-500 hover:text-indigo-800" :to="{ name: 'register' }" exact>
            Register now
          </nuxt-link>
        </div>
      </form>

      <p class="text-center text-gray-500 text-xs">
        Source code available on <a href="https://github.com/guillaumebriday/todolist-frontend-vuejs" class="text-gray-500">
          <fa :icon="['fab', 'github']" /> GitHub
        </a>.
      </p>
    </div>
  </div>
</template>

<script>
import Form from '@/utils/Form'
import LoadingButton from '@/components/LoadingButton'

export default {
  auth: 'guest',

  components: {
    LoadingButton
  },

  data () {
    return {
      form: new Form({
        email: '',
        password: ''
      }),
      isLoading: false
    }
  },

  computed: {
    isDisabled () {
      return this.form.incompleted() || this.isLoading
    }
  },

  methods: {
    login () {
      if (this.isDisabled) {
        return false
      }

      this.isLoading = true

      this.$auth.loginWith('local', { data: this.form.data() })
        .catch(({ response }) => {
          this.form.password = ''
          this.form.onFail(response.data.errors)

          this.isLoading = false
        })
    }
  },

  head () {
    return {
      title: 'Login'
    }
  },

  transition (to, from) {
    if (from && from.name === 'register') {
      return 'fade-out-right'
    }
  }
}
</script>
