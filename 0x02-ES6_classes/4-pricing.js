import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    }
    throw new TypeError('Expected a Number for value');
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    }
    throw new TypeError('Expected a currency type');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this.currency.code}) `;
  }

  static convertPrice(amount, conversionRate) {
    if ((typeof amount === 'number') && (typeof conversionRate === 'number')) {
      return amount * conversionRate;
    }
    throw new TypeError('Expected numbers for both amount and conversionRate');
  }
}
