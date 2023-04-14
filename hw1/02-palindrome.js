const elem = document.querySelector('input');
const result = document.querySelector('.result');

const checkPalindrome = function checkIfNumberIsAPalindrome(number) {
  let isPalindrome = false;

  if (Number.isInteger(number)) {
    const num = number.toString();
    const reversedNum = num.split('').reverse().join('');

    if (reversedNum === num) isPalindrome = true;
  }

  return isPalindrome;
};

const handleInput = function handleUserInput(input) {
  const number = Number(input.target.value);

  if (Number.isNaN(number) === false && number > 0) {
    if (checkPalindrome(number)) {
      result.textContent = 'Yes. This is a palindrome!';
      result.setAttribute('class', 'text-success');
    } else {
      result.textContent = 'No. Please try again.';
      result.setAttribute('class', 'text-danger');
    }
  } else {
    result.textContent = 'Error: Please enter a positive number.';
    result.setAttribute('class', 'text-danger');
  }
};

elem.addEventListener('input', handleInput);
