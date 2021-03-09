import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Showmenu from '../views/Showmenu.vue';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile

    },
    {
        path: '/showmenu/th/:id:foodname:username',
        name: 'Showmenu',
        component: Showmenu

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router