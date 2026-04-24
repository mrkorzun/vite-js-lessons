// ==== TASK 2 ====
// Керування доступністю кнопки через checkbox
// Контекст: Перед переходом до наступного кроку користувач має погодитися з умовами.
// Замовник хоче, щоб без цієї дії кнопка залишалась недоступною,
// а поруч показувався поточний статус.

// Базовий HTML:
{
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
}

// Розширене ТЗ:
// • Поки checkbox не відмічений, кнопка .next-btn повинна залишатися disabled.
// • Щойно користувач ставить галочку, кнопка стає активною.
// • Якщо галочку прибрати, кнопка знову повинна блокуватися.
// • Текст у .state має змінюватися відповідно до стану:
// «Статус: підтверджено» або «Статус: не підтверджено».
// • Рішення має реагувати саме на зміну стану checkbox, а не на кліки по кнопці.

const refs = {
  checkBox: document.querySelector('.check'),
  nextBtn: document.querySelector('.next-btn'),
  stateText: document.querySelector('.state'),
};

console.log(refs);

// === Varian 1 =====
const handleCheckboxChecked = event => {
  console.log(event);
  if (event.target.checked) {
    refs.nextBtn.disabled = false;
    refs.stateText.textContent = 'Статус: підтверджено';
    return;
  }
  refs.nextBtn.disabled = true;
  refs.stateText.textContent = 'Статус: не підтверджено';
};
refs.checkBox.addEventListener('change', handleCheckboxChecked);

// === Varian 2 =====
// const onChange = event => {
//   const isChecked = event.target.checked;
//   refs.stateText.textContent = isChecked ? 'Підтверджено' : 'Не підтверджено';
//   refs.nextBtn.disabled = !isChecked;
// };
// refs.checkBox.addEventListener('change', onChange);
