<script setup>
import { ref, onMounted } from "vue";

const onClick = () => {};
const content = ref("");

onMounted(() => {
  content.value = "Hello, world!";
});
</script>

<template>
  <div v-bind:click="onClick">{{ content }}</div>
</template>

<style scoped>
.hello {
  @apply text-orange-500;
}
</style>
