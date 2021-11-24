import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { store } from './store.js'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App)
  .use(vuetify)
  .use(store)
  .mount('#app')
