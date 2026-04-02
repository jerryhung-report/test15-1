<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Share2, Facebook, MessageCircle, Link as LinkIcon, X } from 'lucide-vue-next';

const isOpen = ref(false);
const shareUrl = ref('');

onMounted(() => {
  shareUrl.value = window.location.origin + window.location.pathname;
});

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};

const shareToFB = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl.value)}`;
  window.open(url, '_blank', 'width=600,height=400');
  closeMenu();
};

const shareToLine = () => {
  const text = "CMoneyFund投資人格測驗";
  const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl.value)}&text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'width=600,height=400');
  closeMenu();
};

const shareToMessenger = () => {
  // Messenger sharing is tricky on web without App ID. 
  // On mobile, we can try the fb-messenger protocol.
  // On desktop, we'll fallback to FB share or a message.
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = `fb-messenger://share/?link=${encodeURIComponent(shareUrl.value)}`;
  } else {
    // Fallback for desktop: Facebook share dialog
    shareToFB();
  }
  closeMenu();
};

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(shareUrl.value);
    alert('連結已複製到剪貼簿！');
  } catch (err) {
    console.error('無法複製連結', err);
  }
  closeMenu();
};

// Close menu when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (isOpen.value && !target.closest('.share-container')) {
    closeMenu();
  }
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] share-container">
    <!-- Share Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0 translate-y-4"
      enter-to-class="transform scale-100 opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100 translate-y-0"
      leave-to-class="transform scale-95 opacity-0 translate-y-4"
    >
      <div v-if="isOpen" class="absolute bottom-14 sm:bottom-20 right-0 bg-white rounded-3xl shadow-2xl border border-slate-100 p-4 min-w-[200px] space-y-2 overflow-hidden">
        <div class="px-2 pb-2 mb-2 border-b border-slate-50">
          <p class="text-xs font-black text-slate-400 uppercase tracking-widest">分享測驗</p>
        </div>
        
        <button @click="shareToLine" class="w-full flex items-center gap-3 p-3 hover:bg-green-50 rounded-2xl transition-colors group">
          <div class="w-10 h-10 bg-[#06C755] text-white rounded-xl flex items-center justify-center shadow-sm">
            <MessageCircle :size="20" />
          </div>
          <span class="font-bold text-slate-700">LINE 分享</span>
        </button>

        <button @click="shareToFB" class="w-full flex items-center gap-3 p-3 hover:bg-blue-50 rounded-2xl transition-colors group">
          <div class="w-10 h-10 bg-[#1877F2] text-white rounded-xl flex items-center justify-center shadow-sm">
            <Facebook :size="20" />
          </div>
          <span class="font-bold text-slate-700">Facebook</span>
        </button>

        <button @click="shareToMessenger" class="w-full flex items-center gap-3 p-3 hover:bg-blue-50 rounded-2xl transition-colors group">
          <div class="w-10 h-10 bg-gradient-to-tr from-[#006AFF] to-[#00E2FF] text-white rounded-xl flex items-center justify-center shadow-sm">
            <MessageCircle :size="20" />
          </div>
          <span class="font-bold text-slate-700">Messenger</span>
        </button>

        <button @click="copyLink" class="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-2xl transition-colors group">
          <div class="w-10 h-10 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center shadow-sm">
            <LinkIcon :size="20" />
          </div>
          <span class="font-bold text-slate-700">複製連結</span>
        </button>
      </div>
    </transition>

    <!-- Main Toggle Button -->
    <button 
      @click="toggleMenu"
      class="w-11 h-11 sm:w-16 sm:h-16 bg-slate-400/50 backdrop-blur-sm text-slate-700 rounded-full shadow-xl flex items-center justify-center hover:bg-slate-400/70 transition-all active:scale-90 group relative border border-white/20"
      :class="{ 'rotate-90': isOpen }"
    >
      <X v-if="isOpen" class="w-5 h-5 sm:w-7 sm:h-7" :stroke-width="3" />
      <Share2 v-else class="w-5 h-5 sm:w-7 sm:h-7" :stroke-width="3" />
      
      <!-- Tooltip -->
      <span v-if="!isOpen" class="absolute right-20 bg-slate-900 text-white text-xs font-bold py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
        分享給好友
      </span>
    </button>
  </div>
</template>
