// import Index from '@/hello/Index.vue'
const Index = () => import(/* webpackChunkName: "hello" */ '@/views/hello/Index.vue')
const Index2 = () => import(/* webpackChunkName: "hello" */ '@/views/hello2/Index.vue')

export default [
  {
    path: '/hello',
    name: 'hello',
    meta: {title: 'HelloIndex'},
    component: Index
  },
  {
    path: '/hello2',
    name: 'hello2',
    meta: {title: 'HelloIndex2'},
    component: Index2
  }
]
