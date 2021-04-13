import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

describe('App.vue', () => {
  it('App.vue loads', () => {
    const wrapper = mount(App, {});
  });
});
