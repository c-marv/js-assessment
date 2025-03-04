const stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   *
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   *
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function (str: string, amount: number): string {
    const strArr = str.split('');
    let amounCopy = amount;
    let result = '';
    for (let i = 0; i < strArr.length; i += 1) {
      if (strArr[i] === strArr[i + 1]) {
        amounCopy -= 1;
        if (amounCopy > 0) {
          result += strArr[i];
        }
      } else {
        amounCopy = amount;
        result += str[i];
      }
    }
    return result;
  },

  /**
   * Reverses a string of text
   *
   * Example: reverseString('abc') should be 'cba'
   *
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function (str: string): string {
    return str.split('').reverse().join('');
  },
};
