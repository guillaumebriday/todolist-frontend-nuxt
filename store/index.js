import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import database from '@/database'

VuexORM.use(VuexORMAxios, {
  database,
  http: {
    baseURL: `${process.env.baseURL}/api/v1/`,
    access_token: () => window.localStorage['auth._token.local'].replace('Bearer ', ''),
    onResponse (response) {
      if (response.data === null) {
        return response
      }

      return response.data.data
    }
  }
})

export const plugins = [
  VuexORM.install(database)
]
