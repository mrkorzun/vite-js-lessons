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
