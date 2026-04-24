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

// Varian 1
const refs = {
  box: document.querySelector('.box'),
  btn: document.querySelector('.move-right'),
};

const boxStyle = getComputedStyle(refs.box);
// console.log(boxStyle.left);
let boxStyleLeft = parseFloat(boxStyle.left);
// console.log(boxStyleLeft);

refs.btn.addEventListener('click', () => {
  //   console.log('Click');
  boxStyleLeft += 24;
  refs.box.style.left = `${boxStyleLeft}px`;
});

// Varian2;
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
