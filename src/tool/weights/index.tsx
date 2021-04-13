import component from '*.vue';
import { defineComponent } from 'vue';
import Row from '../../components/row';
import U from '../../util/units';
import assert from '../../util/assert';
import patientData from '../patientData';

/**
 * Calculate BMI
 *
 * @param weight kg
 * @param height cm
 */
export function BMI(weight: U, height: U): U {
  assert.hasUnits(weight, 'kg');
  assert.hasUnits(height, 'cm');

  const BMI = weight.v / (height.v / 100) ** 2;

  return new U(BMI, 'BMI');
}

//=================================================================================================

const Weights = defineComponent({
  name: 'Weights',
  setup(props) {
    return patientData();
  },
  render() {
    return <Row name="Weight">BMI: {BMI(this.weight, this.height).s}</Row>;
  }
});

export default Weights;
