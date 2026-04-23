// ==== TASK 1 ==== Fri 17 Apr
// Контекст: У навчальному симуляторі є квадратний блок.
// Натискання на кнопку має кожного разу зміщувати його праворуч,
// ніби персонаж робить крок.
// Базовий HTML:
// <section class="task move-task">
//   <h2>Рух елемента</h2>
//   <button class="move-right" type="button">Right</button>
//   <div class="field">
//     <div class="box"></div>
//   </div>
// </section>
// Розширене ТЗ:
// • Після кожного кліку на кнопку елемент .box має зміщуватись вправо на 10px.
// • Зміщення накопичується: другий клік рухає ще на 10px від уже нової позиції.
// • Рух має відбуватися лише по горизонталі;
// по вертикалі елемент залишаєтся на місці.
// • Студент самостійно вирішує, чи керувати позицією через left,
// transform або інший коректний спосіб.

// // Varian 1
// const refs = {
//   box: document.querySelector('.box'),
//   btn: document.querySelector('.move-right'),
// };

// const boxStyle = getComputedStyle(refs.box);
// // console.log(boxStyle.left);
// let boxStyleLeft = parseFloat(boxStyle.left);
// // console.log(boxStyleLeft);

// refs.btn.addEventListener('click', () => {
//   console.log('Click');
//   boxStyleLeft += 24;
//   refs.box.style.left = `${boxStyleLeft}px`;
// });

// Varian2
// const refs = {
//   moveBtn: document.querySelector('.move-right'),
//   boxHero: document.querySelector('.box'),
// };
// let step = 0;
// const onMoveBtnClick = () => {
//   step += 10;
//   refs.boxHero.style.transform = `translate(${step}px, 0px)`;
// };
// refs.moveBtn.addEventListener('click', onMoveBtnClick);

// ==== TASK 2 ====
// Видалення елементів списку
// Контекст:
// У списку нотаток кожен елемент має кнопку видалення.
// Оскільки елементів може ставати більше,
// обробник потрібно повісити не на кожну кнопку окремо,
// а на батьківський список.

// Базовий HTML:
// <ul class="notes">
//   <li class="note-item">
//     <span>Buy milk</span>
//     <button class="delete-btn" type="button">Delete</button>
//   </li>
//   <li class="note-item">
//     <span>Read book</span>
//     <button class="delete-btn" type="button">Delete</button>
//   </li>
// </ul>

// Розширене ТЗ:
// • Повісь один слухач події click на .notes.
// • Якщо клік відбувся саме по .delete-btn,
// потрібно видалити відповідний .note-item.
// • Для пошуку потрібного елемента використовуй closest.
// • Інші елементи списку не повинні реагувати на клік.
// • Не вішай окремі слухачі на кожну кнопку.

// const notes = document.querySelector('.notes');

// notes.addEventListener('click', event => {
//   // console.log('click'); // проверка слухача
//   // как мне "обмежити" клики на странице?
//   // если одна кнопка в разметке
//   // if (event.target.nodeName !== 'BUTTON') {
//   //   return;
//   // }
//   // console.log(event.target.nodeName);
//   // вот как: нужно сделать if{} и если это не наш тег то выходим из функции
//   // если несколько то лучше вторую ифку с classList.contains("class")
//   if (!event.target.classList.contains('delete-btn')) {
//     return;
//   }
//   console;
//   // пошук вверх closest
//   event.target.closest('.note-item').remove();
//   // теперь удаляем найденную лишку от кнопки
// });

// ==== TASK 3 ====
// Клавіатурне керування елементом стрілками
// Контекст: У простій навчальній грі квадрат повинен рухатися клавішами-стрілками.
// Замовник хоче, щоб переміщення було покроковим,
// а на сторінці видно було останній напрямок руху.

// Базовий HTML:
// <section class="task keyboard-task">
//   <h2>Keyboard move</h2>
//   <div class="field">
//     <div class="box" tabindex="0"></div>
//   </div>
//   <p class="direction">Останній рух: —</p>
// </section>

// Розширене ТЗ:
//     • При натисканні ArrowRight, ArrowLeft, ArrowUp або ArrowDown
// елемент .box має зміщуватись у відповідному напрямку на 10px.
//     • Потрібно обробляти подію клавіатури так,
// щоб квадрат не рухався від будь-яких інших клавіш.
//     • У елементі .direction має з’являтися текст із останнім напрямком,
// наприклад «Останній рух: right».
//     • Бажано не дозволяти елементу виходити за межі контейнера .field.
//     • Для керування потрібно забезпечити,
// щоб блок або сторінка отримували фокус і реагували на клавіші коректно.

const refs = {
  moveBox: document.querySelector('.box'),
  field: document.querySelector('.field'),
  text: document.querySelector('.direction'),
};
console.log(refs);

const { top, left } = getComputedStyle(refs.moveBox);
// console.log(getComputedStyle(refs.moveBox));
const validValueTop = refs.field.offsetHeight - refs.moveBox.offsetHeight;
const validValueLeft = refs.field.offsetWidth - refs.moveBox.offsetWidth;

let valueLeft = parseFloat(top);
let valueTop = parseFloat(left);
console.log('Top =', valueTop, ',', 'Left =', valueLeft);

document.addEventListener('keydown', onArrowsPress);

// console.log(refs.field.offsetWidth - refs.moveBox.offsetWidth);

function onArrowsPress(event) {
  switch (event.code) {
    case 'ArrowRight':
      valueLeft += 50;
      console.log('Move Right');
      break;
    case 'ArrowLeft':
      valueLeft -= 50;
      console.log('Move Left');
      break;
    case 'ArrowUp':
      valueTop -= 50;
      console.log('Move Up');
      break;
    case 'ArrowDown':
      valueTop += 50;
      console.log('Move Down');
      break;
    default:
      console.log('press correct arrow');
      return;
  }
  // создаем ему ограничения
  if (valueLeft < 0) valueLeft = 0;
  if (valueTop < 0) valueTop = 0;
  if (valueLeft > validValueLeft) valueLeft = validValueLeft;
  if (valueTop > validValueTop) valueTop = validValueTop;

  refs.moveBox.style.left = `${valueLeft}px`;
  refs.moveBox.style.top = `${valueTop}px`;
  refs.text.textContent = `Останній рух: ${event.code.replace('Arrow', '').toLowerCase()}!`;
}
