import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Socials from '../pages/Socials.vue'
import About from '../pages/About.vue'
import Works from '../pages/Works.vue'

const routes = [{
    path: '/', 
    name: 'Home', 
    component: Home
},{
    path: '/socials', 
    name: 'Socials', 
    component: Socials
},{
    path: '/about', 
    name: 'About Me', 
    component: About
},{
    path: '/works', 
    name: 'My Works', 
    component: Works
}]

const router = createRouter({
    history: createWebHistory("/"), routes
})

export default router