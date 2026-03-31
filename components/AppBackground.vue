<template>
  <!-- Background Gradient & Circles -->
  <div class="fixed inset-0 z-[-1] pointer-events-none bg-gradient-to-br from-[#F0F6FA] via-[#EBF4FA] to-[#CFE2F0]">
    <!-- Decorative Circles -->
    <div class="absolute top-[-30%] left-[-20%] w-[90vw] h-[90vw] min-w-[800px] min-h-[800px] rounded-full bg-white/60 shadow-[0_30px_100px_rgba(0,0,0,0.06)]" />
    <div class="absolute bottom-[-40%] right-[-20%] w-[110vw] h-[110vw] min-w-[1000px] min-h-[1000px] rounded-full bg-white/60 shadow-[0_30px_100px_rgba(0,0,0,0.06)]" />
    <div class="absolute top-[10%] right-[-10%] w-[70vw] h-[70vw] min-w-[600px] min-h-[600px] rounded-full bg-white/70 shadow-[0_30px_100px_rgba(0,0,0,0.06)]" />
    <div class="absolute bottom-[20%] left-[-10%] w-[60vw] h-[60vw] min-w-[500px] min-h-[500px] rounded-full bg-white/50 shadow-[0_30px_100px_rgba(0,0,0,0.06)]" />
  </div>

  <!-- 閃閃 -->
  <img 
    src="https://www.cmoneyfund.com.tw/api/v1.0/File/Download/e8b694d7-c020-4a76-ba81-ae4ebaf183f0" 
    alt="閃閃" 
    class="fixed bottom-[2%] left-[-2%] sm:bottom-[10%] sm:left-[2%] w-[70px] sm:w-[150px] md:w-[200px] xl:w-[280px] object-contain animate-float opacity-100 z-0 pointer-events-none"
  />
  
  <!-- 太空袋袋 -->
  <div 
    @click="triggerAnimation"
    class="fixed top-[15%] right-[2%] sm:top-[5%] sm:right-[2%] w-[80px] sm:w-[180px] md:w-[240px] xl:w-[320px] pointer-events-auto group z-50 animate-float" 
    style="animation-delay: 1.5s;"
  >
    <!-- 漫畫式對話框 -->
      <div 
        v-if="speechBubbleText"
        class="absolute top-[20%] right-[90%] sm:right-[95%] w-max max-w-[180px] sm:max-w-[250px] bg-white text-slate-800 font-black text-xs sm:text-base px-4 py-3 rounded-2xl shadow-xl transition-all duration-300 pointer-events-none transform border-2 border-slate-100"
        :class="isAutoAnimating ? 'opacity-100 translate-x-0 delay-500' : 'opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 group-hover:delay-500'"
      >
        {{ speechBubbleText }}
        <!-- 對話框的尖角 -->
        <div class="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-l-[10px] border-l-white border-b-[8px] border-b-transparent drop-shadow-sm"></div>
      </div>

      <div class="w-full h-full" :class="isAutoAnimating ? 'animate-[spin-once_0.7s_ease-in-out]' : 'spin-on-hover'">
        <img 
          src="https://www.cmoneyfund.com.tw/api/v1.0/File/Download/c76bc90c-f17b-4398-9a52-289738c40038" 
          alt="太空袋袋" 
          class="w-full h-full object-contain opacity-100 translate-y-[20px]"
        />
      </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isAutoAnimating = ref(false);
let animationTimeout = null;

const triggerAnimation = () => {
  isAutoAnimating.value = true;
  if (animationTimeout) clearTimeout(animationTimeout);
  animationTimeout = setTimeout(() => {
    isAutoAnimating.value = false;
  }, 3000);
};

watch(() => route.query.step, () => {
  triggerAnimation();
}, { immediate: true });

const speechBubbleText = computed(() => {
  const step = route.query.step;
  if (!step || step === 'intro') {
    return '歡迎來到基金人格測驗！';
  }

  if (step === 'results') {
    return '像不像你？';
  }

  if (step === 'quiz1') {
    return '開始測試你的基金人格囉！';
  }

  if (step === 'quiz10' || step === 'quiz10-1') {
    return '讚喔！你已經完全一半測驗，快快往下繼續探索';
  }

  if (step === 'quiz14') {
    return '往下只剩最後一題了喔';
  }

  if (step === 'quiz15') {
    return '完成這題就要進去探索你的基金人格了唷';
  }

  if (step === 'cart') {
    return '這裡的基金都很適合你喔';
  }

  if (step === 'login') {
    return '登入你的基金帳號密碼喔';
  }

  if (step === 'form') {
    return '填寫好正確資料，不定期通知你基金驚喜優惠喔！';
  }

  if (typeof step === 'string' && step.startsWith('quiz')) {
    const qNum = parseInt(step.replace('quiz', ''));
    if (!isNaN(qNum)) {
      if (qNum >= 2 && qNum <= 9) {
        return '請往下繼續測驗你的基金人格';
      }
      if (qNum >= 11 && qNum <= 13) {
        return '請往下繼續完成宇宙種樹的測驗';
      }
    }
  }

  return '';
});
</script>

<style scoped>
@keyframes spin-once {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.group:hover .spin-on-hover {
  animation: spin-once 0.7s ease-in-out;
}
</style>
