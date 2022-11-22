import { createApp } from 'vue'
import './assets/scss/style.scss'
import '../node_modules/bootstrap'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faYoutube } from '@fortawesome/free-brands-svg-icons'  //<font-awesome-icon icon="fa-brands fa-youtube" />
import { faInstagram } from '@fortawesome/free-brands-svg-icons' //<font-awesome-icon icon="fa-brands fa-instagram" />
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'  //<font-awesome-icon icon="fa-brands fa-facebook-f" />
import { faTwitter } from '@fortawesome/free-brands-svg-icons' // <font-awesome-icon icon="fa-brands fa-twitter" />
import { faDroplet } from '@fortawesome/free-solid-svg-icons'  //<font-awesome-icon icon="fa-solid fa-droplet" />
import { faSeedling } from '@fortawesome/free-solid-svg-icons'//<font-awesome-icon icon="fa-solid fa-seedling" />
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons' //<font-awesome-icon icon="fa-solid fa-graduation-cap" />
import { faStethoscope } from '@fortawesome/free-solid-svg-icons' //<font-awesome-icon icon="fa-solid fa-stethoscope" />
import { faDollarSign } from '@fortawesome/free-solid-svg-icons' //<font-awesome-icon icon="fa-solid fa-dollar-sign" />
import { faGlobe} from '@fortawesome/free-solid-svg-icons' //<font-awesome-icon icon="fa-solid fa-globe" />
import { faHeart } from '@fortawesome/free-regular-svg-icons'// icona specifica  //<font-awesome-icon icon="fa-solid fa-heart" />

// aggiuingi icona specifica alla libreria
library.add(faYoutube)
library.add(faInstagram)
library.add(faFacebookF)
library.add(faTwitter)
library.add(faDroplet)
library.add(faSeedling)
library.add(faGraduationCap)
library.add(faStethoscope)
library.add(faDollarSign)
library.add(faHeart)
library.add(faGlobe)




createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
