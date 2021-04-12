import { defineComponent } from 'vue';

/**
 * Row component, which encloses other tools
 *
 * <Row>
 *  Content Here
 * </Row>
 */
const Row = defineComponent({
  name: 'Row',
  props: { name: { type: String, required: true } },
  render() {
    return <div class="row">{this.$slots.default?.()}</div>;
  }
});

export default Row;
