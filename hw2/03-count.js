// Add your code here

const searchText = document.querySelector('.search-text');
const textInput = document.querySelector('.word-input');
const originalTextContent = searchText.innerHTML;

const highlight = function findAndHighlightInputWordInText(inputWord, text) {
  let newTextInnerHTML = text;

  if (typeof inputWord === 'string' && inputWord !== '') {
    const wordReplacement = `<span class='bg-warning'>${inputWord}</span>`;
    const inputWordSpaceCheck = new RegExp(`\\b${inputWord}\\b`, 'g');
    newTextInnerHTML = text.split(inputWordSpaceCheck).join(wordReplacement);
  }

  return newTextInnerHTML;
};

const handleIn = function handleInput(event) {
  const { value } = event.target;
  const newInnerHTML = highlight(value, originalTextContent);

  if (searchText.innerHTML !== newInnerHTML) {
    searchText.innerHTML = newInnerHTML;
  } else {
    searchText.innerHTML = originalTextContent;
  }
};

textInput.addEventListener('input', handleIn);
