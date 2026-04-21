<script setup lang="ts">
import { ExternalLink, CheckSquare, Square } from 'lucide-vue-next';
import type { Fund } from '~/types';
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  fund: Fund;
  isSelected: boolean;
  externalLink?: string;
  isSelectable?: boolean;
  showEtfDisclaimer?: boolean;
}>(), {
  isSelectable: true,
  showEtfDisclaimer: false
});

const emit = defineEmits<{
  (e: 'toggle', code: string): void;
}>();

const handleNameClick = (e: Event) => {
  e.stopPropagation();
  if (props.externalLink) {
    window.open(props.externalLink, '_blank');
  } else {
    window.open(`https://dev-fund.cmoneyfund.com.tw/fund-introduction/${props.fund.code}/performance-nav`, '_blank');
  }
};

const handleClick = () => {
  if (props.externalLink) {
    window.open(props.externalLink, '_blank');
  } else if (props.isSelectable) {
    emit('toggle', props.fund.code);
  }
};

const formattedNameParts = computed(() => {
  const name = props.fund.name;
  const regex = /(\(本基金[^)]*\)|\(基金之[^)]*\))/g;
  const parts = name.split(regex);
  
  return parts.filter(part => part !== '').map(part => {
    if (part.startsWith('(本基金') || part.startsWith('(基金之')) {
      return { text: part, isWarning: true };
    }
    return { text: part, isWarning: false };
  });
});
</script>

<template>
  <div 
    @click="handleClick"
    class="group relative bg-white border rounded-[2.5rem] p-8 sm:p-10 transition-all duration-300 hover:shadow-xl cursor-pointer w-full"
    :class="isSelected ? 'border-[#D21118] ring-1 ring-[#D21118]/10' : 'border-slate-100 shadow-sm'"
  >
    <div class="flex flex-col gap-8">
      <div class="flex gap-8 items-start">
        <div 
          class="shrink-0 h-16 w-16 rounded-full flex items-center justify-center transition-all duration-300"
          :class="isSelected ? 'bg-[#D21118] text-white shadow-lg' : 'bg-slate-50 text-slate-400 group-hover:bg-[#D21118]/5 group-hover:text-[#D21118]'"
        >
          <ExternalLink v-if="externalLink" :size="24" />
          <CheckSquare v-else-if="isSelected" :size="28" :stroke-width="3" />
          <Square v-else :size="28" :stroke-width="3" />
        </div>
        <div class="space-y-4 flex-1">
          <div class="flex items-center gap-3 flex-wrap">
            <span class="text-[12px] font-black px-3 py-1 bg-[#1E293B] text-white rounded-md tracking-wider uppercase">{{ fund.code }}</span>
            <span class="text-[12px] font-bold px-3 py-1 border border-slate-200 text-slate-500 rounded-md bg-white">{{ fund.currency }}</span>
            <span class="text-[12px] font-bold text-slate-400 uppercase tracking-widest px-3 py-1">風險 RR{{ fund.risk }}</span>
          </div>
          <h4 
            @click="handleNameClick"
            class="text-[17px] sm:text-[26px] text-slate-900 leading-tight hover:text-[#D21118] transition-colors hover:underline"
          >
            <template v-for="(part, index) in formattedNameParts" :key="index">
              <span v-if="part.isWarning" class="font-bold">{{ part.text }}</span>
              <span v-else class="font-medium">{{ part.text }}</span>
            </template>
            <span v-if="showEtfDisclaimer" class="font-bold">「本公司非證券/ETF銷售機構，本公司不提供委託買賣、款券交割，ETF交易均須透過口袋證券辦理，請投資人交易前審慎評估投資風險。」</span>
          </h4>
          <p class="text-[12px] sm:text-[14px] text-slate-500 leading-relaxed font-medium max-w-4xl">{{ fund.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
