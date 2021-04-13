import { defineComponent } from 'vue';
import Row from '../../components/row';
import * as store from '../../store';

const Input = defineComponent({
  name: 'Input',
  setup(props) {
    function setWeight(e: Event) {
      const target = e.target as HTMLInputElement;
      const weight = Number.parseFloat(target.value);
      store.setWeight(weight);
    }

    function setHeight(e: Event) {
      const target = e.target as HTMLInputElement;
      const height = Number.parseFloat(target.value);
      store.setHeight(height);
    }

    return { setWeight, setHeight };
  },
  render() {
    return (
      <Row name="Input">
        <input onInput={this.setWeight} />
        <input onInput={this.setHeight} />
      </Row>
    );
  }
});

export default Input;
