// 从 Vue 中导入 PropType 类型，用于在定义组件 props 时指定复杂类型（如联合类型、接口等
import type { PropType } from 'vue'
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'small'
export type NativeType = 'button' | 'submit' | 'reset'

// 定义按钮组件的 props 接口 ButtonProps，描述组件可接收的所有属性及类型。
// 接口（Interface） 是 TypeScript 中用于定义对象结构的方式，明确规定了 “对象应该有哪些属性，每个属性是什么类型”
// 使用场景：
// 在组件内部通过 defineProps<ButtonProps>() 关联类型，获得 TypeScript 类型提示。
// 供外部导入，用于约束父组件传递 props 时的类型（例如 const props: ButtonProps = { ... }）。
export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  nativeType?: NativeType
  autofocus?: boolean
  icon?: string
  loading?: boolean
}
// 定义按钮实例的接口 ButtonInstance，表示组件的 DOM 引用类型为原生按钮元素
// 在 App.vue 中用 const btnRef = ref<ButtonInstance>() 获取按钮引用后，btnRef.value.ref 会被 TypeScript 识别为 HTMLButtonElement，可调用 click() 等原生方法
//这意味着：当你在 Vue 中通过 ref 获取按钮组件的实例时，TypeScript 会知道这个引用最终指向的是原生按钮元素，因此可以直接调用原生按钮的所有功能
export interface ButtonInstance {
  //该组件的dom引用最终指向一个原生的<button>元素
  ref: HTMLButtonElement
}
//定义按钮组件的 props 配置对象 buttonProps，用于在 Vue 组件中注册 props（配合上面的 ButtonProps 接口实现类型约束）
//运行时配置,包含类型校验等逻辑
export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>
  },
  size: {
    type: String as PropType<ButtonSize>
  },
  plain: {
    type: Boolean
  },
  round: {
    type: Boolean
  },
  circle: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  }
}
// 1. 作为 Vue 的 ref 函数（创建响应式变量）
// 当我们使用 const _ref = ref(initialValue) 时，ref 是 Vue 提供的创建响应式变量的函数。它的返回值（即 _ref 变量）是一个引用类型的对象（本质是一个包含 value 属性的包装对象）：
// 无论初始值是基本类型（如 number、string）还是对象类型（如 {}、[]），ref 都会将其包装成一个 { value: ... } 的对象。
// 这种 “引用类型” 的特性保证了：即使初始值是基本类型，也能通过修改 _ref.value 触发响应式更新（因为对象的引用地址不变，Vue 能追踪其变化）。
// 2.作为模板中的 ref 属性（获取 DOM / 组件引用）
// 当我们在模板中写 <button ref="_ref"> 时，ref 是一个特殊属性，用于绑定 DOM 元素或组件实例的引用。此时，被绑定的变量（如 _ref）是通过 ref() 函数创建的响应式对象（即上述第一种情况的返回值），因此它也是引用类型：
// _ref 本身是 ref 包装对象（引用类型），其 .value 指向实际的 DOM 元素或组件实例（DOM 元素本身也是对象，属于引用类型）。
