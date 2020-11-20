import vue from 'vue'
import vueRouter from 'vue-router'

vue.use(vueRouter);
const originalReplace = vueRouter.prototype.replace
vueRouter.prototype.replace = function (location) {
    return originalReplace.call(this, location).catch(err => err)
}
const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function (location) {
    return originalPush.call(this, location).catch(err => err)
}
let routes = [
    {
        path: '/',
        fullPath: '/',
        redirect: '/home'
    },


    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home.vue'),
        children: [
            {
                path: 'generalCss',
                name: 'generalCss',
                component: () => import('../views/generalCss/generalCss')
            }
            ,
            {
                path: 'commonUseMen',
                name: 'commonUseMen',
                component: () => import('../views/commonUseMenu/commonUseMenu')
            },
            {
                path: 'table',
                name: 'table',
                component: () => import('../views/table/table')
            }
        ]
    },

];

const router = new vueRouter({
    routes: routes,
    // // mode: 'history',
    // base: process.env.BASE_URL,
});
export default router
