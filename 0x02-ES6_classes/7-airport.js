export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /* string description of the class with a format to display */
  toString() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}'}`;
  }
}
