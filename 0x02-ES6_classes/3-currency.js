export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (value instanceof String) {
      this._code = value;
    }
    throw new TypeError('String type expected');
  }

  set name(value) {
    if (value instanceof String) {
      this._name = value;
    }
    throw new TypeError('String type expected');
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
