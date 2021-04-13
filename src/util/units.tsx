/**
 * Defines a basic Unit
 *
 * @example
 * new U(12, "kg")
 */
export default class U {
  private _value: number;
  private _unit: string;

  constructor(value: number, unit: string) {
    this._value = value;
    this._unit = unit;
  }

  /**
   * Get the numeric value of the unit
   * ie 12
   */
  get v() {
    return this._value;
  }

  /**
   * Get the units type of the unit, as a string
   * ie "kg"
   */
  get u() {
    return this._unit;
  }

  /**
   * Get the unit and its value expressed as a string
   * ie 12 kg
   */
  get s() {
    //TODO Implement rounding to significant figures
    return `${this._value} ${this._unit}`;
  }

  toString() {
    return this.s;
  }
}
