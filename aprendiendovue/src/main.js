import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LastArticles from './components/LastArticles.vue'
import MiComponente from './components/MiComponente.vue'
import HelloWorld from './components/HelloWorld.vue'

const app = createApp(App)

const routes = [
    {path: '/home', component: LastArticles},
    {path: '/ultimos-articulos', component: LastArticles},
    {path: '/mi-componente', component: MiComponente},
    {path: '/hola-mundo', component: HelloWorld},
    {path: '/', component: LastArticles}    
]

const router = new VueRouter({
    routes, 
    mode: 'history'
}) 

app.use(router)
app.mount('#app')