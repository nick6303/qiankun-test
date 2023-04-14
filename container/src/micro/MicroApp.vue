<template>
  <div class="micro-container" element-loading-text="Loading...">
    <div id="subapp1"></div>
  </div>
</template>

<script>
import { onMounted, watch, reactive, onUnmounted } from 'vue'
import { loadMicroApp, addGlobalUncaughtErrorHandler } from 'qiankun'

import { useRoute } from 'vue-router'
import { microApps, registerApps } from './micro-app'

export default {
  name: 'MicroApp',
  setup() {
    const microList = reactive({})
    const route = useRoute()
    const activationHandleChange = async (path) => {
      const activeRules = microApps.map((app) => app.activeRule)
      const isMicro = activeRules.some((rule) => path.startsWith(rule))
      if (!isMicro) return
      const microItem = microApps.find((app) =>
        path.startsWith(app.activeRule.toString())
      )
      if (!microItem) return
      // 如果已经加载过一次，则无需再次加载
      const current = microList[microItem.activeRule.toString()]
      if (current) return

      // 缓存当前子应用
      const micro = loadMicroApp({ ...microItem })
      microList[microItem.activeRule.toString()] = micro
      try {
        await micro.mountPromise
      } catch (e) {
        console.error('=======', e)
      }
    }
    // qiankun全局异常捕获
    addGlobalUncaughtErrorHandler((event) => console.log(event))
    watch(
      () => route.path,
      async (newValue) => {
        activationHandleChange(newValue)
      }
    )
    onMounted(async () => {
      console.log('MicroApp ======> 进入')
      if (window.qiankunStarted) return
      window.qiankunStarted = true
      registerApps()
      activationHandleChange(route.path)
    })
    onUnmounted(() => {
      window.qiankunStarted = false
      Object.values(microList).forEach((mic) => {
        mic.unmount()
      })
    })
    return {}
  },
}
</script>
<style>
.micro-container {
  height: inherit;
}
</style>
