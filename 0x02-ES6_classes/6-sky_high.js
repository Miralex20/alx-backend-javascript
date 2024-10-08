import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  set floors(value) {
    if (typeof value === 'number') {
      this._floors = value;
    }
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Exacuate slowly the ${this._floors} floors`;
  }
}
