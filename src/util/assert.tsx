/**
 * Use the 'assert' test function, or its other asserters
 *
 * If you ensure that the component is loaded during unit testing, then any assertion errors
 * will fail the unit test
 *
 */

import U from './units';

function assert(test: boolean): void {
  if (!test) {
    throw Error('Assertion Error');
  }
}

/**
 * Does a have the same units as b?
 */
assert.sameUnits = function (a: U, b: U) {
  if (a.u != b.u) {
    throw Error(`Different units: ${a} and ${b}`);
  }
};

/**
 * Does a have the given unit?
 */
assert.hasUnits = function (a: U, unit: string) {
  if (a.u != unit) {
    throw Error(`Different units: ${a} and ${unit}`);
  }
};

export default assert;
