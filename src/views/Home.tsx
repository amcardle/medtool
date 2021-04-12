import { defineComponent } from 'vue';
import * as store from '../store';
import assert from '../util/assert';
import Row from '../components/row';

export default defineComponent({
  name: 'Home',

  render() {
    const weight = store.weight.value;
    const height = store.height.value;
    const male = store.male.value;
    return (
      <div class="home">
        Home component {weight.s} {height.s}
        <Row name="Example">
          <>Content</>
        </Row>
      </div>
    );
  }
});
