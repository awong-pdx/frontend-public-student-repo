const elem = document.querySelector("input");
const result = document.querySelector(".result");

elem.addEventListener("input", handleInput);

function handleInput(input) {
  console.log(input);
  if (input.data > 0) {
    result.textContent = "you entered a positive number";
  } else {
    result.textContent = "error: please enter a positive number";
  }
}
