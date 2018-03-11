import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Edit from './views/Edit.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/users'
        },
        {
            path: '/users',
            name: 'home',
            component: Home,
            meta: {
                breadcrumb: 'User List'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                breadcrumb: 'About'
            }
        },
        {
            path: '/users/:id',
            name: 'edit',
            component: Edit,
            meta: {
                breadcrumb: 'Edit User'
            }
        },
    ],
});
