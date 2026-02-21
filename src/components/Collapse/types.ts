import type { Ref, InjectionKey } from 'vue'
export type NameType = string | number

export interface CollapseProps {
  //当前打开的item可以是多个
  modelValue: NameType[]
  //是否支持手风琴模式,开启一个,另一个自动关闭
  accordion?: boolean
}
export interface CollapseItemProps {
  name: NameType
  title?: string
  disabled?: boolean
}

// 定义“Collapse 组件向子组件注入的上下文对象”类型（父子组件通信的核心数据/方法集合）
// 作用：通过 Vue 的 provide/inject  API，让子组件（CollapseItem）能访问父组件（Collapse）的响应式数据和方法
export interface CollapseContext {
  // 父组件中“当前激活的 CollapseItem 标识列表”（Ref 类型表示这是响应式数据，修改后视图会更新）
  activeNames: Ref<NameType[]>
  // 父组件提供的“点击 CollapseItem 时的处理方法”（子组件点击时调用，通知父组件更新激活状态）
  handleItemClick: (name: NameType) => void
}

//定义 Collapse 组件的自定义事件类型（描述组件可触发的事件及参数结构）
// 格式：(e: '事件名', 事件参数) => void，表示“触发指定事件时，需传递对应类型的参数”
export interface CollapseEmits {
  // 触发 update:modelValue 事件（用于 v-model 双向绑定，传递最新的激活列表）
  // Vue 中 v-model 本质是 :modelValue + @update:modelValue 的语法糖
  (e: 'update:modelValue', values: NameType[]): void
  // 触发 change 事件（用于通知外部“激活状态已改变”，传递最新的激活列表，与 update 事件语义区分）
  (e: 'change', values: NameType[]): void
}

//创建依赖注入的“类型键”（InjectionKey 类型），用于父组件 provide 和子组件 inject 时的类型匹配
// Symbol('collapseContextKey')：生成唯一标识，避免不同组件注入时的命名冲突
// 作用：让 TS 能推断出 inject 得到的数据类型是 CollapseContext，避免 any 类型，提高类型安全性
export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')
