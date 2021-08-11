/**
 * Check if a given string contains only letters.
 *
 * - @param {string} (str = '') - The string to inspect.
 * - @returns {boolean} true if there is a match between the regular expression and the string. Otherwise, false.
 *
 * @example
 *
 * isWord("car");
 * // -> true
 *
 * isWord("c@r");
 * // -> false
 */

// Use a regular expression to get a string contains only letter (both Uppercase or Lowercase)
export const isWord = (str = '') => /^[a-zA-Z]+$/.test(str);
