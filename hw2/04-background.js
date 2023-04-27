// Add your code here
const background = document.querySelector('.background');
const startStopBtn = document.querySelector('.start-stop');
const intervalInputBox = document.querySelector('.interval-box');
let currentDelay = 1000;
let intervalID = null;

background.style.background = 'rgb(25, 0, 255, 0.5)';

const colorGen = function generateRandomColorValue() {
  return Math.floor(Math.random() * 256);
};

const changeBackground = function changeBackgroundColor() {
  background.style.background = `rgb(${colorGen()}, ${colorGen()}, ${colorGen()}, 0.5`;
};

const disableStartStopBtn = function disableStartStopBtnUsingAttribute() {
  startStopBtn.setAttribute('disabled', 'true');
};

const enableStartStopBtn = function enableStartStopBtnUsingAttribute() {
  startStopBtn.removeAttribute('disabled');
};

const getInterval = function getCurrentIntervalInput(input) {
  currentDelay = input.target.value * 1000;
  if (currentDelay < 1000) {
    disableStartStopBtn();
  } else enableStartStopBtn();
};

const styleButtonClass = function styleStartStopButtonUsingClassNameReplace(
  originalClass,
  replaceClass,
) {
  startStopBtn.className = startStopBtn.className.replace(`${originalClass}`, `${replaceClass}`);
};

const toggleButton = function toggleStartStopButton() {
  if (startStopBtn.textContent === 'Start') {
    styleButtonClass('btn-primary', 'btn-danger');
    startStopBtn.textContent = 'Stop';
  } else {
    styleButtonClass('btn-danger', 'btn-primary');
    startStopBtn.textContent = 'Start';
  }
};

const toggleChange = function toggleBackgroundColorChange() {
  if (!intervalID) intervalID = setInterval(changeBackground, currentDelay);
  else {
    clearInterval(intervalID);
    intervalID = null;
  }

  toggleButton();
};

startStopBtn.addEventListener('click', toggleChange);
intervalInputBox.addEventListener('input', getInterval);
