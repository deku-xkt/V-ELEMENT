import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslint from 'vite-plugin-eslint'
import VueMacros from 'unplugin-vue-macros'

// 获取当前文件的目录路径（ES 模块方式）
const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros.vite({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx()
      }
    }),
    eslint()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      // 入口文件
      entry: resolve(__dirname, 'src/index.ts'),
      // 库名称（UMD 格式的全局变量名）
      name: 'VElement',
      // 输出文件名
      fileName: (format) => `v-element.${format}.js`,
      // 输出格式：同时支持 ES 和 UMD
      formats: ['es', 'umd']
    },
    rollupOptions: {
      // 外部化依赖，这些依赖不会被打包进库中
      external: ['vue'],
      output: {
        // 为 UMD 格式提供全局变量映射
        globals: {
          vue: 'Vue'
        },
        // 为 UMD 格式提供导出方式
        exports: 'named'
      }
    }
  },
  test: {
    environment: 'jsdom', // 模拟浏览器环境
    globals: true, // 启用全局测试函数（如 describe、it）
    setupFiles: './tests/setup.ts', // 测试前置配置（如注册全局组件）
    coverage: {
      reporter: ['text', 'json', 'html'], // 生成覆盖率报告
      include: ['src/components/**/*.vue'] // 仅覆盖组件文件
    }
  }
})
