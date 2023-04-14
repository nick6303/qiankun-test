import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router'

let instance = null
async function render(props = {}) {
  const { container, routerBase } = props

  instance = createApp(App)
  const router = createRouter({
    history: createWebHistory(`${routerBase}`),
    routes,
  })
  instance.use(router)

  instance.mount(container ? container.querySelector('#app') : '#app')

  // eslint-disable-next-line no-underscore-dangle
}

// eslint-disable-next-line no-underscore-dangle
if (!window.__POWERED_BY_QIANKUN__) {
  render({ container: '', routerBase: '/micro-app' })
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}

export async function mount(props) {
  // 标记当前启动形式为微服务启动
  await render(props)
}

export async function unmount() {
  instance.unmount()
}
