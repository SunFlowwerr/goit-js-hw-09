import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      return resolve({ position, delay });
    } else {
      return reject({ position, delay });
    }
  });
}

form.addEventListener('submit', func => {
  func.preventDefault();

  let delay = +form['delay'].value;
  const step = +form['step'].value;
  const amount = +form['amount'].value;
  let position = 0;

  for (let i = 1; i <= amount; i += 1) {
    position = 1;

    const firstDelay = delay;
    let tempDelay = firstDelay + step;

    createPromise(position, firstDelay, tempDelay)
      .then(({ position, tempDelay }) => {
        setTimeout(() => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${tempDelay}ms`
          );
        }, tempDelay);
      })

      .catch(({ position, tempDelay }) => {
        setTimeout(() => {
          Notiflix.Notify.warning(
            `❌ Rejected promise ${position} in ${tempDelay}ms`
          );
        }, tempDelay);
      });
  }
});
