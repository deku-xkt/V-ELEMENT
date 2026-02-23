---
title: Alert | V-Element
description: Alert 组件的文档
---

# Alert 警告提示

用于页面中展示重要的提示信息。

## 基础用法

页面中的非浮层元素，不会自动消失。

<preview path="../demo/Alert/Basic.vue" title="基础用法" description="Alert 组件的基础用法"></preview>

## 不同类型

Alert 组件提供了 4 种类型，由 `type` 属性指定，默认值为 `info`。

<preview path="../demo/Alert/Types.vue" title="不同类型" description="Alert 不同类型的展示"></preview>

## 可关闭的警告提示

设置 `closable` 属性可以显示关闭按钮，点击可关闭警告提示。

<preview path="../demo/Alert/Closable.vue" title="可关闭" description="Alert 可关闭功能"></preview>

## 带图标

设置 `show-icon` 属性可以显示图标，让信息类型更加清晰。

<preview path="../demo/Alert/WithIcon.vue" title="带图标" description="Alert 带图标展示"></preview>

## 深色主题

设置 `effect` 属性为 `dark` 可以应用深色主题。

<preview path="../demo/Alert/Dark.vue" title="深色主题" description="Alert 深色主题"></preview>

## Alert Attributes

| 参数        | 说明               | 类型                                           | 默认值 |
| ----------- | ------------------ | ---------------------------------------------- | ------ |
| title       | 标题               | `string`                                       | —      |
| description | 描述性文本         | `string`                                       | —      |
| type        | 类型               | `'success' \| 'info' \| 'warning' \| 'danger'` | info   |
| closable    | 是否可关闭         | `boolean`                                      | false  |
| show-icon   | 是否显示图标       | `boolean`                                      | false  |
| close-text  | 关闭按钮自定义文本 | `string`                                       | —      |
| effect      | 主题样式           | `'light' \| 'dark'`                            | light  |

## Alert Events

| 事件名 | 说明              | 回调参数 |
| ------ | ----------------- | -------- |
| close  | 关闭 alert 时触发 | —        |

## Alert Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 描述内容       |
| title   | 自定义标题内容 |
