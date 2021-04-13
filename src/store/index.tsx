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

const _male = ref(true);
export const male = computed(() => {
  return _male;
});

//TODO Remove this in production
//Written to regularly change values to ensure all code is properly reactive
setInterval(() => {
  _height.value = Math.round(Math.random() * 100) + 100;
}, 2000);

setInterval(() => {
  _weight.value = Math.round(Math.random() * 100);
}, 1500);
