import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import successIcon from '../img/success.svg';
import errorIcon from '../img/error.svg';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  createPromise(delay, state)
    .then(ms => {
      console.log(`✅ Fulfilled promise in ${ms}ms`);
      iziToast.show({
        iconUrl: 'successIcon',
        title: 'OK',
        message: `Fulfilled promise in ${delay} ms`,
        position: 'topCenter',
        color: '#59a10d',
        messageColor: '#fff',
        titleColor: '#fff',
      });
    })
    .catch(ms => {
      console.log(`❌ Rejected promise in ${ms}ms`);
      iziToast.show({
        iconUrl: 'errorIcon',
        title: 'Error',
        message: 'Illegal operation',
        position: 'topCenter',
        color: '#ef4040',
        messageColor: '#fff',
        titleColor: '#fff',
      });
    });

  form.reset();
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
