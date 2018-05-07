// import Index from '@/hello/Index.vue'
const Index = () => import(/* webpackChunkName: "hello" */ '@/hello/Index.vue')

export default [
  {
    // path: '/hello',
    path: '/',
    // alias: ['/'],
    name: 'HelloIndex',
    meta: {title: 'HelloIndex'},
    component: Index
  },
  {
    path: '/hello2',
    alias: ['/helloIndex2'],
    name: 'HelloIndex2',
    meta: {title: 'HelloIndex2'},
    component: Index
  }
]
