// ==== TASK 5 ====
// Живе прев’ю введеного імені
// Контекст: У формі реєстрації користувач вводить своє ім’я і відразу нижче бачить,
// як воно буде відображатися в профілі.

// Базовий HTML:

{
  /* <section class="task preview-task">
  <h2>Прев’ю імені</h2>
  <label>
    Введіть ім’я:
    <input class="input" type="text" placeholder="Ваше ім’я" />
  </label>
  <p class="output"></p>
</section>; */
}

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
