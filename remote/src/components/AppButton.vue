<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({ count: 0 })
const increment = () => {
  state.count++ 
}
</script>
<template>
  <button @click="increment">Counter: {{ state.count }}</button>
</template>
<style scoped>
button {
  padding: 16px;
  border-radius: 8px;
  border: none;
  background-color: #42b883;
  color: #fff;
  font-weight: 700;
  min-width: 120px;
}
button:hover {
  background-color: #54c08f;
  cursor: pointer;
}
</style>