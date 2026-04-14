<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const { persona, selectedFunds } = useAppState();

const toggleFund = (code: string) => {
  if (selectedFunds.value.includes(code)) {
    selectedFunds.value = selectedFunds.value.filter(c => c !== code);
  } else {
    selectedFunds.value.push(code);
  }
};

const resetAnalysis = () => {
  selectedFunds.value = [];
  router.push('/quiz');
};
</script>

<template>
  <Cart 
    :persona="persona" 
    :selected="selectedFunds" 
    @toggle="toggleFund"
    @reset="resetAnalysis"
  />
</template>
