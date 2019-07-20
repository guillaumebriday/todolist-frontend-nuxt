import { Model } from '@vuex-orm/core'

export default class Task extends Model {
  static entity = 'tasks'

  static fields () {
    return {
      id: this.number(null),
      title: this.attr(''),
      due_at: this.attr(''),
      is_completed: this.attr('')
    }
  }
}
