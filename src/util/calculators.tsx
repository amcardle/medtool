import U from './units';
import assert from './assert';

export function BMI(weight: U, height: U): U {
  assert.hasUnits(weight, 'kg');
  assert.hasUnits(height, 'cm');

  const BMI = weight.v / (height.v / 100) ** 2;

  return new U(BMI, 'BMI');
}
