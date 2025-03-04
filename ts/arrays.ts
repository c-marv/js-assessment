const arraysAnswers = {
  /**
   * Find the 0 based index of item in arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to find in arr
   * @returns {Number} The index of item in arr, or -1 if item is not in arr.
   */
  indexOf: function (arr: number[], item: number): number {
    return arr.indexOf(item);
  },

  /**
   * Determine the sum of the items of arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number} The numerical sum of all items in arr.
   */
  sum: function (arr: number[]): number {
    return arr.reduce((prev, current) => prev + current, 0);
  },

  /**
   * Create a new array with the same items as arr, excluding item
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be excluded from the new array
   * @returns {Number[]} A new array containing all numbers from arr except item.
   */
  remove: function (arr: number[], item: number): number[] {
    return arr.filter(value => item !== value);
  },

  /**
   * Remove am item from an array without create a copy
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be excluded from the new array
   * @returns {Number[]} Same input array
   */
  removeWithoutCopy: function (arr: number[], item: number): number[] {
    let itemIndex = arr.indexOf(item);
    while (itemIndex !== -1) {
      arr.splice(itemIndex, 1);
      itemIndex = arr.indexOf(item);
    }
    return arr;
  },

  /**
   * Adds a number, item, to the end of an array, arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be appended to the end of arr
   * @returns {Number[]} The array arr, with item appended.
   */
  append: function (arr: number[], item: number): number[] {
    return [...arr, item];
  },

  /**
   * Removes a number, item, from the end of an array, arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the last element removed..
   */
  truncate: function (arr: number[]): number[] {
    return arr.slice(0, -1);
  },

  /**
   * Adds a number, item, to the beginning of an array arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to append to the beginning of arr.
   * @returns {Number[]} The array arr, with the first element item added
   */
  prepend: function (arr: number[], item: number): number[] {
    return [item, ...arr];
  },


  /**
   * Removes the first element from an array
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the first element item removed.
   */
  curtail: function (arr: number[]): number[] {
    return arr.slice(1);
  },

  /**
   * Combines the two arrays arr1 and arr2 together
   *
   * @param {Number[]} arr1 - An array of numbers
   * @param {Number[]} arr2 - An array of numbers
   * @returns {Number[]} A new array, with elements from arr1 and arr2 in that order.
   */
  concat: function (arr1: number[], arr2: number[]): number[] {
    return [...arr1, ...arr2];
  },

  /**
   * Insert a number item into an array arr at the 0 based position index.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be inerted into arr
   * @param {Number} index - A 0 based index into the array arr.
   * @returns {Number[]} The array arr, with the number item inserted at position index.
   */
  insert: function (arr: number[], item: number, index: number): number[] {
    const arrCopy = [...arr];
    arrCopy.splice(index, 0, item);
    return arrCopy;
  },

  /**
   * Counts the number of times a number item appears in an array arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to count in arr
   * @returns {Number} The count of the number of times the number item appeared in arr.
   */
  count: function (arr: number[], item: number): number {
    return arr.filter(value => value === item).length;
  },

  /**
   * Determines the number of duplicated numbers in the array arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} An array of numbers that appear in arr more than once.
   */
  duplicates: function (arr: number[]): number[] {
    const duplicatesArr = arr.filter((item, index) => arr.indexOf(item) !== index);
    return duplicatesArr.filter((item, index) => duplicatesArr.indexOf(item) === index);
  },

  /**
   * Squares each number in an array arr. Example: square([1, 2, 3]) returns [1, 4, 9].
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} A new array of numbers that contains the elements of arr squared.
   */
  square: function (arr: number[]): number[] {
    return arr.map(value => value ** 2);
  },

  /**
   * Finds the indices of the occurrences of a number target in an array of numbers arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} target - A number to find all occurences of.
   * @returns {Number[]} A new array of numbers which represent the indices of target in arr.
   */
  findAllOccurrences: function (arr: number[], target: number): number[] {
    const indexList = [];
    let itemIndex = arr.indexOf(target);
    while (itemIndex !== -1) {
      indexList.push(itemIndex);
      itemIndex = arr.indexOf(target, itemIndex + 1);
    }
    return indexList;
  },
};
