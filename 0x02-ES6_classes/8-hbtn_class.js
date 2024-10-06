export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  set size(size) {
    if (typeof size === 'number') {
      this._size = size;
    }
    throw new Error('Excepted a number');
  }

  set location(location) {
    if (typeof location === 'string') {
      this._location = location;
    }
    throw new Error('Excepted a string of characters');
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
