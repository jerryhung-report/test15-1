<script setup lang="ts">
import { useError, clearError } from '#app';

const error = useError();

const handleError = () => {
  clearError({ redirect: '/' });
};
</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center bg-slate-50 p-6 font-sans">
    <div class="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center space-y-8 border border-slate-100">
      <div class="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <span class="text-4xl font-bold">!</span>
      </div>
      
      <div class="space-y-3">
        <h1 class="text-3xl font-black text-slate-900 tracking-tight">
          {{ error?.statusCode === 404 ? '找不到網頁' : '應用程式發生錯誤' }}
        </h1>
        <p class="text-slate-500 font-medium leading-relaxed">
          {{ error?.statusCode === 404 ? '很抱歉，你造訪的頁面不存在。' : '頁面暫時無法載入，請稍後再試。' }}
        </p>
      </div>

      <div v-if="error?.message" class="bg-slate-50 p-4 rounded-2xl text-xs font-mono text-slate-400 overflow-auto max-h-32 text-left">
        {{ error.message }}
      </div>

      <button 
        @click="handleError"
        class="w-full py-4 bg-[#D21118] text-white rounded-2xl font-black text-lg hover:bg-[#b00e14] transition-all shadow-lg shadow-[#D21118]/20"
      >
        回首頁
      </button>
    </div>
  </div>
</template>
