import { mount } from '@vue/test-utils';
import Home from '../../src/views/Home';

describe('Home.vue', () => {
  it('Home.vue loads', () => {
    const wrapper = mount(Home, {});
  });
});
