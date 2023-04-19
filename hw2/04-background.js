// Add your code here
const background = document.querySelector('.background');
const startStop = document.querySelector('.start-stop');
const intervalBox = document.querySelector('.interval-box');
let currentDelay = 1000;
let intervalID = null;

background.style.background = 'rgb(25, 0, 255, 0.5)';

const colorGen = function generateRandomColorValue() {
  return Math.floor(Math.random() * 256);
};

const changeBackground = function changeBackgroundColor() {
  background.style.background = `rgb(${colorGen()}, ${colorGen()}, ${colorGen()}, 0.5`;
};

const getInterval = function getCurrentIntervalInput(input) {
  currentDelay = input.target.value * 1000;
};

const toggleButton = function toggleStartStopButton() {
  if (startStop.textContent === 'Start') {
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
  if (!intervalID) intervalID = setInterval(changeBackground, currentDelay);
  else {
    clearInterval(intervalID);
    intervalID = null;
  }

  toggleButton();
};

startStop.addEventListener('click', toggleChange);
intervalBox.addEventListener('input', getInterval);

//interval can still be set to zero manually and there will be a strobe!