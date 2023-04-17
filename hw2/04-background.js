// Add your code here
const background = document.querySelector('.background');
const startStop = document.querySelector('.start-stop');
const intervalBox = document.querySelector('.interval-box');
let currentInterval = 1000;
let intervalID = null;

background.style.background = 'rgb(25, 0, 255, 0.5)';

const colorGen = function generateRandomColorValue() {
  return Math.floor(Math.random() * 255);
};

const changeBackground = function changeBackgroundColor() {
  background.style.background = `rgb(${colorGen()}, ${colorGen()}, ${colorGen()}, 0.5`;
};

const getInterval = function getCurrentIntervalInput(input) {
  currentInterval = input.target.value * 1000;
};

const toggleButton = function toggleStartStopButton() {
  if (startStop.className.includes('btn-primary')) {
    startStop.className = startStop.className.replace(
      'btn-primary',
      'btn-danger',
    );
    startStop.textContent = 'Stop';
  } else {
    startStop.className = startStop.className.replace(
      'btn-danger',
      'btn-primary',
    );
    startStop.textContent = 'Start';
  }
};

const toggleChange = function toggleBackgroundColorChange() {
  if (!intervalID) intervalID = setInterval(changeBackground, currentInterval);
  else {
    clearInterval(intervalID);
    intervalID = null;
  }

  toggleButton();
};

startStop.addEventListener('click', toggleChange);
intervalBox.addEventListener('input', getInterval);
