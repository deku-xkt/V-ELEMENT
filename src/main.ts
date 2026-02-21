import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'

// 将 Font Awesome 的所有实心图标添加到 library 中
library.add(fas)

// 导入全局样式
import './styles/index.css'

// 打印 App 组件的 render 函数源码（用于调试）
console.log(App.render?.toString())

// 创建 Vue 应用实例并挂载到 #app 元素上
createApp(App).mount('#app')
