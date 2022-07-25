<script setup lang="ts">
import { Customer } from '@/interfaces/customer';
import { onMounted, type Ref, ref } from 'vue';
import axios from 'axios';

const customers: Ref<Customer[]> = ref([]);

onMounted(async () => {
  const res = await axios.get('/api/customers');
  customers.value = res.data;
})
</script>

<template>
</template>

<style scoped>
</style>