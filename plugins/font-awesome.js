import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faTimes,
  faSpinner,
  faCheck,
  faUser,
  faKey,
  faTrash,
  faPlus,
  faLock,
  faHeart,
  faMobileAlt,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faClock, faLightbulb, faCheckCircle } from '@fortawesome/free-regular-svg-icons'

library.add(faTimes, faSpinner, faCheck, faUser, faKey, faTrash, faPlus, faLock, faHeart, faMobileAlt, faExclamationTriangle)
library.add(faGithub)
library.add(faClock, faLightbulb, faCheckCircle)

Vue.component('Fa', FontAwesomeIcon)
