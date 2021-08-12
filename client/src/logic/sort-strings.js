/**
 * Sorts an array of strings according to alphabetical order, length, and insertion order.
 *
 * Returns a new array without modifying the original array.
 *
 * @param {string[]} [strArray=[]] - The array of strings to sort.
 * @param {string[]} [dropDownOption=['oldest']] - Sort array by the option values.
 * @returns {string[]} A new array with the same string, but sorted.
 *
 */

export const sortStrings = (strArray = [], dropDownOption = ['oldest']) => {
  // create a copy of the original array to avoid side effects.
  const sortedArray = strArray.slice();
  if (dropDownOption === 'newest') {
    sortedArray.reverse();
  } else if (dropDownOption === 'a-z') {
    sortedArray.sort();
  } else if (dropDownOption === 'z-a') {
    sortedArray.sort().reverse();
  } else if (dropDownOption === 'shortest') {
    sortedArray.sort((a, b) => a.length - b.length);
  } else if (dropDownOption === 'longest') {
    sortedArray.sort((a, b) => a.length - b.length).reverse();
  } else {
    return sortedArray;
  }
  return sortedArray;
};
