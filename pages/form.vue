<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import type { UserFormData } from '~/types';

const router = useRouter();
const { formData } = useAppState();

onMounted(() => {
  const savedForm = localStorage.getItem('pocket_form');
  if (savedForm) {
    try {
      const parsed = JSON.parse(savedForm);
      if (parsed && typeof parsed === 'object') {
        formData.value = { ...formData.value, ...parsed };
      }
    } catch (e) {
      console.error('Failed to parse saved form data', e);
    }
  }
});

const handleFormChange = (d: UserFormData) => {
  formData.value = d;
  localStorage.setItem('pocket_form', JSON.stringify(d));
};

const handleNext = () => {
  router.push('/quiz');
};
</script>

<template>
  <InfoForm 
    :data="formData" 
    @change="handleFormChange" 
    @next="handleNext" 
  />
</template>
