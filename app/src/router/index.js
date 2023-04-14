export default [
  {
    path: '/',
    name: 'home',
    children: [
      {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: () => import('@/components/HelloWorld.vue'),
      },
    ],
  },
]
