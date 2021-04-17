import { ref, computed } from 'vue';
import U from '../util/units';

const _weight = ref(70);
export const weight = computed(() => {
  return new U(_weight.value, 'kg');
});

export function setWeight(weight: number): void {
  if (weight > 0) {
    _weight.value = weight;
  }
}

const _height = ref(180);
export const height = computed(() => {
  return new U(_height.value, 'cm');
});

export function setHeight(height: number): void {
  if (height > 0) {
    _height.value = height;
  }
}

const _male = ref(true);
export const male = computed(() => {
  return _male;
});
