import Building from "./5-building";

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;

    /* Define getters for sqft and floors */

    Object.defineProperty(this, "floors", {
      get: function () {
        return this._floors;
      },
    });
  }

  /* override evacuationWarningMessage method */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
