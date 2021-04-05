/**
 * Use the 'assert' test function, or its other asserters
 *
 * If you ensure that the component is loaded during unit testing, then any assertion errors
 * will fail the unit test
 *
 */

export default function assert(test: boolean): void {
  if (!test) {
    fail('assert()');
  }
}

function fail(message: string) {
  console.log('Assertion Failure: ' + message);
  throw Error('Assertion Error: ' + message);
}
