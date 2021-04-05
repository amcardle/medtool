export default class U {
  private _value: number;
  private _unit: string;

  constructor(value: number, unit: string) {
    this._value = value;
    this._unit = unit;
  }

  get v() {
    return this._value;
  }

  get u() {
    return this._unit;
  }

  get s() {
    return `${this._value} ${this._unit}`;
  }
}
