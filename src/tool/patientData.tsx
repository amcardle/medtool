import * as store from '..//store';

/**
 * Import this into the component setup() function to access patient data
 * 
 * @example
 * setup(props) {
    return patientData();
  },
  render() {
    return <Row name="Weight">{BMI(this.weight, this.height).s}</Row>;
  }
 */
export default function patientData() {
  const weight = store.weight;
  const height = store.height;
  const male = store.male;
  return { weight, height, male };
}
