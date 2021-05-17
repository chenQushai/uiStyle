import vue from 'vue'
import vueRouter from 'vue-router'
vue.use(vueRouter);
const originalReplace = vueRouter.prototype.replace
vueRouter.prototype.replace = function (location) {
    return originalReplace.call(this, location).catch(err => err)
};
const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function (location) {
    return originalPush.call(this, location).catch(err => err)
};
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
                component: () => import('../views/table/tableComponent')
            },
            {
                path: 'tabs',
                name: 'tabs',
                component: () => import('../views/tabs/tabsComponent')
            },
            {
                path: 'tree',
                name: 'tree',
                component: () => import('../views/tree/tree')
            },
            {
                path: 'dialog',
                name: 'dialog',
                component: () => import('../views/Dialog弹窗/dialogComponent')
            },
            {
                path: 'formAll',
                name: 'formAll',
                component: () => import('../views/formComponent/formAll')
            },
            {
                path: 'pageHead',
                name: 'pageHead',
                component: () => import('../views/pageHead/pageHead')
            },
            {
                path: 'moveDialog',
                name: 'moveDialog',
                component: () => import('../views/moveDialog/moveDialogPage')
            },
            {
                path: 'fishBone',
                name: 'fishBone',
                component: () => import('../views/fishBone/fishBonePage')
            },
        ],
    },

    {
        path: '/test',
        name: 'test',
        component: () => import('../views/test/Home')
    }
];

const router = new vueRouter({
    routes: routes,
    // // mode: 'history',
    // base: process.env.BASE_URL,
});
export default router
