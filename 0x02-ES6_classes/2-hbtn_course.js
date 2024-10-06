/**
 * Represents a holberton course
 */
export default class HolbertonCourse {
  /**
   * Creates a new @see {@link HolbertonCourse}.
   * @param {String} name - The Course name
   * @param {Number} length - How long the course is.
   * @param {String[]} students - The names of student in the course
   */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Gets the name of the course
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the course
   */
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    }
    throw new TypeError('Name must be a string');
  }

  /**
   * Gets the length of the course
   */
  get length() {
    return this._length;
  }

  /**
   *  Sets the duration of the course.
   */
  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    }
    throw new TypeError('Length must be a number');
  }

  /**
   *  Gets a list of the student offering the course.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the list of student offering the course.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be array of strings');
    }
    if (!(value.every((entry) => typeof entry === 'string'))) {
      throw new TypeError('was expecting array of strings');
    }
    this._students = value;
  }
}
