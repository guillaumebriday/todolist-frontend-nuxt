import Errors from '@/utils/Errors'

export default class Form {
  /**
   * Create a new Form instance.
   *
   * @param {object} data
   */
  constructor (data) {
    this.originalData = data

    for (const field in data) {
      this[field] = data[field]
    }

    this.errors = new Errors()
  }

  /**
   * Fetch all relevant data for the form.
   */
  data () {
    const data = {}

    for (const property in this.originalData) {
      data[property] = this[property]
    }

    return data
  }

  /**
   * Return true if the form is incompleted.
   */
  incompleted () {
    return !this.completed()
  }

  /**
   * Return true if the form is completed.
   */
  completed () {
    for (const field in this.originalData) {
      if (this[field] === '' || this[field] === null) {
        return false
      }
    }

    return true
  }

  /**
   * Reset the form fields and errors.
   */
  reset () {
    this.resetFields()

    this.errors.clear()
  }

  /**
   * Reset the form fields and errors.
   */
  resetFields () {
    for (const field in this.originalData) {
      this[field] = ''
    }
  }

  /**
   * Handle a failed form submission.
   *
   * @param {object} errors
   */
  onFail (errors) {
    this.errors.record(errors)
  }
}
