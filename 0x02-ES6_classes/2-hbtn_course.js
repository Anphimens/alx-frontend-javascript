export default class HolbertonCourse {
  constructor(name, length, students) {
    /* Verify and assign attributes */
    this._name = typeof name === "string" ? name : "";
    this._length = typeof length === "number" ? length : 0;
    this._students = Array.isArray(students) ? students : [];

    /* Define getters and setters */
    Object.defineProperty(this, "name", {
      get: function () {
        return this._name;
      },
      set: function (newName) {
        if (typeof newName === "string") {
          this._name = newName;
        } else {
          throw new Error("Name must be a string");
        }
      },
    });

    Object.defineProperty(this, "length", {
      get: function () {
        return this._length;
      },
      set: function (newLength) {
        if (typeof newLength === "number") {
          this._length = newLength;
        } else {
          throw new Error("Length must be a number");
        }
      },
    });

    Object.defineProperty(this, "students", {
      get: function () {
        return this._students;
      },
      set: function (newStudents) {
        if (Array.isArray(newStudents)) {
          this._students = newStudents;
        } else {
          throw new Error("Students must be an array of strings");
        }
      },
    });
  }
}
