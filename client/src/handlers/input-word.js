import { data } from '../../data.js';
import { isWord } from '../logic/is-word.js';
import { sortStrings } from '../logic/sort-strings.js';
import { renderList } from '../components/render-list.js';

/**
 * Entry point for users adding a word to the list.
 * It is called each time the user clicks the "add word" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */
export const inputWord = (event) => {
  if (event.target.type !== 'button') {
    return;
  }
  const text = event.target.form.text.value;
  const action = event.target.value;
  const warnings = document.getElementById('warnings');

  if (action === 'add') {
    warnings.innerText = '';
    if (!isWord(text)) {
      warnings.style.fontSize = '18px';
      warnings.style.marginTop = '20px';
      warnings.style.fontWeight = 'bold';
      warnings.style.color = '#eb3e35';
      warnings.style.fontFamily = 'Judson';
      warnings.innerHTML = `${text} is not a word. Try again!`;
    } else {
      data.words.push(text);
    }
  }

  if (action === 'remove') {
    if (!data.words.includes(text)) {
      warnings.style.color = '#eb3e35';
      warnings.innerHTML = `${text} is not in the list`;
    } else {
      data.words.splice(data.words.indexOf(text), 1);
    }
  }
  const sorted = sortStrings(data.words, data.sort);
  const newList = renderList(sorted);

  const listContainer = document.getElementById('list-container');
  listContainer.innerHTML = '';
  listContainer.appendChild(newList);
};
