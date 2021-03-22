import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App'
import Antd from 'ant-design-vue'
import ElementPlus from 'element-plus'
import 'ant-design-vue/dist/antd.css'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(Antd)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
