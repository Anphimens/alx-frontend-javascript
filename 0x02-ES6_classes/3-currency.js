export default class Currency {
  constructor(code, name) {
    /* Assign attributes */
    this._code = code;
    this._name = name;

    /* Define getters and setter */
    Object.defineProperty(this, "code", {
      get: function () {
        return this._code;
      },
      set: function (newCode) {
        this._code = newCode;
      },
    });

    Object.defineProperty(this, "name", {
      get: function () {
        return this._name;
      },
      set: function (newName) {
        this._name = newName;
      },
    });
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
