<script setup>
import Alert from '@/components/Alert/Alert.vue'
</script>
<template>
  <Alert type="success" title="深色主题" description="这是深色主题的成功提示" effect="dark" />
  <br />
  <Alert
    type="danger"
    title="深色主题"
    description="这是深色主题的错误提示"
    effect="dark"
    closable
  />
</template>
