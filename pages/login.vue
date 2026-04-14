<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const handleSuccess = () => {
  router.push('/cart');
};
</script>

<template>
  <Login @success="handleSuccess" />
</template>
