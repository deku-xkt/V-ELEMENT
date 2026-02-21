<script setup>
import Alert from '@/components/Alert/Alert.vue'
</script>
<template>
  <Alert type="success" title="成功提示" description="这是一条成功提示信息" />
  <br />
  <Alert type="info" title="信息提示" description="这是一条信息提示" />
  <br />
  <Alert type="warning" title="警告提示" description="这是一条警告提示" />
  <br />
  <Alert type="danger" title="错误提示" description="这是一条错误提示" />
</template>
