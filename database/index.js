import { Database } from '@vuex-orm/core'
import Task from '@/models/Task'
import tasks from '@/database/modules/tasks'

const database = new Database()

database.register(Task, tasks)

export default database
