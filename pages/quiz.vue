<script setup lang="ts">
import { useRouter } from 'vue-router';
import { PERSONAS } from '~/utils/constants';

const router = useRouter();
const { setPersonaById, selectedFunds } = useAppState();

const handleQuizComplete = (answers: Record<number, number>) => {
  let total = 0;
  Object.values(answers).forEach(v => total += v);
  const index = Math.max(0, Math.min(Math.floor((total - 15) / 90 * 10), 9));
  const p = PERSONAS[index];
  if (p) {
    setPersonaById(p.enName);
    selectedFunds.value = [];
    router.push(`/results/${p.enName}`);
  }
};
</script>

<template>
  <QuizStep @complete="handleQuizComplete" />
</template>
