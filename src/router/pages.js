// import Index from '@/hello/Index.vue'
const Index = () => import(/* webpackChunkName: "hello" */ '@/views/hello/Index.vue')
const Index2 = () => import(/* webpackChunkName: "hello" */ '@/views/hello2/Index.vue')

export default [
  {
    path: '/hello',
    name: 'HelloIndex',
    meta: {title: 'HelloIndex'},
    component: Index
  },
  {
    path: '/hello2',
    alias: ['/helloIndex2'],
    name: 'HelloIndex2',
    meta: {title: 'HelloIndex2'},
    component: Index2
  }
]
