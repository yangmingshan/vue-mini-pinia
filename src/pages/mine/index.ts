import { defineComponent, ref } from '@vue-mini/core';
import { storeToRefs } from '@vue-mini/pinia';
import { useStore } from '@/pinia';

defineComponent(() => {
  const store = useStore();
  const { increment } = store;
  const greeting = ref('希望你会喜欢');

  const { count, double } = storeToRefs(store);
  return {
    count,
    double,
    greeting,
    increment,
  };
});
