import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faFile } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'

const app = createApp(App)

/* add icons to the library */
library.add(faSun)
library.add(faFile)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
