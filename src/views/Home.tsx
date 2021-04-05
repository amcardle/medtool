import { defineComponent } from 'vue';
import * as store from '../store';

export default defineComponent({
  name: 'Home',

  render() {
    const weight = store.weight.value;
    const height = store.height.value;
    return (
      <div class="home">
        Home component {weight.s} {height.s}
      </div>
    );
  }
});
