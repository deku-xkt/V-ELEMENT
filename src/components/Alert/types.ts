export type AlertType = 'success' | 'info' | 'warning' | 'danger'

export interface AlertProps {
  // 类型
  type?: AlertType
  // 标题
  title?: string
  // 描述信息
  description?: string
  // 是否可关闭
  closable?: boolean
  // 是否显示图标
  showIcon?: boolean
  // 关闭按钮的文本
  closeText?: string
  // 是否使用浅色背景
  effect?: 'light' | 'dark'
}

export interface AlertEmits {
  (e: 'close'): void
}
