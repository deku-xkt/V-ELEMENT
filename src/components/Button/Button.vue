<script setup lang="ts">
import { ref } from 'vue'
// 从 ./types 文件中导入 ButtonProps 接口（之前定义的按钮属性类型规则），用于约束组件接收的 props 类型
import type { ButtonProps } from './types'
import Icon from '../Icon/Icon.vue'
// import { buttonProps } from './types'

//为当前组件自定义名称
defineOptions({
  name: 'VkButton'
})
// defineProps<ButtonProps>()：声明组件接收的 props 必须符合 ButtonProps 接口的规则（比如 type、size 等属性）。
// withDefaults(...)：给 props 设置默认值，这里指定 nativeType 的默认值是 'button'（即原生按钮的 type 属性默认是 button）
withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})

//子组件的ref,创建一个响应式引用，专门指向一个 HTML 按钮元素
//此时通过_ref才能操作这个dom(比如修改样式,获取属性)
const _ref = ref<HTMLButtonElement>()

// 在 <script setup> 中，组件内部的变量默认是私有的，父组件无法直接访问。defineExpose 用于将组件内部的属性暴露出去，供父组件通过 组件引用（ref 绑定） 获取。
// 这里将 _ref（即按钮的 DOM 引用）以 ref 为键暴露出去，意味着父组件获取到该组件的引用后，可以通过 组件引用.value.ref 访问到子组件内部的按钮 DOM 元素。
defineExpose({
  ref: _ref
})
</script>

<template>
  <!-- 语法：{ '类名': 条件 }，条件为true时添加类名 -->
  <!-- 在 <button ref="_ref"> 中，ref 是 Vue 提供的特殊属性，用于 获取 DOM 元素或组件实例的引用 -->
  <!-- 简单说，它就像给元素/组件贴了个“名字标签”，之后通过 $refs.btnref 就能快速找到并操作它（比如调用子组件方法、修改 DOM 样式等）。 -->
  <!--当前button的dom元素为_ref  -->
  <button
    ref="_ref"
    class="vk-button"
    :class="{
      [`vk-button--${type}`]: type,
      [`vk-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <Icon icon="spinner" spin v-if="loading" />
    <Icon :icon="icon" v-if="icon" />
    <span>
      <slot />
    </span>
  </button>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
<!-- 时间线：父组件加载 → 子组件加载 → 用户交互

┌───────────── 组件挂载阶段 ─────────────┐
│                                          │
│  1. 父组件创建 buttonRef (值为 undefined)  │
│  2. 父组件渲染模板，创建 Button 组件实例         │
│  3. 子组件创建 _ref (值为 undefined) │
│  4. 子组件渲染按钮，_ref指向真实 DOM │
│  5. 子组件实例赋值给父组件的 buttonRef     │
│                                          │
└──────────────────────────────────────────┘

┌───────────── 用户交互阶段 ─────────────┐
│                                          │
│  6. 用户点击"聚焦子按钮"                  │
│  7. 执行 focusChildButton() 函数         │
│  8. buttonRef.value 获取子组件实例        │
│  9. buttonRef.value.ref 获取按钮DOM(这里的ref是子组件暴露出来的) │
│  10. 调用 .focus() 聚焦子按钮            │
│                                          │
└──────────────────────────────────────────┘ -->
