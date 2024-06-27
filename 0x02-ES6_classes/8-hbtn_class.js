export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /* Method to return size when cast to a number */
  valueOf() {
    return this._size;
  }

  /* Method to return location when cast to a string */
  toString() {
    return this._location;
  }
}
