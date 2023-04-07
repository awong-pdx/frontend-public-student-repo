const elem = document.querySelector("input");
const result = document.querySelector(".result");

elem.addEventListener("input", handleInput);

function handleInput(input) {
  console.log(input);
  if (input.data > 0) {
    result.textContent = "you entered a positive number";
    // check for palindrome
  } else {
    result.textContent = "error: please enter a positive number";
  }
}

function checkPalindrome(number) {
  let isPalindrome = false;

  if (Number.isInteger(number)) {
    number = number.toString();
    let i = 0;
    let len = number.length;
    isPalindrome = true;
    while (i < len - i && isPalindrome) {
      if (number[i] !== number[len - 1 - i]) isPalindrome = false;
      i++;
    }
  }

  return isPalindrome;
}
