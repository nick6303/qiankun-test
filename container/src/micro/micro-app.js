import { registerMicroApps, start } from 'qiankun'

export const microApps = [
  {
    name: 'micro-app',
    entry: 'http://localhost:8081',
    activeRule: '/micro-app',
    container: '#subapp1', // 子应用挂载的div
    props: {
      routerBase: '/micro-app',
    },
  },
]

export const registerApps = () => {
  registerMicroApps(microApps, {
    beforeLoad: (app) => {
      console.log('before load app.name====>>>>>', app.name)
    },
    beforeMount: [
      (app) => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
      },
    ],
    afterMount: [
      (app) => {
        console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
      },
    ],
    afterUnmount: [
      (app) => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
      },
    ],
  })

  start({
    sandbox: {
      // 默认开启预加载
      prefetch: 'all',
      // qiankun提供的样式隔离方法（严格模式）
      strictStyleIsolation: true,
      experimentalStyleIsolation: true,
    },
  })
}