import { ref, computed } from '@vue-mini/core';
import { createPinia, defineStore } from '@vue-mini/pinia';
import persistor from 'pinia-mini-plugin-persistor';

export const pinia = createPinia();

pinia.use(persistor);

export const useStore = defineStore(
  'main',
  () => {
    const count = ref(0);
    const double = computed(() => count.value * 2);
    const increment = () => count.value++;
    return { count, double, increment };
  },
  {
    persist: true,
  },
);
