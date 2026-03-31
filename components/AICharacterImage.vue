<script setup lang="ts">
import type { Persona } from '~/types';

const props = defineProps<{
  persona: Persona;
}>();

// 直接使用 persona 資料中的圖片，如果沒有則使用預設圖片
const imageUrl = computed(() => {
  return props.persona.image || "https://placehold.co/400x400/png?text=Pocket+Dog";
});
</script>

<template>
  <div class="w-full max-w-[350px] aspect-square flex items-center justify-center relative bg-gradient-to-b from-[#4A6D91]/10 to-[#00519E]/10 rounded-[3rem] border border-slate-100 shadow-inner overflow-hidden group">
    <img 
      :src="imageUrl" 
      :alt="persona.title" 
      class="w-full h-full object-contain animate-scaleBounce" 
    />
  </div>
</template>

<style scoped>
@keyframes scaleBounce {
  0% { transform: scale(0.5); opacity: 0; }
  40% { transform: scale(1.15); opacity: 1; }
  70% { transform: scale(0.9); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
.animate-scaleBounce { animation: scaleBounce 0.8s ease-in-out forwards; }
</style>
