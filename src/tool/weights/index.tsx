import component from '*.vue';
import { defineComponent } from 'vue';
/**
 * Weight calculators as per SOBA Guidelines: AAGBI SOBA Guidelines Peri-operative management of the obese surgical patient 2015
 */

import Row from '../../components/row';
import U from '../../util/units';
import assert from '../../util/assert';
import patientData from '../patientData';
import { weight } from '@/store';

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

/**
 * Calculate Ideal Body Weight (IBW)
 *
 * What the patient should weigh
 * with a normal ratio of lean to fat mass.
 * Varies with age, and is usually
 * approximated to a function of
 * height and sex
 */

export function IBW(weight: U, height: U, male: boolean): U {
  assert.hasUnits(weight, 'kg');
  assert.hasUnits(height, 'cm');

  const IBW = height.v - (male ? 100 : 105);
  return new U(IBW, 'kg');
}

/**
 * Calculate Adjusted Body Weight (ABW)
 *
 * Takes into account the fact that obese individuals
 * have increased lean body mass and an increased
 * volume of distribution for drugs. It is calculated
 * by adding 40% of the excess weight to the IBW
 *
 *
 * Propofol (infusion)
 * Antibiotics
 * Low molecular weight heparin
 * Alfentanil
 * Neostigmine (maximum 5 mg)
 * Sugammadex
 */
export function ABW(weight: U, height: U, male: boolean): U {
  assert.hasUnits(weight, 'kg');
  assert.hasUnits(height, 'cm');

  const ibw = IBW(weight, height, male).v;
  const abw = ibw + 0.4 * (weight.v - ibw);
  return new U(abw, 'kg');
}

/** Calculate Lean Body Weight (LBW)
 *
 *
 * The patient’s weight excluding fat. Many of the
 * formulae for calculating lean body weight are
 * complex but one of the most widely used is that
 * of Janmahasatian et al.
 *
 *
 * Propofol (induction)
 * Thiopental
 * Fentanyl
 * Rocuronium
 * Atracurium
 * Vecuronium
 * Morphine
 * Paracetamol
 * Bupivacaine
 * Lidocaine
 */

export function LBW(weight: U, height: U, male: boolean): U {
  assert.hasUnits(weight, 'kg');
  assert.hasUnits(height, 'cm');

  const bmi = BMI(weight, height).v;

  let lbw;
  if (male) {
    lbw = (9270 * weight.v) / (6680 + 216 * bmi);
    lbw = Math.min(lbw, 100);
  } else {
    lbw = (9270 * weight.v) / (8780 + 244 * bmi);
    lbw = Math.min(lbw, 70);
  }

  return new U(lbw, 'kg');
}

//=================================================================================================

const Weights = defineComponent({
  name: 'Weights',
  setup(props) {
    return patientData();
  },
  render() {
    return (
      <Row name="Weight">
        <p>BMI: {BMI(this.weight, this.height).s}</p>
        <p>IBW: {IBW(this.weight, this.height, this.male.value).s}</p>
        <p>ABW: {ABW(this.weight, this.height, this.male.value).s}</p>
        <p>LBW: {LBW(this.weight, this.height, this.male.value).s}</p>
      </Row>
    );
  }
});

export default Weights;
