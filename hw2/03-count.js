// Add your code here

const searchText = document.querySelector('.search-text');
const textInput = document.querySelector('.word-input');
const originalTextContent = searchText.innerHTML;

const highlight = function findAndHighlightInputWordInText(
  inputWord,
  textElement,
) {
  let newTextElementInnerHTML = textElement.innerHTML;

  if (typeof inputWord === 'string' && inputWord !== '') {
    const wordReplacement = `<span class='bg-warning'>${inputWord}</span>`;
    newTextElementInnerHTML = textElement.innerHTML
      .split(inputWord)
      .join(wordReplacement);
  }

  return newTextElementInnerHTML;
};

// let currentWord = '';
// const handle = function handleKeyDown(input) {
//   console.log(`current key press: ${input.key}`);
//   console.log(`current input: ${textInput.value}`);
//   if (/^[a-zA-Z]$/.test(input.key)) {
//     // should probably declare separately
//     currentWord += input.key;
//   } else if (textInput.value === '') currentWord = '';
//   else if (input.key === 'Backspace' && currentWord.length > 0) {
//     currentWord = currentWord.substring(0, currentWord.length - 1);
//   }
//   console.log(`currentword: ${currentWord}`);
//   const newInnerHTML = highlight(currentWord, searchText);
//   if (searchText.innerHTML !== newInnerHTML) {
//     searchText.innerHTML = newInnerHTML;
//   } else {
//     searchText.innerHTML = originalTextContent;
//   }
// };

const handleIn = function handleInput(event) {
  const { value } = event.target;
  console.log(`The value found from handling input: ${value}`);
  const newInnerHTML = highlight(value, searchText);
  if (searchText.innerHTML !== newInnerHTML) {
    searchText.innerHTML = newInnerHTML;
  } else {
    searchText.innerHTML = originalTextContent;
  }
};

// textInput.addEventListener('keydown', handle);
textInput.addEventListener('input', handleIn);
