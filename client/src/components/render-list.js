/* eslint-disable spellcheck/spell-checker */
/**
 * Renders an array of strings.
 *
 * - @param {string[]} [toRender=[]] - an array of strings to render into the UI.
 * - @returns {string[]} - a rendered words list.
 */
export const renderList = (toRender = []) => {
  // Create an unordered list
  const ulEl = document.createElement('ul');

  for (const nextItem of toRender) {
    // Create the list item
    const liEl = document.createElement('li');
    liEl.innerText = nextItem;
    // Place the item inside of the list
    ulEl.appendChild(liEl);
  }
  return ulEl;
};
