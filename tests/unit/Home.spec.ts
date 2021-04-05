import { shallowMount } from '@vue/test-utils';
import Home from '../../src/views/Home.vue';

describe('Home.vue', () => {
  it('Home.vue loads', () => {
    const wrapper = shallowMount(Home, {});
  });
});
