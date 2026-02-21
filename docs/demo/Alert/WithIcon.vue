<script setup>
import Alert from '@/components/Alert/Alert.vue'
</script>
<template>
  <Alert type="success" title="带图标的提示" description="这是一条带图标的成功提示" show-icon />
  <br />
  <Alert type="warning" title="带图标的警告" description="这是一条带图标的警告提示" show-icon />
</template>
