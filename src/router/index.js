import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
routes: [
    {
        path: '/',
        component: resolve => require(['@/components/common/Home.vue'], resolve),
        children:[
          {
            path:'/main',
            component: resolve => require(['@/components/pages/Table.vue'], resolve)
          },
          {
            path: '/input',
            component: resolve => require(['@/components/pages/Input.vue'], resolve)
          }
        ]
    }
]
})
