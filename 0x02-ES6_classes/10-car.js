export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(brand) {
    if (typeof brand === 'string') {
      this._brand = brand;
    }
    throw new TypeError('Expected a string for brand');
  }

  get motor() {
    return this._motor;
  }

  set motor(motor) {
    if (typeof motor === 'string') {
      this._motor = motor;
    }
    throw new TypeError('Expected a string for motor');
  }

  get color() {
    return this._color;
  }

  set color(color) {
    if (typeof color === 'string') {
      this._color = color;
    }
    throw new TypeError('Expected a string for color');
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
