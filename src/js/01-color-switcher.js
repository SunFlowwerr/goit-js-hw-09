const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerId = null;
let isActive = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startBtn.addEventListener('click', () => {
  if (isActive) {
    startBtn.disabled = 'disabled';
    timerId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
  isActive = false;
});

stopBtn.addEventListener('click', () => {
  startBtn.disabled = null;
  clearInterval(timerId);
  isActive = true;
});
