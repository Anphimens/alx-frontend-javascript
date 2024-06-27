import Currency from "./3-currency.js";

export default class Pricing {
  constructor(amount, Currency) {
    /* Assign attributes */
    this._amount = amount;
    this._currency = Currency;

    /* Define getters and setter */
    Object.defineProperty(this, "amount", {
      get: function () {
        return this._amount;
      },
      set: function (newAmount) {
        this._amount = newAmount;
      },
    });

    Object.defineProperty(this, "currency", {
      get: function () {
        return this._currency;
      },
      set: function (newCurrency) {
        this._currency = newCurrency;
      },
    });
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
