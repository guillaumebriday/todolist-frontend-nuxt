export default function ({ $axios }) {
  $axios.onRequest(config => {
    if (window.Echo && window.Echo.socketId()) {
      config.headers['X-Socket-Id'] = window.Echo.socketId()
    }
  })
}
