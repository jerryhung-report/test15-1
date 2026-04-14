<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { PERSONAS } from '~/utils/constants';

const route = useRoute();
const router = useRouter();
const { persona, setPersonaById } = useAppState();

const personaId = route.params.id as string;
setPersonaById(personaId);

const handleContinue = () => {
  router.push('/login');
};
</script>

<template>
  <Results 
    :persona="persona" 
    @continue="handleContinue" 
  />
</template>
