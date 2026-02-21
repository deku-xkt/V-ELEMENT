<template>
  <Transition name="vk-alert-fade">
    <div
      v-show="visible"
      class="vk-alert"
      :class="{
        [`vk-alert--${type}`]: type,
        [`vk-alert--${effect}`]: effect,
        'is-closable': closable
      }"
      role="alert"
    >
      <div class="vk-alert__content">
        <!-- 图标 -->
        <span v-if="showIcon" class="vk-alert__icon">
          <Icon :icon="iconName" />
        </span>
        <!-- 内容区域 -->
        <div class="vk-alert__message">
          <!-- 标题 -->
          <p v-if="title || $slots.title" class="vk-alert__title">
            <slot name="title">{{ title }}</slot>
          </p>
          <!-- 描述 -->
          <p v-if="description || $slots.default" class="vk-alert__description">
            <slot>{{ description }}</slot>
          </p>
        </div>
      </div>
      <!-- 关闭按钮 -->
      <div v-if="closable" class="vk-alert__close">
        <Icon v-if="!closeText" icon="xmark" class="vk-alert__close-icon" @click="handleClose" />
        <span v-else class="vk-alert__close-text" @click="handleClose">
          {{ closeText }}
        </span>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { AlertProps, AlertEmits } from './types'
import Icon from '../Icon/Icon.vue'

defineOptions({
  name: 'VkAlert'
})

const props = withDefaults(defineProps<AlertProps>(), {
  type: 'info',
  closable: false,
  showIcon: false,
  effect: 'light'
})

const emits = defineEmits<AlertEmits>()

const visible = ref(true)

// 根据类型获取图标名称
const iconName = computed(() => {
  const iconMap = {
    success: 'circle-check',
    info: 'circle-info',
    warning: 'triangle-exclamation',
    danger: 'circle-xmark'
  }
  return iconMap[props.type] || 'circle-info'
})

// 处理关闭事件
const handleClose = () => {
  visible.value = false
  emits('close')
}
</script>
