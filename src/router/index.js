import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '~/views/layout/layout'

export const RouterMap = [

    {
        path: '/',
        redirect:'/main'
    },


    {
        path: '/main',
        name:'main',
        component: Layout,
        meta: {
            cname: 'main',
            icon:'el-icon-fa-cubes',
        },
        isTop:true,
        // name:'root',
        children: [
            {
                path: '/dashboard',
                component: () => import('~/views/dashboard'),
                name: 'dashboard',
                meta: {
                    cname: '首页',
                    icon:'el-icon-fa-dashboard',
                },
            }
        ]
    },

    {
        path: '/menu1',
        name:'menu1',
        component: Layout,
        meta: {
            cname: 'menu1',
            icon:'el-icon-fa-cubes',
        },
        isTop:true,
        children: [
            {
                path: '/menu1/menu11',
                name: 'menu11',
                meta: {
                    cname: 'menu11',
                    icon:'el-icon-fa-dashboard',
                },
                component: () => import('~/views/layout/middle'),
                children: [
                    {
                        path: '/menu1/menu11/menu111',
                        component: () => import('~/views/layout/middle'),
                        name: 'menu111',
                        meta: {
                            cname: 'menu111',
                            icon:'el-icon-fa-dashboard',
                        },
                        children: [
                            {
                                path: '/menu1/menu11/menu111/menu1111',
                                component: () => import('~/views/test/page1111'),
                                name: 'menu1111',
                                meta: {
                                    cname: 'menu1111',
                                    icon:'el-icon-fa-dashboard',
                                },                                
                            }
                        ]
                    },            
                    {
                        path: '/menu1/menu11/menu112',
                        component: () => import('~/views/test/page112'),
                        name: 'menu112',
                        meta: {
                            cname: 'menu112',
                            icon:'el-icon-fa-dashboard',
                        },
                    }                
                ]
            },            
            {
                path: '/menu1/menu12',
                component: () => import('~/views/test/page12'),
                name: 'menu12',
                meta: {
                    cname: 'menu12',
                    icon:'el-icon-fa-dashboard',
                },
            },            
            {
                path: '/menu1/menu13',
                component: () => import('~/views/test/page13'),
                name: 'menu13',
                meta: {
                    cname: 'menu13',
                    icon:'el-icon-fa-dashboard',
                },
            }
        ]
    },




    {
        path: '/menu2',
        name:'menu2',
        component: Layout,
        isTop:true,
        meta: {
            cname: 'menu2',
            icon:'el-icon-fa-cubes',
        },
        children: [
            {
                path: '/menu2/menu21',
                name: 'menu21',
                meta: {
                    cname: 'menu21',
                    icon:'el-icon-fa-dashboard',
                },
                component: () => import('~/views/layout/middle'),
                children: [
                    {
                        path: '/menu2/menu21/menu211',
                        component: () => import('~/views/test/page211'),
                        name: 'menu211',
                        meta: {
                            cname: 'menu211',
                            icon:'el-icon-fa-dashboard',
                        },
                    }                
                ]
            },            
            {
                path: '/menu2/menu22',
                component: () => import('~/views/test/page22'),
                name: 'menu22',
                meta: {
                    cname: 'menu22',
                    icon:'el-icon-fa-dashboard',
                },
            }
        ]
    },    



]

export default new Router({
    // mode: 'history', // require service support
    base: __dirname,
    saveScrollPosition: true,
    scrollBehavior: function (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes: RouterMap
})