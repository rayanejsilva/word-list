/* eslint-disable spellcheck/spell-checker */
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
