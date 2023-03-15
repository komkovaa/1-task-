const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = (seconds) => {
  return () => {
    let remainderSeconds = Math.floor(seconds % 60);
    let hours = Math.floor((seconds / 60 / 60) % 24);
    let minutes = Math.floor((seconds / 60) % 60);

    const hh = hours < 10 ? '0' + hours : hours;
    const mm = minutes < 10 ? '0' + minutes : minutes;
    const ss = remainderSeconds < 10 ? '0' + remainderSeconds : remainderSeconds;
    const strTimer = `${hh}:${mm}:${ss}`;
    timerEl.innerHTML = strTimer;
    seconds--;
  };
};

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^0-9]/g,"")
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  const animateTimer = createTimerAnimator(seconds);
  animateTimer();

  const intervalId = setInterval(animateTimer, 1000);

  setTimeout(() => clearInterval(intervalId), seconds * 1000);

  inputEl.value = '';
});
