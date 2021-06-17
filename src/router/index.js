import Vue from 'vue'
import Router from 'vue-router'

import PageDashboard from "../page/PageDashboard";
import PageAbout from "../page/PageAbout";
import Page404 from "../page/Page404";

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: PageDashboard
        },
        {
            path: '/about',
            name: 'about',
            component: PageAbout
        },
        {
            path: '/add/payment/:category',
            name: 'addPaymentWithPrice',
            component: PageDashboard,
            props: (route) => ({ query: route.query.value })
        },
        {
            path: '*',
            name: 'NotFound',
            component: Page404
        }
    ]
})