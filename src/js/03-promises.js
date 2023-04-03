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

  const form = func.currentTarget;
  let delay = +form['delay'].value;
  const step = +form['step'].value;
  const amount = +form['amount'].value;
  let position = 1;

  for (let i = position; i <= amount; i += 1) {
    position = i;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        }, delay);
      })

      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.warning(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        }, delay);
      });

    delay += step;
    console.log(delay);
  }
});
