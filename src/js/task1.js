// Поточний час у шапці сторінки

import { addLeadingZero } from './helpers';
import { refs } from './refs';

// Контекст:
// У шапці сайту потрібно постійно показувати актуальний час без перезавантаження сторінки.

// Базовий HTML:

// <header class="page-header">
//   <p class="current-time" aria-live="polite">00:00:00</p>
// </header>

// Розширене ТЗ:
// · Створи функцію, яка отримує поточний час через new Date().
// · У .current-time потрібно виводити години,
// хвилини та секунди у форматі HH:MM:SS.
// · Час має оновлюватися щосекунди через setInterval.
// · Початкове значення потрібно відмалювати одразу
// після завантаження сторінки, не чекаючи першої секунди.
// · Для чисел з однією цифрою потрібно додавати нуль на початок.

const getCurrentTime = () => {
  const nowTime = new Date();
  //   console.dir(nowTime);
  const hours = addLeadingZero(nowTime.getHours());
  const minutes = addLeadingZero(nowTime.getMinutes());
  const seconds = addLeadingZero(nowTime.getSeconds());
  //   console.log(hours, minutes, seconds);
  return `${hours}:${minutes}:${seconds}`;
};
getCurrentTime();

const updateClock = () => {
  refs.timeClock.textContent = getCurrentTime();
};

updateClock();

setInterval(updateClock, 1000);
