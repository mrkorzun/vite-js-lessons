// Лічильник кліків для кнопки Like
// Контекст: На сторінці товару є кнопка лайку.
// Замовник хоче, щоб користувач одразу бачив,
// скільки разів на неї натиснули в межах поточного відкриття сторінки.

// Базовий HTML:
// <section class="task like-task">
//   <h2>Лічильник лайків</h2>
//   <button class="btn" type="button">Like</button>
//   <p class="result">Likes: <span class="count">0</span></p>
// </section>

// Розширене ТЗ:
// • Після кожного кліку на кнопку значення всередині <span class="count"> має збільшуватись на 1.
// • Початково на сторінці повинно відображатись число 0.
// • Число змінюється лише в межах цього відкриття сторінки; після перезавантаження можна починати з нуля.
// • Жодних додаткових повідомлень виводити не потрібно — змінюється тільки число.

// const refs = {
//   likeBtn: document.querySelector('.btn'),
//   likesCount: document.querySelector('.count'),
// };

// refs.likeBtn.addEventListener('click', () => {
//   refs.likesCount.textContent++;
// });

// ==== TASK 2 ====
// Керування доступністю кнопки через checkbox
// Контекст: Перед переходом до наступного кроку користувач має погодитися з умовами.
// Замовник хоче, щоб без цієї дії кнопка залишалась недоступною,
// а поруч показувався поточний статус.

// Базовий HTML:
/* <section class="task checkbox-task">
  <h2>Підтвердження</h2>
  <label class="agreement">
    <input type="checkbox" class="check" />Я погоджуюся з правилами сервісу
  </label>
  <button class="next-btn" type="button" disabled>
    Next
  </button>
  <p class="state">Статус: не підтверджено</p>
</section>; */

// Розширене ТЗ:
// • Поки checkbox не відмічений, кнопка .next-btn повинна залишатися disabled.
// • Щойно користувач ставить галочку, кнопка стає активною.
// • Якщо галочку прибрати, кнопка знову повинна блокуватися.
// • Текст у .state має змінюватися відповідно до стану:
// «Статус: підтверджено» або «Статус: не підтверджено».
// • Рішення має реагувати саме на зміну стану checkbox, а не на кліки по кнопці.

// const refs = {
//   checkBox: document.querySelector('.check'),
//   nextBtn: document.querySelector('.next-btn'),
//   stateText: document.querySelector('.state'),
// };

// console.log(refs);

// === Varian 1 =====
// const handleCheckboxChecked = event => {
//   console.log(event);
//   if (event.target.checked) {
//     refs.nextBtn.disabled = false;
//     refs.stateText.textContent = 'Статус: підтверджено';
//     return;
//   }
//   refs.nextBtn.disabled = true;
//   refs.stateText.textContent = 'Статус: не підтверджено';
// };
// refs.checkBox.addEventListener('change', handleCheckboxChecked);

// === Varian 2 =====
// const onChange = event => {
//   const isChecked = event.target.checked;
//   refs.stateText.textContent = isChecked ? 'Підтверджено' : 'Не підтверджено';
//   refs.nextBtn.disabled = !isChecked;
// };
// refs.checkBox.addEventListener('change', onChange);

// ==== TASK 3 ====
// Додавання задач у to-do список
// Контекст: Користувач планує день у невеликому вебзастосунку.
// Після натискання кнопки введений текст повинен перетворюватися на новий пункт списку.

// Базовий HTML:
// <section class="task todo-task">
//   <h2>Мої справи</h2>
//   <div class="controls">
//     <input class="task-input" type="text" placeholder="Нова задача" />
//     <button class="add" type="button">Add task</button>
//   </div>
//   <ul class="list"></ul>
// </section>

// Розширене ТЗ:
// • Після кліку на кнопку потрібно створити новий елемент <li> і додати його в кінець списку .list.
// • Текст нового пункту береться з поля .task-input.
// • Якщо поле порожнє або містить лише пробіли, новий пункт не додається.
// • Після успішного додавання поле вводу має очищатися.
// • Кожне нове завдання повинно додаватися окремим рядком, а не замінювати попередні.

// const refs = {
//   btn: document.querySelector('.add'),
//   input: document.querySelector('.task-input'),
//   list: document.querySelector('.list'),
// };
// // console.log(refs);

// refs.btn.addEventListener('click', onBtnClick);

// function onBtnClick(event) {
//   const inputText = refs.input.value.trim();
//   if (!inputText) {
//     return;
//   }
//   const liText = `<li>${inputText}</li>`;
//   refs.list.insertAdjacentHTML('beforeend', liText);
//   refs.input.value = '';
// }

// ==== TASK 4 ====
// Перемикач теми сторінки
// Контекст: Користувач хоче перемикатися між звичайною та темною темою.
// Замовник просить реалізувати це через один клас на елементі body.

// Базовий HTML:
//  <section class="task theme-task">
//   <h2>Theme switcher</h2>
//   <button class="theme" type="button">
//     Змінити тему
//   </button>
//   <p>Цей текст потрібен, щоб бачити зміну теми сторінки.</p>
// </section>;

// Розширене ТЗ:
// • Після першого кліку на кнопку до елемента body має додаватися клас dark.
// • Після наступного кліку цей клас має видалятися.
// • Припускається, що стилі теми вже описані в CSS або будуть додані окремо;
// задача стосується саме логіки перемикання.
// • Логіка повинна впливати на всю сторінку, а не лише на кнопку або окремий блок.

// const refs = {
//   themeBtn: document.querySelector('.theme'),
//   // body: document.querySelector('body'),
// };

// refs.themeBtn.addEventListener('click', onThemeBtnClick);

// function onThemeBtnClick(event) {
//   document.body.classList.toggle('dark');
// }

// ==== TASK 5 ====
// Живе прев’ю введеного імені
// Контекст: У формі реєстрації користувач вводить своє ім’я і відразу нижче бачить,
// як воно буде відображатися в профілі.

// Базовий HTML:

/* <section class="task preview-task">
  <h2>Прев’ю імені</h2>
  <label>
    Введіть ім’я:
    <input class="input" type="text" placeholder="Ваше ім’я" />
  </label>
  <p class="output"></p>
</section>; */

// Розширене ТЗ:
// •	При кожній зміні значення в полі вводу текст має одразу відображатися в елементі .output.
// •	Виводити потрібно саме поточний вміст input, без додаткових фраз на кшталт «Ваше ім’я:».
// •	Якщо користувач повністю очищає поле, блок .output також повинен ставати порожнім.
// •	Оновлення має відбуватися в момент введення, а не після втрати фокусу.

const refs = {
  input: document.querySelector('.input'),
  output: document.querySelector('.output'),
};

refs.input.addEventListener('input', onInputText);

function onInputText(event) {
  refs.output.textContent = refs.input.value.trim();
  return;
}
