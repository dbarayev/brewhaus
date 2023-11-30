import './assets/main.css'

import { createApp } from 'vue'
//import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
import router from './router'

import VueAwesomePaginate from 'vue-awesome-paginate'
import 'vue-awesome-paginate/dist/style.css'

const app = createApp(App)

app.use(router).use(VueAwesomePaginate)

app.mount('#app')
