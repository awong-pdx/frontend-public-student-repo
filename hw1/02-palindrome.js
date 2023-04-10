const elem = document.querySelector("input");
const result = document.querySelector(".result");

elem.addEventListener("input", handleInput);

function handleInput(input) {
  let number = Number(input.target.value);

  if (Number.isNaN(number) === false && number > 0) {
    if (checkPalindrome(number)) {
      console.log(Math.random() + "checking your number");
      result.textContent = "Yes. This is a palindrome!";
      result.setAttribute("class", "text-success");
    } else {
      result.textContent = "No. Please try again.";
      result.setAttribute("class", "text-danger");
    }
  } else {
    result.textContent = "Error: Please enter a positive number.";
    result.setAttribute("class", "text-warning");
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
