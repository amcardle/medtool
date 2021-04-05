import { ref, computed } from 'vue';
import U from '../util/units';

const _weight = ref(70);

export const weight = computed(() => {
  return new U(_weight.value, 'kg');
});

const _height = ref(180);
export const height = computed(() => {
  return new U(_height.value, 'cm');
});
