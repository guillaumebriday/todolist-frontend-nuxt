import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

if (process.env.pusherAppKey) {
  window.Pusher = Pusher

  window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.pusherAppKey,
    cluster: 'eu',
    encrypted: true,
    authEndpoint: `${process.env.baseURL}/broadcasting/auth`,
    auth: {
      headers: { Authorization: window.localStorage['auth._token.local'] }
    }
  })
}
